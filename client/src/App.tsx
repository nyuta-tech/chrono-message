import React from "react";
import { Button, MantineProvider, Text } from "@mantine/core";
import { AuthenticationForm } from "./components/pages/Login";
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthenticationForm />
    </MantineProvider>
  );
}

export default App;
