/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { WhyChoose } from "./WhyChoose.jsx";
import checkMark from "/images/checkmark.png";

const Services = ({ contents = {} }) => {
  return (
    <div className="mt-8 flex flex-col gap-y-10">
      <section>
        <div>
          <div>
            <h1 className="font-inter text-center text-[32px] mt-4 md:text-start xl:text-5xl 2xl:text-6xl">
              <span>{contents.h_span1}</span>
              <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
                {contents.h_span2}
              </span>{" "}
              <span>{contents.h_span3}</span>
            </h1>
          </div>
          <p className="text-center font-iner text-[#4F4F4F] text-lg md:text-start md:text-[10px] xl:text-[17px] lg:my-5">
            {contents.h_desc}
          </p>
          <ul className="flex  flex-col  my-10 gap-y-4">
            {contents.h_list.map((item, index) => (
              <li key={index} className="flex gap-y-4">
                <img src={checkMark} alt="check image" className="h-8 mr-3" />
                <span className="text-sm text-[#4F4F4F]">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex-col gap-3 mt-5 flex md:items-start w-full md:flex-row">
            <button className="w-full justify-center bg-gradient-to-r from-[#225BFB] to-[#931DFA] p-2 py-4 rounded-xl text-white flex flex-row items-center gap-2 hover:scale-110 duration-300 md:w-32 md:rounded-lg md:h-12">
              <p className="text-[16px] md:text-[14px]">Start Projects </p>
              <FaArrowRight />
            </button>
            <button className="w-full py-4 justify-center border-black border-[0.5px] p-2 rounded-xl flex flex-row items-center gap-2 hover:scale-110 duration-300 md:w-32 md:rounded-lg md:h-12">
              <p className="text-[16px] md:text-[14px] md:text-nowrap">
                View Our Projects
              </p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <img src={contents.h_img} alt="web image" />
      </section>
      <section className="flex flex-col gap-y-4">
        <h1 className="font-inter text-center text-[32px] mt-4 md:text-start xl:text-5xl 2xl:text-6xl">
          <span>{contents.sec_2_span1} </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
            {contents.sec_2_span2}{" "}
          </span>
        </h1>
        <p className="text-center font-iner text-[#4F4F4F] text-lg md:text-start md:text-[10px] xl:text-[17px] lg:my-5">
          {contents.sec_2_desc}
        </p>
        <ul className="flex flex-col gap-5 mt-12 md:grid md:grid-cols-3 md:place-items-center md:w-full">
          {contents.sec_2_list.map((item, index) => (
            <li
              key={index}
              className="h-[200px] w-full flex flex-col border rounded-xl shadow-2xl shadow-[#48484826] p-4 hover:scale-105 duration-300 xl:px-6 md:w-auto md:h-[220px]"
            >
              <img src={item.img} alt="icon" className="h-20 w-20" />
              <h3 className="font-semibold my-2 md:my-5">{item.title}</h3>
              <p className="text-[12px] text-[#4F4F4F] md:text-[8px] lg:text-[10px] xl:text-[12px]">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1 className="text-3xl text-center mt-12 mb-4">
          <span>{contents.sec_3_span1}</span>{" "} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">{contents.sec_3_span2}</span>{" "}
          <span>{contents.sec_3_span3}</span>
        </h1>
        <p className="text-center text-[#4F4F4F] text-xl">{contents.sec_3_desc}</p>
        <div className="py-12 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-fuchsia-500" />
              <ul className="space-y-14">
                {contents.sec_3_list.map((item, index) => (
                  <li key={index} className="relative flex items-start gap-8">
                    <div className="relative z-10 shrink-0">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-b from-[#155DFC] to-[#9E1BF1] flex items-center justify-center text-sm font-semibold text-white shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-1 max-w-xl">
                      <h3 className="text-2xl md:text-[2rem] leading-tight font-semibold text-[#373737]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm md:text-base leading-7 text-[#4F4F4F]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <WhyChoose />
      </section>
    </div>
  );
};

const ServicesWrapper = SectionWrapper(Services, "services");

export { ServicesWrapper };
