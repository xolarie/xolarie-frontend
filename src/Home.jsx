import { FeaturedProjectsWrapper } from "./components/FeaturedProjects"
import {HeroWrapper } from "./components/Hero"
import { HomePricingWrapper } from "./components/HomePricing"
import { ProcessWrapper } from "./components/Process"
import { ServicesWrapper } from "./components/Services"
import { TrustedCompWrapper } from "./components/TrustedComp"


const Home = () => {
  return (
    <div className="flex flex-col ">
        <HeroWrapper />
        <ServicesWrapper />
        <TrustedCompWrapper />
        <ProcessWrapper />
        <FeaturedProjectsWrapper />
        <HomePricingWrapper />
    </div>
  )
}

export default Home