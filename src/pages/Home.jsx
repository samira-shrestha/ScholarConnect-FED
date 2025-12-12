import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to ScholarConnect</h1>
        <p className="text-lg mb-6 text-gray-600">
          Connect students with universities and scholarships easily.
        </p>
        <div className="flex gap-4">
          <Link to="/student/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Student: Get Started
          </Link>
          <Link to="/university/login" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            University Login
          </Link>
        </div>
      </div>
    </>
  );
}
