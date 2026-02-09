import Navbar from "../../components/NavBar";
import { Link } from "react-router-dom";

import login from "../../assets/login.png";
export default function StudentLogin() {
  return (
    <>
      <Navbar />
      <div className="section-wrapper flex flex-col md:flex-row justify-center gap-4 items-center pt-[76px]">
        <div className="w-[50%]">
          <img src={login} className="w-full h-full object-contain"></img>
        </div>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow shrink-0">
          <h2 className="font-playpen text-3xl font-semibold text-center mb-5 text-gray-800">Student Login</h2>
          <input
            className="w-full p-3 border mb-3 rounded"
            placeholder="Email"
          />
          <input
            className="w-full p-3 border mb-5 rounded"
            placeholder="Password"
            type="password"
          />
          <button className="w-full
                           bg-[#3BA1CA] text-white py-3 rounded-xl
                           text-lg font-medium
                           hover:bg-[#2082A1] hover:-translate-y-1
                           active:scale-95 transition-all duration-300">
            Login
          </button>
          <p className="text-sm mt-3 text-center">
            Don’t have an account?{" "}
            <Link className="text-[#2082A1]" to="/student/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
