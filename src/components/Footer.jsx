import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import xolarie from "/images/xolarie.png";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { footersLinks } from "../constants";
import { Link } from "react-router-dom";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#10172A] p-6 md:pb-0">
      <div className="md:flex md:flex-row">
        <div className="md:w-[30vw] md:mr-10">
          <img src={xolarie} alt="" />
          <p className="text-[#BEBEBE] md:text-[8px] md:my-6">
            Building powerful digital products that help brands grow. We
            transform ideas into scalable solutions with cutting-edge technology
          </p>
          <div className="flex items-center text-[#BEBEBE] gap-3 my-2 md:text-[10px]">
            <MdOutlineEmail className="text-4xl bg-[#DADADA1A] p-1 rounded-lg flex-shrink-0" />
            <span>hello@xolarie.com</span>
          </div>
          <div className="flex items-center text-[#BEBEBE] gap-3 my-2 md:text-[10px]">
            <MdOutlineLocalPhone className="text-4xl bg-[#DADADA1A] p-1 rounded-lg flex-shrink-0" />
            <span>+234 91 6087 7169</span>
          </div>
          <div className="flex items-center text-[#BEBEBE] gap-3 my-2 md:text-[10px]">
            <CiLocationOn className="text-4xl bg-[#DADADA1A] p-1 rounded-lg flex-shrink-0" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
        <ul className="md:flex md:gap-10 md:mr-10 md:flex-row md:w-full">
          {footersLinks.map((item, i) => (
            <li key={i} className="md:flex-1">
              <h1 className="relative text-[#BEBEBE] font-semibold text-2xl my-4 pb-3 md:text-[10px] md:pb-1 md:ml-auto">
                {item.name}
                <span className="absolute left-0 bottom-0 h-[6px] w-[60px] rounded-md bg-gradient-to-r from-[#2B56FB] via-[#911EFA] to-[#DE0283] md:w-[30px] md:h-[3px]" />
              </h1>

              <ul className="md:">
                {item.link.map((link, i) => (
                  <li key={i} className="text-[#BEBEBE] md:text-[8px] md:my-3 md:text-nowrap">
                    <Link>{link}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="relative  flex flex-col md:ml-auto ">
          <h1 className="relative text-[#BEBEBE] font-semibold text-2xl mt-4 pb-3 md:text-[10px] md:pb-1">
            Follow Us
          </h1>
          <span className="z-20 h-[6px] w-[60px] rounded-md bg-gradient-to-r from-[#2B56FB] via-[#911EFA] to-[#DE0283] md:w-[30px] md:h-[3px]" />
          <div className="flex flex-row items-center gap-3 my-3  md:my-1">
            <a className="flex items-center justify-center p-3 bg-[#DADADA1A] rounded-xl ">
              <CiTwitter className="text-2xl text-[#BEBEBE] md:text-[14px]" />
            </a>
            <a className="flex  items-center justify-center p-3 bg-[#DADADA1A] rounded-xl ">
              <LuLinkedin className="text-2xl text-[#BEBEBE] md:text-[14px]" />
            </a>

            <a className="flex  items-center justify-center p-3  bg-[#DADADA1A] rounded-xl ">
              <FiGithub className="text-2xl text-[#BEBEBE] md:text-[14px]" />
            </a>

            <a className="flex  items-center justify-center p-3 rounded-xl bg-[#DADADA1A] ">
              <FaInstagram className="text-2xl text-[#BEBEBE] md:text-[14px]" />
            </a>
          </div>
          <div>
            <h4 className="text-[#BEBEBE] my-4">Stay Updated</h4>
            <div className="md:flex md:gap-3">
              <input type="email" placeholder="Your email" className="h-8 rounded-xl border-[#3574FF] border bg-transparent p-2 md:h-6 md:w-24 md:text-[10px]"/> <button className="bg-gradient-to-r from-[#225BFB] to-[#931DFA] py-1 px-3 rounded-xl md:h-6 md:text-[10px] md:rounded-md" >Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 my-14 py-6 flex flex-col md:mb-0">
        <h1 className="text-center text-[#BEBEBE]">2026 Xolarie. All right reserved</h1>
        <div className="flex flex-row justify-center my-6 gap-3 text-[#BEBEBE] items-center w-full">
        <div>Privacy policy</div>
        <div>Terms of Service</div>
        <div>Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
