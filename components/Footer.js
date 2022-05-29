import React from "react";

function Footer () {
    return (
        <div className="w-full bg-yellow-200 mt-20">
            <div className="text-2xl font-bold justify-center items-center text-center pt-10">
                <p className="text-center justify-center justify-around">
                    About Us</p> 
            </div>
            <div className="flex justify-center items-center space-x-2 w-full justify-around mt-10">
                <img src="/hendra.jpg" width={200} height={200} className="rounded-full"/>
                <img src="/rizky.jpg" width={200} height={200} className="rounded-full"/>
                <img src="/haning.jpg" width={200} height={200} className="rounded-full"/>
                <img src="/dascha.jpg" width={200} height={200} className="rounded-full"/>
            </div>
            <div className="flex justify-center items-center space-x-2 w-full justify-around mt-2 font-bold text-l">
                <p className="text-center justitfy-center justify-around">Samatha M P</p>
                <p className="text-center justitfy-center justify-around">Rizky A R</p>
                <p className="text-center justitfy-center justify-around">Haning J P</p>
                <p className="text-center justitfy-center justify-around">Dascha A W</p>
            </div>
            <div className="text-l justify-center items-center text-center p-10">
                <p className="text-center justify-center justify-around">
                    Information Engineering</p>
                <p>Universitas Gadjah Mada</p> 
            </div>
        </div>
    )
}

export default Footer;