import CardTopSelling from "./CardTopSelling"
import { dataTopSelling } from "../../data/dataTopSelling"
function TopSelling() {
    return (
        <div className="w-full bg-[#1B2316] px-10 pt-20 pb-32">
            <div>
                <h1 className="text-5xl text-white text-center mb-32 my-border">Our Top Selling</h1>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-28">
                    {dataTopSelling.map((item, index) => (
                        <CardTopSelling key={index} item={item} />
                    ))}
                     
                </div>
            </div>  
        </div>
    )
}

export default TopSelling