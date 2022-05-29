import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Link from 'next/link'
import Brand from "../components/Brand";


export default function RecommenderSystem() {
    return (
        <div className="pl-8 pr-8">
            <Navbar />

            <div className="flex justify-center items-center flex-col pt-20 text-center text-yellow-900 font-bold text-4xl space-y-2">
                <h1 className="text-center text-6xl  font-bold pb-5">AI-based Car Recommender System</h1>
                <div className="justify-center items-center text-black text-center font-semibold text-lg">
                    <h1>AI-based Car Recommender System is a great place to start planning your new car purchase.</h1>
                    <h3>Tell us a few things about you and your preferences, and we`ll suggest the cars that suit you the best.</h3>
                </div>
            </div>

            <Brand />

            <div className="flex justify-around items-center mt-5 shadow-lg rounded-lg">
                <div className="col-md-4 card">
                    <div className="card-body rounded p-5">
                        <div className="form-group">
                            <label htmlFor="Mileage" className="font-semibold">Mileage :</label>
                            <input className="justify-center items-center p-2 ml-10 form-control bg-yellow-100 border border-yellow-500 rounded-lg"/>
                        </div>

                        <div className="form-group pt-5">
                            <label htmlFor="Tax" className="font-semibold">Tax :</label>
                            <input className="justify-center items-center ml-20 p-2 form-control bg-yellow-100 border border-yellow-500 rounded-lg"/>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 card">
                    <div className="card-body rounded p-5">
                        <div className="form-group">
                            <label htmlFor="Mpg" className="font-semibold">Mpg (Miles-per-gallon):</label>
                            <input className="justify-center items-center p-2 ml-10 form-control bg-yellow-100 border border-yellow-500 rounded-lg"/>
                        </div>
                            
                        <div className="form-group pt-5">
                            <label htmlFor="EngineSize" className="font-semibold">Engine size :</label>
                            <input className="justify-center items-center ml-20 p-2 form-control bg-yellow-100 border border-yellow-500 rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="p-10">
                    <button className="relative flex justify-center items-center bg-white border focus:outline-non shadow text-black rounded-lg focus:ring ring-gray-200 group">
                        <p className="font-semibold px-20">Year</p>
                        <span className="border-l p-3 hover:bg-gray-100">
                        <svg 
                            class="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M19 9l-7 7-7-7">
                                </path>
                            </svg>
                        </span>
                    </button>
                
                    <button className="mt-5 relative flex justify-center items-center bg-white border focus:outline-non shadow text-black rounded-lg focus:ring ring-gray-200 group">
                        <p className="font-semibold px-20">Fuel Type</p>
                        <span className="border-l p-3 hover:bg-gray-100">
                        <svg 
                            class="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M19 9l-7 7-7-7">
                                </path>
                        </svg>
                        </span>
                    </button>

                    <button className="mt-5 relative flex justify-center items-center bg-white border focus:outline-non shadow text-black rounded-lg focus:ring ring-gray-200 group">
                        <p className="font-semibold px-20">Transmission</p>
                        <span className="border-l p-3 hover:bg-gray-100">
                        <svg 
                            class="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    stroke-width="2" 
                                    d="M19 9l-7 7-7-7">
                                </path>
                        </svg>
                        </span>
                    </button>
                </div>

                <div className="relative flex justify-center items-center gap-5 pt-5">
                    <button className="px-20 relative flex justify-center items-center bg-yellow-900 border shadow text-white rounded-lg focus:ring ring-gray-200">
                        <p className="justify-center items-center font-semibold p-3 ">Search</p>
                    </button>
                </div>

                <div className="relative flex justify-center items-center gap-5 pt-5 pb-10 shadow-md">
                    <button className="px-20 relative flex justify-center items-center bg-amber-700 border shadow text-white rounded-lg focus:ring ring-gray-200">
                        <p className="justify-center items-center font-semibold p-3 ">Reset</p>
                    </button>
                </div>
                
                <div className="items-center justify-center pt-10">
                    <p className="text-2xl font-bold text-center">Search Results:</p>
                </div>
                <div className="pt-5 relative flex justify-center items-center">
                    <p className="border border-amber-900 text-center p-2 px-20 rounded-lg">Rp </p>
                </div>

                <div className="text-center cursor-pointer pt-5">
                    <Link href="/Result">
                        <a className="font-semibold underline decoration-blue-700 text-blue-700">See recommendation</a>
                    </Link>
                </div>
                
            </div>
        


            <Footer />
        </div>
    )
}

