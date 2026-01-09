import { testimonials } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { FaStar } from "react-icons/fa";
import star from "/images/star.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import BuildSomething from "../BuildSomething";

const Testimonials = () => {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const intervalRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;

        itemRefs.current[next]?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });

        return next;
      });
    }, 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const pauseOnHover = () => stopAutoScroll();
  const resumeOnLeave = () => startAutoScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoScroll();
        } else {
          stopAutoScroll();
        }
      },
      { threshold: 0.5 }
    );

    if (scrollRef.current) observer.observe(scrollRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="p-4 px-8 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4 items-center">
        <img src={star} className="h-[20px]" />
        <p>Client’s success stories</p>
      </div>
      <h1 className="text-4xl w-[80vw] text-center mt-8">
        What our clients{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155DFC] via-[#8529F3] to-[#E2017C]">
          Say
        </span>
      </h1>
      <p className="text-center my-6 text-[14px] text-[#4F4F4F]">
        Don’t take our word for it. Hear from clients who have experienced the
        Xolarie difference.
      </p>
      <ul
        ref={scrollRef}
        className=" flex flex-row overflow-x-scroll w-full gap-6 items-center"
      >
        <button className="absolute rounded-2xl z-20 bg-white p-2 shadow-sm shadow-[#AEAEAE]">
          <FaAngleLeft />
        </button>
        {testimonials.map((testimonial, i) => (
          <li
            ref={(el) => (itemRefs.current[i] = el)}
            onMouseEnter={pauseOnHover}
            onMouseLeave={resumeOnLeave}
            key={i}
            className="flex flex-row items-center relative "
          >
            <div className="p-4 flex flex-col border h-[380px] flex-shrink-0 w-[80vw] rounded-3xl mx-5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, index) => {
                  const starNumber = index + 1;
                  let rating = testimonial.star;

                  return (
                    <FaStar
                      key={starNumber}
                      className={`text-lg ${
                        starNumber <= rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  );
                })}
              </div>
              <p className="mt-[20px] text-lg text-[#4F4F4F]">
                {testimonial.testimonial}
              </p>
              <div className="flex items-center gap-3 mt-auto justify-center">
                <img
                  src={testimonial.pics}
                  className="h-20 w-20 rounded-full"
                  alt="testimonial image"
                />
                <div>
                  <p>{testimonial.name}</p>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
        <button className="absolute right-6 rounded-2xl bg-white p-2 shadow-sm shadow-[#AEAEAE]">
          <FaAngleRight />
        </button>
      </ul>
      <div className="flex items-center mt-6">
        {testimonials.map((_, i) => {
          const isActive = i === activeIndex;
          const isConnected = i === activeIndex || i === activeIndex - 1;

          return (
            <button
              key={i}
              onClick={() =>
                itemRefs.current[i]?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                })
              }
              className="flex items-center relative "
            >
              {/* Connector */}
              {i !== 0 && (
                <span
                  className={`h-[14px] absolute w-7 right-1 rounded-2xl transition-colors z-50 duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#4155FB] via-[#8E25F3] to-[#DF0282]"
                      : ""
                  }`}
                />
              )}

              {/* Dot */}
              <span
                className={`w-3 absolut h-3 mx-1  rounded-full transition-all duration-300 ${
                  isConnected ? "bg-blue-600 scale-110" : "bg-[#D9D9D9]"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="flex md:flex md:items-center md:gap-14 xl:gap-20 2xl:gap-28">
        <div className="flex flex-row items-center gap-2 my-10">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]  md:text-4xl">
              50+
            </h1>
            <p className="text-[#4F4F4F] text-[12px] text-nowrap">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]  md:text-4xl">
              98%
            </h1>
            <p className="text-[#4F4F4F] text-[12px] text-nowrap">
              Clients Satisfaction
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]  md:text-4xl">
              5.0
            </h1>
            <p className="text-[#4F4F4F] text-[12px] text-nowrap">
              Average Rating
            </p>
          </div>
        </div>
      </div>
      <BuildSomething />
    </div>
  );
};

const TestimonialsWrapper = SectionWrapper(Testimonials, "testimonials");
export { TestimonialsWrapper };
