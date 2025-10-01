import React from "react";

function Glance_and_Tags() {
  return (
    <>
      <div className="flex justify-between ">
        <div className="w-1/4 h-screen">
          <div className=" h-full w-full mt-[20px] bg-white p-[10px] rounded-[10px]">
            <h5 className="mt-[5px]">At a Glance</h5>

            <div className=" h-auto w-full mt-[20px]">
              <div className="flex flex-row justify-between border  h-[40px] w-full p-[10px] text-medium items-center mt-[10px] bg-[#DBE6F7] rounded-[10px]">
                <div>Total Saved</div>
                <div>10</div>
              </div>

              <div className="flex flex-row justify-between border h-[40px] w-full p-[10px] text-medium items-center  mt-[10px] bg-[#DBE6F7] rounded-[10px]">
                <div>Applied</div>
                <div>10/10</div>
              </div>

              <div className="flex flex-row justify-between border h-[40px] w-full p-[10px] text-medium items-center  mt-[10px] bg-[#DBE6F7] rounded-[10px]">
                <div>Interviewing</div>
                <div>10/10</div>
              </div>

              <div className="flex flex-row justify-between border h-[40px] w-full p-[10px] text-medium items-center  mt-[10px] bg-[#DBE6F7] rounded-[10px]">
                <div>Expiring Soon</div>
                <div>10/10</div>
              </div>
            </div>

            <div className="mt-[10px]">
              <h5>Tags</h5>
              <div className="w-full h-[100px] ">
                <ul className="grid grid-cols-3  gap-[3px] w-full mt-[10px]  ">
                  <li className="h-[30px] px-1  bg-[#DBE6F7] rounded-[20px] text-center content-center">
                    Remote
                  </li>
                  <li className="h-[30px]   bg-[#DBE6F7] rounded-[20px] text-center content-center">
                    Full-time
                  </li>
                  <li className="h-[30px] px-1  bg-[#DBE6F7] rounded-[20px] text-center content-center">
                    Intern
                  </li>
                  <li className="h-[30px] px-1 w-[90px] bg-[#DBE6F7] rounded-[20px] text-center content-center">
                    Early-stage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-screen grid grid-rows-4 w-3/4 mt-[20px] m-[10px] ]">
          <div className=" h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr] bg-white rounded-[10px] p-[10px] ">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center "><h5 className="font-medium">Software Engineer, iOS</h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Apple</li>
                  <li>Cupertino, CA</li>
                  <li>Saved 2d ago</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Swift</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Mobile</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Onsite</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-around items-center gap-[10px] p-[10px]">
                <button className=" bg-[#7EB1FB] h-[40px] w-[80px] rounded-[10px] font-medium text-white ">View</button>
                <button className=" bg-blue-500 h-[40px] w-[80px] rounded-[10px] text-white font-medium">Apply</button>
            </div>

          </div>
           <div className=" h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr] bg-white rounded-[10px] p-[10px]">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center "><h5 className=" font-medium">Software Engineer, iOS</h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Apple</li>
                  <li>Cupertino, CA</li>
                  <li>Saved 2d ago</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Swift</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Mobile</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Onsite</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-around items-center gap-[10px] p-[10px]">
                <button className=" bg-[#7EB1FB] h-[40px] w-[80px] rounded-[10px] font-medium text-white ">View</button>
                <button className=" bg-blue-500 h-[40px] w-[80px] rounded-[10px] text-white font-medium">Apply</button>
            </div>

          </div>

           <div className=" h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr] bg-white rounded-[10px] p-[10px] ">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center "><h5 className=" font-medium">Software Engineer, iOS</h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Apple</li>
                  <li>Cupertino, CA</li>
                  <li>Saved 2d ago</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Swift</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Mobile</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Onsite</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-around items-center gap-[10px] p-[10px]">
                <button className=" bg-[#7EB1FB] h-[40px] w-[80px] rounded-[10px] font-medium text-white ">View</button>
                <button className=" bg-blue-500 h-[40px] w-[80px] rounded-[10px] text-white font-medium">Apply</button>
            </div>

          </div>

           <div className=" h-[150px] w-full grid grid-cols-[1fr_4fr_1.5fr] bg-white rounded-[10px] p-[10px] ">
            <div className=" h-full w-full justify-center flex items-center">
              <img className="h-[100px] w-[100px] rounded-[10px] " src="/demo.jpg" alt="Image not given" />
            </div>

            <div className=" grid grid-rows-[1fr_1fr_1fr] p-[10px]">
              <div className=" h-full w-full content-center "><h5 className="font-medium">Software Engineer, iOS</h5></div>
              <div className=" h-full w-full content-center">
                <ul className="flex list-disc list-inside gap-[20px]">
                  <li className="">Apple</li>
                  <li>Cupertino, CA</li>
                  <li>Saved 2d ago</li>
                </ul>
              </div>

              <div className=" h-full w-full content-center ">
                <ul className="flex gap-[20px]">
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Swift</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Mobile</li>
                    <li className="h-[30px] w-[100px] flex items-center justify-center bg-[#DBE6F7] rounded-[20px] ">Onsite</li>
                </ul>
              </div>

            </div>

            <div className=" content-center flex justify-around items-center gap-[10px] p-[10px]">
                <button className=" bg-[#7EB1FB] h-[40px] w-[80px] rounded-[10px] font-medium text-white ">View</button>
                <button className=" bg-blue-500 h-[40px] w-[80px] rounded-[10px] text-white font-medium">Apply</button>
            </div>

          </div>

          
          

          
        </div>
      </div>
    </>
  );
}

export default Glance_and_Tags;
