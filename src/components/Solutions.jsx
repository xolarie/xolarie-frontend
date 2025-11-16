import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { SolutionsData } from "../constants"
import Tilt from "react-parallax-tilt"

const SolutionCard =({index, title, description, image}) => {
    return (
        <Tilt className="">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="p-1 rounded-[20px] bg-gradient-to-br from-secondary1 to-tertiary1 w-[85vw] lg:w-[20vw] lg:mr-[2vw]">
                <div className="bg-primary2 rounded-xl py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col text-center">
                    <img src={image} alt={title} className="h-32 rounded-md" />
                    <h1 className="font-orbitron font-bold text-xl text-tertiary2">{title}</h1>
                    <p className="font-inter text-sm text-tertiary2">{description}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}


const Solutions = () => {
  return (
    <>
    <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h1 className="font-orbitron font-extrabold text-3xl text-center">Cutting-Edge Solutions Tailored for You and Your Business</h1>
        <p className="font-inter mt-5 text-center">
        At XOLARIE, we deliver powerful, scalable, and innovative digital solutions to help your business thrive in the modern world.
        </p>
    </motion.div>
    <div className="mt-20 flex  flex-row gap-10 overflow-x-scroll overflow-y-hidden lg:overflow-hidden lg:gap-x-0">
        {SolutionsData.map((solution, index) => (
            <SolutionCard key={solution.title} index={index} {...solution} />
        ))}
    </div>
    </>
  )
}

const SolutionsWrapper = SectionWrapper(Solutions, "solutions")
export  { SolutionsWrapper }