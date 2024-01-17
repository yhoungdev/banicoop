/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import React from "react";
import { GrGroup } from "react-icons/gr";
import {
  ActiveHomeIcon,
  DefaultCard,
  DefaultCells,
  DefaultCustomer,
} from "../assets/icons/sidebarIcons";

type TSideItems = {
  name: string;
  icon: React.ReactElement;
  path?: string;
  menu?: [];
};

export const SidebarItems: TSideItems[] = [
  {
    name: "Dashboard",
    icon: <ActiveHomeIcon />,
    path: "/",
  },

  {
    name: "Customer",
    icon: <DefaultCustomer />,
    path: "/dashboard/customers",
  },

  {
    name: "Transactions",
    icon: <DefaultCard />,
    path: "/dashboard/transactions",
  },

  {
    name: "Cells",
    icon: <DefaultCells />,
    path: "/dashboard/cells",
  },
];
