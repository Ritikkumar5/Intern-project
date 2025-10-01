import React from "react";
function Community_and_Events() {
  return (
    <>
      <div className="h-screen w-[25%]  p-[20px] bg-white m-[10px] rounded-[10px]">
        <div className="flex justify-between">
          <div className="mt-[10px]">
            <h4>Community & Events</h4>
          </div>
          <div>
            <button className="h-30px border w-[70px] mt-[10px] bg-[#B2D0FB]  rounded-[5px]">
              +Add
            </button>
          </div>
        </div>

        <div className=" h-[50px] w-full mt-[15px]">
          <ul className="flex items-center justify-center gap-[20px]">
            <li className="flex items-center justify-center  h-[40px] w-[100px] bg-[#E8F2FE]  font-bold rounded-[5px] ">
              Jobs
            </li>
            <li className=" flex items-center justify-center   h-[40px] w-[150px] bg-[#E8F2FE]   font-bold rounded-[5px]">
              Career Events
            </li>
          </ul>
        </div>

        <div>
          <div className="h-[100px] border border-black w-full flex p-[8px] mt-[10px] rounded-[10px] items-center">
            <div className="h-[50px] flex shrink-0 w-[50px] items-center justify-center">
              <i className="bi bi-suitcase-lg text-[24px]"></i>
            </div>
            <div>
              <h5>Placement Drive at University of Technology</h5>
              <p>Sep 18, 2025</p>
            </div>
          </div>

          <div className="h-[100px] border border-black w-full flex p-[8px] mt-[10px] rounded-[10px] items-center">
            <div className="h-[50px] flex  shrink-0 w-[50px] items-center justify-center">
              <i className="bi bi-camera-video-fill text-[24px]"></i>
            </div>
            <div>
              <h5>Webinar:Mastering the Interview</h5>
              <p>Sep 18, 2025</p>
            </div>
          </div>

          <div className="h-[100px] border border-black w-full flex p-[8px] mt-[10px] rounded-[10px] items-center">
            <div className="h-[50px] flex shrink-0 w-[50px] items-center justify-center">
              <i className="bi bi-person-check text-[24px]"></i>
            </div>
            <div>
              <h5>Career Fair at State University</h5>
              <p>Sep 18, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Community_and_Events;
