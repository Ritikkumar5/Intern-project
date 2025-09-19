import React from "react";
import { NavLink } from "react-router-dom";
import { Plus, List, CheckCircle2, FileText } from "lucide-react";

const sidebarLinks = [
  { to: "/recruiter/post-job", label: "Post a Job", icon: <Plus size={22} /> },
  { to: "/recruiter/my-listings", label: "My Job Listings", icon: <List size={22} /> },
  { to: "/recruiter/applications", label: "Applications Received", icon: <CheckCircle2 size={22} /> },
  { to: "/recruiter/ai-shortlist", label: "AI Shortlist", icon: <FileText size={22} /> },
];

const RecruiterLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 ">
    {/* Top Navigation Bar */}
    <header className="w-full bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between shadow">
      <h1 className="text-lg font-bold mb-2 md:mb-0">OneVarsity</h1>
      <nav className="flex flex-wrap gap-3 md:gap-6 text-sm">
        <a href="/" className="hover:underline">Home</a>
        <a href="/lms" className="hover:underline">LMS</a>
        <a href="/community" className="hover:underline">Community</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/career" className="hover:underline">Career</a>
        <a href="/myapp" className="hover:underline">MyApp</a>
        <a href="/appstore" className="hover:underline">AppStore</a>
        <a href="/aibot" className="hover:underline">AI Bot</a>
        <span className="ml-4 rounded-full bg-white text-blue-600 px-3 py-1 font-bold">👤</span>
      </nav>
    </header>
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white shadow p-4 md:my-16 md:rounded-md md:ml-8">
        <h2 className="text-lg font-semibold mb-6">Sections</h2>
        <div className="flex flex-col gap-3 mb-8">
          {sidebarLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-bold"
                    : "text-gray-700"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0">{link.icon}</span>
                <span>{link.label}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  </div>
);

export default RecruiterLayout;