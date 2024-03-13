import { BsFillCaretRightFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
function Hero() {
  return (
    <div id="hero" className="w-full h-screen relative">
          <div className="w-[60%] text-white translate-y-28 px-10 flex flex-col gap-y-3">
            <h1 className="text-8xl font-semibold">Breath Natureal</h1>
            <p className="text-xl font-medium">Escape to a world of natural wonder. Let our handpicked botanical treasures bring the refreshing essence of nature into your life.</p>
            <div className="text-2xl font-medium flex gap-x-3">
              <button className="px-8 py-1 border-white border-2 rounded-lg hover:bg-white hover:text-black">Explore</button>
              <div className="flex justify-center items-center gap-x-2 cursor-pointer hover:brightness-90">
                <BsFillCaretRightFill className="rounded-full border-2 border-white text-3xl" />
                <h3>Live Demo...</h3>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 right-10 w-[20%] h-[20rem] ">
            <div className="relative w-full h-full">
              <div className="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-white/10 rounded-3xl">
                <img src="/tanaman1.png" alt="" className="w-full h-full scale-125 absolute top-0 left-0 -translate-y-10" />
                <div className="text-white absolute bottom-7 left-7">
                  <p className="text-base brightness-75">Trendy House Plant</p>
                  <h1 className="text-xl font-medium mb-1">Calathea Plant</h1>
                  <button className="text-md font-medium border-2 border-white rounded-md px-5 py-1 hover:bg-white hover:text-black">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 w-[35%] h-[13rem] overflow-hidden">
            <div className="relative w-full h-full backdrop-blur-sm bg-white/10 rounded-3xl">
              <div className="w-full h-full absolute top-0 left-0 ">
                <div className="flex items-center gap-x-5 p-5">
                  <img src="/profile-female1.png" alt="" />
                  <div className="">
                    <h1 className="text-white font-semibold text-lg">Natalya Ivanova</h1>
                    <div className="text-yellow-500 flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                  </div>
                </div>
                <p className="text-white px-5 text-justify">An oasis for plant lovers! The store offers a wide variety of healthy plants and expert advice. I`m impressed by the quality and care put into each plant. Highly recommend!</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Hero