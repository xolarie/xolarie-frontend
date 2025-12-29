import logo from "/images/Logo.png";
import getStarted from "/images/get_started_button.png"
import { navDatas } from "../constants";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropDown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="z-50 w-[100vw] h-16 px-24 py-10 flex flex-row items-center fixed md:px-2 lg:px-10 xl:px-14 2xl:px-24 bg-white">
      <div>
        <Link to="/">
        <img src={logo} alt="Logo" className="h-16 md:h-6" />
        </Link>
      </div>
      <nav className="flex flex-row w-full">
        <ul className="flex justify-center items-center relative mr-auto w-full md:ml-10 lg:ml-[10vw] xl:ml-[20vw]">
          {navDatas.map((item, index) => (
            <li
              key={index}
              className="relative flex mr-8 items-center cursor-pointer md:text-[12px] whitespace-nowrap lg:text-[14px] lg:mr-14 xl:text-[18px]"
              onMouseEnter={() => toggleDropDown(index)}
            >
              
              {item.page}
              {item.dropdown && (
                <>
                  <IoIosArrowDown className="ml-2" />
                  {activeDropdown === index && (
                    <ul className="absolute top-8 left-0 bg-[#58AAB8] text-white shadow-lg rounded-lg z-50 w-[15vw]"
                    onMouseEnter={() => toggleDropDown(index)}
                    onMouseLeave={() => toggleDropDown(null)}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex} className="p-2 hover:bg-gray-200 z-50 ">
                          <Link to={subItem.path}>{subItem.page}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          
        </ul>
        <button><img src={getStarted} alt="get started"  /></button>
      </nav>
    </div>
  );
};

export default Header;
