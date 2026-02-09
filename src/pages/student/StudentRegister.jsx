import Navbar from "../../components/NavBar";
import { User, Mail, Lock, Award, UploadCloud, FileText } from "lucide-react";
import register from "../../assets/register.png";

export default function StudentRegister() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4">
        <div className="section-wrapper flex justify-center gap-12 items-center pt-[76px]">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="font-playpen text-3xl font-semibold text-center mb-2 text-gray-800">
              Student Registration
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Create your student account
            </p>

            {/* Full Name */}
            <div className="relative mb-4">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3BA1CA]"
                size={18}
              />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Full Name"
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3BA1CA]"
                size={18}
              />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Email Address"
                type="email"
              />
            </div>

            {/* GPA */}
            <div className="relative mb-4">
              <Award
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3BA1CA]"
                size={18}
              />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="GPA (e.g. 3.5)"
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3BA1CA]"
                size={18}
              />
              <input
                className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Password"
                type="password"
              />
            </div>

            {/* Documents Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Documents (PDF only)
              </label>

              {/* Certificate */}
              <div className="relative mb-4">
                <FileText
                  size={18}
                  className="absolute left-3 top-[40%] -translate-y-1/2 text-[#3BA1CA]"
                />
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full pl-10 pr-3 py-2.5 border rounded-lg  text-sm
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0
                 file:bg-gray-100 file:text-gray-700
                 hover:file:bg-blue-100
                 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Academic Certificate (PDF, max 5MB)
                </p>
              </div>

              {/* Recommendation Letter */}
              <div className="relative">
                <FileText
                  size={18}
                  className="absolute left-3 top-[40%] -translate-y-1/2 text-[#3BA1CA]"
                />
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full pl-10 pr-3 py-2.5 border rounded-lg text-sm
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0
                 file:bg-gray-100 file:text-gray-700
                 hover:file:bg-blue-100
                 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Recommendation Letter (PDF, max 5MB)
                </p>
              </div>
            </div>

            <button className="w-full bg-[#3BA1CA] text-white py-3 rounded-lg font-semibold hover:bg-[#2082A1] transition-all duration-300 hover:shadow-lg">
              Register
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </div>
          <div className="">
            <img
              src={register}
              className="w-full max-h-[500px] object-contain"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
