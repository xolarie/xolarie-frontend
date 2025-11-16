
const Faqs = () => {
  return (
    <div className="min-h-screen p-8 bg-primary2 text-tertiary2 font-inter">
      <div className="text-center py-12" style={{ backgroundImage: "var(--bg-home-bg)", backgroundSize: "cover" }}>
        <h1 className="text-4xl font-orbitron text-primary1 font-bold">FAQs</h1>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <p className="text-lg text-tertiary1 text-center">
          Find answers to common questions about our company, career opportunities, and hiring process.
        </p>
      </div>
    </div>
  );
};

export { Faqs };