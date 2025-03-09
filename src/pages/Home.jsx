import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import tesla from "../assets/images/tesla.png";
import { Globe, CircleHelp, CircleUserRound, Star } from 'lucide-react';
import car1 from "../assets/images/car1.png"
import car2 from "../assets/images/car2.png"
import car3 from "../assets/images/car3.png"
import car4 from "../assets/images/car4.png"
import cyber from "../assets/images/cybertruck.png"
import car5 from "../assets/images/car5.png"
import car6 from "../assets/images/car6.png"
import car7 from "../assets/images/car7.png"
import car8 from "../assets/images/car8.png"
import car9 from "../assets/images/car9.png"
import car10 from "../assets/images/car10.png"
import teslavdo from "../assets/video/teslavdo.mp4"
import Footer from '../Components/Footer/Footer.jsx';








function Home() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />

            <div className='relative overflow-x-hidden '>
                <img src={car1} alt="" />
            </div>
            <div className=" absolute top-0 flex justify-between items-center   overflow-x-hidden text-white  w-full mt-6  ">

                <div>
                    <img width={100} src={tesla} className="invert" alt="" />
                </div>
                <div className=' flex gap-4 font-bold text-sm'>
                    <span>Vehicles</span>
                    <span>Energy</span>
                    <span>Charging</span>
                    <span>Discover</span>
                    <span>Shop</span>
                </div>

                <div className='flex gap-4'>
                    <div>
                        <CircleHelp />
                    </div>
                    <div>

                        <Globe />
                    </div>
                    <div>
                        <CircleUserRound />
                    </div>


                </div>


            </div>

            <div className='absolute  top-32 left-96 ml-34  '>

                <h1 className='text-6xl text-white font-semibold'>Model 3</h1>
                <span className='mt-6 -ml-4 text-2xl   text-white font-bold'><u>0% APR: Limited-Time Only</u></span>
                <div className='flex gap-6'>
                    <button
                        type="button"
                        className="px-26 py-2 -ml-30 text-sm text-center  mt-12  font-bold  text-white bg-blue-600 rounded-sm"
                    >
                        Oder Now
                    </button>
                    <button
                        type="button"
                        className="px-26 py-2  text-sm text-center  mt-12  font-bold  text-black bg-white rounded-sm"
                    >
                        Learn More
                    </button>
                </div>
            </div>
            <div className='relative'>
                <img src={car2} alt="" />
                <div className=' absolute top-44 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold'>Model Y</h1>
                    <span className='mt-6 ml-12 text-2xl   text-white font-bold'><u>$299/mo Leasing</u></span>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-30 text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car3} alt="" />
                <div className=' absolute top-28 left-80 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold'>New Model Y</h1>
                    <span className='mt-6 -ml-8 text-2xl   text-white font-bold'><u>$7,500 Federal Tax Credit at Purchase</u></span>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-30 text-sm text-center  mt-96 font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car4} alt="" />
                <div className=' absolute top-28 left-80 ml-34  '>

                    <img src={cyber} width={300} alt="" className='ml-4' />
                    <span className='mt-6 ml-4 text-2xl   text-white font-bold'><u>1.99% APR: Limited-Time Only</u></span>

                    <div className="flex gap-6">

                        <div className="flex flex-col items-center text-white -ml-24  mt-80 gap-1">
                            <div className="flex gap-1 ml-48">
                                <Star size={22} fill="white" />
                                <Star size={22} fill="white" />
                                <Star size={22} fill="white" />
                                <Star size={22} fill="white" />
                                <Star size={22} fill="white" />
                            </div>
                            <span className="mt-1 text-xs font-bold ml-48">Overall NHTSA Safety Rating</span>
                        </div>


                        <button
                            type="button"
                            className="px-24 py-3 -ml-96 text-sm text-center mt-96 font-bold text-gray-500 bg-black  hover:bg-gray-400"
                        >
                            Order Now
                        </button>
                        <button
                            type="button"
                            className="px-24 py-3 text-sm text-center mt-96 font-bold text-gray-500 bg-black  hover:bg-gray-400"
                        >
                            Learn More
                        </button>
                    </div>

                </div>

            </div>
            <div className='relative'>
                <img src={car5} alt="" />
                <div className=' absolute top-44 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold'>Model X</h1>
                    <span className='mt-6 -ml-4 text-2xl   text-white font-bold'><u>Free Supercharging Included</u></span>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-30 text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car6} alt="" />
                <div className=' absolute top-44 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold'>Model S</h1>
                    <span className='mt-6 -ml-4 text-2xl   text-white font-bold'><u>Free Supercharging Included</u></span>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-30 text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car7} alt="" />
                <div className=' absolute top-44 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold -ml-12'>Solar Panels</h1>
                    <span className='mt-6 -ml-16 text-2xl   text-white font-bold'><u>Schedule a Virtual Consultation</u></span>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-34 text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car8} alt="" />
                <div className=' absolute top-44 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold -ml-12'>Solar Roof</h1>
                    <span className='mt-6 -ml-30 text-2xl   text-white font-bold'>Produce Clean Energy From Your Roof</span>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-40 text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car9} alt="" />
                <div className=' absolute top-38 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold -ml-12'>Powerwall</h1>
                    <div className='flex gap-6 '>
                        <button
                            type="button"
                            className="px-26 py-3 -ml-40 text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Oder Now
                        </button>
                        <button
                            type="button"
                            className="px-26 py-2  text-sm text-center  mt-96  font-bold  text-black bg-white rounded-sm"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

            </div>
            <div className='relative'>
                <img src={car10} alt="" />
                <div className=' absolute top-38 left-96 ml-34  '>

                    <h1 className='text-6xl text-white font-semibold -ml-12'>Accessories</h1>
                    <div className='flex gap-6 justify-center   '>
                        <button
                            type="button"
                            className="px-26 py-3  text-sm text-center  mt-96  font-bold  text-white bg-blue-600 rounded-sm"
                        >
                            Shop Now
                        </button>

                    </div>
                </div>

            </div>
            <div className="relative w-full mx-auto p-4 h-[400px] overflow-hidden">

                <video
                    className="absolute inset-0 w-full h-full object-cover overflow-hidden"
                    autoPlay
                    loop
                    muted

                >
                    <source src={teslavdo} type="video/mp4" />

                </video>

                <div className="absolute top-1/2 left-10  flex flex-col justify-center items-start">

                    <h1 className="text-4xl text-white font-semibold">We Are Tesla</h1>


                    <button
                        type="button"
                        className="mt-4 px-12 py-3 text-sm font-bold text-black bg-white rounded-sm"
                    >
                        Join Tesla
                    </button>
                </div>

            </div>
            <div>
                <Footer />
            </div>
            




        </div>
    )
}

export default Home
