import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import Team from "../../components/Team";

const AboutUs = () => {
  return (
    <div className="bg-[#00BCD4] px-4 lg:px-24">
      <div className="flex flex-row space-x-2 py-10 font-inter">
        <Link to="/" className="text-white">Home</Link>
        <FaGreaterThan className="text-white text-[10px] flex mt-2" />
        <Link to="/about" className="text-[#AEFFA1]">About Us</Link>
      </div>
      <div>
        <h1 className=" font-orbitron font-bold text-[#3D1B60] text-2xl my-4">About Us</h1>
        <h4 className=" font-inter font-bold text-[#3D1B60] pb-5">Our Story</h4>
        <p className="font-inter text-[#3D1B60] pb-10">Many of the modern world&apos;s most pressing challenges require the power of innovation, creativity and professionally crafted technological  solutions. But, these solutions can only be crafted by talented and  brilliant tech minds. It’s the intellectual prowess of these minds that birth exceptional solutions  to the modern world&apos;s most pressing challenges. A collaboration of these tech minds will develop novel solutions that address the unique challenges  faced in the modern world. </p>
        <h4 className=" font-inter font-bold text-[#3D1B60] pb-5">Connect . Collaborate . Create </h4>
        <p className="font-inter text-[#3D1B60] pb-10">By connecting talented individuals within the tech community and leverage  their skills, fostering collaboration and innovation, we create reliable  cutting-edge software solutions that meet the evolving needs of end users. And we aim to be at the forefront of technological advancement,  continuously pushing the boundaries of what&apos;s possible. We strive to create  a world where technology seamlessly integrates into everyday life, enhancing  productivity, connectivity, and quality of life for people everywhere. This is why Xolarie exists. To foster a culture of creativity and  forward-thinking, encouraging our team to develop novel solutions  that address the unique challenges faced by our clients. Our approach to problem-solving is both imaginative and practical,  ensuring that our solutions are not only effective but also engaging  and user-friendly. We pride ourselves on delivering projects on time, maintaining clear  communication with our clients, and upholding the highest standards  of quality in all our work.</p>
        <h4 className=" font-inter font-bold text-[#3D1B60] pb-10">Xolarie connects brilliant tech minds, to work in synergy for ideas to flourish and develop novel solutions.</h4>
        <h4 className=" font-inter font-bold text-[#3D1B60] pb-10">The Team</h4>
        <p className="font-inter text-[#3D1B60] pb-10">We’re a diverse team of tech enthusiasts, designers, engineers, and thinkers — united by our shared love for innovation and quality. Each team member brings a unique strength to the table, helping us push boundaries and deliver outstanding results.</p>
      </div>
      <div><Team /></div>
    </div>
  )
}

export default AboutUs