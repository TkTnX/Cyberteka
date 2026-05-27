import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles/base.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Homepage, Zones } from "./pages";
import { RootLayout } from "./layouts";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/zones",
        element: <Zones />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
