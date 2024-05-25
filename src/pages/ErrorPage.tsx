import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Opps...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "No Route Found"
            : "Sorr, an unexpected error occurrs"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
