import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/student/StudentLogin";
import StudentRegister from "./pages/student/StudentRegister";
import StudentDashboard from "./pages/student/StudentDashboard";
import UniversityLogin from "./pages/university/UniversityLogin";
import UniversityDashboard from "./pages/university/UniversityDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/university/login" element={<UniversityLogin />} />
        <Route path="/university/dashboard" element={<UniversityDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
