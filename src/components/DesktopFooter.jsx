import logo from "/images/logo2.png"
import { navDatas } from "../constants";

const DesktopFooter = () => {
  return (
    <div className="bg-[#19042D] h-52 w-full px-10 py-5">
        <div className="flex flex-row w-full content-center">
            <img src={logo} alt="" className="w-52 ml-12 mr-8"/>
                  <div className="flex w-full content-center">
                    <ul className="flex flex-row w-full content-center">
                      {navDatas.map((data, index) => (
                        <li key={index} className="flex-1">
                          <div className="">
                          <p className="font-inter font-bold text-[#8CE7FF]">{data.page}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
        </div>
        <div className="flex w-full justify-center mt-14">
            <p className="text-center text-[#AEFFA1] font-inter">
                Xolarie connects brilliant tech minds, to work in synergy for ideas to flourish and develop novel solutions. <br /> Copyright © 2025 Xolarie Tech Inc.
            </p>
        </div>
    </div>
  )
}

export default DesktopFooter