import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { navDatas } from "../constants";

const MobileFooter = () => {
  return (
    <footer className="bg-primary2 text-tertiary2 font-orbitron py-8 bottom-0 px-4 w-full">
      <div className="flex flex-row w-full border-b-2 border-[#8CE7FF]">
      <h1 className="  text-[#8CE7FF] font-bold w-full">Lets talk</h1>
      <FaArrowRight className="mr-auto text-[#8CE7FF] " />
      </div>
      <div>
        <ul className="mt-20 border border-solid-1 border-[#3D1B60] rounded-2xl w-ful divide-y divide-[#3D1B60]">
          {navDatas.map((data, index) => (
            <li key={index} className="w-full flex py-5 px-4">
              <div className="flex flex-row w-full">
              <p className="font-inter text-sm font-bold text-[#8CE7FF]">{data.page}</p>
              <button className="ml-auto">
              <FaPlus className=" text-lg font-bold text-[#00A8BE]  bg-[#301D42] p-1 rounded-full" />
              </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <p className="text-center text-sm font-inter text-[#AEFFA1]">Xolarie connects brilliant tech minds, to work in synergy for ideas to flourish and develop novel solutions. <br /> <br />Copyright &copy; 2025 Xolarie Tech Inc.</p>
      </div>
    </footer>
  );
};

export default MobileFooter;
