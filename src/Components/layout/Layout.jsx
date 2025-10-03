import React from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";

const events = [
  { id: 1, title: "Placement Drive at University of Technology", date: "Sep 18, 2025", icon: "💼" },
  { id: 2, title: "Webinar: Mastering the Interview", date: "Sep 22, 2025", icon: "🎥" },
  { id: 3, title: "Career Fair at State University", date: "Sep 30, 2025", icon: "👥" },
];

const sidebarLinks = [
  { to: "/career/post-job", label: "Post New Job" },
  { to: "/career/approval", label: "Approval Queue" },
  { to: "/career/published-jobs", label: "Published Jobs" },
  { to: "/career/student-tracking", label: "Student Tracking" },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const isLanding = location.pathname === "/career/landing";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="w-full bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between shadow">
        <h1 className="text-lg font-bold mb-2 md:mb-0">OneVarsity</h1>
        <nav className="flex flex-wrap gap-3 md:gap-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/lms" className="hover:underline">LMS</a>
          <a href="/community" className="hover:underline">Community</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/career/landing" className="hover:underline">Career</a>
          <a href="/myapp" className="hover:underline">MyApp</a>
          <a href="/appstore" className="hover:underline">AppStore</a>
          <a href="/aibot" className="hover:underline">AI Bot</a>
          <span className="ml-4 rounded-full bg-white text-blue-600 px-3 py-1 font-bold">👤</span>
        </nav>
      </header>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-white shadow-md p-4 md:my-8 md:rounded-md md:ml-8">
          <h2 className="text-lg font-semibold mb-6">Admin Controls</h2>
          <div className="flex flex-col gap-3 mb-8">
            {sidebarLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-600 font-bold"
                      : "bg-blue-100 text-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          {/* Only show Community & Events on landing page */}
          {isLanding && (
            <>
              <h2 className="text-lg font-semibold mb-6">Community & Events</h2>
              <div className="flex gap-2 mb-4">
                <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-100 text-blue-600">Jobs</button>
                <button className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100">Career Events</button>
              </div>
              <div className="space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 border rounded-md p-3 hover:shadow-sm cursor-pointer">
                    <span className="text-xl">{event.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </aside>
        {/* Main Content  */}
        <main className="flex-1 p-4 md:p-8">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default Layout;