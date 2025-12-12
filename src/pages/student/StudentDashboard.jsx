import Navbar from "../../components/NavBar";
import ScholarshipCard from "../../components/ScholarshipCard";

export default function StudentDashboard() {
  const scholarships = [
    { title: "Merit-Based Scholarship", university: "ABC University", minGpa: 3.2 },
    { title: "IT Excellence Award", university: "Tech University", minGpa: 3.5 },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6">Eligible Scholarships</h2>
        {scholarships.map((s, i) => (
          <ScholarshipCard scholarship={s} key={i} />
        ))}
      </div>
    </>
  );
}
