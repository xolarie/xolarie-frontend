
import { SectionWrapper } from "../hoc";
import { FaArrowRight, FaBolt } from "react-icons/fa6";
import { servicesData } from "../constants"
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
    <div className="flex flex-col items-center">
        <div className="w-[50vw] text-[8px] rounded-3xl bg-[#F0F6FF] border-[#155DFC] border-[0.5px] font-inter px-8 py-2 flex flex-row justify-center gap-3 items-center">
          <FaBolt  className="text-[20px] text-[#155DFC] " />
          <p className="font-light text-[12px]"> Our Sevices</p>
        </div>
        <div className="text-center">
          <h1 className="font-inter text-center text-[24px] mt-4">
            Everything you need to build {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
              digital excellence
            </span>
          </h1>
          <p className="text-[11px] text-[#4F4F4F] py-3">
            From concept to launch, we deliver comprehensive solutions that transform your ideas into powerful digital products
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            {servicesData.map((service, i) => (
              <li key={i} className="h-[200px] border rounded-xl shadow-2xl shadow-[#48484826] p-4">
                <service.icon className={`text-4xl text-white p-1 rounded-lg font-light`}   style={{ backgroundColor: service.color }}/>
                <h1 className="font-semibold my-2">{service.title}</h1>
                <p className="text-[12px] text-[#4F4F4F]">{service.description}</p>
                <Link to="/" className="text-sm text-[#2758FB]">learn more...</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center items-center flex flex-col my-10">
          <h1>Need a custom solution? we are here to help.</h1>
          <button className="bg-gradient-to-r from-[#225BFB] to-[#931DFA] p-3 text-white rounded-xl items-center justify-center flex flex-row my-3 gap-2">
            <p>Discuss your Project </p>
            <FaArrowRight /></button>
        </div>
    </div>
    </>
  );
};

const ServicesWrapper = SectionWrapper(Services, "services");
export { ServicesWrapper }
