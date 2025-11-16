import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div>
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
    </div>
  );
};

export default Footer;
