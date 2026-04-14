const jobs = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    desc: "Build scalable and high-performance user interfaces using modern frameworks.",
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    desc: "Design and maintain robust APIs and system architecture.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Remote",
    desc: "Craft intuitive and visually compelling user experiences.",
  },
];

const JobsOpening = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* Hero Section */}
      <div className="max-w-5xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Join <span className="text-gradient bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] bg-clip-text text-transparent">Xolarie</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl">
          We’re building intelligent digital systems that redefine how businesses operate. 
          If you’re driven by innovation and impact, explore our open roles.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 bg-white/5 backdrop-blur-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>

            <div className="flex gap-4 text-sm text-gray-400 mb-4">
              <span>{job.type}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>

            <p className="text-gray-300 text-sm mb-6">{job.desc}</p>

            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] text-sm font-medium hover:opacity-90 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-4">
          Don’t see a role that fits you?
        </p>
        <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Send Open Application
        </button>
      </div>
    </div>
  );
};

export { JobsOpening };