import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import SubWeb from "../../components/SubWeb";
import CTA from "../../components/Cta"


function WebDev() {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/web-development" className="text-[#AEFFA1]">App development</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl">Web Development</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Create powerful and intuitive mobile applications for both ios and Android.</p>
            <p className="font-inter text-sm text-[#3D1B60]">We design and build mobile applications that deliver smooth user experiences and drive engagement. Whether Android, iOS, or cross-platform, we create reliable apps that scale.</p>
          </div>
          <SubWeb />
        </div>
      </div>
      <CTA />
  </div>
  )
}

export { WebDev }