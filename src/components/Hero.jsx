import { TbWorld } from "react-icons/tb";
import { FaAppStoreIos } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation";

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
  },
];

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center md:items-start w-full md:mr-5"
      >
        <motion.div
          variants={fadeUp}
          className="text-[8px] rounded-3xl bg-[#F0F6FF] border-[#155DFC] border-[0.5px] font-inter p-3 flex flex-row justify-center gap-3 items-center md:p-1 md:my-6"
        >
          <FaStar className="text-[20px] text-[#155DFC]" />
          <p>INNOVATION-DRIVEN DIGITAL STUDIO</p>
        </motion.div>

        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col items-center md:items-start md:w-[40vw] md:mr-5">
            <div>
              <motion.h1
                variants={fadeUp}
                className="font-inter text-center text-[32px] mt-4 md:text-start xl:text-5xl 2xl:text-6xl"
              >
                Building powerful{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
                  digital products
                </span>{" "}
                that help brands grow
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-center font-iner text-[#4F4F4F] text-[12px] md:text-start md:text-[10px] xl:text-[17px] lg:my-5"
              >
                Xolarie creates scalable software, intuitive user experiences
                and smart technology solutions that drive meaningful results for
                your business.
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              className="space-x-6 mt-5 flex md:items-start"
            >
              <button className="bg-gradient-to-r from-[#225BFB] to-[#931DFA] p-2 rounded-2xl text-white flex flex-row items-center gap-2 hover:scale-110 duration-300 w-32 md:rounded-lg md:h-12">
                <p className="text-[12px] md:text-[14px]">Start Projects </p>
                <FaArrowRight />
              </button>
              <button className="border-black border-[0.5px] p-2 rounded-2xl flex flex-row items-center gap-2 hover:scale-110 duration-300 md:rounded-lg md:h-12">
                <p className="text-[12px] md:text-[14px]">View Our Projects</p>
                <FaArrowRight />
              </button>
            </motion.div>
            <div className="flex flex-row text-center space-x-4 mt-4 font-inter">
              <div>
                <h3 className="text-[20px] text-[#553FFB]">98%</h3>
                <p className="text-[10px] text-[#323232]">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <h3 className="text-[20px] text-[#553FFB]">24/7</h3>
                <p className="text-[10px] text-[#323232]">Support Available</p>
              </div>
            </div>
            <div className="md:my-4">
              <p className="text-center mt-2 text-[10px] text-[#323232]">
                Trusted by startups, creators and emerging businesses worldwide
              </p>
            </div>
          </div>
          <div className="w-[40vw] hidden md:block">
            <HeroAnimation />
          </div>
        </div>
        <div className=" pt-3 w-full md:w-[50vw]">
          <motion.ul
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 place-items-center w-full md:place-items-start md:justify-start"
          >
            {HeroServices.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center rounded-3xl border border-[#707070] p-3"
              >
                <item.icon
                  // size={10}
                  className="text-white rounded-full bg-gradient-to-b from-[#2C55FB] to-[#8C21FA] xl:w-[20px] xl:h-[20px]"
                />
                <span className="text-[7px] ml-2 lg:text-[10px] xl:text-[12px]">
                  {item.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="mt-auto justify-center flex flex-col items-center py-4 md:w-full">
          <h1 className="text-[#A1A1A1] md:text-[24px] md:mt-8">
            Scroll to explore
          </h1>
          <FaAngleDown className="text-[#676767]" />
        </div>
        <div></div>
      </motion.div>
    </>
  );
};

const HeroWrapper = SectionWrapper(Hero, "hero");

export { HeroWrapper };
