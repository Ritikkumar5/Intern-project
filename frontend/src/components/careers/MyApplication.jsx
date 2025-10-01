import React from "react";
import MyApplication_Status from "./MyApplication_Status";
import { useLocation, Link } from "react-router-dom";

function MyApplication() {
  const location = useLocation();
  return (
    <>
      <div className="w-full border h-auto bg-white p-[20px] rounded-[10px]">
        <div className=" mt-[10px]">
          <div className="flex gap-[25px] bg-[#DBE9FF] h-[30px] w-[250px] rounded-[20px] items-center justify-center">
            Student <li className="list-disc list-inline">My Application</li>
          </div>
        </div>

        <div className=" h-[60px] content-center">
          <h2 className="font-bold">Track your applications</h2>
        </div>

        <div className=" flex gap-[20px] mt-[10px]">
          <div className="flex justify-between h-[40px] w-[200px] border-[1px] border-gray-500 text-lg items-center p-[10px] font-medium rounded-[10px]">
            <div>Total Applied</div>
            <div>10</div>
          </div>

          <div className="flex justify-between h-[40px] w-[200px] border-[1px] border-gray-500 text-lg items-center p-[10px] font-medium rounded-[10px]">
            <div>Shortlisted</div>
            <div>10</div>
          </div>

          <div className="flex justify-between h-[40px] w-[200px] border-[1px] border-gray-500 text-lg items-center p-[10px] font-medium rounded-[10px]">
            <div>Interviews</div>
            <div>10</div>
          </div>

          <div className="flex justify-between h-[40px] w-[200px] border-[1px] border-gray-500 text-lg items-center p-[10px] font-medium rounded-[10px]">
            <div>Offers</div>
            <div>10</div>
          </div>
        </div>

        <div className=" mt-[20px] rounded-[10px] h-[50px] content-center border">
          <ul className="flex list-none gap-[30px] h-[40px] w-full content-center  items-center justify-start  ">
            <li
              className={` w-[150px] text-center content-center rounded-[20px] bg-blue-200 h-[30px] ${
                location.pathname === "/browse" ||
                location.pathname === "/browse/browsejobs"
                  ? "bg-[#DBE9FF]"
                  : "bg-white"
              }`}
            >
              <Link to={"/browse/browsejobs"}>Browse Jobs</Link>
            </li>
            <li
              className={` w-[150px] text-center content-center rounded-[20px] bg-blue-200 h-[30px] ${
                location.pathname === "/browse" ||
                location.pathname === "/browse/applications"
                  ? "bg-[#DBE9FF]"
                  : "bg-white"
              }`}
            >
              <Link to={"/browse/applications"}>My Applications</Link>
            </li>
            <li
              className={` w-[150px] text-center content-center rounded-[20px] bg-blue-200 h-[30px] ${
                location.pathname === "/browse" ||
                location.pathname === "/browse/savedjobs"
                  ? "bg-[#DBE9FF]"
                  : "bg-white"
              }`}
            >
              <Link to={"/browse/savedjobs"}>Saved Jobs</Link>
            </li>
          </ul>
        </div>
      </div>

      <MyApplication_Status />
    </>
  );
}

export default MyApplication;
