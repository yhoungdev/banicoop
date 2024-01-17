import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface IPagination {
  nextPage: () => void;
  prev: () => void;
  disabledPrev?: boolean;
  disableNext?: boolean;
}

const Pagination: FC<IPagination> = ({
  nextPage,
  prev,
  disableNext,
  disabledPrev,
}: IPagination) => {
  return (
    <>
      <Flex
        position={"absolute"}
        right={"4em"}
        gap={"1em"}
        my={"4em"}
        justifyContent={"flex-end"}
        px={"1em"}
      >
        <Button onClick={prev} isDisabled={disabledPrev}>
          Prev
        </Button>
        <Button onClick={nextPage} isDisabled={disableNext}>
          Next
        </Button>
      </Flex>
    </>
  );
};
export default Pagination;
