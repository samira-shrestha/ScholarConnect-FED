import Navbar from "../../components/NavBar";

export default function UniversityDashboard() {
  const stats = [
    { label: "Programs", value: "12" },
    { label: "Scholarships", value: "6" },
    { label: "Applications", value: "148" },
    { label: "Pending Reviews", value: "23" },
  ];

  const actions = [
    {
      title: "Add Academic Program",
      desc: "Create and publish new academic programs.",
      icon: "ri-book-open-line",
      btn: "Add Program",
    },
    {
      title: "Add Scholarship Scheme",
      desc: "Define eligibility, GPA, and benefits.",
      icon: "ri-award-line",
      btn: "Add Scholarship",
    },
    {
      title: "Manage Applications",
      desc: "Review and respond to student applications.",
      icon: "ri-file-list-3-line",
      btn: "View Applications",
    },
    {
      title: "University Profile",
      desc: "Edit university details and branding.",
      icon: "ri-building-4-line",
      btn: "Edit Profile",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 font-playpen">
            University Dashboard
          </h2>
          <p className="text-gray-500 mt-2">
            Manage programs, scholarships, and applications from one place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 border
                         hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-slate-100
                                flex items-center justify-center
                                text-slate-700 text-xl mb-4">
                  <i className={action.icon}></i>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {action.title}
                </h4>

                <p className="text-sm text-gray-600 mb-6 flex-grow">
                  {action.desc}
                </p>

                {/* CTA */}
                <button
                  className="w-full bg-slate-800 text-white py-2.5 rounded-lg
                             hover:bg-slate-900 transition font-medium"
                >
                  {action.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
