import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MonthlyView from "./pages/MonthlyView";
import Settings from "./pages/Settings";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="main-header">
        <nav className="nav-links">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/monthly">Monthly View</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
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