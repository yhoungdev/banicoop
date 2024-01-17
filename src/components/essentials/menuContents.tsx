/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Avatar, Box, Center, Flex, Text } from "@chakra-ui/react";
import { SidebarItems } from "../../utils/sidebarItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DefaultLogo } from "../atoms/dashboard/logo";

export const MenuContent = () => {
  const getPath = window.location.pathname;
  const activeState = {
    bg: "#6922D10A",
    padding: " 1em 2em ",
    borderRadius: "100px",
    cursor: "pointer",
  };
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = index => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <>
      <Box my="2em">
        <DefaultLogo />
      </Box>

      <Text color={"gray.600"}>Menu</Text>
      {SidebarItems.map(({ name, icon, path, menu }, index) => {
        const isMenuOpen = activeMenu === index;
        const isActive = getPath === path;
        return (
          <Box key={index} position="relative" ml=".5em">
            <Link to={path}>
              <Box
                gap={"1em"}
                display={"flex"}
                alignItems={"center"}
                my={"1em"}
                px="1em"
                sx={getPath === path ? activeState : "none"}
                onClick={() => handleMenuClick(index)}
              >
                {icon}
                <Text fontSize={"18px"} color={isActive && "primary.100"}>
                  {name}
                </Text>
              </Box>
            </Link>
          </Box>
        );
      })}
    </>
  );
};
