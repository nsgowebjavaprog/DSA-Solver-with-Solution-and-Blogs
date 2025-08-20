import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DSA from "./pages/DSA";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
