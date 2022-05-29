import React from 'react'
import {Zoom} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"

const Slideshow = () => {
    const images = [
                "images/mobil1.jpg",
                "images/mobil2.jpg",
                "images/mobil3.jpg",
    ];
    const zoomInProperties = {
        indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
        prevArrow: (
            <div style={{ width: "30px", cursor: "pointer" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#2e2e2e"
                >
                   <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /> 
                </svg>
            </div>
        ),
        nextArrow: (
            <div style={{ width: "30px", cursor: "pointer" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#2e2e2e"
                >
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                </svg>
            </div>
        ),
    };

    return (
        <div className="pt-10">
            <h1 className="text-center text-6xl pt-10 font-bold pb-5 text-yellow-900">AI-based Car Recommender System</h1>
            <div className="flex justify-center items-center text-black text-center font-semibold text-lg">
                <h1>This is a web based application that can give recommendation regarding car price and its specifications.</h1>
            </div>

            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} className="flex justify-center w-full h-full pt-10" >
                        <img
                            className="w-2/5 object-cover rounded-lg shadow-xl"
                            src={each}
                        
                        />
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default Slideshow