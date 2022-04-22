import { Box, Heading, Button, Flex, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";
import { logout } from "../service/FirebaseServices";

const Navbar = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Flex backgroundColor="blue.600" h={75}>
        <Heading color="white" p={4}>
          Github Jobs
        </Heading>
        <Spacer />
        <Button mr={2} alignSelf={"center"} onClick={() => logout()}>
          Logout
        </Button>
      </Flex>
      <Box>{children}</Box>
    </Box>
  );
};

export default Navbar;
