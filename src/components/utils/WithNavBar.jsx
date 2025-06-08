import { Outlet } from "react-router-dom";
import MobileNav from "../Layout/MobileNav";

export const WithNavbar = () => {
  return (
    <>
      <MobileNav />
      <Outlet />
    </>
  );
};


export function WithoutNavbar() {
  return <Outlet />;
}
