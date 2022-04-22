import { Heading, Flex, Box, Center } from "@chakra-ui/react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UI_CONFIG } from "../../const";
import { auth } from "../../service/FirebaseServices";

const Login = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="30%"
      margin="auto"
      minH="90vh"
      flex={1}
    >
      <Box boxShadow="md" p={10}>
        <Center>
          <Heading size="lg">Login</Heading>
        </Center>
        <StyledFirebaseAuth uiConfig={UI_CONFIG} firebaseAuth={auth} />
      </Box>
    </Flex>
  );
};

export default Login;
