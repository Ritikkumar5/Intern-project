import React from "react";
import { useLocation, Link } from "react-router-dom";

function StudentDashboard() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <main className="bg-white  h-auto w-full p-[20px]  rounded-[10px]">
        <div className="h-[40px] w-full  content-center gap-[10px]">
          <div className="w-[200px] rounded-[20px] text-center content-center bg-[#E6F0FF] h-[30px] ">
            
              <i className="bi bi-person-fill"></i>Student Dashboard
          </div>
        </div>
        <div className="h-[70px] w-full content-center">
          <h2 className="d-h5">Find Your next opportunity</h2>
        </div>
        <div className="grid grid-cols-[85%_1fr] w-full h-[50px]">
          <div className="relative w-full mr-[10px]">
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              className="border-[1px]  h-full w-full rounded-[10px] pl-[35px] pr-[10px] py-[10px]"
              type="text"
              placeholder="Search for Keyword,Role,Company.........."
            />
          </div>

          <div className="flex items-center justify-center">
            <button className="h-full w-[90%] rounded-[10px] text-white border-[none] bg-[#0066FF]">
              Search
            </button>
          </div>
        </div>

        <div className="h-[40px] mt-[20px] content-center ">
          <select
            name="jobtype"
            id=""
            className="border  mr-[20px] h-full w-[150px] rounded-[5px] text-black p-[5px] bg-[#E6F0FF]"
          >
            <option value="">Jobtype</option>
          </select>
          <select
            name="Location"
            id=""
            className="border  mr-[20px] h-full w-[150px] rounded-[5px] text-black p-[5px] bg-[#E6F0FF]"
          >
            <option value="">Location</option>
          </select>
          <select
            name="Sort by"
            id=""
            className="border  mr-[20px] h-full w-[150px] rounded-[5px] text-black p-[5px] bg-[#E6F0FF]"
          >
            <option value="">Sort by</option>
          </select>
          <select
            name="Mode"
            id=""
            className="border  mr-[20px] h-full w-[150px] rounded-[5px] text-black p-[5px] bg-[#E6F0FF]"
          >
            <option value="">Mode</option>
          </select>
          <select
            name="Source"
            id=""
            className="border  mr-[20px] h-full w-[150px] rounded-[5px] text-black p-[5px] bg-[#E6F0FF]"
          >
            <option value="">Source</option>
          </select>
        </div>

        <div className="border  mt-[20px] h-[60px] content-center rounded-[10px] p-[10px]">
          <ul className="flex gap-[20px] h-[35px] ">
            <li
              className={` w-[150px] rounded-[20px] text-center content-center items-center ${
                location.pathname === "/browse" ||
                location.pathname === "/browse/browsejobs"
                  ? "bg-[#DBE9FF] "
                  : "bg-white"
              }`}
            >
              <Link to="/browse/browsejobs" className=" w-full h-full">
                Browse Jobs
              </Link>
            </li>
            <li
              className={` w-[150px] rounded-[20px] text-center content-center items-center ${
                location.pathname === "/browse/applications"
                  ? "bg-[#DBE9FF] "
                  : "bg-white"
              }`}
            >
              <Link to="/browse/applications" className=" w-full h-full ">
                My Applications
              </Link>
            </li>
            <li
              className={`w-[100px]  rounded-[20px] text-center content-center items-center ${
                location.pathname === "/browse/savedjobs"
                  ? "bg-[#DBE9FF] "
                  : "bg-white"
              }`}
            >
              <Link to="/browse/savedjobs" className=" w-full h-full">
                Saved Jobs
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-[20px]">
          <div className="relative left-[10px]">
            <h3>Recommended For You</h3>
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr] gap-[20px] p-[10px] mt-[10px]">
            <div className="bg-[#E6F0FF]">
              <div className="d-recommand-imgdiv">
                <img
                  src="/demo.jpg"
                  className="rounded-[5px]"
                  alt="image not given"
                />
              </div>
              <div className="p-[10px] bg-[#E6F0FF]">
                <div className="d-recommand-part2">
                  <h5 className="d-recommand-part2-head">Software Engineer</h5>
                </div>
                <div className="flex justify-between">
                  <p>TechNova Inc.</p>
                  <p>Batch - 2025</p>
                </div>
                <div className="d-recommand-part2-list">
                  <ul className="flex flex-row gap-[10px] mt-[10px]">
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Full-time
                    </li>
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Remote
                    </li>
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Recruiter
                    </li>
                  </ul>
                </div>
                <div className="flex justify-start h-[40px] mt-[10px] content-center gap-[10px]">
                  <button className="bg-[#0066FF] flex gap-[5px] text-white  px-4 py-2 rounded">
                    <i className="bi bi-send-fill"></i>Apply
                  </button>
                  <button className="border border-black flex gap-[5px] text-black  px-4 py-2 rounded">
                    <i className="bi bi-bookmark-fill"></i>Save
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#E6F0FF]">
              <div className="d-recommand-imgdiv">
                <img
                  src="/demo.jpg"
                  className="rounded-[5px]"
                  alt="image not given"
                />
              </div>
              <div className="p-[10px] bg-[#E6F0FF]">
                <div className="d-recommand-part2">
                  <h5 className="d-recommand-part2-head">Software Engineer</h5>
                </div>
                <div className="flex justify-between">
                  <p>TechNova Inc.</p>
                  <p>Batch - 2025</p>
                </div>
                <div className="d-recommand-part2-list">
                  <ul className="flex flex-row gap-[10px] mt-[10px]">
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Full-time
                    </li>
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Remote
                    </li>
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Recruiter
                    </li>
                  </ul>
                </div>
                <div className="flex justify-start h-[40px] mt-[10px] content-center gap-[10px]">
                  <button className="bg-[#0066FF] flex gap-[5px] text-white  px-4 py-2 rounded">
                    <i className="bi bi-send-fill"></i>Apply
                  </button>
                  <button className="border border-black flex gap-[5px] text-black  px-4 py-2 rounded">
                    <i className="bi bi-bookmark-fill"></i>Save
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#E6F0FF]">
              <div className="d-recommand-imgdiv">
                <img
                  src="/demo.jpg"
                  className="rounded-[5px]"
                  alt="image not given"
                />
              </div>
              <div className="p-[10px] bg-[#E6F0FF]">
                <div className="d-recommand-part2">
                  <h5 className="d-recommand-part2-head">Software Engineer</h5>
                </div>
                <div className="flex justify-between">
                  <p>TechNova Inc.</p>
                  <p>Batch - 2025</p>
                </div>
                <div className="d-recommand-part2-list">
                  <ul className="flex flex-row gap-[10px] mt-[10px]">
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Full-time
                    </li>
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Remote
                    </li>
                    <li className="border bg-[#D0DFFF] text-black w-[80px] text-center rounded-[20px]">
                      Recruiter
                    </li>
                  </ul>
                </div>
                <div className="flex justify-start h-[40px] mt-[10px] content-center gap-[10px]">
                  <button className="bg-[#0066FF] flex gap-[5px] text-white  px-4 py-2 rounded">
                    <i className="bi bi-send-fill"></i>Apply
                  </button>
                  <button className="border border-black flex gap-[5px] text-black  px-4 py-2 rounded">
                    <i className="bi bi-bookmark-fill"></i>Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default StudentDashboard;
