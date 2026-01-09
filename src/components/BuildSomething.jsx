import { FaArrowRight, FaCheck } from "react-icons/fa6";

const BuildSomething = () => {
  return (
    <div className="h-[543px] flex flex-col items-center border w-full rounded-3xl shadow-xl p-7 shadow-[#8B22FA33]">
      <div className=" border flex flex-row gap-3 px-6 py-2 my-6 rounded-2xl bg-gradient-to-r border-[#155DFC] from-[#F0F6FF] to-[#F9F5FF] items-center justify-center">
        <div className="h-4 w-4 flex p-2 bg-white rounded-full items-center justify-center">
          <span className="h-2 w-2 bg-gradient-to-br from-[#4354FB] via-[#8E20FA] to-[#DD0385] rounded-full flex-shrink-0"></span>
        </div>
        <h1 className="text-[12px] ">Let’s build something amazing</h1>
      </div>
      <div className="w-full flex flex-col  items-center">
        <h1 className="text-2xl text-center w-44">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155DFC] via-[#8529F3] to-[#E2017C]">
            transform
          </span>{" "}
          your business?
        </h1>
        <p className="text-center text-[#4F4F4F] my-2">
          Join the brands that trust Xolarie to bring their digital vision to
          life. Let’s create something extraordinary together.
        </p>
      </div>
      <div className="gap-3 flex flex-col items-center">
        <button className="flex flex-row my-3 items-center gap-3 text-white bg-gradient-to-r from-[#225BFB] to-[#931DFA] px-3 py-2 rounded-xl">Get a custom quote <FaArrowRight /> </button>
        <p className="flex items-center gap-3"><FaCheck className="text-tra bg-[#28CA00] p-1 text-white rounded-full " /><span>Free Consultation</span></p>
        <p className="flex items-center gap-3"><FaCheck className="text-tra bg-[#28CA00] p-1 text-white rounded-full " /><span>No long term contracts</span></p>
        <p className="flex items-center gap-3"><FaCheck className="text-tra bg-[#28CA00] p-1 text-white rounded-full " /><span>Fast Turnaround</span></p>
        
      </div>
    </div>
  );
};

export default BuildSomething;
