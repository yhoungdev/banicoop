import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type TDrawer = {
  children: ReactNode;
  isOpen: boolean;

  onClose: () => void;
  placement?: any;
  size?: string;
};

const DrawerLayout = ({
  placement,
  children,
  onClose,
  isOpen,
  size,
}: TDrawer) => {
  return (
    <Drawer onClose={onClose} size={size} isOpen={isOpen} placement={placement}>
      <DrawerContent>
        <DrawerBody>
          <Box my={"2em"}>
            <DrawerCloseButton />
            <Box my={"3em"}>{children}</Box>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerLayout;
