import React from "react";

function Brand () {
    return (
        <div className="relative flex justify-center items-center gap-5 pt-10">
                <button className="relative flex justify-center items-center bg-white border focus:outline-non shadow text-black rounded-lg focus:ring ring-gray-200 group">
                    <p className="font-semibold px-20">Brand</p>
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
                    <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-sm mt-1 rounded cursor-pointer ">
                        <ul className="text-left border rounded">
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">Audi</li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">BMW</li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">Ford</li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">Hyundi</li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">Merc</li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">Toyota</li>
                            <li className="px-4 py-2 hover:bg-gray-100 border-b">VW</li>
                        </ul>
                    </div>
                </button>
        </div>
    )
}

export default Brand;

