import React from 'react';
import {Transition} from "@headlessui/react";
import Link from 'next/link'

function Navbar(){
    return (
        <div>
            {/* for main nav-container */}
            <nav className='shadow-md' for container> 
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        {/* first block section */}
                        <div className='flex  mx-20 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-bold cursor-pointer'>
                                    <span className='text-yellow-500 text-4xl '>C</span>
                                    <span className='text-black-900 text-3xl'>ar</span>
                                    <span className='text-yellow-900 text-4xl'>P</span>
                                    <span className='text-black-900 text-3xl'>red</span>
                                </h1>
                            </div>
                           
                            <div className='hidden md:block'>
                                <div className='cursor-pointer text-yellow-900 hover:text-white hover:bg-yellow-900 shadow-md bg-orange-100 rounded-lg font-bold px-10 py-2 text-md'>
                                    <Link href='/RecommenderSystem'><a>Recommender System</a></Link>
                                </div>
                            </div>
                            <div className='hidden md:block'>
                                <div className='cursor-pointer text-yellow-900 hover:text-yellow font-bold px-10 py-2 text-md'>
                                    <Link href="/">
                                        <a>About Us</a>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar