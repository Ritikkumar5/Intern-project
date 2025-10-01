import React from "react";

function AllApplications(){
    return(
        <>
        <div className="mt-[20px] bg-white rounded-[10px]">
            <div className="mt-[20px] p-[20px]">
                <h3 className="font-medium">All Applications</h3>
            </div>

           <div className="p-[20px]">
             <div className="border-[1px] border-gray-600 h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr]  bg-white rounded-[10px]  ">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center  "><h5 className="font-medium text-xl flex flex-row gap-[30px]">UX Design Inter <li className="list-disc list-inline">Sketchly</li></h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Applied on Sep 03</li>
                  <li>Hybrid</li>
                  <li>Figma</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center  bg-[#DBE9FF] rounded-[20px] ">Applied</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center  bg-[#DBE9FF] rounded-[20px] ">3 months</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-end items-center gap-[10px] p-[10px]">
                <button className=" bg-[#DBE9FF] h-[40px] w-[80px] rounded-[10px] font-medium">Track</button>
            </div>

          </div>

           </div>

           <div className="p-[20px]">
            <div className=" border-[1px] border-gray-600 h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr] bg-white rounded-[10px] ">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center  "><h5 className="font-medium text-xl flex flex-row gap-[30px]">Backend Intern <li className="list-disc list-inline">CodeForge</li></h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Applied on Aug 29</li>
                  <li>Remote</li>
                  <li>Node.js</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center  bg-[#DBE9FF] rounded-[20px] ">Interview</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center  bg-[#DBE9FF] rounded-[20px] ">Paid</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-around items-center gap-[10px] p-[10px]">
                <button className=" bg-[#DBE9FF] h-[40px] w-[120px] rounded-[10px]  font-medium ">Schedule</button>
                <button className=" bg-[#DBE9FF] h-[40px] w-[80px] rounded-[10px]  font-medium">Track</button>

            </div>

          </div>
           </div>

           <div className="p-[20px]">
             <div className=" border-[1px] border-gray-600 h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr] bg-white rounded-[10px] ">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center  "><h5 className="font-medium text-xl flex flex-row gap-[30px]">Prodect Manager <li className="list-disc list-inline">Vertex Labs</li></h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Applied on Aug 18</li>
                  <li>Onsite</li>
                  <li>Roadmapping</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE9FF] rounded-[20px] ">Shortlisted</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center  bg-[#DBE9FF] rounded-[20px] ">Full time</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-around items-center gap-[10px] p-[10px]">
                <button className=" bg-[#DBE9FF] h-[40px] w-[120px] rounded-[10px]  font-medium  ">Message HR</button>
                <button className=" bg-[#DBE9FF] h-[40px] w-[80px] rounded-[10px]  font-medium ">Track</button>
            </div>

          </div>
           </div>




















           


          



        </div>
        </>
    )
}

export default AllApplications