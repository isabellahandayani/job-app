import { Heading, Flex } from "@chakra-ui/react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UI_CONFIG } from "../../const";
import { auth } from "../../service/Firebase";

const Login = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="30%"
      margin="auto"
      p={4}
      flexDir="column"
      minH="90vh"
      flex={1}
    >
      <Heading size="lg">Login</Heading>
      <StyledFirebaseAuth uiConfig={UI_CONFIG} firebaseAuth={auth} />
    </Flex>
  );
};

export default Login;
