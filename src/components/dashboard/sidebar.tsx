/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import {
  Box,
  Text,
  Flex,
  Center,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { MenuContent } from "../essentials/menuContents";
import { AiOutlinePoweroff } from "react-icons/ai";
import ModalLayout from "../../layout/modalLayout";
import ButtonInterface from "../essentials/button";
import { toast } from "react-toastify";
import { useState } from "react";

const DashboardSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loader, setLoader] = useState(false);

  const logOut = () => {
    setLoader(true);
    toast.success("Loged out successfully");

    setTimeout(() => {
      window.location.reload();
      window.location.href = "/";
      localStorage.removeItem("_authToken");
    }, 2000);
  };

  const closeModal = () => {
    onClose();
    setLoader(false);
  };
  return (
    <Box
      h={"100vh"}
      bg={"#fff"}
      w={"300px"}
      color={"black"}
      py={"1em"}
      position={"sticky"}
      top={0}
      bottom={0}
      left={0}
      zIndex={1}
      borderRight={"1px solid var(--shaded-gray)"}
    >
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        h={"90vh"}
        px={"1em"}
      >
        <Flex flexDir={"column"} gap={"2em"}>
          <MenuContent />
        </Flex>
      </Flex>

      <Flex
        gap=".5em"
        borderTop={"1px solid var(--shaded-gray)"}
        py="2em"
        px="2em"
      >
        <Avatar />
        <Box>
          <Text fontWeight={"medium"}>Praise Dominic</Text>
          <Text fontSize={"13px"}>Admin ID: 0011232</Text>
        </Box>
      </Flex>

      <ModalLayout isOpen={isOpen} onClose={onClose} textAlign={"center"}>
        <Box textAlign={"center"}>
          <Text fontWeight={"bold"} fontSize={"1.3em"}>
            Do you want to continue ?
          </Text>
          <Text>By clicking continue will log you out</Text>

          <Flex w={"100%"} gap={"1em"} mt={"1.5em"} justifyContent={"center"}>
            <ButtonInterface
              w={"100%"}
              _hover={{}}
              bg={"gray.100"}
              color="black"
              onClick={closeModal}
            >
              Cancel
            </ButtonInterface>
            <ButtonInterface w={"100%"} onClick={logOut} loading={loader}>
              Continue
            </ButtonInterface>
          </Flex>
        </Box>
      </ModalLayout>
    </Box>
  );
};

export default DashboardSidebar;
