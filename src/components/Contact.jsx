import { SectionWrapper } from "../hoc"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import Stars from "./canvas/Stars"




const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden lg:flex-row lg:justify-center lg:content-center">
      <motion.div
      className="flex-[0.75] bg-primary2 p-8 rounded-2xl "
      variants={slideIn("left", "tween", 0.2, 1)}>
        <p className=" font-inter text-xl text-white">Get in touch</p>
        <h1 className={`text-4xl font-bold text-white font-orbitron`}>Contact</h1>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-inter mb-4">Your Name</span>
            <input type="text"
            value={form.name}
            placeholder="Enter your name"
            className="bg-tertiary3 py-4 px-6 placeholder:text-secondary2 text-white rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-inter mb-4">Your email address</span>
            <input 
            name="email"
            type="email"
            value={form.email}
            placeholder="Enter your email"
            className="bg-tertiary3 py-4 px-6 placeholder:text-secondary2 text-white rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-inter mb-4">Enter your message</span>
            <textarea
            rows="7"
            type="text"
            name="message"
            value={form.message}
            placeholder="Type in your message"
            className="bg-tertiary3 py-4 px-6 placeholder:text-secondary2 text-white rounded-lg outline-none border-none"
            />
          </label>
          <button type="submit" className="mt-2 bg-gradient-to-r from-primary1 to-secondary1 p-2 py-3 px-8 outline-none w-fit text-white font-bold font-orbitron shadow-md shadow-secondary1 rounded-xl">
            {loading ? "loading..." : "submit"}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn("right", "tween", 0.2, 0.1)}
      className="h-[400px] lg:w-[30vw]"
      >
        <EarthCanvas />
      </motion.div>
      <Stars />
    </div>
  )
}

const ContactWrapper = SectionWrapper(Contact, "contact")
export { ContactWrapper }