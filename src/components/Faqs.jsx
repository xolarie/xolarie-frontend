import { FaPlus } from "react-icons/fa6";
import { faqs } from "../constants";
import { SectionWrapper } from "../hoc";
import support from "/images/support.png";

const Faqs = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 px-8 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4">
        <img src={support} />
        <p>Support & Guidance</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl my-8 text-center">Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">Questions</span></h1>
        <p className="text-sm text-center text-[#4F4F4F]">Everything you need to know before starting your project</p>
      </div>
      <ul className="flex flex-col gap-4">
        {
            faqs.map((item, i) => (
                <li key={i} className="flex border py-3 px-6 h-20 rounded-2xl w-[350px] relative ">
                    <button className="flex  items-center w-full "><p className="w-[80vw] text-left text-[#242424]">{item.question}</p><span className="rounded-full bg-[#EEEEEE] p-2"><FaPlus /></span></button>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

const FaqsWrapper = SectionWrapper(Faqs, "faqs");
export { FaqsWrapper };
