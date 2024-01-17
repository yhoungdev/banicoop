/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { FC, ReactNode } from "react";

type TDefault = {
  tableHeader?: Array<string>;
  children?: ReactNode;
  tableName?: string;
};

const DefaultTable: FC<TDefault> = ({ tableHeader, children, tableName }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>{tableName}</TableCaption>
        <Thead bg={"primary.100"} color={"#fff"} borderRadius={"1em 1em 0 0"}>
          <Tr color={"#fff"}>
            {tableHeader?.map((item, index) => {
              return (
                <Th key={index} color={"#fff"} py={"2em"}>
                  {item}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody bg={"white"}>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default DefaultTable;
