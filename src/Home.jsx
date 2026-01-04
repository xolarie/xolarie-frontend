import {HeroWrapper } from "./components/Hero"
import { ServicesWrapper } from "./components/Services"
import { TrustedCompWrapper } from "./components/TrustedComp"


const Home = () => {
  return (
    <div className="flex flex-col ">
        <HeroWrapper />
        <ServicesWrapper />
        <TrustedCompWrapper />
    </div>
  )
}

export default Home