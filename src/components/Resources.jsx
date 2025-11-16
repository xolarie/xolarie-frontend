import { SectionWrapper } from "../hoc"
import { motion  } from "framer-motion"
import Tilt from "react-parallax-tilt"

const Resources = () => {
  return (
    <div className="">
      <p className="font-inter text-sm text-white">Explore Our Resources:</p>
      <h1 className="font-orbitron text-3xl font-bold text-white">Resources</h1>
      <div className="flex gap-x-10 mt-5 flex flex-col gap-y-8 lg:flex-row">
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} 
      className="bg-primary2 p-8 rounded-xl">
          <h1 className="font-inter font-bold text-white text-2xl">Blog</h1>
          <p className="font-inter text-white">Read insightful articles and tutorials on software development, technology, and industry trends.</p>
          <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2000}>

          <button className="mt-2 bg-gradient-to-r from-primary1 to-secondary1 p-2 rounded-xl">Explore Blog</button>
          </Tilt>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} 
      className="bg-primary2 p-8 rounded-xl">
        <h1 className="font-inter font-bold text-white text-2xl">Tech News & Updates</h1>
        <p className="font-inter text-white">Keep informed with the latest tech news and updates that shape the digital landscape.</p>
        <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2000}>
        <button className="mt-2 bg-gradient-to-r from-primary1 to-secondary1 p-2 rounded-xl">Explore Tech News & Updates</button>
        </Tilt>
      </motion.div>
      </div>
    </div>
  )
}
const ResourcesWrapper = SectionWrapper(Resources, "resources")
export { ResourcesWrapper}