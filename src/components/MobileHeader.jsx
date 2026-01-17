// import logo from "/images/Logo.png";
import getStartedButton from "/images/get_started_button.png";
import mobileBar from "/images/mobile-navbar.png";
import { useState, useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { navDatas } from "../constants";

const MobileHeader = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavBarOpen(false);
        setActiveDropDown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [navBarOpen, setNavBarOpen] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  const toggleNavBar = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <>
      <div className="h-[60px] w-[100vw] bg-white z-50 px-4 content-center justify-center rounded-2xl  flex flex-row overflow-x- pt-5 fixed">
        <Link to="/">
        <Link to="/" className="flex">
        {/* <img src={logo} alt="" /> */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079] font-semibold">Xolarie</h1>
        </Link>
        </Link>
        <div className="flex flex-row ml-auto mr-3">
          <img 
            src={getStartedButton}
            alt="Get Started"
            className="h-8 mr-6 hidden"
          />
          <div className="h-8 bg-white px-3  pt-1 rounded-md justify-center ">
            <button onClick={toggleNavBar}>
              {navBarOpen ? (
                <MdOutlineClose className=" h-[32px] w-[32px] rounded-xl text-2xl text-white bg-gradient-to-br from-[#3D7AFF] via-[#A219EA] to-[#E1017E] " />
              ) : (
                <img className="h-[32px]" src={mobileBar} />
              )}
            </button>
          </div>
        </div>
      </div>
      <ul
        ref={navRef}
        className={`
    fixed top-0 right-0  w-[60vw] mt-16 rounded-xl shadow-xl shadow-[#00000040]
    bg-white z-50 pl-4 pr-6 divide-y
    transform transition-transform duration-300 ease-in-out
    ${navBarOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {navBarOpen &&
          navDatas.map((data, index) => (
            <li key={index} className="py-4 w-full">
              <div className="w-full">
                {data.path ? (
                  <Link to={data.path}>{data.page}</Link>
                ) : (
                  <button
                    className="font-inter text-[black]  flex w-full"
                    onClick={() =>
                      setActiveDropDown(index === activeDropDown ? null : index)
                    }
                  >
                    <p className="">{data.page}</p>
                  </button>
                )}
              </div>
              {activeDropDown === index && (
                <ul className="ml-4 mt-2 space-y-3 divide-y-2">
                  {data.dropdown.map((item, subIndex) => (
                    <li key={subIndex} className="font-inter text-black">
                      <Link to={item.path}> {item.page}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default MobileHeader;
