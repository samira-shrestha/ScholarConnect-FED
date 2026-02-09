import Navbar from "../../components/NavBar";
import UniversityCard from "../university/UniversityCard";

import uni1 from "../../assets/kmc.jpg";
import uni2 from "../../assets/islington.jpg";
import uni3 from "../../assets/st-xaviers.jpg";

export default function StudentDashboard() {
  const universities = [
    {
      name: "Kathmandu Model College",
      location: "Kathmandu, Nepal",
      programs: 10,
      offeredScholarship: 80, // percentage offered by university
      image: uni1,
    },
    {
      name: "Islington College",
      location: "Kathmandu, Nepal",
      programs: 10,
      offeredScholarship: 75,
      image: uni2,
    },
    {
      name: "St Xaviers College",
      location: "Kathmandu, Nepal",
      programs: 25,
      offeredScholarship: 95,
      image: uni3,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 font-['Playpen Sans']">
          Scholarships Offered by Universities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, i) => (
            <UniversityCard key={i} uni={uni} />
          ))}
        </div>
      </div>
    </>
  );
}
