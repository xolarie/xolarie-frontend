import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "../../components/Cta"
import SubApp from "../../components/SubApp";



const AppDev = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/app-development" className="text-[#AEFFA1]">App development</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl">Web Development</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Build responsive, fast, and secure websites with modern technologies.</p>
            <p className="font-inter text-sm text-[#3D1B60]">At Xolarie, we specialize in crafting responsive, high-performing websites tailored to your business goals. From landing pages to full-fledged platforms, our solutions combine creative design with robust technology.</p>
          </div>
          <SubApp />
        </div>
      </div>
<CTA />
  </div>
  )
}

export { AppDev }