import React from "react";
import { useLocation,Link } from "react-router-dom";

function Received_Applications() {
  const location=useLocation()
  return (
    <>
      <div className="h-screen w-full  m-[20px] rounded-[10px]">
        <div className=" h-[80px] items-center flex justify-between rounded-[10px] bg-white p-[20px]">
          <div className="flex gap-[30px]">
            <h5 className="text-2xl flex ">
              <strong>
                <i className="bi bi-file-earmark-text-fill"></i>Application
                Received
              </strong>
            </h5>
          </div>
          <div className="text-xl text-white font-bold h-[40px] w-[150px] flex justify-center items-center rounded-[10px] bg-[#0A5FFF]">
            <button className="">+New Job</button>
          </div>
        </div>

        <div className="border bg-white mt-[20px] content-center p-[10px] rounded-[10px] h-[80px] w-full">
          <ul className="flex gap-[30px] items-center">
            <li className={`bg-[#DBE9FF] h-[40px] w-[150px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium`}>
              Post a Job
            </li>
            <li className={`bg-[#DBE9FF] h-[40px] w-[150px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium ${location.pathname==='/placement/job-listings' ? 'text-[#0669F7]':'text-black'}`}>
              <Link to={'/placement/job-listings'}>Job Listings</Link>
            </li>
            <li className={`bg-[#DBE9FF] h-[40px] w-[250px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium ${location.pathname==='/placement/applications' ? 'text-[#0669F7]':'text-black'}`}>
              <Link to={'/placement/applications'}>Applications Received</Link>
            </li>
          </ul>
        </div>

        <div className="border bg-white mt-[20px] content-center p-[10px] rounded-[10px] h-[80px] w-full">
          <ul className="flex gap-[30px] items-center">
            <li className="bg-white border h-[50px] w-[280px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium gap-[10px]">
              <i className="bi bi-briefcase-fill"></i>Job : Backend Engineer
            </li>
            <li className="bg-white border h-[50px] w-[280px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium gap-[10px]">
              {" "}
              <i className="bi bi-calendar3"></i>Applied : Last 30 days
            </li>
            <li className="bg-white border h-[50px] w-[250px] rounded-[10px] content-center items-center flex justify-center text-xl font-medium gap-[10px]">
              {" "}
              <i className="bi bi-funnel-fill"></i>Status : All
            </li>
          </ul>
        </div>

        <div className=" w-full border mt-[20px] bg-white rounded-[10px]">
          <div className="grid grid-cols-[1fr_5fr_1fr_1fr_4fr_3fr] p-[10px]">
            <div className="flex items-center justify-center">
              <div className="h-[60px]  w-[60px] bg-gray-500 text-white flex items-center justify-center text-3xl ">
                A
              </div>
            </div>
            <div className=" h-[100px] grid grid-rows-[1fr_1fr] p-[10px]">
              <div className="font-bold content-center">
                Aarav Sharma{" "}
                <span className="bg-[#64FF6B]  px-1 rounded-[5px] ">Score-87</span>
              </div>
              <div className="flex gap-[30px] text-gray-500 content-center">
                Applied to Backend Engineer{" "}
                <li className="list-disc list-inline">1d ago</li>
              </div>
            </div>

            <div className="h-full w-full  content-center font-bold ">
              CGPA 8.6
            </div>

            <div className="h-full w-full   font-bold flex items-center justify-center">
              2 YOE
            </div>

            <div className="h-full w-full  content-center font-bold p-[10px]">
              Skills: Python, Django, PostgreSQl
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-[10px] items-center">
              <button className=" h-[40px] rounded-[10px] border-[1px] border-black">View CV</button>
              <button className="bg-blue-500 text-white border h-[40px] rounded-[10px]">
                Invite
              </button>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-[1fr_5fr_1fr_1fr_4fr_3fr] p-[10px]">
            <div className="flex items-center justify-center">
              <div className="h-[60px]  w-[60px] bg-gray-500 text-white flex items-center justify-center text-3xl ">
                A
              </div>
            </div>
            <div className=" h-[100px] grid grid-rows-[1fr_1fr] p-[10px]">
              <div className="font-bold content-center">
                Aarav Sharma
                <span className="bg-[#64FF6B]  px-1 rounded-[5px] ">Score-87</span>
              </div>
              <div className="flex gap-[30px] text-gray-500 content-center">
                Applied to Backend Engineer
                <li className="list-disc list-inline">1d ago</li>
              </div>
            </div>

            <div className="h-full w-full  content-center font-bold ">
              CGPA 8.6
            </div>

            <div className="h-full w-full   font-bold flex items-center justify-center">
              2 YOE
            </div>

            <div className="h-full w-full  content-center font-bold p-[10px]">
              Skills: Python, Django, PostgreSQl
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-[10px] items-center">
              <button className=" h-[40px] rounded-[10px] border-[1px] border-black">View CV</button>
              <button className="bg-blue-500 text-white border h-[40px] rounded-[10px]">
                Invite
              </button>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-[1fr_5fr_1fr_1fr_4fr_3fr] p-[10px]">
            <div className="flex items-center justify-center">
              <div className="h-[60px]  w-[60px] bg-gray-500 text-white flex items-center justify-center text-3xl ">
                A
              </div>
            </div>
            <div className=" h-[100px] grid grid-rows-[1fr_1fr] p-[10px]">
              <div className="font-bold content-center">
                Aarav Sharma{" "}
                <span className="bg-[#64FF6B]  px-1 rounded-[5px] ">Score-87</span>
              </div>
              <div className="flex gap-[30px] text-gray-500 content-center">
                Applied to Backend Engineer{" "}
                <li className="list-disc list-inline">1d ago</li>
              </div>
            </div>

            <div className="h-full w-full  content-center font-bold ">
              CGPA 8.6
            </div>

            <div className="h-full w-full   font-bold flex items-center justify-center">
              2 YOE
            </div>

            <div className="h-full w-full  content-center font-bold p-[10px]">
              Skills: Python, Django, PostgreSQl
            </div>

            <div className="grid grid-cols-[1fr_1fr] gap-[10px] items-center">
              <button className=" h-[40px] rounded-[10px] border-[1px] border-black">View CV</button>
              <button className="bg-blue-500 text-white border h-[40px] rounded-[10px]">
                Invite
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[20px] bg-white p-[20px] rounded-[10px]">
          <div>
            <h5 className="flex gap-[25px] text-xl">
              <i className="bi bi-person-fill"></i>Aarav Sharma <li>Backend Engineer</li>
            </h5>
          </div>
          <div className="mt-[10px]">
            <div className="flex gap-[25px] text-xl text-gray-400">
                <i className="bi bi-geo-alt-fill"></i>
              CGPA 8.6
              <ul className="flex gap-[25px]">
                <li className="list-disc list-inline">2025 Batch</li>
                <li className="list-disc list-inline">CSE</li>
              </ul>
            </div>
          </div>

          <div className="mt-[10px] flex gap-[20px] text-xl text-gray-400"><i class="bi bi-geo-alt-fill"></i>Remote</div>

          <div className="mt-[10px]">
            <h5 className="text-black text-xl">Skills & Match</h5>
          </div>

          <div className="mt-[10px]">
            <ul className="flex h-[50px] w-full  gap-[20px] items-center ">
              <li className="h-[40px] border text-center content-center font-medium bg-[#E0E7FF] rounded-[10px] w-[100px]">Python</li>
              <li className="h-[40px] border text-center content-center font-medium bg-[#E0E7FF] rounded-[10px] w-[100px]">Django</li>
              <li className="h-[40px] border text-center content-center font-medium bg-[#E0E7FF] rounded-[10px] w-[100px]">PostgreSQL</li>
              <li className="h-[40px] border text-center content-center font-medium bg-[#E0E7FF] rounded-[10px] w-[100px]">AWS</li>
            </ul>
          </div>

          <div className="mt-[10px] h-[40px] w-full">
            <h5 className="text-xl">
              % All Match Score : <span className="text-blue-500">86%</span>
            </h5>
          </div>

          <div>
            <div>Recent Activity</div>
            <div className="flex gap-[20px]">
              Applied 1 day ago
              <li className="text-blue-500 font-bold list-disc list-inline flex gap-[30px]">
                Status : New
              </li>
            </div>
            <div>Note : Strong backend projects,invite for coding round</div>
            <div className="flex gap-[30px] h-[50px] mt-[10px] w-full  items-center">
                <button className="bg-white border border-black h-[40px] w-[150px] font-bold rounded-[10px] ">Download CV</button>
                <button className="bg-[#3B82F6] text-white h-[40px] w-[180px] font-bold rounded-[10px]">Invite to Interview</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Received_Applications;
