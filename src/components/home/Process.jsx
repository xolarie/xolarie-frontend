import { SectionWrapper } from "../../hoc";
import bolt from "/images/bolt.png";
import { process } from "../../constants";
import { FaArrowRight } from "react-icons/fa6";

const Process = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 px-8 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4">
        <img src={bolt} />
        <p>Our Process</p>
      </div>
      <p className="text-center w-72 text-3xl mt-10 md:w-full">
        How we bring your  {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#155DFC] via-[#8529F3] to-[#E2017C]">
          vision to life
        </span>{" "}
      </p>
      <p className="md:w-[470px] mb-12 mt-4 text-center">A proven 5-step process that transforms ideas into exceptional digital products</p>
      <ul className="flex flex-row mb-6 gap-6 overflow-x-auto w-full max-w-full no-scrollbar snap-x snap-mandatory md:pb-10 lg:gap-0 lg:items-center lg:justify-center">
        {process.map((item, i) => (
          <li key={i} className="relative mb-10 w-[280px] h-[320px] p-4 flex-shrink-0 lg:w-[174px] lg:h-[174px]  xl:w-[210px] xl:h-[200px] 2xl:w-[260px] 2xl:h-[260px]">
            <h1 className="absolute top-0 right-0 border  p-2 px-4 rounded-full shadow-2xl shadow-[#48484826] bg-white lg:text-[10px]  lg:font-semibold" style={{ color: item.color }}>
              {i + 1}
            </h1>
            <div className="w-full h-full border rounded-2xl shadow-2xl shadow-[#48484826] p-4">
              <item.icon
                className="text-5xl text-white p-2 rounded-xl lg:text-2xl lg:rounded-sm lg:p-1 2xl:text-4xl "
                style={{ backgroundColor: item.color,
                  boxShadow: `-2px 8px 10px ${item.color}55`,
                 }}
              />
              <h4 className="text-xl font-bold mt-8 h-16 lg:text-sm lg:mt-1 lg:font-semibold lg:h-12 xl:text-lg xl:h-14 2xl:mt-4">{item.step}</h4>
              <p className="text-[12px] h-20 lg:text-[8px] lg:h-8 xl:text-[10px] 2xl:text-[12px] 2xl:h-10">{item.description}</p>
              <p
                    style={{ "--c": item.color }}
                        className="
                          text-right font-bold text-2xl
                          bg-[linear-gradient(to_right,var(--c)_0%,var(--c)_80%,transparent_100%)]
                          bg-clip-text text-transparent
                        "
              >
                ...
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center w-[260px] rounded-2xl border-[#0693F7] p-4 bg-gradient-to-r from-[#2658FB0F] via-[#9D1CF10F] to-[#E2017C0F] border-2 h-[260px]">
        <p className="text-2xl font-bold text-center mb-5">Ready to get started?</p>
        <p className="text-center mb-8">Let’s discuss how we can help bring your project to life</p>
        <button className=" bg-gradient-to-r text-white px-6 py-4 rounded-xl from-[#225BFB] to-[#931DFA] flex gap-3 justify-center items-center">
          <p>Schedule a Call</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const ProcessWrapper = SectionWrapper(Process, "process");
export { ProcessWrapper };
