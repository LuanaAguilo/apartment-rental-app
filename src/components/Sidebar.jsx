import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">Navigation</p>
      <div className="sidebar-nav">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          About
        </NavLink>
        <NavLink
          to="/apartments"
          className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}
        >
          Apartments
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
