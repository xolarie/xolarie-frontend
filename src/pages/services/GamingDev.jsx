import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "../../components/Cta"
import SubGame from "../../components/SubGame";


const GamingDev = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/gaming" className="text-[#AEFFA1]"> Game development</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl">Game Development</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Develop captivating gaming experiences with cutting-edge game development technology.</p>
            <p className="font-inter text-sm text-[#3D1B60]">Whether it’s a mobile game, VR experience, or web-based interactive, our game development team builds engaging worlds with compelling gameplay and stunning visuals.</p>
          </div>
          <SubGame />
        </div>
      </div>
<CTA />
  </div>
  )
}

export {GamingDev}