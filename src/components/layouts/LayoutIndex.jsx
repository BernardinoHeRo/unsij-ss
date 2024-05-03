import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export const LayoutIndex = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default LayoutIndex;
