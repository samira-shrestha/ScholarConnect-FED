import { Heart } from "lucide-react";

export default function UniversityCard({ uni }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200
                    shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)]
                    hover:-translate-y-1 transition-all duration-300">

      {/* IMAGE */}
      <div className="relative h-44">
        <img
          src={uni.image}
          alt={uni.name}
          className="w-full h-full object-cover"
        />

        {/* Heart */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
          <Heart className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="pt-10 px-6 pb-6">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {uni.name}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
          📍 {uni.location}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-[#E6F5FA] rounded-xl p-4 text-center">
            <p className="text-xl font-bold">{uni.programs}</p>
            <p className="text-sm text-gray-500">Academic Programs</p>
          </div>

          <div className="bg-[#E6F5FA] rounded-xl p-4 text-center">
            <p className="text-xl font-bold">{uni.offeredScholarship}%</p>
            <p className="text-sm text-gray-500">Max Scholarship</p>
          </div>
        </div>

        {/* CTA */}
        <button
          className="w-full mt-6 bg-slate-700 text-white
                     py-3 rounded-full font-medium
                     hover:bg-slate-900 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
