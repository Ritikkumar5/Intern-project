import React from "react";
import { Link,useLocation } from "react-router-dom";
function Recruiter_Sidebar(){
    const location=useLocation()
    return(
        <>
        <div className="bg-white w-full h-screen mt-[20px] rounded-[10px] p-[20px]">
            <div className=" h-[40px] w-full content-center mt-[10px]">
                <h5 className="text-2xl"><strong>Sections</strong></h5>
            </div>

            <div className="mt-[10px] ">
                <ul className="list-none w-full  ">
                    <li className={`border-[1px] p-[10px] h-[50px] text-xl  rounded-[10px] flex justify-start items-center gap-[20px] mt-[20px] ${location.pathname==='/placement/' ? 'text-[#0669F7] bg-[#DBE9FF]' : 'text-black'}`}><i className="bi bi-plus"></i><Link>Post a Job</Link></li>
                    <li className={`border-[1px] p-[10px] h-[50px] text-xl  rounded-[10px] flex justify-start items-center gap-[20px] mt-[20px] ${location.pathname==='/placement/job-listings' ? 'text-[#0669F7] bg-[#DBE9FF]' : 'text-black'}`}><i class="bi bi-card-list"></i><Link to={'/placement/job-listings'}>My Job Listings</Link></li>
                    <li className={`border-[1px] p-[10px] h-[50px] text-xl  rounded-[10px] flex justify-start items-center gap-[20px] mt-[20px] ${location.pathname==='/placement/applications' ? 'text-[#0669F7] bg-[#DBE9FF]' : 'text-black'}`}><i class="bi bi-file-earmark-text-fill "></i><Link to={'/placement/applications'}>Application Received</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Recruiter_Sidebar