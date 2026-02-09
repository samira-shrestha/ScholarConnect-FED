import { Link } from "react-router-dom";
import logo from "../assets/logo-png.png";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="section-wrapper text-black py-2 flex justify-between items-center">
        <img
          src={logo}
          className="w-auto h-[60px] object-contain"
        />

        <div className="flex gap-6">
          {["Home", "Student", "University"].map((item, index) => (
            <Link
              key={index}
              to={
                item === "Home"
                  ? "/"
                  : item === "Student"
                  ? "/student/login"
                  : "/university/login"
              }
              className="relative group"
            >
              <span className="font-semibold transition-opacity duration-300 group-hover:opacity-90">
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

