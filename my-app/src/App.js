import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage.js";
import Contact from './components/Contact';
import About from './components/About';
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
