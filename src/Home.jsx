import { FaqsWrapper } from "./components/home/Faqs"
import { FeaturedProjectsWrapper } from "./components/home/FeaturedProjects"
import {HeroWrapper } from "./components/home/Hero"
import { HomePricingWrapper } from "./components/home/HomePricing"
import { ProcessWrapper } from "./components/home/Process"
import { ServicesWrapper } from "./components/home/Services"
import { TestimonialsWrapper } from "./components/home/Testimonials"
import { TrustedCompWrapper } from "./components/home/TrustedComp"


const Home = () => {
  return (
    <div className="flex flex-col ">
        <HeroWrapper />
        <ServicesWrapper />
        <TrustedCompWrapper />
        <ProcessWrapper />
        <FeaturedProjectsWrapper />
        <HomePricingWrapper />
        <FaqsWrapper />
        <TestimonialsWrapper />
    </div>
  )
}

export default Home