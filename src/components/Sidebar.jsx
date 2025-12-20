function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <p className="sidebar-title">Navigation</p>

      <div className="sidebar-nav">
        <button
          type="button"
          className={page === "home" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          type="button"
          className={page === "about" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("about")}
        >
          About
        </button>

        <button
          type="button"
          className={page === "apartments" ? "nav-btn active" : "nav-btn"}
          onClick={() => setPage("apartments")}
        >
          Apartments
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
