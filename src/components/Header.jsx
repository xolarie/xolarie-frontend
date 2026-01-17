// import logo from "/images/Logo.png";
import { navDatas } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropDown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="z-50 w-[100vw] h-16 px-24 py-10 flex flex-row items-center fixed bg-white md:px-14 lg:px-16 xl:px-20 2xl:px-24">
<div className="relative flex justify-center items-center h-20">
        <Link to="/" className="flex items-center justify-center gap-2">
        {/* <img src={logo} alt="" className="h-4" /> */}
          <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079] font-semibold">Xolarie</h1>
        </Link>
</div>


      <nav className="flex flex-row w-full">
        <ul className="flex justify-center items-center relative mr-auto w-full md:ml-10 lg:ml-[10vw] xl:ml-[10vw]">
          {navDatas.map((item, index) => (
            <li
              key={index}
              className="
                  relative flex mr-8 items-center cursor-pointer font-semibold
                  transition-colors duration-300 ease-in-out
                  hover:text-[#3D7AFF]
                  md:text-[10px] whitespace-nowrap
                  lg:text-[12px] lg:mr-14 xl:text-[14px] 2xl:text-[16px]
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px] after:bg-[#3D7AFF]
                  after:transition-all after:duration-300 after:ease-in-out
                  hover:after:w-full
                "
              onMouseEnter={() => toggleDropDown(index)}
              onClick={() => toggleDropDown(index)}
            >
              
              {item.path ? (
                <Link to={item.path}>{item.page}</Link>
              ) : (
                <button>{item.page}</button>
              )}
              {item.dropdown && (
                <>
                  {/* <IoIosArrowDown className="ml-2" /> */}
                  {Array.isArray(item.dropdown) && (
                    <ul
                      className={`
        absolute top-8 left-0 bg-[#3D7AFF] text-white shadow-lg rounded-lg z-50
        w-[15vw]
        transition-all duration-300 ease-out
        ${
          activeDropdown === index
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }
      `}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="p-2 text-black hover:text-white"
                        >
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
        <button className="text-white text-nowrap text-[12px] bg-gradient-to-r hover:scale-125 transition-all duration-300 from-[#3D7AFF] to-[#941EFB] p-2 rounded-xl xl:px-4">
          Get Started
        </button>
      </nav>
    </div>
  );
};

export default Header;
