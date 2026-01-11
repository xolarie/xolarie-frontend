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
    <div className="bg-[#10172A] p-6">
      <div className="flex">
        <div>
          <img src={xolarie} alt="" />
          <p className="text-[#BEBEBE]">
            Building powerful digital products that help brands grow. We
            transform ideas into scalable solutions with cutting-edge technology
          </p>
          <div className="flex items-center text-[#BEBEBE] gap-3 my-2">
            <MdOutlineEmail className="text-4xl bg-[#DADADA1A] p-1 rounded-lg flex-shrink-0" />
            <span>hello@xolarie.com</span>
          </div>
          <div className="flex items-center text-[#BEBEBE] gap-3 my-2">
            <MdOutlineLocalPhone className="text-4xl bg-[#DADADA1A] p-1 rounded-lg flex-shrink-0" />
            <span>+234 91 6087 7169</span>
          </div>
          <div className="flex items-center text-[#BEBEBE] gap-3 my-2">
            <CiLocationOn className="text-4xl bg-[#DADADA1A] p-1 rounded-lg flex-shrink-0" />
            <span>Lagos, Nigeria</span>
          </div>
        </div>
        <ul className="flex">
          {footersLinks.map((item, i) => (
            <li key={i}>
              <h1 className="relative text-[#BEBEBE] font-semibold text-2xl my-4 pb-3">
                {item.name}
                <span className="absolute left-0 bottom-0 h-[6px] w-[60px] rounded-md bg-gradient-to-r from-[#2B56FB] via-[#911EFA] to-[#DE0283]" />
              </h1>

              <ul>
                {item.link.map((link, i) => (
                  <li key={i} className="text-[#BEBEBE]">
                    <Link>{link}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="relative  flex flex-col">
          <h1 className="relative text-[#BEBEBE] font-semibold text-2xl mt-4 pb-3">
            Follow Us
          </h1>
          <span className="z-20 h-[6px] w-[60px] rounded-md bg-gradient-to-r from-[#2B56FB] via-[#911EFA] to-[#DE0283]" />
          <div className="flex flex-row items-center gap-3 my-3">
            <Link className="flex items-center justify-center p-3 bg-[#DADADA1A] rounded-xl">
              <CiTwitter className="text-2xl text-[#BEBEBE]" />
            </Link>
            <span className="flex h-12 w-12 items-center justify-center bg-[#DADADA1A] rounded-xl">
              <LuLinkedin className="text-2xl text-[#BEBEBE]" />
            </span>

            <span className="flex h-12 w-12 items-center justify-center  bg-[#DADADA1A] rounded-xl">
              <FiGithub className="text-2xl text-[#BEBEBE]" />
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DADADA1A]">
              <FaInstagram className="text-2xl text-[#BEBEBE]" />
            </span>
          </div>
          <div>
            <h4 className="text-[#BEBEBE] my-4">Stay Updated</h4>
            <div>
              <input type="email" placeholder="Your email" className="h-8 rounded-xl border-[#3574FF] border bg-transparent p-2"/> <button className="bg-gradient-to-r from-[#225BFB] to-[#931DFA] py-1 px-3 rounded-xl" >Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 my-14 py-6 flex flex-col">
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
