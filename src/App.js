import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Contacts from "./pages/Contacts";
import Museum from "./pages/Museum";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/arts" element={<Art />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/museum" element={<Museum />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
