import { FaArrowRight, FaPlus } from "react-icons/fa6";
import { faqs } from "../../constants";
import { SectionWrapper } from "../../hoc";
import support from "/images/support.png";
import { useState } from "react";

const Faqs = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const toggleOpenAnswer = (index) => {
    setOpenAnswer((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 px-8 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4">
        <img src={support} />
        <p>Support & Guidance</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl my-8 text-center ">
          Frequently asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
            Questions
          </span>
        </h1>
        <p className="text-sm text-center text-[#4F4F4F]">
          Everything you need to know before starting your project
        </p>
      </div>
      <ul className="flex flex-col gap-4 my-8 ">
        {faqs.map((item, i) => (
          <li
            key={i}
            className={`flex flex-col  border py-3 px-6 rounded-2xl w-[350px] relative  transition-all duration-300 ease-out md:w-[70vw]   ${
              openAnswer === i ? "" : "h-20"
            }`}
          >
            <button
              className="flex  items-center w-full "
              onClick={() => toggleOpenAnswer(i)}
            >
              <p className="w-[80vw] text-left text-[#242424]">
                {item.question}
              </p>
              <span className="rounded-full bg-[#EEEEEE] p-2">
                <FaPlus />
              </span>
            </button>
            <p
              className={`my-4 text-[12px] w-[70vw]  transition-all duration-300 ease-out   ${
                openAnswer === i
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none "
              }`}
            >
              {item.answer}
            </p>
          </li>
        ))}
      </ul>
      <div className="w-full flex flex-col items-center my-8">
        <div className="flex items-center w-full gap-4 my-4 md:w-[60vw]">
          <span className="flex-1 h-px bg-gray-300"></span>

          <p className="text-center whitespace-nowrap">Still have questions?</p>

          <span className="flex-1 h-px bg-gray-300"></span>
        </div>
        <p className="text-center my-4">We’re here to help. Get in touch with our team to get personalized answers</p>
        <button className="w-full flex flex-row items-center gap-3 justify-center text-white py-3 rounded-2xl my-4 bg-gradient-to-r from-[#225BFB] to-[#931DFA] md:w-[200px] md:text-[12px]">Get a custom quote <FaArrowRight /></button>
        <p className="text-center">No commitment required | Free consultation | Fast response</p>
      </div>
    </div>
  );
};

const FaqsWrapper = SectionWrapper(Faqs, "faqs");
export { FaqsWrapper };
