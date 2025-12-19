import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="content">
        <Sidebar />

        <main className="main">
          <h2>Home</h2>
          <p>This is the home page.</p>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
