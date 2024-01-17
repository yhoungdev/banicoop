/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import axios from "axios";
import { useEffect, useState } from "react";
import { defaultUrl } from "../redux/constant";
import { toast } from "react-toastify";
import { decrypt } from "decrypt-core";
import { DECRYPTIONKEY } from "../redux/constant";

const url = defaultUrl;

type Config = {
  url: string;
  body: any;
  header?: Record<string, string>;
  message?: boolean;
};

export const postData = async ({ url, body, header, message }: Config) => {
  try {
    const request = await axios.post(`${defaultUrl}/${url}`, body, {
      headers: {
        ...header,
        "Access-control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      proxy: {
        host: "104.236.174.88",
        port: 3128,
      },
    });
    const response = request?.data?.data;
    const decrypted = decrypt(response, DECRYPTIONKEY);
    return { response, decrypted };
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    message === false ? "" : toast.error(errorMessage, {});
    throw error;
  }
};

type TgetData = {
  endpoint: string;
  body?: any;
  nextPrev?: any;
  page?: boolean;
};

export const useFetch = ({ endpoint, body, nextPrev, page }: TgetData) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = { ...body };
        if (!page) {
          requestData._page = nextPrev;
        }

        const { response, decrypted } = await postData({
          url: endpoint,
          body: requestData,
          header: {
            Authorization: `Bearer ${localStorage.getItem("_authToken")}`,
          },
        });

        setData(decrypted);
      } catch (err) {
        return;
      }

      setIsLoading(false);
    };

    fetchData();
  }, [nextPrev, page]);

  return { data, isLoading };
};
