import {
  Box,
  Text,
  Input,
  Flex,
} from "@chakra-ui/react";

import { FC, ReactNode } from "react";
import { SearchIcon } from "../assets/icons";

const INFOICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.99976 16.5001C13.1419 16.5001 16.4998 13.1422 16.4998 9.00006C16.4998 4.85793 13.1419 1.50006 8.99976 1.50006C4.85762 1.50006 1.49976 4.85793 1.49976 9.00006C1.49976 13.1422 4.85762 16.5001 8.99976 16.5001Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 6.00006V9.00006"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="8.99976" cy="12" r="0.75" fill="black" />
  </svg>
);

interface IBoaradContainer {
  children?: ReactNode;
  title?: string;
}

const BoardContainer: FC<IBoaradContainer> = ({ children, title }) => {
  return (
    <Box
      py="2em"
      px="2em"
      border={"1px solid var(--shaded-gray)"}
      borderRadius={"10px"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display={"flex"} alignItems={"center"} gap=".5em">
          <Text>{title}</Text>
          {INFOICON}
        </Box>

        <Box
          bg="#FAFAFA"
          px="1.5em"
          py='.3em'
          borderRadius={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap="1em"
        >
          <SearchIcon/>
          <Input
            type="search"
            placeholder="search"
            border={"none"}
            outline={"none"}
          />
        </Box>
      </Flex>

      <Box my="1em">{children}</Box>
    </Box>
  );
};

export default BoardContainer;
