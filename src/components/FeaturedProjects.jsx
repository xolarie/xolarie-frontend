import { SectionWrapper } from "../hoc";
import work from "/images/work-history.png";

const FeaturedProjects = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex gap-3 my-5 bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] px-8 py-3 rounded-2xl border border-[#155DFC]">
        <img src={work} alt="" />
        <p>Featured work</p>
      </div>
      <h1 className="text-4xl w-[240px] text-center">Projects we’re  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#155DFC] via-[#8529F3] to-[#E2017C]">proud of</span></h1>
      <p className="text-center text-[#4F4F4F] my-5 text-[14px]">Explore our recent work and see how we’ve helped businesses achieve their digital goals.</p>
    </div>
  );
};

const FeaturedProjectsWrapper = SectionWrapper(
  FeaturedProjects,
  "featuredprojects"
);
export { FeaturedProjectsWrapper };
