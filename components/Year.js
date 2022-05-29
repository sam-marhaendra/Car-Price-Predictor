import React from 'react';
import DatePicker from "react-datindex.jsepicker";
import "react-datepicker/dist/react-datepicker.css";
  
function GfgDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <div className="relative flex justify-center items-center gap-5 pt-10">
        <button className="relative flex justify-center items-center bg-white border focus:outline-non shadow text-black rounded-lg focus:ring ring-gray-200 group">
            <p className="text-xl font-semibold px-20">Brand</p>
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
                <DatePicker selected={startDate} onChange=
                    {(date) => setStartDate(date)} />
            </div>
        </button>
    </div>
  );
}