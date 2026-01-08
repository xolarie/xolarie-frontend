import { FaCheck } from "react-icons/fa";
import { homePricing } from "../constants";
import { SectionWrapper } from "../hoc";

const HomePricing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" border flex flex-row gap-3 px-6 py-2 my-6 rounded-2xl bg-gradient-to-r border-[#155DFC] from-[#F0F6FF] to-[#F9F5FF] items-center justify-center">
        <div className="h-4 w-4 flex p-2 bg-white rounded-full items-center justify-center">
          <span className="h-2 w-2 bg-gradient-to-br from-[#4354FB] via-[#8E20FA] to-[#DD0385] rounded-full flex-shrink-0"></span>
        </div>
        <h1>Transparent pricing</h1>
      </div>
      <h1 className="text-2xl font-semibold w-[240px] text-center">
        Choose the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#155DFC] via-[#8529F3] to-[#E2017C] ">
          <br />
          Perfect plan
        </span>{" "}
        for you
      </h1>
      <p className="text-center text-[#4F4F4F]">
        Flexible pricing options designed to match your project scope and budget
      </p>
      <ul className="flex flex-col">
        {homePricing.map((item, i) => (
          <li key={i} className="relative flex justify-center">
            {item.isMostPopular && (
              <h1 className="shadow-xl shadow-[#00000040] absolute -translate-y-1/2 px-6 py-2 rounded-3xl top-8 bg-gradient-to-r from-[#155DFC] via-[#9F1EED] to-[#F22992] ">
                Most Popular
              </h1>
            )}
            <div
              className={`flex flex-col h-[526px] w-[312px] rounded-2xl border my-8 shadow-2xl p-6 ${
                item.isMostPopular
                  ? "bg-gradient-to-br from-[#2659FB] via-[#8D21FB] to-[#E1007F] text-white"
                  : ""
              }`}
            >
              <h1 className="text-4xl">{item.priceInUsd}</h1>
              <h4 className="my-3 text-xl ">{item.service}</h4>
              <p className="mb-3 text-[12px] ">{item.description}</p>
              <ul className="flex flex-col gap-2">
                {item.include.map((subItem, i) => (
                  <li key={i} className="flex flex-shrink-0 items-center gap-2">
                    {" "}
                    <span className="p-2 bg-[#5243C21A] rounded-full flex items-center justify-center">
                      <FaCheck className={`text-[#5243C2] text-[12px] ${item.isMostPopular ? "text-white" : ""}`} />
                    </span>
                    <span>{subItem}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-auto bg-[#F3F4F6] rounded-2xl py-3 ${item.isMostPopular ? "bg-[#F52F97]" : ""}`}>
                Choose plan
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HomePricingWrapper = SectionWrapper(HomePricing, "HomePricing");
export { HomePricingWrapper };
