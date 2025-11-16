import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "../../components/Cta"
import SubRobotics from "../../components/SubRobotics";




const RoboticsAndAi = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/robotics-ai" className="text-[#AEFFA1]"> Robotics & AI solutions</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl"> Robotics & AI solutions</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Harness the power of AI and robotics to automate processes and creative innovative solutions.</p>
            <p className="font-inter text-sm text-[#3D1B60]">We help you build intelligent systems that solve complex problems. From automation to machine learning, we integrate robotics and AI to enhance efficiency, adaptability, and performance.</p>
          </div>
          <SubRobotics />
        </div>
      </div>
<CTA />
  </div>
  )
}

export { RoboticsAndAi }