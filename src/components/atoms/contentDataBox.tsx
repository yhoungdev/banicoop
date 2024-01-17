import { Box, Text } from "@chakra-ui/react";

interface IContent {
  title: string;
  number: number;
}

const ContentDataBox = ({ title, number }: IContent) => {
  return (
    <Box
      bg={"white"}
      textAlign={"center"}
      px={"2em"}
      py={"2em"}
      h={"150px"}
      w={["100%", "245px"]}
    >
      <Text fontSize={"14px"}>{title} </Text>
      <Text fontSize={["20px", "25px"]}>{number || 0}</Text>
      <Text fontSize={"14px"}>Total</Text>
    </Box>
  );
};
export default ContentDataBox;
