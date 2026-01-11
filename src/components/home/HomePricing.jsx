import { FaArrowRight, FaCheck } from "react-icons/fa";
import { homePricing } from "../../constants";
import { SectionWrapper } from "../../hoc";

const HomePricing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" border flex flex-row gap-3 px-6 py-2 my-6 rounded-2xl bg-gradient-to-r border-[#155DFC] from-[#F0F6FF] to-[#F9F5FF] items-center justify-center">
        <div className="h-4 w-4 flex p-2 bg-white rounded-full items-center justify-center">
          <span className="h-2 w-2 bg-gradient-to-br from-[#4354FB] via-[#8E20FA] to-[#DD0385] rounded-full flex-shrink-0"></span>
        </div>
        <h1>Transparent pricing</h1>
      </div>
      <h1 className="text-2xl font-semibold w-[240px] text-center md:w-full md:font-normal md:my-2">
        Choose the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#155DFC] via-[#8529F3] to-[#E2017C] ">
          <br className="md:hidden"/>
          Perfect plan
        </span>{" "}
        for you
      </h1>
      <p className="text-center text-[#4F4F4F]">
        Flexible pricing options designed to match your project scope and budget
      </p>
      <ul className="flex flex-col md:flex-row">
        {homePricing.map((item, i) => (
          <li key={i} className="relative flex justify-center">
            {item.isMostPopular && (
              <h1 className="shadow-xl text-white shadow-[#00000040] absolute -translate-y-1/2 px-6 py-2 rounded-3xl top-8 bg-gradient-to-r from-[#155DFC] via-[#9F1EED] to-[#F22992] md:px-3 md:text-[10px]">
                Most Popular
              </h1>
            )}
            <div
              className={`flex flex-col h-[526px] w-[312px] rounded-2xl border my-8 shadow-2xl p-6 md:h-[370px] md:w-[22vw] md:mx-1 md:p-3 xl:w-[18vw] xl:mx-3 xl:h-[390px] ${
                item.isMostPopular
                  ? "bg-gradient-to-br from-[#2659FB] via-[#8D21FB] to-[#E1007F] text-white"
                  : ""
              }`}
            >
              <h1 className="text-4xl md:text-2xl">{item.priceInUsd}</h1>
              <h4 className="my-3 text-xl md:text-[14px] md:my-1 ">{item.service}</h4>
              <p className="mb-3 text-[12px] md:text-[8px] mb:mb-1 xl:text-[10px]">{item.description}</p>
              <ul className="flex flex-col gap-2">
                {item.include.map((subItem, i) => (
                  <li key={i} className="flex flex-shrink-0 items-center gap-2">
                    {" "}
                    <span className="p-2 bg-[#5243C21A] rounded-full flex items-center justify-center">
                      <FaCheck className={`text-[#5243C2] text-[12px] md:text-[6px] ${item.isMostPopular ? "text-white" : ""}`} />
                    </span>
                    <span className="md:text-[10px]">{subItem}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-auto bg-[#F3F4F6] rounded-2xl py-3 md:p-1 md:text-sm md:rounded-xl ${item.isMostPopular ? "bg-[#F52F97]" : ""}`}>
                Choose plan
              </button>
            </div>
          </li>
        ))}
      </ul>
                 <div className="flex flex-col items-center w-[260px] rounded-2xl border-[#0693F7] p-4 bg-gradient-to-r from-[#2658FB0F] via-[#9D1CF10F] to-[#E2017C0F] border-2 h-[260px] md:flex-row md: justify-center md:h-[85px] md:rounded-3xl md:w-[432px]">
                    <div className="md:mx-4">
                      <p className="text-2xl font-bold text-center mb-5 md:text-lg md:mb-0">
                        Want to see more?
                      </p>
                      <p className="text-center mb-8 md:text-[8px] md:mb-0 lg:text-[10px]">
                        View all payment plans and select one that aligns with your interests
                      </p>
                    </div>
                    <button className=" bg-gradient-to-r text-white px-6 py-4 rounded-xl from-[#225BFB] to-[#931DFA] flex gap-3 justify-center items-center md:text-[10px] md:text-nowrap md:py-3 md:px-2">
                      <p>View All Plans</p>
                      <FaArrowRight />
                    </button>
                  </div>
    </div>
  );
};

const HomePricingWrapper = SectionWrapper(HomePricing, "HomePricing");
export { HomePricingWrapper };
