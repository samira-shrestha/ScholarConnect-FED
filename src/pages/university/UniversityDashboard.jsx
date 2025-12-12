import Navbar from "../../components/NavBar";

export default function UniversityDashboard() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Scholarship Scheme</h2>
        <input className="w-full p-3 border mb-3 rounded" placeholder="Scholarship Title" />
        <input className="w-full p-3 border mb-3 rounded" placeholder="Minimum GPA" />
        <textarea className="w-full p-3 border mb-5 rounded" placeholder="Description" />
        <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
          Submit
        </button>
      </div>
    </>
  );
}
