import { LuShoppingBag } from "react-icons/lu";
function CardTrendPlant({ content, item }) {
    console.log({prop1:item});
    return (
        <div className="w-full h-[23rem] px-10 mb-32">
            <div className="relative w-full h-full p-5 backdrop-blur-sm bg-white/10 rounded-3xl flex">
                {content === 1 ? (
                    <>
                        <ImgContent item={item}/>
                        <TextContent item={item}/>
                    </>
                ) : (
                    <>
                        <TextContent item={item}/>
                        <ImgContent item={item}/>
                    </>
                )}

            </div>
        </div>
    )
}

function ImgContent({item}) {
    console.log({prop2:item});
    return (
        <div className="w-[40%] h-full">
            <img src={`${item.image}`} alt="" className="w-full h-full xxl-img object-contain -translate-y-10" />
        </div>
    )
}

function TextContent({item}) {
    return (
        <div className="w-[60%] h-full flex justify-center flex-col ps-28 text-white z-10">
            <h1 className="text-3xl font-semibold mb-2">{item.title}</h1>
            <p className="text-md font-medium mb-3">{item.description}</p>
            <h3 className="text-3xl font-semibold mb-3">{item.price}</h3>
            <div className="flex">
                <button className="px-14 me-3 py-1 border-2 border-white rounded-md text-lg font-medium hover:bg-white hover:text-black">Explore</button>
                <LuShoppingBag className="text-5xl px-2 py-1 border-2 border-white rounded-md hover:bg-white hover:text-black cursor-pointer" />
            </div>
        </div>
    )
}


export default CardTrendPlant