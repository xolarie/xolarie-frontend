import { useMediaQuery } from 'react-responsive'
import CTA from "/images/CTA.png"
import CTAdesktop from "/images/CTAdesktop.png"

const Cta = () => {
    
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div>
          {isMobile ?  <div className="relative py-14">
                  <img src={CTA} alt="" />
                  <button className="absolute bottom-0 h-14 w-[45vw] mb-16">
                  </button>
                </div> : <div className="relative py-14">
                  <img src={CTAdesktop} alt="" />
                  <button className="absolute bottom-0 h-14 w-[45vw] mb-16">
                  </button>
                </div>}
    </div>
  )
}

export default Cta