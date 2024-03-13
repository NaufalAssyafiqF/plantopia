import CardCustomer from "./CardCustomer"
import { dataCustomer } from "../../data/dataCustomer"

function CustomerSection() {
    return (
        <div className="bg-[#1B2316] pb-32 px-10 pt-10">
            <h1 className="text-5xl text-white text-center mb-28 my-border">Customer Review</h1>
            <div className="flex justify-between">
              {dataCustomer.map((item, index) => (
                <CardCustomer key={index} item={item} />
              ))}
            </div>
        </div>
    )
}

export default CustomerSection