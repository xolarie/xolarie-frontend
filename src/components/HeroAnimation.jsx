import { useEffect, useRef } from "react";
import gsap from "gsap";

import frame from "/images/Frame.png";
import frame2 from "/images/Frame-2.png";
import frameGroup from "/images/Group.png"

const HeroAnimation = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.to(itemsRef.current, {
      scale: 1.2,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.4,
        from: "random",
      },
    });
  }, []);

  return (
    <div className="relative w-[30vw] h-[50vh] mx-auto">
      
      {/* Top Right */}
      <img
        ref={(el) => (itemsRef.current[1] = el)}
        src={frame2}
        className="absolute top-[10px] right-[-60px] w-20 rounded-xl will-change-transform lg:right-[-100px]  lg:w-24 xl:right-[-150px] xl:w-32 2xl:right-[-80px] 2xl:scale-125"
        alt=""
      />

      
              {/* Center */}
        <img
          ref={(el) => (itemsRef.current[2] = el)}
          src={frameGroup}
          className="absolute bottom-28 right-[-30px] w-60 rounded-xl will-change-transform lg:w-68 lg:bottom-20 xl:right-12 xl:w-76 2xl:w-60"
          alt=""
        />
      
      {/* Bottom Left */}
      <img
        ref={(el) => (itemsRef.current[0] = el)}
        src={frame}
        className="absolute bottom-[-30px] left-[-10px] w-32 rounded-xl will-change-transform xl:left-[10px]"
        alt=""
      />


    </div>
  );
};

export default HeroAnimation;
