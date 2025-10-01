import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <main >
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default Layout;
