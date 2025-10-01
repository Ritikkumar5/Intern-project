import React from "react";

function JobListings_Overview() {
  return (
    <>
      <div className="flex w-full h-full gap-[20px] mt-[20px]">
        <div className="border w-[50%] h-[750px] bg-white p-[20px] rounded-[10px]">
          <div className="w-full content-center h-[40px] ">
            <h5 className="text-xl">Backend Engineer - Details</h5>
          </div>

          <div>
            <ul className="">
              <li className="flex gap-[20px] mt-[5px] text-xl">
                <i className="bi bi-geo-alt-fill"></i>Remote
              </li>
              <li className="flex gap-[20px] mt-[5px] text-xl">
                <i className="bi bi-clock-fill"></i>Full - time
              </li>
              <li className="flex gap-[20px] mt-[5px] text-xl">
                <i className="bi bi-currency-rupee"></i>18 - 22 LPA
              </li>
            </ul>
          </div>

          <div className="w-full ">
            <div className="mt-[10px]">
              <h5 className="text-black text-xl"> Top Skills</h5>
            </div>

            <div className="mt-[10px]">
              <ul className="flex h-[50px] w-full  gap-[20px] items-center ">
                <li className="h-[40px] border text-center content-center font-bold bg-blue-200 rounded-[10px] w-[100px]">
                  Python
                </li>
                <li className="h-[40px] border text-center content-center font-bold bg-blue-200 rounded-[10px] w-[100px]">
                  Django
                </li>
                <li className="h-[40px] border text-center content-center font-bold bg-blue-200 rounded-[10px] w-[100px]">
                  PostgreSQL
                </li>
                <li className="h-[40px] border text-center content-center font-bold bg-blue-200 rounded-[10px] w-[100px]">
                  AWS
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mt-[10px]">
            <div>
              <h5 className="text-xl">Eligibility</h5>
            </div>

            <div className="mt-[10px] text-xl">
              CGPA 8.0+, 2025/2026 Batch, CSE/IT
            </div>
          </div>

          <div className="w-full mt-[10px]">
            <div>
              <h5 className="text-xl">Description</h5>
            </div>
            <div className="mt-[10px] text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              earum aspernatur nihil deleniti suscipit natus repellendus
              accusantium ab ratione? Modi.
            </div>
          </div>

          <div className="flex gap-[30px] mt-[10px] w-full h-[70px] items-center">
            <button className="border h-[50px] w-[150px] border-black rounded-[10px] text-xl">
              Edit Job
            </button>
            <button className="border h-[50px] w-[150px] bg-blue-500 text-white font-bold text-xl rounded-[10px]">
              Share Link
            </button>
          </div>
        </div>

        <div className="border w-[50%] h-[750px]   bg-white rounded-[10px] p-[20px] flex flex-col">
          <div className="mt-[10px]">
            <h5 className="text-xl">Recent Applications (5)</h5>
          </div>

          <div className=" w-full  mt-[10px] flex-1">
            <div className="h-[180px] w-full p-[10px] border rounded-[10px] mt-[10px]">
              <div>
                <h5 className="text-xl">Aarav Sharma</h5>
              </div>
              <div className="text-xl mt-[10px]">CGPA 8.6</div>
              <div className="text-xl mt-[10px]">+Python, Django</div>
              <div className="grid grid-cols-[2fr_3fr_2.5fr_4fr] gap-[20px]  h-[70px] content-center">
                <div className="border flex px-1 items-center justify-center h-[40px] rounded-[20px] w-full bg-blue-200">
                  Reviewed
                </div>
                <div className=" flex items-center justify-center">
                  Applied 1d ago
                </div>
                <div className=" flex items-center justify-center">
                  Score : 86%
                </div>
                <div className="flex gap-[10px]">
                  <button className="h-[40px] border w-[70px] rounded-[10px] text-lg">
                    CV
                  </button>
                  <button className="h-[40px] text-white w-[70px] rounded-[10px]  bg-[#2563EB] text-lg">
                    Invite
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[180px] w-full p-[10px] border rounded-[10px] mt-[10px]">
              <div>
                <h5 className="text-xl">Aarav Sharma</h5>
              </div>
              <div className="text-xl mt-[10px]">CGPA 8.6</div>
              <div className="text-xl mt-[10px]">+Python, Django</div>
              <div className="grid grid-cols-[2fr_3fr_2.5fr_4fr] gap-[20px]  h-[70px] content-center">
                <div className="border flex px-1 items-center justify-center h-[40px] rounded-[20px] w-full bg-blue-200">
                  Reviewed
                </div>
                <div className=" flex items-center justify-center">
                  Applied 1d ago
                </div>
                <div className=" flex items-center justify-center">
                  Score : 86%
                </div>
                <div className="flex gap-[10px]">
                  <button className="h-[40px] border w-[70px] rounded-[10px] text-lg">
                    CV
                  </button>
                  <button className="h-[40px] text-white w-[70px] rounded-[10px]  bg-[#2563EB] text-lg">
                    Invite
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[180px] w-full p-[10px] border rounded-[10px] mt-[10px]">
              <div>
                <h5 className="text-xl">Aarav Sharma</h5>
              </div>
              <div className="text-xl mt-[10px]">CGPA 8.6</div>
              <div className="text-xl mt-[10px]">+Python, Django</div>
              <div className="grid grid-cols-[2fr_3fr_2.5fr_4fr] gap-[20px]  h-[70px] content-center">
                <div className="border flex px-1 items-center justify-center h-[40px] rounded-[20px] w-full bg-blue-200">
                  Reviewed
                </div>
                <div className=" flex items-center justify-center">
                  Applied 1d ago
                </div>
                <div className=" flex items-center justify-center">
                  Score : 86%
                </div>
                <div className="flex gap-[10px]">
                  <button className="h-[40px] border w-[70px] rounded-[10px] text-lg">
                    CV
                  </button>
                  <button className="h-[40px] text-white w-[70px] rounded-[10px] bg-[#2563EB] text-lg">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-[50px] w-full flex justify-between mt-[20px]">
            <button className=" w-[200px] flex gap-[10px] h-[40px] p-[10px] items-center rounded-[10px] ">
              <i className="bi bi-list-ul"></i>Manage Applications
            </button>
            <button className=" w-[200px] h-[40px] flex gap-[10px] items-center bg-[#2563EB] text-white p-[10px] text-xl rounded-[10px] ">
              <i class="bi bi-robot"></i>Run AI Shortlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobListings_Overview;
