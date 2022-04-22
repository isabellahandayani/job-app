import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Auth/Login";
import JobsDetail from "./pages/Jobs/JobsDetail";
import JobsList from "./pages/Jobs/JobsList";
import { auth } from "./service/FirebaseServices";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        {loggedIn ? (
          <Navbar>
            <Routes>
              <Route path="/detail/:id" element={<JobsDetail />} />
              <Route path="/list" element={<JobsList />} />
              <Route path="/" element={<Navigate replace to="/list" />} />
              <Route path="*" element={<Navigate replace to="/list" />} />
            </Routes>
          </Navbar>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        )}
      </Router>
    </ChakraProvider>
  );
};
