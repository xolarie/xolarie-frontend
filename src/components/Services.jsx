import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { servicesData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className="font-orbitron font-extrabold text-4xl">Our Services</h1>
        <p className="font-inter mt-5">
          Explore our comprehensive range of services, tailored to meet your
          unique needs.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {servicesData.map((service, index) => (
            <VerticalTimelineElement
            className="transition-transform transform group hover:scale-105 duration-300"
              key={index}
              contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
              position={index % 2 === 0 ? "left" : "right"} // ✅ Alternate positioning
              contentStyle={{
                background: "#19042D",
                color: "#fff",
                cursor: "pointer",
              }}
              icon={
                <img
                  src={service.icon}
                  alt={service.title}
                  className="cursor-pointer h-10 w-10 rounded-xl object-contain"
                />
              }
              iconStyle={{
                background: "#19042D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="transition-transform transform group hover:scale-105 duration-300">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className=" text-tertiary2">{service.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const ServicesWrapper = SectionWrapper(Services, "services");
export { ServicesWrapper }
