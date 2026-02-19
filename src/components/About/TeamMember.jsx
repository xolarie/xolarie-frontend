import { TeamMembers } from "../../constants";
import { SectionWrapper } from "../../hoc";
import groupIcon from "/images/user-group.png";

const TeamMember = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-3 px-3 my-6 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4 justify-center items-center w-44">
        <img src={groupIcon} alt="" className="h-5 w-5" />
        <p className="text-[14px]">Our Team</p>
      </div>
      <h1 className="font-semibold text-3xl">
        Team{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D57FB] via-[#9E1BF1] to-[#E40079]">
          Members
        </span>
      </h1>
      <p className="text-[#4F4F4F] text-lg text-center">
        Product minded builders shaping every solution
      </p>
      <div>
        <ul className="flex flex-col gap-12 w-full mb-16 md:grid md:grid-cols-3 md:gap-3">
          {TeamMembers.map((member, i) => (
            <li key={i} className="flex flex-col items-center justify-center shadow-lg rounded-xl">
              <img src={member.image} alt="" className="rounded-t-xl" />
              <div className="px-4">
                <h4 className="font-bold text-3xl mt-4 md:text-xl">{member.name}</h4>
                <h6 className="my-4 text-[#3B3F5C] md:text-[10px]">{member.role}</h6>
                <p className="text-[#3B3F5C] md:text-[12px]">{member.description}</p>
                <button className="my-4  w-full py-4 rounded-xl text-white bg-gradient-to-r from-[#931DFA] to-[#225BFB] md:py-2 md:text-[10px]">
                  Learn more
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TeamMemberWrapper = SectionWrapper(TeamMember, "teamMember");

export { TeamMemberWrapper };
