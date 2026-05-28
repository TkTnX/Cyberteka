import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles/base.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Homepage, StartPage, ZonesPage } from "./pages";
import { EmptyLayout, RootLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <EmptyLayout />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/main",
        element: <Homepage />,
      },
      {
        path: "/zones",
        element: <ZonesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
