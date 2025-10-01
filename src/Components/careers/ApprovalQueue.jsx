import React, { useState } from "react";
import MainContentHeader from "../../Components/layout/mainContentHeader";
import NavButtons from "../../Components/layout/NavButtons";

const ApprovalQueue = () => {
  const [active, setActive] = useState("Approval Queue");
  const [submissions] = useState([
    {
      id: 1,
      role: "Data Analyst",
      company: "NeoMetrics",
      type: "Full-time",
      submitted: "2h ago",
      recruiter: "recruit@neometrics.com",
      location: "Bengaluru",
      compensation: "8 LPA",
      description: "Analyze datasets, build dashboards, collaborate with product and engineering.",
    },
    {
      id: 2,
      role: "Frontend Intern",
      company: "PixelWave",
      type: "Internship",
      submitted: "1d ago",
      recruiter: "hr@pixelwave.io",
      location: "Remote",
      compensation: "Stipend: 15k",
      description: "Assist in frontend development, work with React.",
    },
    {
      id: 3,
      role: "Backend Engineer",
      company: "StackMint",
      type: "Full-time",
      submitted: "3d ago",
      recruiter: "talent@stackmint.ai",
      location: "Remote",
      compensation: "14 LPA",
      description: "Develop backend APIs, collaborate with frontend team.",
    },
  ]);

  const statusData = [
    { label: "New Submissions", value: 6 },
    { label: "Pending", value: 8 },
    { label: "Approved Today", value: 5 }
  ];

  const [selected, setSelected] = useState(submissions[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubmissions = submissions.filter(sub =>
    sub.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.recruiter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAction = (action, submission) => {
    alert(`${action} action performed for ${submission.role} at ${submission.company}`);
  };

  return (
    <div>
      <MainContentHeader title="Approval Queue" statusItems={statusData} />
      <NavButtons />

      <div className="bg-white rounded-xl shadow p-4 md:p-6 my-6">
        <h3 className="font-semibold text-lg mb-4">Review Submissions</h3>

        {/* Search + Filters + Action buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 w-full gap-3">
          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search role, company, email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-full md:w-72 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {["Status", "Type", "Age", "Recruiter"].map((f) => (
              <button
                key={f}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-blue-50 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-3 md:mt-0">
            <button
              onClick={() => alert('All submissions rejected')}
              className="px-4 py-2 bg-blue-100 text-gray-600 rounded-lg text-sm cursor-pointer hover:bg-red-100 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => alert('All submissions approved')}
              className="px-4 py-2 bg-blue-100 text-gray-600 rounded-lg text-sm cursor-pointer  hover:bg-green-100 transition-colors"
            >
              Approve All
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-2 md:grid-cols-6 text-gray-500 text-sm font-medium px-2 md:px-4 py-2 border-b">
          <div>Job</div>
          <div>Company</div>
          <div className="hidden md:block">Type</div>
          <div className="hidden md:block">Submitted</div>
          <div className="hidden md:block">Recruiter</div>
          <div className="text-right">Actions</div>
        </div>

        {/* Rows */}
        <div className="divide-y">
          {filteredSubmissions.map((sub) => (
            <div
              key={sub.id}
              className="grid grid-cols-2 md:grid-cols-6 items-center px-2 md:px-4 py-4 text-sm hover:bg-gray-50 transition-colors"
            >
              <div>
                <div className="font-semibold text-gray-900">{sub.role}</div>
                <div className="text-gray-500 text-xs">Location: {sub.location}</div>
                <div className="text-gray-500 text-xs">{sub.compensation}</div>
              </div>
              <div className="font-medium">{sub.company}</div>
              <div className="hidden md:block">
                <span className="px-3 py-1 border border-gray-100 rounded-full text-xs text-gray-600">
                  {sub.type}
                </span>
              </div>
              <div className="hidden md:block text-gray-500">{sub.submitted}</div>
              <div className="hidden md:block text-gray-600">{sub.recruiter}</div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setSelected(sub)}
                  className="px-3 py-1.5 bg-blue-100 text-gray-600 rounded-lg text-sm cursor-pointer  hover:bg-blue-200 transition-colors"
                >
                  Preview
                </button>
                <button
                  onClick={() => handleAction('Reject', sub)}
                  className="px-3 py-1.5 bg-blue-100 text-gray-600 rounded-lg text-sm cursor-pointer  hover:bg-red-200 transition-colors"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleAction('Approve', sub)}
                  className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm cursor-pointer  hover:bg-green-700 transition-colors"
                >
                  Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Panel */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6">
        <h3 className="font-semibold text-lg mb-4">Submission Preview</h3>
        <div className="flex flex-col gap-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded border-gray-300">
            <div>
              <label className="font-bold text-xs text-gray-900">Role</label>
              <div className="text-sm text-gray-500">{selected.role}</div>
            </div>
            <div>
              <label className="font-bold text-xs text-gray-900">Company</label>
              <div className="text-sm text-gray-500">{selected.company}</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded border-gray-300">
            <div>
              <label className="font-bold text-xs text-gray-900">Location</label>
              <div className="text-sm text-gray-500">{selected.location}</div>
            </div>
            <div>
              <label className="font-bold text-xs text-gray-900">Compensation</label>
              <div className="text-sm text-gray-500">{selected.compensation}</div>
            </div>
          </div>
          <div className="border p-4 rounded border-gray-300">
            <label className="font-bold text-xs text-gray-900">Description</label>
            <p className="text-sm text-gray-500 mt-1">{selected.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded border-gray-300">
            <div>
              <label className="font-bold text-xs text-gray-900">Recruiter</label>
              <div className="text-sm text-gray-500">{selected.recruiter}</div>
            </div>
            <div>
              <label className="font-bold text-xs text-gray-900">Submitted</label>
              <div className="text-sm text-gray-500">{selected.submitted}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => handleAction('Reject', selected)}
            className="px-6 py-2 rounded bg-blue-100 text-gray-600 font-semibold cursor-pointer hover:bg-red-200 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => handleAction('Approve', selected)}
            className="px-6 py-2 rounded bg-blue-600 text-white font-semibold cursor-pointer hover:bg-green-700 transition-colors"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalQueue;