import React from "react";
import { MantineProvider } from "@mantine/core";
import { Login } from "./components/pages/Login";
import { RecoilRoot } from "recoil";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
function App() {
  return (
    <RecoilRoot>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
