
const AiAutomation = () => {
  return (
    <div className="min-h-screen p-8 bg-primary2 text-tertiary2 font-inter">
      <div className="text-center py-12" style={{ backgroundImage: "var(--bg-home-bg)", backgroundSize: "cover" }}>
        <h1 className="text-4xl font-orbitron text-primary1 font-bold">AI-Powered Automation</h1>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <p className="text-lg text-tertiary1 text-center">
          Enhancing efficiency with intelligent automation.
        </p>
        <ul className="mt-6 space-y-4 text-secondary1">
          <li>✅ AI-Driven Workflows</li>
          <li>✅ Predictive Analytics</li>
          <li>✅ Smart Decision-Making</li>
        </ul>
      </div>
    </div>
  );
};

export {AiAutomation}