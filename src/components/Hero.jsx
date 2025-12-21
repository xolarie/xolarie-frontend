import { TbWorld } from "react-icons/tb";
import { FaAppStoreIos } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";

  const HeroServices = [
    {
      name: "Web Development",
      icon: TbWorld,
    },
    {
      name: "App Development",
      icon: FaAppStoreIos,
    },
    {
      name: "UI UX Design",
      icon: GrGallery,
    },
    {
      name: "AI & Automation",
      icon: FaRobot,
    },
    {
      name: "Geme Development ",
      icon: IoGameControllerOutline,
    }
  ]



const Hero = () => {

  return (
    <>
      <div className="flex flex-col items-center w-full py-4">
        <p className="text-[8px] rounded-3xl bg-[#F0F6FF] whitespace-nowrap border-[#155DFC] border-[0.5px] font-inter p-3">
          AWARD WINNING DIGITAL STUDIO
        </p>
        <div>
          <h1 className="font-inter text-center text-[32px] mt-4">
            Building powerful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
              digital products{" "}
            </span>{" "}
            that help brands grow
          </h1>
          <p className="text-center font-iner text-[12px]">
            Xolarie creates scalable software, intuitive user experiences and
            smart technology solutions that drive meaningful results for your
            business.
          </p>
        </div>
        <div className=" space-x-6 mt-5">
          <button className="bg-gradient-to-r from-[#225BFB] to-[#931DFA] p-2 rounded-2xl text-white">
            Start Projects
          </button>
          <button className="border-black border-[0.5px] p-2 rounded-2xl">
            View Our Projects
          </button>
        </div>
        <div className="flex flex-row text-center space-x-4 mt-4 font-inter">
          <div>
            <h3 className="text-[20px] text-[#553FFB]">98%</h3>
            <p className="text-[10px]">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-[20px] text-[#553FFB]">24/7</h3>
            <p className="text-[10px]">Support Available</p>
          </div>
        </div>
        <div>
          <p className="text-center mt-2 text-[10px]">
            Trusted by startups, creators and emerging businesses worldwide
          </p>
        </div>
        <div className="h-44 py-3 w-full">
          <ul className="flex flex-wrap justify-center gap-3 place-items-center w-full">
          {HeroServices.map((item, i) => (
            <li key={i} className="flex items-center rounded-3xl border border-[#707070] p-3">
              <item.icon    size={14} className="text-white rounded-full bg-gradient-to-b from-[#2C55FB] to-[#8C21FA]" /><span className="text-[7px] ml-2">{item.name}</span>
            </li>
          ))}
          </ul>
        </div>
        <div>
          <h1>Scroll to explore</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
