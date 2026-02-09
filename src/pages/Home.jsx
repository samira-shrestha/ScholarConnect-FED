import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../styles/index.css";
import student1 from "../assets/landing-vector.png";
import student2 from "../assets/landing-image.jpeg";
import student3 from "../assets/landing-image.jpeg";
import student4 from "../assets/landing-image.jpeg";
import student5 from "../assets/landing-image.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="section-wrapper py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
          <div className="animate-fade-up">
            <h1 className="font-playpen text-2xl font-semibold mb-2 text-gray-800 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-800 leading-tight">
              Where Scholars Meet{" "}
              <span className="text-[#3BA1CA] block mt-2">Opportunity</span>
            </h1>

            <p className="font-playpen mt-6 text-lg text-gray-600 max-w-xl">
              A students discover scholarships, programs, and opportunities in one easy place. We simplify the search process so you can focus on your goals, not endless forms and confusion.
            </p>

            <div className="mt-8">
              <Link
                to="/student/register"
                className="inline-flex items-center justify-center
                           bg-[#3BA1CA] text-white px-8 py-4 rounded-xl
                           text-lg font-medium shadow-lg
                           hover:bg-[#2082A1] hover:-translate-y-1
                           active:scale-95 transition-all duration-300"
              >
                Register as a Student
              </Link>
            </div>
          </div>

        
          <div className="relative hidden lg:block">
            <div className=" ">
              {[student1 ].map(
                (img, index) => (
                  <div
                    key={index}
                    className=" 
                    "
                  >
                    <img
                      src={img}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
