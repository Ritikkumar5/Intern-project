import React from "react";
import { Outlet } from "react-router-dom";
import Recruiter_Sidebar from "./Placement-SideBar";

function Recruiter_ListingsandApplications() {
  return (
    <>
      <div className="flex w-full ">
        <div className="w-25%">
          <Recruiter_Sidebar />
        </div>
        <div className="w-[75%] flex-1 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Recruiter_ListingsandApplications;
