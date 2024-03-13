
function FooterSection() {
    return (
        <div className="w-full bg-[#222C1D] flex justify-between p-10">
            <div className="w-[30%] text-white">
                <div className="flex items-center">
                    <img src="/logo-plant.png" alt="" className="w-20 h-20" />
                    <h1 className="ms-5 text-3xl font-bold">Plantopia</h1>
                </div>
                <p className="mt-2">Dive into a lush paradise of vibrant plants and botanical wonders. Experience top-quality selections and expert guidance in nurturing your indoor oasis.</p>
            </div>
            <div className="w-[30] text-white">
                <h1 className="text-xl font-semibold mb-2">Quick Links</h1>
                <ul className="flex flex-col gap-y-1">
                    <li>Home</li>
                    <li>Plant type</li>
                    <li>More</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="w-[30%]">
                <h1 className="text-white mb-3 text-xl font-semibold">For Every Update.</h1>
                {/* <div className="border-2 border-white inline py-2 px-1 rounded-md">
                    <input type="email" placeholder="Enter your email" className="py-1 me-1" />
                    <button className="bg-white text-black px-5 py-1 rounded-md">Subscribe</button>
                </div> */}
                <div className="w-full border-2 border-white p-1 rounded-md flex justify-between">
                    <input type="email" placeholder="Enter your email" className="py-1 me-1 bg-[#222C1D] text-white block w-full"/>
                    <button className="bg-white text-black px-5 py-1 rounded-md font-medium">Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default FooterSection