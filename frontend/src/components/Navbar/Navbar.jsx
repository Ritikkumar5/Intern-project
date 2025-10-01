import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="h-[70px] w-screen flex flex-row bg-white justify-between border items-center ">
        <div className="h-full relative left-[20px] ">
          <h3 className="h-full w-full text-center content-center">
            CareerConnect
          </h3>
        </div>

        <div className="h-full text-center flex  items-center">
          <div className="h-full">
            <ul className="h-full flex flex-row items-center justify-center list-none gap-[40px] text-[20px] relative right-[40px]">
               <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " text-[#0669F7] font-medium"
                      : "text-black"
                  }`
                }
              >
                <li>Explore</li>
              </NavLink>
              
              <NavLink
                to="/browse"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " text-[#0669F7] font-medium"
                      : "text-black"
                  }`
                }
              >
                <li>Jobs</li>
              </NavLink>
               <NavLink
                to=""
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " text-[#0669F7] font-medium"
                      : "text-black"
                  }`
                }
              >
                <li>Companies</li>
              </NavLink>
             
               <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " text-[#0669F7] font-medium"
                      : "text-black"
                  }`
                }
              >
                <li>Resources</li>
              </NavLink>
            </ul>
          </div>

          <div className="h-[45px] w-[45px] rounded-[15px] relative bg-[#EAF4FF] right-[20px] text-[30px] flex p-[10px] justify-center items-center border">
            <i className="bi bi-bell text-[25px] content-center"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
