import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow">
      <h1 className="text-lg font-bold">OneVarsity</h1>
      <nav className="flex gap-6 text-sm">
        <a href="/">Home</a>
        <a href="/community">Community</a>
        <a href="/events">Events</a>
        <a href="/careers">Careers</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  );
};

export default Header;