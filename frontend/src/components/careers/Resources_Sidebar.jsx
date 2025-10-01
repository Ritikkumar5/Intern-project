import React from "react";

function Resources_Sidebar() {
  return (
    <>
      <div className="border bg-white h-screen w-[25%] p-[10px] mt-[20px] rounded-[10px] ">
        <div>
          <h5>Recommended For You</h5>
        </div>

        <div className="border border-black w-full h-[150px] mt-[20px] p-[10px] rounded-[10px]">
          <div className=" w-full">
            <h5>
              <strong>Security Interview Q&A</strong>
            </h5>
          </div>

          <div className="flex  mt-[10px] h-[90px]">
            <div className="flex ">
              <div className="h-[90px] w-[90px]">
                <img
                  className="h-full w-full rounded-[10px]"
                  src="/demo.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <p className="p-[5px] text-[13px]">
                  All Security related questions in one
                </p>
              </div>
            </div>

            <div className="flex  h-[90px] items-end gap-[10px] ">
              <button className="text-xl ">View</button>
              <button className="text-xl ">
                <i className="bi bi-download "></i>
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black w-full h-[150px] mt-[20px] p-[10px] rounded-[10px]">
          <div className=" w-full">
            <h5>
              <strong>Resume Template</strong>
            </h5>
          </div>

          <div className="flex  mt-[10px] h-[90px]">
            <div className="flex ">
              <div className="h-[90px] w-[90px]">
                <img
                  className="h-full w-full rounded-[10px]"
                  src="/demo.jpg"
                  alt=""
                />
              </div>
              <div className="">
                <p className="p-[5px] text-[13px]">
                  All Security related questions in one
                </p>
              </div>
            </div>

            <div className="flex  h-[90px] items-end gap-[10px] ">
              <button className="text-xl ">View</button>
              <button className="text-xl ">
                <i className="bi bi-download "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resources_Sidebar;
