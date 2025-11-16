import { useRef, useEffect } from "react";
import { teamMembers } from "../constants";

const Team = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div>
      <ul
        ref={scrollRef}
        className="flex flex-row overflow-x-auto pb-12 space-x-4 scrollbar-hide"
      >
        {teamMembers.map((team, index) => (
          <li key={index} className="flex-shrink-0">
            <div className="w-[70vw] lg:w-48 flex flex-col items-center text-center ml-5 lg:ml-0">
              <img
                src={team.image}
                alt="team image"
                className="w-full h-full object-cover"
              />
              <div className="w-full flex flex-col text-center">
                <p className="font-inter font-bold text-[#3D1B60] lg:text-sm">
                  {team.name}
                </p>
                <p className="font-inter text-[#3D1B60] lg:text-sm">
                  {team.role}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
