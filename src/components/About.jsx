import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Tilt from "react-parallax-tilt"
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"

const About = () => {

  return (
    <>
    <motion.div variants={textVariant}
    initial="hidden"
    animate="visible"
    >
      <h1 className="font-orbitron font-extrabold text-4xl ">About Us</h1>
      <p className="font-inter mt-5">We are a technology solutions provider focused on delivering high-quality web, app, gaming, and AI-driven systems. Our expertise in backend architecture, UI/UX design, robotics, and animation enables us to build the next generation of digital products. Whether you&#39;re a startup or an established enterprise, we have the tools and expertise to elevate your business.</p>
      <Link to="/about">
              <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2000}>
              <button className="mt-2 bg-gradient-to-r from-primary1 to-secondary1 p-2 rounded-xl border-secondary2 border">Learn More ..</button>
              </Tilt>
      </Link>
    </motion.div>
    </>
  )
}

const AboutWrapper = SectionWrapper(About, "about")
export { AboutWrapper }