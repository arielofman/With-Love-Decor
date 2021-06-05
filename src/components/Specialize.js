import React from 'react'
import Fade from 'react-reveal/Fade';

function Specialize() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 bg-calm-peach">
            <Fade left>
                <img className="hidden md:block md:w-3/4 lg:w-8/12 h-auto justify-self-end pr-10" src="images/bouquet.jpg" alt="" />
            </Fade>
            <div className="mx-auto flex flex-col justify-self-start text-center md:pl-10">
                <Fade top>
                    <div className="tracking-widest title pb-4 px-5 mx-14 font-lato border-b-1 border-black text-lg text-center">WHY
                    CHOOSE US?
                </div>
                </Fade>
                <Fade right>
                    <div className="text-4xl my-5 font-display-fair">we <span className="italic">specalize</span> in many fields</div>
                    <div className="flex mb-2">
                        <img className="mx-4 w-4 h-4 place-self-center" src="images/bullet.png" alt="bullet" />
                        <div className="font-lato font-thin">Event decor & event planning</div>
                    </div>
                    <div className="flex mb-2">
                        <img className="mx-4 w-4 h-4 place-self-center" src="images/bullet.png" alt="bullet" />
                        <div className="font-lato font-thin">Custom designs</div>
                    </div>
                    <div className="flex mb-2">
                        <img className="mx-4 w-4 h-4 place-self-center" src="images/bullet.png" alt="bullet" />
                        <div className="font-lato font-thin">Floral arrangements </div>
                    </div>
                    <div className="flex mb-2">
                        <img className="mx-4 w-4 h-4 place-self-center" src="images/bullet.png" alt="bullet" />
                        <div className="font-lato font-thin">Gift packing & wrapping</div>
                    </div>
                    <div className="flex mb-2">
                        <img className="mx-4 w-4 h-4 place-self-center" src="images/bullet.png" alt="bullet" />
                        <div className="font-lato font-thin">Guest favours</div>
                    </div>
                    <div className="flex mb-2">
                        <img className="mx-4 w-4 h-4 place-self-center" src="images/bullet.png" alt="bullet" />
                        <div className="font-lato font-thin">Gifts for yourself and loved ones</div>
                    </div>
                    </Fade>
                    <Fade bottom>
                    <button
                        className="m-4 px-5 py-2 self-start bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                        MORE
                </button>
                </Fade>
            </div>

        </div>
    )
}

export default Specialize
