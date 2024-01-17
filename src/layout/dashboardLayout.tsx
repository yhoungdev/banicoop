//@ts-nocheck
import { Box, Flex, Text } from "@chakra-ui/react";
import DashboardSidebar from "../components/dashboard/sidebar";
import DashboardHeader from "../components/dashboard/header";
import { ReactNode } from "react";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { FcExport } from "react-icons/fc";
import ModalLayout from "./modalLayout";
import { FiSearch } from "react-icons/fi";
import { useDisclosure } from "@chakra-ui/react";
import DashboardMetricsContainer from "../components/molecules/dashboardMetricsContainer";

type TDashboard = {
  children?: ReactNode;
  headerTop?: ReactNode;
  hideTopItem?: boolean;
  background?: string;
  onSearch?: () => void;
  exportToPDF?: () => void;
  exportToExcel?: () => void;
};

const DashboardLayout = ({
  children,
  headerTop,
  background,
  onSearch,
  hideTopItem,
  exportToPDF,
}: TDashboard) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Box flex="0 0 200px" display={["none", "none", "block"]}>
        <DashboardSidebar />
      </Box>
      <Box flex="1" overflowY="auto" display="flex" flexDirection="column">
        <DashboardHeader />

        <Box pos={"sticky"}>
          <Box
            w={"90%"}
            mx={"auto"}
            py={["1em", "3em"]}
            px="2em"
            overflowY="auto"
            bg={background ? background : "#fff"}
          >
            <DashboardMetricsContainer />
            <Box my="2em">{children}</Box>
          </Box>
        </Box>
      </Box>

      <ModalLayout isOpen={isOpen} onClose={onClose}>
        <Box textAlign={"center"}>
          <p> Select Format to export</p>

          <Box my="1.5em" cursor={"pointer"} onClick={exportToPDF}>
            <Box bg="gray.200" borderRadius={"12px"} py="1.5em" px="1em">
              <Text>Export as PDF</Text>
            </Box>
          </Box>

          <Box my="1.5em" cursor="not-allowed">
            <Box bg="gray.200" borderRadius={"12px"} py="1.5em" px="1em">
              <Text color={"gray"}>Export as EXCEL</Text>
            </Box>
          </Box>
        </Box>
      </ModalLayout>
    </Flex>
  );
};

export default DashboardLayout;
