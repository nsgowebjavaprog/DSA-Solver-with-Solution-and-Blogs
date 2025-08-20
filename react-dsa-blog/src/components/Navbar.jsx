import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">DSA & Blog</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dsa">DSA</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
}
