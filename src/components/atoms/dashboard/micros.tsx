import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

interface TransactionTypeProps {
  type: string;
}

export const TransactionType = ({ type }: TransactionTypeProps) => {
  return (
    <>
      {type === "cr" ? (
        <BsArrowDownLeft color={"green"} />
      ) : (
        <BsArrowUpRight color={"red"} />
      )}
    </>
  );
};
