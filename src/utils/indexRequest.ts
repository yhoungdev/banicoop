/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useFetch } from "./request";
import {
  getTotalAdminUsers,
  getTotalAgentManagers,
  getTotalAgents,
  getTotalAppUsers,
  getTotalBankList,
  getTotalDispenseError,
  getTotalFeedbacks,
  getTotalPosReversals,
  getTotalWallet,
  getTotalWalletTransactionsOfItems,
} from "../redux/slice/totalCountSlice";
import { formatNumber } from "./formatNumber";

const getAdminUsers = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/user/get" });
  dispatch(getTotalAdminUsers(data?.length));
};

const getAgents = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/account/agent/get" });
  dispatch(getTotalAgents(data?.length));
};

const getAppUseres = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/account/user/get" });
  dispatch(getTotalAppUsers(data?.length));
};

const getWalletTransactions = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/Log/wallet/get" });

  let total = 0;
  data?.forEach(item => {
    const amount = +item?.amount;
    total += amount;
  });

  dispatch(getTotalWallet(formatNumber(total)));
};
const getTotalWalletTransactions = async () => {
  const dispatch = useDispatch();

  const { data } = useFetch({ endpoint: "admin/Log/wallettransaction/get" });

  let total = 0;
  data?.forEach(item => {
    const amount = +item?.amount;
    total += amount;
  });

  dispatch(getTotalWalletTransactionsOfItems(formatNumber(total)));
};

const getAgentManagers = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/account/getAgentManager" });
  dispatch(getTotalAgentManagers(data?.length));
};

const getDispenseErrors = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/complain/dispenseerror/get" });
  dispatch(getTotalDispenseError(data?.length));
};

const getFeedBacks = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/complain/feedback/get" });
  dispatch(getTotalFeedbacks(data?.length));
};

const getPosReversals = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({ endpoint: "admin/Log/posreverse/get" });
  dispatch(getTotalPosReversals(data?.length));
};

const getBankList = async () => {
  const dispatch = useDispatch();
  const { data } = useFetch({
    endpoint: "admin/bankslist",
  });
  dispatch(getTotalBankList(data?.message));
};

export {
  getAdminUsers,
  getDispenseErrors,
  getFeedBacks,
  getAgents,
  getAgentManagers,
  getAppUseres,
  getWalletTransactions,
  getTotalWalletTransactions,
  getBankList,
};
