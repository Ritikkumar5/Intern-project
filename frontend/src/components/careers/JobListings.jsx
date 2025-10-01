import React from "react";
import { useLocation, Link } from "react-router-dom";
import JobListings_Overview from "./JobListings_Overview";

function JobListings() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="h-screen w-full  m-[20px] rounded-[10px] ">
        <div className=" h-[80px] items-center flex justify-between rounded-[10px] bg-white p-[20px]">
          <div className="flex gap-[30px]">
            <h5 className="text-2xl flex gap-[30px]">
              <strong>
                <i className="bi bi-list-ul"></i>Job Listings
              </strong>
            </h5>
          </div>
          <div className="text-xl text-white font-bold h-[40px] w-[150px] flex justify-center items-center rounded-[10px] bg-[#0A5FFF]">
            <button>+New Job</button>
          </div>
        </div>

        <div className="border bg-white mt-[20px] content-center p-[10px] rounded-[10px] h-[80px] w-full">
          <ul className="flex gap-[30px] items-center">
            <li
              className={`bg-[#DBE9FF] h-[40px] w-[150px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium`}
            >
              Post a Job
            </li>
            <li
              className={`bg-[#DBE9FF] h-[40px] w-[150px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium ${
                location.pathname === "/placement/job-listings"
                  ? "text-[#0669F7]"
                  : "text-black"
              }`}
            >
              <Link to={"/placement/job-listings"}>Job Listings</Link>
            </li>
            <li
              className={`bg-[#DBE9FF] h-[40px] w-[250px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium ${
                location.pathname === "/placement/applications"
                  ? "text-[#0669F7]"
                  : "text-black"
              }`}
            >
              <Link to={"/placement/applications"}> Applications Received</Link>
            </li>
          </ul>
        </div>

        <div className="h-auto w-full border bg-white mt-[20px] p-[20px] rounded-[10px]">
          <div className="">
            <div className=" h-[50px] w-full content-center">
              <h5 className="text-2xl">
                <strong>Overview</strong>
              </h5>
            </div>
            <div className="flex justify-between h-[50px] w-full mt-[10px]">
              <div className="w-[50%]">
                <input
                  className="border h-[50px] w-full rounded-[10px] p-[20px]"
                  type="text"
                  placeholder="Search Jobs"
                />
              </div>
              <div className="flex w-[40%]  items-center gap-[20px]">
                <button className="border h-full w-[200px] text-xl rounded-[10px]">
                  Status : All
                </button>
                <button className="border h-full w-[250px] text-xl rounded-[10px]">
                  Posted: Last 60 days
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[10px]">
              <div className="grid grid-cols-[7fr_2fr_2.5fr_2.5fr_4fr]  h-[100px] w-full gap-[10px] p-[10px]">
                <div className="p-[5px]">
                  <div className=" h-[50%] w-full content-center text-xl font-bold">
                    Backend Engineer
                  </div>
                  <div className="  h-[50%] w-full items-center text-xl flex gap-[30px]">
                    YourCompany{" "}
                    <li className="list-disc list-inline">Remote</li>
                  </div>
                </div>

                <div className=" content-center ">
                  <div className="h-[30px] w-full flex items-center justify-center text-xl bg-blue-200 rounded-[10px]">
                    Active
                  </div>
                </div>

                <div className=" h-full w-full content-center">
                  <div className="flex items-center justify-center text-xl">
                    Posted 12d ago
                  </div>
                </div>

                <div className=" h-full w-full content-center">
                  <div className="flex items-center justify-center text-xl">
                    Applicants : 40
                  </div>
                </div>
                <div className="flex gap-[20px] h-full w-full items-center justify-center">
                  <button className="border w-[100px] h-[40px] font-bold rounded-[10px]">
                    View
                  </button>
                  <button className=" w-[100px] h-[40px] bg-[#2563EB] rounded-[10px] font-medium text-white">
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="grid grid-cols-[7fr_2fr_2.5fr_2.5fr_4fr]  h-[100px] w-full gap-[10px] p-[10px]">
                <div className="p-[5px]">
                  <div className=" h-[50%] w-full content-center text-xl font-bold">
                    Backend Engineer
                  </div>
                  <div className="  h-[50%] w-full items-center text-xl flex gap-[30px]">
                    YourCompany{" "}
                    <li className="list-disc list-inline">Remote</li>
                  </div>
                </div>

                <div className=" content-center ">
                  <div className="h-[30px] w-full flex items-center justify-center text-xl bg-blue-200 rounded-[10px]">
                    Active
                  </div>
                </div>

                <div className=" h-full w-full content-center">
                  <div className="flex items-center justify-center text-xl">
                    Posted 12d ago
                  </div>
                </div>

                <div className=" h-full w-full content-center">
                  <div className="flex items-center justify-center text-xl">
                    Applicants : 40
                  </div>
                </div>
                <div className="flex gap-[20px] h-full w-full items-center justify-center">
                  <button className="border w-[100px] h-[40px] font-bold rounded-[10px]">
                    View
                  </button>
                  <button className=" w-[100px] h-[40px] bg-[#2563EB] rounded-[10px] font-medium text-white">
                    Close
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="grid grid-cols-[7fr_2fr_2.5fr_2.5fr_4fr]  h-[100px] w-full gap-[10px] p-[10px]">
                <div className="p-[5px]">
                  <div className=" h-[50%] w-full content-center text-xl font-bold">
                    Backend Engineer
                  </div>
                  <div className="  h-[50%] w-full items-center text-xl flex gap-[30px]">
                    YourCompany{" "}
                    <li className="list-disc list-inline">Remote</li>
                  </div>
                </div>

                <div className=" content-center ">
                  <div className="h-[30px] w-full flex items-center justify-center text-xl bg-blue-200 rounded-[10px]">
                    Active
                  </div>
                </div>

                <div className=" h-full w-full content-center">
                  <div className="flex items-center justify-center text-xl">
                    Posted 12d ago
                  </div>
                </div>

                <div className=" h-full w-full content-center">
                  <div className="flex items-center justify-center text-xl">
                    Applicants : 40
                  </div>
                </div>
                <div className="flex gap-[20px] h-full w-full items-center justify-center">
                  <button className="border w-[100px] h-[40px] font-bold rounded-[10px]">
                    View
                  </button>
                  <button className=" w-[100px] h-[40px] bg-[#2563EB] rounded-[10px] font-medium text-white">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <JobListings_Overview />
      </div>
    </>
  );
}

export default JobListings;
