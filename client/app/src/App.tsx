import React from "react";
import { MantineProvider } from "@mantine/core";
import { Auth } from "./components/pages/Auth";
import { RecoilRoot, useRecoilState } from "recoil";

import { Notifications } from "@mantine/notifications";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { User } from "./components/pages/User";
import { Top } from "./components/pages/Top";
import { AuthProvider } from "./components/provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
function App() {
  return (
    <RecoilRoot>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Notifications position="top-center" />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default App;
