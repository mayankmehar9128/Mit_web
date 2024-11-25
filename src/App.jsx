import "./App.css";
import Header from "./widgets/Headerwid.jsx";
import Footer from "./widgets/Footerwid.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contect from "./pages/Contect.jsx";
import Product from "./pages/Product.jsx"; // Correct the component name to Product
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contect />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
