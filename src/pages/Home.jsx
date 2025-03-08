import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import tesla from "../assets/tesla.png";
import { Globe } from 'lucide-react';
import { CircleHelp } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import car1 from "../assets/car1.png"


function Home() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />

            <div className='relative overflow-x-hidden '>
                <img src={car1} alt="" />
            </div>
            <div className=" absolute top-0 flex justify-between items-center overflow-x-hidden text-white  w-full mt-6  ">

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

                <h1 className='text-7xl text-white font-bold'>Model 3</h1>
                <span className='mt-6 -ml-4 text-2xl   text-white font-bold'><u>0% APR: Limited-Time Only</u></span>
                <div className='flex gap-6'>
                    <button
                        type="button"
                        className="px-26 py-2 -ml-30 text-sm text-center  mt-12  font-bold  text-white bg-blue-700 rounded-sm"
                    >
                       Oder now
                    </button>
                    <button
                        type="button"
                        className="px-26 py-2  text-sm text-center  mt-12  font-bold  text-black bg-white rounded-sm"
                    >
                       Oder now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
