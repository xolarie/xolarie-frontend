import {HeroWrapper } from "./components/Hero"
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
    </div>
  )
}

export default Home