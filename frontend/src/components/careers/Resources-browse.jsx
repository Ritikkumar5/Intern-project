import React from "react";
import Resourse_Part from "./Resourse_Part";
function Resources_Browse() {
  return (
    <>
      <div className="w-[75%]  m-[20px]">
        <div className="h-[150px] w-full  bg-white p-[15px] rounded-[10px]">
          <div>
            <h2>Browse</h2>
          </div>

          <div className="relative mt-[20px]">
            <input
              className=" w-full border h-[60px] rounded pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search for guides, templates......."
            />
            <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <div className="w-full">
          <Resourse_Part />
        </div>
      </div>
    </>
  );
}
export default Resources_Browse;
