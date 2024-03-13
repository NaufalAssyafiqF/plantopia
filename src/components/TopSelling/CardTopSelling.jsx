import { LuShoppingBag } from "react-icons/lu"
function CardTopSelling({item}) {
    return (
        <div className="w-[30%] h-[25rem]">
            <div className="relative w-full h-full">
                <div className="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-white/10 rounded-3xl">
                    <img src={`${item.image}`} alt="" className="w-full h-[83%] scale-125 absolute top-0 left-0 -translate-y-10" />
                    <div className="text-white absolute bottom-2 left-7 pe-7">
                        <h1 className="text-xl font-medium mb-1">{item.title}</h1>
                        <p className="text-md brightness-75 leading-5 h-[4rem] overflow-scroll overflow-x-hidden custom-scrollbar">{item.description}</p>
                        <div className="flex items-center">
                            <h1 className="text-xl font-medium">{item.price}</h1>
                            <div className="border border-white ms-5 p-1 rounded-md mt-2 hover:bg-white hover:text-black"><LuShoppingBag className="text-xl " /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTopSelling