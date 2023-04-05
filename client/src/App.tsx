import React from "react";
import { Button, MantineProvider, Text } from "@mantine/core";
import { Login } from "./components/pages/Login";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <Login />,
  },
]);
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
