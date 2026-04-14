const internshipRoles = [
  {
    title: "Frontend Engineering Intern",
    duration: "3 - 6 Months",
    type: "Remote",
    desc: "Work on real-world interfaces using React, Tailwind, and modern frontend tools.",
  },
  {
    title: "Backend Engineering Intern",
    duration: "3 - 6 Months",
    type: "Remote",
    desc: "Assist in building APIs, database systems, and scalable backend architecture.",
  },
  {
    title: "UI/UX Design Intern",
    duration: "2 - 4 Months",
    type: "Remote",
    desc: "Design intuitive user experiences and contribute to product design systems.",
  },
  {
    title: "AI & Automation Intern",
    duration: "3 - 6 Months",
    type: "Remote",
    desc: "Explore intelligent systems, automation workflows, and applied AI solutions.",
  },
];

const Internship = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Xolarie <span className="bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] bg-clip-text text-transparent">Internship Program</span>
        </h1>
        <p className="mt-6 text-gray-400">
          Gain hands-on experience working on real products, real systems, and real challenges. 
          At Xolarie, interns don’t observe—they build, contribute, and grow.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          "Work on real-world projects",
          "Mentorship from experienced developers",
          "Exposure to modern tools & systems",
        ].map((item, index) => (
          <div
            key={index}
            className="border border-white/10 p-6 rounded-2xl bg-white/5 backdrop-blur"
          >
            <p className="text-sm text-gray-300">{item}</p>
          </div>
        ))}
      </div>

      {/* Internship Roles */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Available Roles</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {internshipRoles.map((role, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition bg-white/5"
            >
              <h3 className="text-lg font-semibold mb-2">{role.title}</h3>

              <div className="flex gap-4 text-sm text-gray-400 mb-4">
                <span>{role.duration}</span>
                <span>•</span>
                <span>{role.type}</span>
              </div>

              <p className="text-gray-300 text-sm mb-6">{role.desc}</p>

              <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] text-sm font-medium hover:opacity-90">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Passionate but don’t see your role?
        </p>
        <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Send Open Application
        </button>
      </div>
    </div>
  );
};

export { Internship };