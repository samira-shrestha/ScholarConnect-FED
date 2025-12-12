export default function ScholarshipCard({ scholarship }) {
  return (
    <div className="border p-5 rounded-lg shadow mb-4 bg-white">
      <h3 className="text-xl font-semibold">{scholarship.title}</h3>
      <p className="text-gray-600 mt-1">{scholarship.university}</p>
      <p className="mt-3 text-sm">
        <span className="font-semibold">Required GPA:</span> {scholarship.minGpa}
      </p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Apply Now
      </button>
    </div>
  );
}
