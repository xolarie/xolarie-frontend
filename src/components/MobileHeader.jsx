import logo from "/images/Logo.png";
import contactUs from "/images/Contact.png"
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
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

    const [navBarOpen, setNavBarOpen] = useState(false)
    const [activeDropDown, setActiveDropDown] = useState(null)

    const toggleNavBar = ( ) => {
        setNavBarOpen(!navBarOpen)
    }

  return (
    <>
    <div className = "h-[80px] w-[100vw] bg-[#00A8BE] px-1 content-center justify-center flex flex-row overflow-x-hidden">
        <Link to="/">
        <img src={logo} alt="xolarie logo" className="h-14 mr-auto"  />
        </Link>
        <div className="flex flex-row ml-auto mt-4 mr-3">
            <img src={contactUs} alt="contact us" className="h-8 mr-4" />
            <div className="h-8 bg-white px-3  pt-1 rounded-md justify-center ">
                <button onClick={toggleNavBar}>
                {navBarOpen ? <MdOutlineClose className=" font-bold text-2xl text-[#3D1B60]" /> : <FaBars className="font-bold text-2xl text-[#3D1B60]" /> }
                </button>
            </div>
        </div>
    </div>
    <ul ref={navRef} className="flex flex-col w-[60vw]  absolute right-0 z-10 border pl-4 divide-y bg-[#00A8BE] ">
    {
        navBarOpen && (
            navDatas.map((data, index) => (
                <li key={index} className="py-4 w-full">
                    <div className="w-full">
                        <button className="font-inter text-blue-300 font-bold flex w-full" onClick={()=> setActiveDropDown(index === activeDropDown ? null : index)} ><p>{data.page}</p><IoIosArrowDown className="ml-auto" /></button>
                    </div>
                    {
                        activeDropDown === index && ( <ul className="ml-4 mt-2 space-y-3 divide-y-2">
                            {data.dropdown.map((item, subIndex) => (
                              <li key={subIndex} className="font-inter text-white">
                                <Link to={item.path}> {item.page}</Link>
                              </li>
                            ))}
                          </ul>)
                    }
                </li>
            ))
        )
    }
            </ul>
    </>
  )
}

export default MobileHeader