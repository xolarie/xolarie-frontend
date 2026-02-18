import { SectionWrapper } from "../../hoc";
import { aboutContents } from "../../constants";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="py-3 px-3 my-6 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4 justify-center items-center w-44">
          <span className="h-4 w-4 shadow-md border-white border-4 bg-gradient-to-br from-[#4354FB] via-[#8E20FA] to-[#DD0385] rounded-full"></span>
          <p className="text-[14px]">About Xolarie</p>
        </div>
        <div>
          <div>
            <h1 className="text-4xl text-center my-2">Why we’re the best digital studio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4155FB] via-[#9C1CF1] to-[#DF0282]">in the market</span></h1>
            <br />
          </div>
          <div>
            <p className="text-center text-[#4F4F4F] text-lg mb-10">Xolarie is a technology-driven company focused on designing and building scalable software, intelligent systems, and meaningful digital experiences. We create technology that solves real-world problems, empowers people, and adapts as the digital world evolves. 
              <br />
              <br />
              Our work goes beyond building for immediate needs. We focus on creating systems, platforms, and products that are reliable, flexible, and designed for long-term impact.</p>
          </div>
        </div>
        <div>
          <ul>
            {
              aboutContents.map((item, index) => (
                <li key={index} className="my-8 p-6 border-[#9E1BF175] border-[0.3px] rounded-xl bg-gradient-to-b shadow-lg from-[#4255FB0D] via-[#9E1BF10D] to-[#DF02810D] flex flex-col">
                  <h1 className="my-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079] w-40 ">{item.title}</h1>
                  {
                    item.content.map((content, i)=> (
                      <p key={i} className="text-[#4F4F4F]">{content}</p>
                    ))
                  }
                  <br />
                  <button className="mr-auto text-[12px] text-[#2758FB]">Learn more</button>
                  <p className="ml-auto font-bold text-xl text-[#FF048F]">...</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
};

const AboutWrapper = SectionWrapper(About, "about");
export { AboutWrapper };
