import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import Dashboard from "./pages/Dashboard";
import MonthlyView from "./pages/MonthlyView";
import Settings from "./pages/Settings";
import Footer from "./pages/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Header */}
      <header className="main-header">
        <div className="navbar">
          {/* Logo */}
          <h2 className="logo"></h2>

          {/* Hamburger Button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          {/* Nav Links */}
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <NavLink
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/monthly"
              onClick={() => setMenuOpen(false)}
            >
              Monthly View
            </NavLink>

            <NavLink
              to="/settings"
              onClick={() => setMenuOpen(false)}
            >
              Settings
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Pages */}
      <main className="main">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/monthly" element={<MonthlyView />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}