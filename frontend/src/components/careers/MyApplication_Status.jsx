import React from "react";
import AllApplications from "./AllApplications";

function MyApplication_Status() {
  return (
    <>
      <div className="h-[180px] w-full mt-[20px] bg-white p-[20px] rounded-[10px]">
        <div className=" h-[50px content-center] mt-[20px]">
          <h2 className="font-medium">Status</h2>
        </div>

        <div className="flex gap-[20px] mt-[20px]">
          <select
            name="allstatus"
            id=""
            className=" h-[40px] w-[150px]  px-1 bg-[#DBE9FF] rounded-[10px]"
          >
            <option value="">All Status</option>
          </select>

          <select
            name="location"
            id=""
            className=" h-[40px] w-[150px] px-1 bg-[#DBE9FF] rounded-[10px]"
          >
            <option value="">Location</option>
          </select>

          <select
            name="company"
            id=""
            className=" h-[40px] w-[150px] px-1 bg-[#DBE9FF] rounded-[10px]"
          >
            <option value="">Company</option>
          </select>

          <select
            name="role"
            id=""
            className=" h-[40px] w-[150px] px-1 bg-[#DBE9FF] rounded-[10px]"
          >
            <option value="">Role</option>
          </select>

          <select
            name="applieddate"
            id=""
            className=" h-[40px] w-[150px] px-1 bg-[#DBE9FF] rounded-[10px]"
          >
            <option value="">Applied Date</option>
          </select>
        </div>
      </div>

      <AllApplications />
    </>
  );
}

export default MyApplication_Status;
