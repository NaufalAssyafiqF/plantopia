import { FaStar } from "react-icons/fa";

function CardCustomer({item}) {
    return (
        <div className="w-[30%] backdrop-blur-sm bg-white/10 rounded-3xl p-5">
            <div className="flex">
                <img src={`${item.image}`} alt="" />
                <div className="flex flex-col justify-center ms-5">
                    <h1 className="text-xl font-semibold text-white">{item.name}</h1>
                    <div className="flex text-yellow-400 gap-x-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

            </div>
            <p className="mt-2 text-justify text-white">{item.comment}</p>
        </div>
    )
}

export default CardCustomer