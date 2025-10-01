import React from "react";
import { Link } from "react-router-dom";

function Students_Shortcuts() {
  return (
    <>
      <div className=" h-[100vh] w-[22%] m-[20px] rounded-[10px] p-[10px]  border bg-white">
        <div className="mt-[5px] h-[30px] w-[100%] content-center p-[10px]">
          <h5 className="text-xl ">Student Shortcuts</h5>
        </div>

        <div className="p-[10px]">
          <Link to={'/browse/applications'}>
            <div className="border border-gray-500 flex flex-row justify-between rounded-[10px] mt-[20px] p-[10px] border">
              <div >Application</div>
              <div >14</div>
            </div>
          </Link>

          <div className="border border-gray-500 flex flex-row justify-between rounded-[10px] mt-[20px] p-[10px] border">
            <div >Interviews</div>
            <div >14</div>
          </div>

          <Link to={'/browse/savedjobs'}>
          <div className="border border-gray-500 flex flex-row justify-between rounded-[10px] mt-[20px] p-[10px] border">
            <div >Saved Jobs</div>
            <div >14</div>
          </div></Link>
        </div>
      </div>
    </>
  );
}

export default  Students_Shortcuts;
