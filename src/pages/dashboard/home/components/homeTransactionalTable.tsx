// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Box, Tr, Td } from "@chakra-ui/react";
import { useFetch } from "../../../../utils/request";
import { useEffect, useState } from "react";
import moment from "moment";
import DefaultTable from "../../../../components/essentials/defaultTable";
import { formatNumber } from "../../../../utils/formatNumber";
import NoData from "../../../../components/essentials/noData";
import { NAIRA_SIGN } from "../../../../redux/constant";
import { TransactionType } from "../../../../components/atoms/dashboard/micros";

const HomeTransactionalTable = () => {
  const { data } = useFetch({
    endpoint: "admin/Log/history/get",
    body: {
      _populate: "user",
    },
    // nextPrev: nextPrev,
  });
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    if (data) {
      setItemData(data);
    }
  }, [data]);

  const header = [
    "S/N",
    "User",
    "Phone No.",
    "Type",
    "Service",
    "Amount",
    "Date",
    "Time",
  ];

  const sortedItemData = itemData.sort(
    //todo: check for sorting algorithm
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <Box mt={"3em"} bg={"#fff"}>
      <Box>
        {itemData?.length === 0 ? (
          <NoData />
        ) : (
          <DefaultTable tableHeader={header}>
            {sortedItemData?.map(
              (
                {
                  user,
                  phoneNumber,
                  service,
                  transactionType,
                  amount,
                  createdAt,
                },
                index
              ) => {
                return (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{user?.customerName}</Td>
                    <Td>{user?.phone}</Td>
                    <Td>
                      <TransactionType type={transactionType} />
                    </Td>
                    <Td>{service}</Td>
                    <Td>
                      {NAIRA_SIGN} {formatNumber(amount)}
                    </Td>

                    <Td>{moment(createdAt).format("YYYY-MM-DD")}</Td>
                    <Td>{moment(createdAt).format("LT")}</Td>
                  </Tr>
                );
              }
            )}
            {/* <Pagination nextPage={nextPage} prev={prevPage} /> */}
          </DefaultTable>
        )}
      </Box>
    </Box>
  );
};

export default HomeTransactionalTable;
