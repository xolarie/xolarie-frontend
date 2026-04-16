const products = [
  {
    name: "Xolarie Vote",
    tag: "Voting & Engagement Platform",
    desc: "A secure digital voting and fan engagement system where participation can be tied to real value and contributions.",
  },
  {
    name: "Xolarie Automate",
    tag: "AI Workflow Engine",
    desc: "Automation systems designed to streamline operations, reduce manual work, and improve efficiency across businesses.",
  },
  {
    name: "Xolarie Core",
    tag: "Enterprise System Infrastructure",
    desc: "A modular backend infrastructure powering scalable applications, integrations, and business systems.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* Hero */}
      <div className="max-w-5xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Our <span className="bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] bg-clip-text text-transparent">Products</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Beyond services, Xolarie builds scalable digital products designed to solve real problems,
          power businesses, and create new opportunities.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur hover:border-white/30 transition-all duration-300"
          >
            <p className="text-sm text-gray-400 mb-3">{product.tag}</p>

            <h2 className="text-2xl font-semibold mb-4">
              {product.name}
            </h2>

            <p className="text-gray-300 text-sm mb-6">
              {product.desc}
            </p>

            <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Building something innovative?
        </h3>
        <p className="text-gray-400 mb-6">
          Let’s collaborate and turn ideas into scalable digital products.
        </p>

        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] font-medium hover:opacity-90 transition">
          Start a Project
        </button>
      </div>
    </div>
  );
};

export { Products };