import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IButton extends ButtonProps {
  children?: ReactNode;
  width?: string;
  color?: string;
  bg?: string;
  loading?: boolean;
  type?: any;
  onClick?: () => void;
}
const ButtonInterface: FC<IButton> = ({
  width,
  loading,
  color,
  bg,
  onClick,
  type,
  children,
  ...props
}) => {
  return (
    <Button
      isLoading={loading}
      size={"lg"}
      bg={bg ? bg : "primary.100"}
      w={width}
      color={color ? color : "#fff"}
      onClick={onClick}
      type={type}
      _hover={{}}
      {...props}
    >
      {children}
    </Button>
  );
};
export default ButtonInterface;
