import { useParams } from "react-router-dom"
import { Faqs, Internship, JobsOpening, Recruitment } from "./Career"

const careerList = {
  faqs: Faqs,
  recruitment: Recruitment,
  internship: Internship,
  "job-opening": JobsOpening,
}


const Career = () => {

  const {careerName} = useParams()

  const CareerComponent = careerList[careerName]

  if (!CareerComponent) {
    return <div className="text-center text-red-500 h-[100vh]">Career Not Found</div>;
  }

  return (
    <div>
      <CareerComponent />
    </div>
  )
}

export default Career