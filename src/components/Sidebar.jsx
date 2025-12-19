function Sidebar({ page, setPage }) {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <button onClick={() => setPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setPage("about")}>About</button>
        </li>
        <li>
          <button onClick={() => setPage("apartments")}>Apartments</button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
