import React from "react";
import Glance_and_Tags from "./Glance_and_Tags";
import { useLocation, Link } from "react-router-dom";

function SavedJobs() {
  const location = useLocation();
  return (
    <>
      <div className="w-full h-[230px] bg-white p-[20px] rounded-[10px]">
        {/* <div className="border-[1px] border-green-500 w-full"> */}

        <div className="flex justify-between  h-[50px]  items-center content-center">
          <div className=" flex h-[50px] w-[250px]">
            <h5 className="text-3xl flex gap-[5px] content-center items-center">
              <i className="bi bi-bookmark-fill text-2xl content-center"></i>
              Saved Jobs
            </h5>
          </div>
          <div className=" h-[35px] w-[400px] flex gap-[20px] items-center justify-center content-center">
            <button className="border text-xl bg-[#DBE6F7] w-[180px] h-full rounded-[10px]">
              Manage Filters
            </button>
            <button className=" border bg-[#0A4FFF] w-[150px] h-full text-white rounded-[10px]">
              Alerts On
            </button>
          </div>
        </div>

        <div className=" flex mt-[20px] h-[60px] w-full items-center">
          <div className="h-[50px] w-[80%]">
            <input
              className="h-[40px] w-[90%] rounded-[10px] p-[10px] text-medium border border-black"
              type="text"
              placeholder="Search saved jobs by title, company,or tag"
            />
          </div>
          <div className="h-[50px] w-[30%]">
            <input
              className="h-[40px] w-full rounded-[10px] p-[10px] text-medium border border-black"
              type="text"
              placeholder="Location"
            />
          </div>
        </div>

        <div className="border mt-[10px] rounded-[10px] h-[50px] content-center">
          <ul className="flex list-none gap-[30px] h-[40px] w-full content-center  items-center justify-start ">
            <li
              className={` w-[150px] text-center content-center rounded-[20px]  h-[30px]  ${
                location.pathname === "/browse" ||
                location.pathname === "/browse/browsejobs"
                  ? "bg-[#DBE9FF]"
                  : "bg-white"
              }`}
            >
              <Link to={"/browse/browsejobs"}>Browse Jobs</Link>
            </li>
            <li
              className={`w-[150px] text-center content-center rounded-[20px]  h-[30px]  ${
                location.pathname === "/browse/applications"
                  ? "bg-[#DBE9FF] "
                  : "bg-white "
              }`}
            >
              <Link to={"/browse/applications"}>My Applications</Link>
            </li>
            <li
              className={`w-[150px] text-center content-center  rounded-[20px]  h-[30px]  ${
                location.pathname === "/browse/savedjobs"
                  ? "bg-[#DBE9FF] "
                  : "bg-white"
              }`}
            >
              <Link to={"/browse/savedjobs"}>Saved Jobs</Link>
            </li>
          </ul>
        </div>

        {/* </div> */}
      </div>

      <Glance_and_Tags />
    </>
  );
}

export default SavedJobs;
