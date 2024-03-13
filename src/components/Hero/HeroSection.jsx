import TrendPlants from "../TrendPlants/TrendPlants"
import Hero from "./Hero"

function HeroSection() {
    return (
        <div className="w-full h-[270vh] bg-[url('/bg-vas-bunga.png')] bg-cover bg-bottom overflow-hidden relative">
            <Hero />
            <TrendPlants />
        </div>
    )
}

export default HeroSection