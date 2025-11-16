import Hero from "./components/Hero"
import { AboutWrapper,  ServicesWrapper, SolutionsWrapper, ResourcesWrapper, ContactWrapper } from "./components"


const Home = () => {
  return (
    <div>
        <Hero />
        <div className="bg-primary1">
        <AboutWrapper />
        <ServicesWrapper />
        <SolutionsWrapper />
        <ResourcesWrapper />
        <div>
        <ContactWrapper />
        </div>
        </div>
    </div>
  )
}

export default Home