import { ReactNode, FC } from "react";
import { Badge, BadgeProps } from "@chakra-ui/react";

interface Tstatus extends BadgeProps {
  color: string;
  status: ReactNode | string;
  onClick?: () => void;
}

const Status: FC<Tstatus> = ({ onClick, color, status, ...props }) => {
  return (
    <Badge
      colorScheme={color}
      py={".3em"}
      px={"1em"}
      borderRadius={"1em"}
      onClick={onClick}
      {...props}
    >
      {status}
    </Badge>
  );
};

export const StatusBadge = ({
  status_code,
}: {
  status_code: string | number;
}) => {
  let itemStatus;

  if (status_code === "00") {
    itemStatus = <Status color="green" status={"Completed"} />;
  } else if (status_code === "01") {
    itemStatus = <Status color="red" status={"Failed"} cursor={"pointer"} />;
  } else if (status_code === "02") {
    itemStatus = <Status color="yellow" status={"Pending"} />;
  } else if (status_code === "03") {
    itemStatus = <Status color="yellow" status={"Processing"} />;
  } else if (status_code === "04") {
    itemStatus = <Status color="cyan" status={"Logged"} />;
  } else if (status_code === "05") {
    itemStatus = <Status color="purple" status={"Custom"} />;
  }

  return <>{itemStatus}</>;
};
