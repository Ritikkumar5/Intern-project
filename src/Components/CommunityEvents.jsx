import React, { useState } from "react";
import { Briefcase, Video, Users } from "lucide-react";

const CommunityEvents = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const jobs = [
    {
      id: 1,
      title: "Placement Drive at University of Technology",
      date: "Sep 18, 2025",
      icon: <Briefcase size={18} />,
    },
  ];

  const careerEvents = [
    {
      id: 2,
      title: "Webinar: Mastering the Interview",
      date: "Sep 22, 2025",
      icon: <Video size={18} />,
    },
    {
      id: 3,
      title: "Career Fair at State University",
      date: "Sep 30, 2025",
      icon: <Users size={18} />,
    },
  ];

  const data = activeTab === "jobs" ? jobs : careerEvents;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Community & Events</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("jobs")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "jobs" ? "bg-blue-100 text-blue-600" : "bg-gray-100"
          }`}
        >
          Jobs
        </button>
        <button
          onClick={() => setActiveTab("career")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "career" ? "bg-blue-100 text-blue-600" : "bg-gray-100"
          }`}
        >
          Career Events
        </button>
      </div>

      {/* Events List */}
      <div className="space-y-3">
        {data.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-3 border rounded-md p-3 hover:shadow-sm cursor-pointer"
          >
            <span className="text-gray-700">{event.icon}</span>
            <div>
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-gray-500">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityEvents;