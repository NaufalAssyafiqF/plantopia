import CardTrendPlant from "./CardTrendPlant"
import { dataPlants } from "../../data/dataTrendPlants"

function TrendPlants() {
    return (
        <div>
            <h1 className="text-5xl text-white text-center mb-32 my-border">Our Trendy Plants</h1>
            {dataPlants?.map((item, index) => (
                <CardTrendPlant key={index} item={item} content={index+1}/>
            ))}
        </div>
    )
}

export default TrendPlants