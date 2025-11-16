import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "../../components/Cta"
import SubUiux from "../../components/SubUiux";


const UiuxDesign = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/ui-ux" className="text-[#AEFFA1]">UI/UX design</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl">UI/UX Design</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Enhance user experience through beautifully crafted designs that ensure usability and aesthetic appeal.</p>
            <p className="font-inter text-sm text-[#3D1B60]">e create user interfaces that aren&apos;t just beautiful — they&apos;re purposeful. At Xsolarie, we apply user research, UX strategy, and modern design systems to craft solutions that make digital products feel effortless.</p>
          </div>
          <SubUiux />
        </div>
      </div>
      <CTA />
  </div>
  )
}

export { UiuxDesign }