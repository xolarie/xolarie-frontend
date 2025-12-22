import Hero from "./components/Hero"
import { ServicesWrapper } from "./components/Services"


const Home = () => {
  return (
    <div className="flex flex-col px-5 md:px-2 lg:px-10 xl:px-14 2xl:px-24">
        <Hero />
        <ServicesWrapper />
    </div>
  )
}

export default Home