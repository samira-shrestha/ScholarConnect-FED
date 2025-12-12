import Navbar from "../../components/NavBar";

export default function UniversityLogin() {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">University Login</h2>
        <input className="w-full p-3 border mb-3 rounded" placeholder="Email" />
        <input className="w-full p-3 border mb-5 rounded" placeholder="Password" type="password" />
        <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
          Login
        </button>
      </div>
    </>
  );
}
