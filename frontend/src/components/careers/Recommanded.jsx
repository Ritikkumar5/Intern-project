import React from "react";
function Recommanded() {
  return (
    <>
      <main className="p-[20px] h-[400px] w-full mt-[10px] rounded-[10px]">
        <div className="h-[40px] w-full">
          <h3>Recommended For You</h3>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-[20px] mt-[15px] rounded-[10px]">

           <div className="grid flex-row grid-rows-[2fr_1fr] rounded-[10px]">
           <div className="bg-white h-auto rounded-[10px]">
             <div className="c5-imgdiv">
                <img className="h-[200px] w-full rounded-[10px]" src="/demo.jpg" alt="" />
            </div>
            <div className="p-[10px] bg-white  h-[100px] rounded-[10px]">
                <h5 className="mt-[10px] text-2xl">Software Engineer</h5>
                <p className="mt-[10px]">Tech Innovation..</p>
            </div>
           </div>
          </div>

           <div className="grid flex-row grid-rows-[2fr_1fr] rounded-[10px]">
           <div className="bg-white h-auto rounded-[10px]">
             <div className="c5-imgdiv">
                <img className="h-[200px] w-full rounded-[10px]" src="/demo.jpg" alt="" />
            </div>
            <div className="p-[10px] bg-white  h-[100px] rounded-[10px]">
                <h5 className="mt-[10px] text-2xl">Software Engineer</h5>
                <p className="mt-[10px]">Tech Innovation..</p>
            </div>
           </div>
          </div>
         

           <div className="grid flex-row grid-rows-[2fr_1fr] rounded-[10px]">
           <div className="bg-white h-auto rounded-[10px]">
             <div className="c5-imgdiv">
                <img className="h-[200px] w-full rounded-[10px]" src="/demo.jpg" alt="" />
            </div>
            <div className="p-[10px] bg-white  h-[100px] rounded-[10px]">
                <h5 className="mt-[10px] text-2xl">Software Engineer</h5>
                <p className="mt-[10px]">Tech Innovation..</p>
            </div>
           </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Recommanded;
