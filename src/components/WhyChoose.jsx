import { FaArrowRight } from "react-icons/fa6";
import { whyChooseList } from "../constants";
// import chat from "/images/chat.png";
// import call from "/images/call.png";

const WhyChoose = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center w-64 md:text-2xl md:w-full xl:text-4xl 2xl:text-6xl">
        Why businesses choose{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
          Xolarie
        </span>
      </h1>
      <p className="text-center my-6 w-72 text-[#4F4F4F] md:text-sm md:w-full">
        We combine strategy, design, and execution to help businesses grow
        faster and smarter.
      </p>
      <ul className="my-12 flex flex-col gap-y-8 md:flex-row md:gap-x-4 md:items-start md:w-full lg:pl-16 xl:pl-24">
        {whyChooseList.map((item, index) => (
          <li
            key={index}
            className="group  bg-gradient-to-b from-[#4352FA] via-[#8B21FA] to-[#FF048F] h-56 rounded-2xl p-6 flex flex-col md:h-[500px] md:pl-0 md:w-20 md:hover:w-80 md:flex-shrink-0
             transition-all duration-300"
          >
            <h2 className="text-white text-xl font-bold mb-6 md:rotate-90 md:mb-auto md:text-nowrap md:w-16 md:text-lg">{item.title}</h2>
            <p className="text-sm text-white md:hidden md:group-hover:block md:transition-all md:duration-200 md:mt-40 md:ml-6">{item.desc}</p>
            <img
              src={item.icon}
              alt="why choose"
              className="h-6 w-6 mt-auto ml-4"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col  items-center justify-center">
        <h1 className="text-3xl text-center xl:text-4xl 2xl:text-6xl">
          Need Something <br className="md:hidden"/>
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
            Unique
          </span>
        </h1>
        <p className="text-[#4F4F4F] text-center my-6 md:text-sm">
          If your project requires advanced integrations, complex systems, or
          specialized features, we design custom-built web solutions tailored
          exactly to your needs.
        </p>
        <button className="flex  items-center justify-center text-lg p-4 bg-gradient-to-r from-[#225BFB] to-[#931DFA] rounded-2xl text-white my-4">
          Discuss your Project <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
    
    </>
  );
};

export { WhyChoose };
