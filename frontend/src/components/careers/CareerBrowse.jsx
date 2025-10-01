import React from "react";

import Students_Shortcuts from "./Students_Shortcuts";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";

function CareerBrowse() {
  const location = useLocation();
  return (
    <>
      <div className="flex h-screen">
        <Students_Shortcuts />

        <div className="flex-1 mt-[20px] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default CareerBrowse;
