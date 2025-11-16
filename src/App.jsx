import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useMediaQuery } from 'react-responsive'
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Home from "./Home";
import Footer from "./components/Footer";
import Services from "./pages/services";
import Solutions from "./pages/solutions";
import Resources from "./pages/resources";
import Career from "./pages/career";
import Aboutus from "./pages/aboutus"

function App() {

  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <Router>
      {isMobile ? <MobileHeader /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services/:serviceName" element={<Services />} />
        <Route path="/solutions/:solutionName" element={<Solutions />} />
        <Route path="/resources/:resourceName" element={<Resources />} />
        <Route path="/careers/:careerName" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
