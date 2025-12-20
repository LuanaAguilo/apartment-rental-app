
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Apartments from "./pages/Apartments.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Sidebar />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/apartments" element={<Apartments />} />
              <Route path="/apartments/:id" element={<ItemDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
