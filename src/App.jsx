import CustomerSection from "./components/CustomerSection/CustomerSection"
import FooterSection from "./components/FooterSection/FooterSection"
import HeroSection from "./components/Hero/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import OurBestSection from "./components/OurBestSection/OurBestSection"
import TopSelling from "./components/TopSelling/TopSelling"
function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopSelling />
      <CustomerSection />
      <OurBestSection />
      <FooterSection /> 
    </div>
  )
}

export default App
