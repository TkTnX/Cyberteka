import { Outlet } from "react-router";
import { Navigation } from "../widgets";

export const RootLayout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};
