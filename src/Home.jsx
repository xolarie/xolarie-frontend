import {HeroWrapper } from "./components/Hero"
import { ServicesWrapper } from "./components/Services"


const Home = () => {
  return (
    <div className="flex flex-col ">
        <HeroWrapper />
        <ServicesWrapper />
    </div>
  )
}

export default Home