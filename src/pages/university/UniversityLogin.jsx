import Navbar from "../../components/NavBar";
import { User, Mail, Lock, Award } from "lucide-react";
import register from "../../assets/register.png";
import login from "../../assets/login.png";

export default function UniversityLogin() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="section-wrapper flex justify-center gap-12 items-center pt-[76px]">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="font-playpen text-3xl font-semibold text-center mb-8 text-gray-800">
              University Login
            </h2>
            

            {/* Full Name */}
            <div className="relative mb-4">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="User Name"
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Password"
                type="password"
              />
            </div>

            <button className="w-full bg-[#3BA1CA] text-white py-3 rounded-lg font-semibold hover:bg-[#2082A1] transition-all duration-300 hover:shadow-lg">
              Login
            </button>

          </div>
          <div className="">
            <img src={login} className="w-full max-h-[500px] object-contain"></img>
          </div>
        </div>
      </div>
    </>
  );
}
