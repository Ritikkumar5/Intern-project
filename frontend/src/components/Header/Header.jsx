import React from "react";

function Header() {
  return (
    <>
      <header className="w-screen h-[70px] text-white flex justify-between items-center bg-[#0669F7]" style={{ display: "flex" }}>
        <div className="relative left-[20px]">
          <h1 className="header">OneVarsity</h1>
        </div>

        <div className="h-full w-auto flex items-center content-center relative right-[20px]">
          <div className="h-full items-center">
            <ul className="h-full text-center flex flex-row items-center gap-[20px] list-[none] text-[20px] relative right-[20px]">
              <li>Home</li>
              <li>LMS</li>
              <li>Community</li>
              <li>Dashboard</li>
              <li>Career</li>
              <li>MyApp</li>
              <li>AppStore</li>
              <li>AI Bot</li>
            </ul>
          </div>
          <div className="header-div3">
            <img className="h-[45px] w-[45px] rounded-[50%] bg-white" src="/demo.jpg" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
