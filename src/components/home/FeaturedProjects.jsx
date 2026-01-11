import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { projects } from "../../constants";
import { SectionWrapper } from "../../hoc";
import work from "/images/work-history.png";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedProjects = () => {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const intervalRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const startAutoScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % projects.length;

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
    <div className=" flex flex-col items-center justify-center w-full overflow-x-hidden">
      <div className="flex gap-3 my-5 bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] px-8 py-3 rounded-2xl border border-[#155DFC]">
        <img src={work} alt="" />
        <p>Featured work</p>
      </div>
      <h1 className="text-4xl w-[240px] text-center md:w-full">
        Projects we’re{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#155DFC] via-[#8529F3] to-[#E2017C]">
          proud of
        </span>
      </h1>
      <p className="text-center text-[#4F4F4F] my-5 text-[14px]">
        Explore our recent work and see how we’ve helped businesses achieve
        their digital goals.
      </p>
      <ul
        ref={scrollRef}
        className="relative flex flex-row gap-6 overflow-x-auto w-full max-w-full no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-x-3 md:gap-y-2 md:items-center md:justify-center md:overflow-hidden"
      >
        {projects.map((project, i) => (
          <li
            ref={(el) => (itemRefs.current[i] = el)}
            onMouseEnter={pauseOnHover}
            onMouseLeave={resumeOnLeave}
            key={i}
            className="relative flex flex-col max-h-[531px] h-[531px] w-[310px] border  rounded-[35px] flex-shrink-0 shadow-xl shadow-[#48484826] my-10 md:rounded-2xl md:w-[200px] md:h-[400px] lg:w-[260px] xl:w-[360px] xl:h-[450px] 2xl:w-[420px] 2xl:h-[480px]"
          >
            <img src={project.image} alt="" />
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-3xl md:top-2 md:left-2">
              <h4
                style={{
                  "--from": project.colorFrom,
                  "--via": project.colorVia,
                  "--to": project.colorTo,
                }}
                className="text-transparent text-[14px] bg-clip-text bg-gradient-to-r from-[var(--from)] via-[var(--via)] to-[var(--to)] md:text-[8px] "
              >
                {project.services}
              </h4>
            </div>
            <div className="relative h-full flex flex-col  w-full p-4">
              <h1 className="text-xl font-semibold my-2 md:text-[14px]">
                {project.name}
              </h1>
              <p className="my-1 text-[#525252] md:text-[10px]">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 p-2">
                {project.stacks.map((stack, i) => (
                  <li
                    key={i}
                    className="border border-[#656565] px-4 py-1 rounded-2xl md:text-[10px] md:px-2"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
              <Link className="flex items-center gap-3 mt-auto text-[#747474]">
                <p className="md:text-[12px]">Explore project</p>
                <FaArrowRight />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center mt-6 md:hidden">
        {projects.map((_, i) => {
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
      <div className="flex flex-col items-center w-[260px] rounded-2xl border-[#0693F7] p-4 bg-gradient-to-r from-[#2658FB0F] via-[#9D1CF10F] to-[#E2017C0F] border-2 h-[260px] md:flex-row md: justify-center md:h-[85px] md:rounded-3xl md:w-[432px]">
        <div className="md:mx-4">
          <p className="text-2xl font-bold text-center mb-5 md:text-lg md:mb-0">
            Want to see more?
          </p>
          <p className="text-center mb-8 md:text-[8px] md:mb-0 lg:text-[10px]">
            Browse our complete portfolio of complete projects
          </p>
        </div>
        <button className=" bg-gradient-to-r text-white px-6 py-4 rounded-xl from-[#225BFB] to-[#931DFA] flex gap-3 justify-center items-center md:text-[10px] md:text-nowrap md:py-3 md:px-2">
          <p>View All Projects</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const FeaturedProjectsWrapper = SectionWrapper(
  FeaturedProjects,
  "featuredprojects"
);
export { FeaturedProjectsWrapper };
