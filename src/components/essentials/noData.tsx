import { Box, Flex, Text, Center, Spinner } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FcEmptyTrash } from "react-icons/fc";

const NoData = ({ icon }: { icon?: ReactNode }) => {
  const [loader, setLoader] = useState<boolean>(true);

  setTimeout(() => setLoader(false), 200);
  return (
    <Flex h={"40vh"} justifyContent={"center"} alignItems={"center"}>
      {loader ? (
        <Box>
          <Spinner size={"xl"} />
          <Text>Loading </Text>
        </Box>
      ) : (
        <Box textAlign={"center"} my={"2em"}>
          <Center>{icon ? icon : <FcEmptyTrash size={"5em"} />}</Center>

          <Text my={"1em"}>No Data Founnd</Text>
        </Box>
      )}
    </Flex>
  );
};
export default NoData;
