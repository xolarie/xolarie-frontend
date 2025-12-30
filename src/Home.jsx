import Hero from "./components/Hero"
import { ServicesWrapper } from "./components/Services"


const Home = () => {
  return (
    <div className="flex flex-col px-5 py-16 md:px-14 lg:px-16 xl:px-20 2xl:px-24">
        <Hero />
        <ServicesWrapper />
    </div>
  )
}

export default Home