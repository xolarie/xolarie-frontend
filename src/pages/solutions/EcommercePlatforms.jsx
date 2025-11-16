const EcommercePlatforms = () => {
  return (
    <div className="min-h-screen p-8 bg-primary2 text-tertiary2 font-inter">
      <div className="text-center py-12" style={{ backgroundImage: "var(--bg-home-bg)", backgroundSize: "cover" }}>
        <h1 className="text-4xl font-orbitron text-primary1 font-bold">E-commerce Platforms</h1>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        <p className="text-lg text-tertiary1 text-center">
          Powerful and scalable online store solutions.
        </p>
        <ul className="mt-6 space-y-4 text-secondary1">
          <li>✅ Secure Payment Integration</li>
          <li>✅ User-Friendly Interfaces</li>
          <li>✅ Inventory & Order Management</li>
        </ul>
      </div>
    </div>
  );
};

export {EcommercePlatforms}