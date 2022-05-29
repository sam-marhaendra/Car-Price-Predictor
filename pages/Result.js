import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Link from 'next/link'

export default function Result() {
    return (
        <div className="pl-8 pr-8">
            <Navbar />
            <div className="pt-10">
                <h1 className="text-center text-6xl pt-10 font-bold pb-5 text-yellow-900">AI-based Car Recommender System</h1>
                <div className="justify-center items-center text-black text-center font-semibold text-lg">
                    <h1>Your Personalized Top Recommendations</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

