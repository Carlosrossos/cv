import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Sidebar />
              <Home />
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div className="container">
              <Sidebar />
              <Skills />
            </div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <div className="container">
              <Sidebar />
              <Portfolio />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="container">
              <Sidebar />
              <Contact />
            </div>
          }
        />
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
