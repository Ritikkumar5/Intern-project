import React, { useState } from "react";
import MainContentHeader from "../../Components/layout/mainContentHeader";
import { Search, Link2, Pause, Edit3 } from "lucide-react";
import NavButtons from "../../Components/layout/NavButtons";

const jobs = [
  {
    id: 1,
    title: "Data Analyst",
    company: "NeoMetrics",
    location: "Bengaluru • Beginner • Data • Full time",
    applicants: 84,
    posted: "Jun 12",
    deadline: "Jul 10",
    compensation: "8 LPA",
    description: "Analyze datasets, build dashboards, collaborate with product and engineering.",
    status: "Live • Expires in 28 days",
    tags: ["CTR 3.2%", "Age 64"]
  },
  {
    id: 2,
    title: "Frontend Intern",
    company: "PixelWave",
    location: "Remote • Beginner • Type • Internship",
    applicants: 56,
    posted: "Jun 02",
    deadline: "Jun 30",
    compensation: "Stipend: 15k",
    description: "Assist in frontend development, work with React.",
    status: "Live • Expires in 18 days",
    tags: ["Saved 112", "Age 143"]
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "StackMint",
    location: "Pune • Intern • Type • Full time",
    applicants: 133,
    posted: "May 24",
    deadline: "Jul 01",
    compensation: "14 LPA",
    description: "Develop backend APIs, collaborate with frontend team.",
    status: "Live • Expires in 10 days",
    tags: ["Shortlist", "Age 216"]
  },
];

const PublishedJobs = () => {
  const [selected, setSelected] = useState(jobs[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [postedFilter, setPostedFilter] = useState("");
  const [deadlineFilter, setDeadlineFilter] = useState("");

  const statusData = [
    { label: "Total Live", value: 42 },
    { label: "Expiring Soon", value: 7 },
    { label: "Avg. Applicants", value: 68 }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesSearch;
  });

  return (
    <div>
      <MainContentHeader title="Published Jobs" statusItems={statusData} />
      <NavButtons />

      {/* Main Content Section */}
      <div className="bg-white rounded-lg shadow border border-gray-100 mb-6">
        {/* Header with Search and Filters */}
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Manage Published Listings</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm text-blue-500 bg-blue-100 rounded-md hover:bg-blue-200 ">
                More Filters
              </button>
              <button className="px-4 py-2 text-sm text-blue-500  rounded-md hover:bg-blue-100  border border-blue-200">
                Bulk Pause
              </button>
            </div>
          </div>
          {/* Search and Filter Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 max-w-sm relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search title, company, tag"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 text-sm "
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg text-gray-700  text-sm"
            >
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg text-gray-700  text-sm"
            >
              <option value="">Type</option>
              <option value="fulltime">Full-time</option>
              <option value="internship">Internship</option>
            </select>
            <select
              value={postedFilter}
              onChange={(e) => setPostedFilter(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg text-gray-700  text-sm"
            >
              <option value="">Posted</option>
              <option value="today">Today</option>
              <option value="week">This week</option>
            </select>
            <select
              value={deadlineFilter}
              onChange={(e) => setDeadlineFilter(e.target.value)}
              className="px-3 py-2 border border-blue-200 rounded-lg text-gray-700  text-sm"
            >
              <option value="">Deadline</option>
              <option value="week">This week</option>
              <option value="month">This month</option>
            </select>
          </div>
        </div>

        {/* Jobs Table with Grid */}
        <div className="p-2 md:p-6 overflow-x-auto">
          <div className="min-w-[700px] grid grid-cols-6 gap-0 border border-blue-200 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-blue-100 px-2 md:px-4 py-3 border-r border-blue-200">
              <span className="text-xs md:text-sm font-semibold text-blue-900">Job</span>
            </div>
            <div className="bg-blue-100 px-2 md:px-4 py-3 border-r border-blue-200">
              <span className="text-xs md:text-sm font-semibold text-blue-900">Company</span>
            </div>
            <div className="bg-blue-100 px-2 md:px-4 py-3 text-center border-r border-blue-200">
              <span className="text-xs md:text-sm font-semibold text-blue-900">Applicants</span>
            </div>
            <div className="bg-blue-100 px-2 md:px-4 py-3 border-r border-blue-200">
              <span className="text-xs md:text-sm font-semibold text-blue-900">Posted</span>
            </div>
            <div className="bg-blue-100 px-2 md:px-4 py-3 border-r border-blue-200">
              <span className="text-xs md:text-sm font-semibold text-blue-900">Deadline</span>
            </div>
            <div className="bg-blue-100 px-2 md:px-4 py-3">
              <span className="text-xs md:text-sm font-semibold text-blue-900">Actions</span>
            </div>
            {/* Table Rows */}
            {filteredJobs.map((job, index) => (
              <React.Fragment key={job.id}>
                {/* Job Column */}
                <div className={`px-2 md:px-4 py-4 border-r border-blue-200 border-b `}>
                  <div className="font-semibold text-gray-900 mb-1 text-xs md:text-sm">{job.title}</div>
                  <div className="text-xs text-gray-500 mb-2">
                    Location: {job.location.split(' • ')[0]} Type: {job.location.includes('Full time') ? 'Full-time' : 'Internship'}
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {job.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full ">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Company Column */}
                <div className='px-2 md:px-4 py-4 border-r border-blue-200 border-b flex items-center '>
                  <span className="font-semibold text-gray-900 text-xs md:text-sm">{job.company}</span>
                </div>
                {/* Applicants Column */}
                <div className='px-2 md:px-4 py-2 border-r border-blue-200 border-b flex items-center justify-center '>
                  <span className="inline-flex items-center justify-center w-10 h-7 bg-blue-100 text-gray-600 rounded-full text-xs md:text-sm">
                    {job.applicants}
                  </span>
                </div>
                {/* Posted Column */}
                <div className="px-2 md:px-4 py-4 border-r border-blue-200 border-b flex items-center">
                  <span className="text-xs md:text-sm text-gray-900">{job.posted}</span>
                </div>
                {/* Deadline Column */}
                <div className="px-2 md:px-4 py-4 border-r border-blue-200 border-b flex items-center">
                  <span className="text-xs md:text-sm text-gray-900">{job.deadline}</span>
                </div>
                {/* Actions Column */}
                <div className="px-2 md:px-4 py-4 border-b border-blue-200 ">
                  <div className="flex flex-col items-center space-y-1">
                    <button
                      className="block px-4 py-2 text-xs md:text-sm text-blue-600 cursor-pointer bg-blue-100 rounded hover:bg-blue-200 font-medium"
                      onClick={() => setSelected(job)}
                    >
                      Pause
                    </button>
                    <button
                      className="block px-4 py-2 text-xs md:text-sm text-blue-600 cursor-pointer bg-blue-100 rounded hover:bg-blue-200 font-medium"
                      onClick={() => setSelected(job)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Listing Details Section */}
      <div className="bg-white rounded-lg shadow ">
        <div className="p-4 md:p-6 ">
          <h3 className="text-lg font-semibold text-gray-900">Listing Details</h3>
        </div>
        <div className="p-4 md:p-6">
          {/* First Row: Role and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <p className="text-sm text-gray-900">{selected.title}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <p className="text-sm text-gray-900">{selected.company}</p>
            </div>
          </div>
          {/* Second Row: Location and Compensation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <p className="text-sm text-gray-900">{selected.location.split(' • ')[0]}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Compensation</label>
              <p className="text-sm text-gray-900">{selected.compensation}</p>
            </div>
          </div>
          {/* Third Row: Description - Full Width */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <p className="text-sm text-gray-900">
              Analyze datasets, <span className="text-blue-600 underline cursor-pointer">build dashboards</span>, collaborate with product and engineering.
            </p>
          </div>
          {/* Fourth Row: Applicants and Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Applicants</label>
              <p className="text-sm text-gray-900">{selected.applicants} total • 12 shortlisted</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <p className="text-sm text-gray-900">{selected.status}</p>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 border border-blue-200 rounded-md cursor-pointer hover:bg-blue-50 font-medium">
              <Link2 className="h-4 w-4" />
              Copy Link
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 border border-blue-200 rounded-md cursor-pointer hover:bg-blue-50 font-medium">
              <Pause className="h-4 w-4" />
              Pause Listing
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 font-medium">
              <Edit3 className="h-4 w-4" />
              Edit Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedJobs;