import { SectionWrapper } from "../../hoc";
import { trustedCompany } from "../../constants";
import { useRef } from "react";

const TrustedComp = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 10000; // adjust as needed
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full md:flex md:flex-col md:items-center">
      <div className="grid grid-cols-2 gap-3 md:flex md:items-center md:gap-14 xl:gap-20 2xl:gap-28">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079] md:text-4xl">
            150+
          </h1>
          <p className="text-[#4F4F4F] md:text-[12px]">Projects Delivered</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]  md:text-4xl">
            98%
          </h1>
          <p className="text-[#4F4F4F] md:text-[12px]">Clients Satisfaction</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]  md:text-4xl">
            50+
          </h1>
          <p className="text-[#4F4F4F] md:text-[12px]">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]  md:text-4xl">
            24/7
          </h1>
          <p className="text-[#4F4F4F] md:text-[12px]">Supports Available</p>
        </div>
      </div>
      <div className="my-16 bg-[radial-gradient(circle_at_center,_#E7EDFE,_#E3C8FF4D,_transparent_60%)]">
        <h1 className="text-center">TRUSTED BY INDUSTRY LEADERS</h1>
        <ul
          ref={scrollRef}
          className="flex flex-row overflow-x-scroll gap-8 py-5 no-scrollbar"
        >
          {trustedCompany.map((item, i) => (
            <li key={i} className="text-[#757575] border-2 p-2 rounded-2xl">
              {item}
            </li>
          ))}
        </ul>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => scroll("left")}
            className="p-1 h-4 border bg-[#4E43FB33] hover:bg-gray-100 transition"
          ></button>

          <button
            onClick={() => scroll("right")}
            className="p-1 border bg-[#4E43FB33] hover:bg-gray-100 transition"
          ></button>
        </div>
        <div className="py-16 items-center flex flex-col">
          <p className="text-center text-[#4F4F4F] py-7 md:w-[520px]">
            Xolarie transformed our digital presence with their innovative
            approach and technical expertise. The results exceeded our
            expectations.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-3">
            <img
              src=""
              className="p-10 bg-gradient-to-r from-[#3352FB] to-[#8F1FFA] rounded-full"
              alt=""
            />
            <div>
              <h4 className="text-[#4F4F4F] font-bold">Clark Ward</h4>
              <p className="text-[#4F4F4F] text-[10px]">CEO, Techcorp Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustedCompWrapper = SectionWrapper(TrustedComp, "trustedcomp");

export { TrustedCompWrapper };
