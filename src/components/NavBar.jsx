import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow">
      <h1 className="font-bold text-xl">ScholarConnect</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/student/login" className="hover:text-gray-200">Student</Link>
        <Link to="/university/login" className="hover:text-gray-200">University</Link>
      </div>
    </nav>
  );
}
