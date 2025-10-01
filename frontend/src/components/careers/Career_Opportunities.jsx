import React from "react";
import Recommanded from "./Recommanded";

function Career_Opportunities() {
  return (
    <>
      <div className=" w-[75%] mt-[10px] rounded-[10px]">
        <div className="h-[220px] w-full p-[20px] rounded-[10px] bg-white ">
          <div className="c4-head">
            <h2>Explore Career Opportunities</h2>
          </div>

          <div className="flex border border-black rounded-[10px] justify-between items-center content-center mt-[20px] ">
            <div className="relative h-[50px] w-full rounded pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
              <input
                className="h-full w-full border-none outline-none"
                type="text"
                placeholder="Search for Keyword,Role,Company.........."
              />
              <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>

            <div className="h-[35px] w-[150px] flex justify-center items-center content-center relative right-[10px]">
              <button className="h-full bg-blue-500 w-full border-[none] text-white rounded-[20px]">
                Search
              </button>
            </div>
          </div>
          <div className="h-[50px] items-center content-center mt-[20px] ">
            <select
              name="jobtype"
              id=""
              className="mr-[20px] bg-[#EAF4FF] h-[40px] w-[150px] rounded-[5px] px-1"
            >
              <option value="">Jobtype</option>
            </select>
            <select
              name="jobtype"
              id=""
              className="mr-[20px] bg-[#EAF4FF] h-[40px] w-[150px] rounded-[5px] px-1"
            >
              <option value="">Skills</option>
            </select>
            <select
              name="jobtype"
              id=""
              className="mr-[20px] bg-[#EAF4FF] h-[40px] w-[150px] rounded-[5px] px-1"
            >
              <option value="">Categories</option>
            </select>
            <select
              name="jobtype"
              id=""
              className="mr-[20px] bg-[#EAF4FF] h-[40px] w-[150px] rounded-[5px] px-1"
            >
              <option value="">Location</option>
            </select>
          </div>
        </div>

        <div>
          <Recommanded />
        </div>
      </div>
    </>
  );
}

export default Career_Opportunities;
