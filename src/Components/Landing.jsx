import React from "react";

const recommendedJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechNova Inc.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "TechNova Inc.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "TechNova Inc.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
];

const Landing = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Explore Career Opportunities</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for keyword, Role, Company..."
          className="border rounded-md px-4 py-2 flex-1"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Search</button>
      </div>
      <div className="flex gap-4 mb-8">
        <select className="border rounded-md px-4 py-2">
          <option>Job Type</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Skills</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Categories</option>
        </select>
        <select className="border rounded-md px-4 py-2">
          <option>Location</option>
        </select>
      </div>
      <h2 className="text-lg font-semibold mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow p-4">
            <img src={job.img} alt={job.title} className="w-full h-32 object-cover rounded-md mb-3" />
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;