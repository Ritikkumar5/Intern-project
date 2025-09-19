import React, { useState } from "react";
import MainContentHeader from "../../Components/layout/mainContentHeader";
import NavButtons from "../../Components/layout/NavButtons";

const students = [
  {
    id: 1,
    name: "Aisha Khan",
    degree: "B.Tech - Data Science",
    stage: "Interview 2",
    company: "NeoMetrics",
    applied: "Jun 10",
    updated: "Jun 14",
    email: "aisha.khan@example.com",
    phone: "+91 98765 43210",
    skills: "SQL, Python, Tableau",
    preferences: "Bengaluru - Analytics",
    resume: "Last updated: Jun 08",
    currentStage: "Interview 2 @ NeoMetrics",
  },
  {
    id: 2,
    name: "Rohit Verma",
    degree: "MCA - Full Stack",
    stage: "Offer",
    company: "StackMint",
    applied: "May 30",
    updated: "Jun 12",
    email: "rohit.verma@example.com",
    phone: "+91 98765 43211",
    skills: "React, Node.js",
    preferences: "Remote - Full Stack",
    resume: "Last updated: May 28",
    currentStage: "Offer @ StackMint",
  },
  {
    id: 3,
    name: "Meera Iyer",
    degree: "B.Sc - UI/UX",
    stage: "Screening",
    company: "PixelWave",
    applied: "Jun 05",
    updated: "Jun 13",
    email: "meera.iyer@example.com",
    phone: "+91 98765 43212",
    skills: "Figma, Adobe XD",
    preferences: "Remote - UI/UX",
    resume: "Last updated: Jun 01",
    currentStage: "Screening @ PixelWave",
  },
];

const StudentTracking = () => {
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [selected, setSelected] = useState(students[0]);

  const statusData = [
    { label: "Active Candidates", value: 318 },
    { label: "Placed", value: 126 },
    { label: "Interviews Scheduled", value: 54 }
  ];

  return (
    <div>
      <MainContentHeader title="Student Tracking" statusItems={statusData} />
      <NavButtons />

      <div className="bg-white rounded-xl shadow p-4 md:p-6 border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold mb-4">Students Lists</h3>
        {/* Search and Filter Row */}
        <div className="flex flex-wrap gap-4 items-center mb-6">
          <input
            type="text"
            placeholder="Search name, email, skill, tag"
            className="px-4 py-2 rounded-lg border border-[#E3EDFF] text-base w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          <select className="px-4 py-2 rounded-lg border border-gray-100 text-base w-full md:w-auto">
            <option>Status</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Screening</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-100 text-base w-full md:w-auto">
            <option>Batch</option>
            <option>2024</option>
            <option>2023</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-100 text-base w-full md:w-auto">
            <option>Company</option>
            <option>NeoMetrics</option>
            <option>StackMint</option>
            <option>PixelWave</option>
          </select>
        </div>
        {/* Students Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 min-w-[700px]">
            <thead>
              <tr className="bg-blue-50">
                <th className="text-left px-2 md:px-6 py-4 text-xs md:text-base font-semibold text-[#2563EB] border-r border-[#E3EDFF]">Candidate</th>
                <th className="text-left px-2 md:px-6 py-4 text-xs md:text-base font-semibold text-[#2563EB] border-r border-[#E3EDFF]">Status</th>
                <th className="text-left px-2 md:px-6 py-4 text-xs md:text-base font-semibold text-[#2563EB] border-r border-[#E3EDFF]">Company</th>
                <th className="text-left px-2 md:px-6 py-4 text-xs md:text-base font-semibold text-[#2563EB] border-r border-[#E3EDFF]">Applied</th>
                <th className="text-left px-2 md:px-6 py-4 text-xs md:text-base font-semibold text-[#2563EB] border-r border-[#E3EDFF]">Last Update</th>
                <th className="text-left px-2 md:px-6 py-4 text-xs md:text-base font-semibold text-[#2563EB]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={student.id} className={idx % 2 === 1 ? "bg-blue-50" : "bg-white"}>
                  <td className="px-2 md:px-6 py-6 align-top border-r border-[#E3EDFF]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded text-center flex items-center justify-center font-bold text-gray-700">
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs md:text-base">{student.name}</div>
                        <div className="text-xs md:text-base text-gray-500">{student.degree}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 md:px-6 py-6 align-middle border-r border-[#E3EDFF]">
                    <span className="px-4 py-1 text-xs md:text-base bg-blue-100 text-gray-700 rounded-full ">
                      {student.stage}
                    </span>
                  </td>
                  <td className="px-2 md:px-6 py-6 align-middle border-r border-[#E3EDFF]">
                    <span className="text-gray-900 text-xs md:text-base">{student.company}</span>
                  </td>
                  <td className="px-2 md:px-6 py-6 align-middle border-r border-[#E3EDFF] text-xs md:text-base text-gray-900">{student.applied}</td>
                  <td className="px-2 md:px-6 py-6 align-middle border-r border-[#E3EDFF] text-xs md:text-base text-gray-900">{student.updated}</td>
                  <td className="px-2 md:px-6 py-6 align-top">
                    <div className="flex gap-2">
                      <button
                        className="px-4 py-2 text-xs md:text-base text-gray-700 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 font-medium border-none"
                        onClick={() => setSelected(student)}
                      >
                        View
                      </button>
                      <button className="px-4 py-2 text-xs md:text-base text-gray-700 bg-blue-100 rounded-lg cursor-pointer hover:bg-blue-200 font-medium border-none">
                        Note
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Summary */}
      <div className="bg-white rounded-xl shadow p-4 md:p-8 border border-gray-100">
        <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-900">Student Summary</h3>
        {/* Grid Layout for Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
            <p className="text-xs md:text-base text-gray-400 ">{selected.email}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-500 mb-2">Phone</label>
            <p className="text-xs md:text-base text-gray-400">{selected.phone}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-500 mb-2">Skills</label>
            <p className="text-xs md:text-base text-gray-400">{selected.skills}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-500 mb-2">Preferences</label>
            <p className="text-xs md:text-base text-gray-400">{selected.preferences}</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <label className="block text-sm font-medium text-gray-500 mb-2">Resume</label>
          <p className="text-xs md:text-base text-gray-400">{selected.resume}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
          <label className="block text-sm font-medium text-gray-500 mb-2">Current Stage</label>
          <p className="text-xs md:text-base text-gray-400">{selected.currentStage}</p>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium cursor-pointer hover:bg-gray-200 transition-colors">
            Email
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium cursor-pointer hover:bg-gray-200 transition-colors">
            Schedule
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium cursor-pointer hover:bg-blue-700 transition-colors">
            Mark Placed
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentTracking;