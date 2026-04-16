const labProjects = [
  {
    name: "Adaptive AI Agents",
    status: "Pending",
    desc: "Exploring autonomous agents capable of decision-making and task execution across dynamic environments.",
  },
  {
    name: "Decentralized Voting Systems",
    status: "Pending",
    desc: "Researching secure, transparent voting mechanisms leveraging blockchain and distributed systems.",
  },
  {
    name: "3D Web Interfaces",
    status: "Pending",
    desc: "Testing immersive web experiences using real-time 3D rendering and interactive environments.",
  },
  {
    name: "Smart Automation Pipelines",
    status: "Pending",
    desc: "Developing systems that adapt workflows dynamically based on data, behavior, and outcomes.",
  },
];

const Lab = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* Hero */}
      <div className="max-w-5xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Xolarie <span className="bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] bg-clip-text text-transparent">Lab</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl">
          A space for exploration, experimentation, and emerging ideas. 
          Not everything here is finished—but everything here is forward.
        </p>
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-8">
        {labProjects.map((project, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur hover:border-white/30 transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <span className="text-xs text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>

            <p className="text-gray-300 text-sm mb-6">
              {project.desc}
            </p>

            <button className="text-sm text-gray-400 hover:text-white transition">
              Explore →
            </button>
          </div>
        ))}
      </div>

      {/* Philosophy Section */}
      <div className="mt-24 max-w-3xl">
        <h3 className="text-2xl font-semibold mb-4">Why Lab?</h3>
        <p className="text-gray-400">
          Innovation doesn’t come from finished systems—it comes from iteration, testing, and pushing boundaries.
          Xolarie Lab exists to experiment, validate ideas, and shape the next generation of digital solutions.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-4">
          Interested in collaborating or contributing?
        </p>

        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export { Lab };