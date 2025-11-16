import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "../../components/Cta"
import SubAnimation from "../../components/SubAnimation";



const Animations = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/backend-development" className="text-[#AEFFA1]">Animation</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl">Animationt</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Bring your ideas to life with creative and impactful animations</p>
            <p className="font-inter text-sm text-[#3D1B60]">We bring your ideas to life through animation. Whether it’s product explainers, brand storytelling, or UI animations, our team blends creativity with clarity to engage and inform.</p>
          </div>
          <SubAnimation />
        </div>
      </div>
<CTA />
  </div>
  )
}

export { Animations }