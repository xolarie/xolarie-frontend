import { AboutWrapper } from "../../components/About/About"
import { TeamMemberWrapper } from "../../components/About/TeamMember"


const AboutUs = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <AboutWrapper />
      <TeamMemberWrapper />
    </div>
  )
}

export default AboutUs