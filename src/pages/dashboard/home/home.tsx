/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Box, Flex, Select, Text, Tr, Td } from "@chakra-ui/react";
import DashboardLayout from "../../../layout/dashboardLayout";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { useFetch } from "../../../utils/request";
import HomeTransactionalTable from "./components/homeTransactionalTable";
import { useSelector } from "react-redux";
import { NAIRA_SIGN } from "../../../redux/constant";
import ContentDataBox from "../../../components/atoms/contentDataBox";
import DefaultTable from "../../../components/essentials/defaultTable";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { formatNumber } from "../../../utils/formatNumber";

const Home = () => {
  return (
    <DashboardLayout
      headerTop={"Dashboard"}
      background="none"
      hideTopItem={true}
    >
      <Box
        py="2em"
        borderRadius={"10px"}
        px="2em"
        border={"1px solid var(--shaded-gray)"}
        borderRadius={"10px"}
      >
        <Text>Transaction Overview</Text>
      </Box>
    </DashboardLayout>
  );
};
export default Home;
