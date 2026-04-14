import { useState } from "react";

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What does Xolarie do?",
        a: "Xolarie builds intelligent digital systems, scalable software solutions, and modern user experiences designed for real business impact.",
      },
      {
        q: "Who do you work with?",
        a: "We work with startups, growing businesses, and enterprises looking to build or scale digital products.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        q: "What services do you offer?",
        a: "We offer web and app development, UI/UX design, AI-powered automation, enterprise system integration, and custom software solutions.",
      },
      {
        q: "Do you build custom solutions?",
        a: "Yes. Every solution we build is tailored to the specific needs, scale, and goals of the client.",
      },
    ],
  },
  {
    category: "Careers",
    items: [
      {
        q: "How can I apply to Xolarie?",
        a: "You can apply through our job openings, internship programs, or recruitment events listed on the careers page.",
      },
      {
        q: "Do you offer remote roles?",
        a: "Yes. Most of our roles are remote, allowing us to work with talent globally.",
      },
    ],
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  let counter = 0;

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Frequently Asked <span className="bg-gradient-to-r from-[#4352FA] via-[#8B21FA] to-[#FF048F] bg-clip-text text-transparent">Questions</span>
        </h1>
        <p className="mt-6 text-gray-400">
          Clear answers to common questions about Xolarie, our services, and how we work.
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-4xl">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-gray-300">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.items.map((item) => {
                const index = counter++;

                return (
                  <div
                    key={index}
                    className="border border-white/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left p-5 flex justify-between items-center hover:bg-white/5 transition"
                    >
                      <span className="text-sm md:text-base">
                        {item.q}
                      </span>
                      <span className="text-xl">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    <div
                      className={`px-5 transition-all duration-300 ${
                        activeIndex === index
                          ? "max-h-40 pb-5 opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-sm text-gray-400">{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-4">
          Still have questions?
        </p>
        <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export { Faqs };