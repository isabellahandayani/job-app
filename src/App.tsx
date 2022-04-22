import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import JobsDetail from "./pages/Jobs/JobsDetail"

export const App = () => (
  <ChakraProvider theme={theme}>
    <JobsDetail />
  </ChakraProvider>
)
