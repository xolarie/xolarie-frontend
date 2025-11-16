import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import CTA from "../../components/Cta"
import SubBackend from "../../components/SubBackend";

const BackendDev = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <p className="text-white ">Services</p>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/services/backend-development" className="text-[#AEFFA1]">Backend & Database mgt.</Link>
      </div>
      <div>
        <div>
          <div className="space-y-5">
            <h1 className="font-orbitron text-[#3D1B60] font-extrabold text-2xl">Backend & Database Management</h1>
            <p className="text-[#3D1B60] font-inter font-semibold ">Optimize and manage your databases for performance, security, and scalability.</p>
            <p className="font-inter text-sm text-[#3D1B60]">We architect powerful backend systems and manage data with precision. Whether it&apos;s scaling your API or organizing massive datasets, we ensure performance, security, and reliability.</p>
          </div>
          <SubBackend />
        </div>
      </div>
<CTA />
  </div>
  )
}

export {BackendDev}