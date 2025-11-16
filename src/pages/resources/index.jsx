import { useParams } from "react-router-dom"
import { Blog, TechNews } from "./Resources"

const resourcesList = {
    blog: Blog,
    "tech-news": TechNews
}

const Resources = () => {
const {resourceName} = useParams()

const ResourcesComponent = resourcesList[resourceName]

if (!ResourcesComponent) {
  return <div className="text-center text-red-500 h-[100vh]">Resouces Not Found</div>;
}

  return (
    <div>
      <ResourcesComponent />
    </div>
  )
}

export default Resources