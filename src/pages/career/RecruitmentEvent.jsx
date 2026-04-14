const eventDetails = {
  title: "Xolarie Recruitment Event 2026",
  date: "May 12, 2026",
  type: "Virtual",
  desc: "A focused recruitment experience designed to identify and onboard high-potential talent across engineering, design, and innovation.",
};

const tracks = [
  {
    title: "Engineering Track",
    desc: "Frontend, Backend, and Fullstack roles with real-world technical challenges.",
  },
  {
    title: "Design Track",
    desc: "UI/UX and product design challenges focused on usability and experience.",
  },
  {
    title: "AI & Innovation Track",
    desc: "Problem-solving sessions around automation, AI systems, and emerging tech.",
  },
];

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Recruitment <span className="bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] bg-clip-text text-transparent">Event</span>
        </h1>

        <p className="mt-6 text-gray-400">
          We’re opening the doors to a new generation of builders. This is not a traditional hiring process—
          it’s a performance-driven selection designed to identify real capability.
        </p>
      </div>

      {/* Event Card */}
      <div className="border border-white/10 rounded-2xl p-8 mb-20 bg-white/5 backdrop-blur max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">{eventDetails.title}</h2>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
          <span>{eventDetails.date}</span>
          <span>•</span>
          <span>{eventDetails.type}</span>
        </div>

        <p className="text-gray-300">{eventDetails.desc}</p>
      </div>

      {/* Tracks */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Tracks</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:border-white/30 transition"
            >
              <h3 className="text-lg font-semibold mb-3">{track.title}</h3>
              <p className="text-sm text-gray-300">{track.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Selection Process</h2>

        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-300">
          {[
            "Application Submission",
            "Screening & Shortlisting",
            "Live Challenge / Assessment",
            "Final Selection",
          ].map((step, index) => (
            <div
              key={index}
              className="border border-white/10 p-6 rounded-2xl bg-white/5 text-center"
            >
              <p className="font-medium">Step {index + 1}</p>
              <p className="mt-2 text-gray-400">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-400 mb-4">
          Limited slots available. Only shortlisted candidates will proceed.
        </p>

        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] font-medium hover:opacity-90 transition">
          Apply for Event
        </button>
      </div>
    </div>
  );
};

export { Recruitment };