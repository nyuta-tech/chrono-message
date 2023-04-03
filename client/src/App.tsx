import React from "react";
import { Button, MantineProvider, Text } from "@mantine/core";
import { AuthenticationForm } from "./Login";
import { Test } from "./components/test";
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Test></Test>
    </MantineProvider>
  );
}

export default App;
