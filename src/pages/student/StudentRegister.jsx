import Navbar from "../../components/NavBar";

export default function StudentRegister() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
        <input className="w-full p-3 border mb-3 rounded" placeholder="Full Name" />
        <input className="w-full p-3 border mb-3 rounded" placeholder="Email" />
        <input className="w-full p-3 border mb-3 rounded" placeholder="GPA (e.g., 3.5)" />
        <input className="w-full p-3 border mb-5 rounded" placeholder="Password" type="password" />
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Register
        </button>
      </div>
    </>
  );
}
