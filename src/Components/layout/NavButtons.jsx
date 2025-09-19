import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { name: "Post New Jobs", path: "/career/post-job" },
  { name: "Approval Queue", path: "/career/approval" },
  { name: "Published Jobs", path: "/career/published-jobs" },
  { name: "Student Tracking", path: "/career/student-tracking" }
];

const NavButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getClass = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded font-semibold transition-colors ${
      isActive 
        ? "bg-blue-100 text-blue-600 rounded-full cursor-pointer" 
        : "text-gray-700 cursor-pointer "
    }`;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-lg shadow p-2 md:p-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => navigate(tab.path)}
          className={getClass(tab.path)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default NavButtons;