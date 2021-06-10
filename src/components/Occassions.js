import React from 'react'
import Fade from 'react-reveal/Fade';

function Occassions() {
    return (
        <div className="occassions grid-cols-1 grid lg:grid-cols-2 bg-top bg-cover bg-white-wedding">
            <div className="px-5 py-10 md:p-10 lg:p-20 flex flex-col md:ml-36 items-center md:items-start">
                <Fade left>
                    <div
                        className="pb-2 tracking-widest title lg:px-5 font-lato border-b-1 border-black text-lg text-center lg:self-start">
                        YOUR OCCASIONS</div>
                    <div className="text-center text-2xl lg:text-left lg:self-start pb-10 lg:text-4xl mt-6 font-display-fair">
                        Our services call occassions
                </div>
                </Fade>
                <div className="mx-auto md:ml-0 grid-cols-2 grid self-start font-lato font-light">
                    
                        <ul className="list-inside list-disc pr-1 md:pr-11">
                            <li className="pb-2">Weddings</li>
                            <li className="pb-2">Engagement parties</li>
                            <li className="pb-2">Bridal Showers</li>
                            <li className="pb-2">Anniversaries</li>
                            <li className="pb-2">Birthdays</li>
                            <li className="pb-2">Baby showers</li>
                            <li className="pb-2">Proms</li>
                        </ul>
                    
                    <div className="div">
                        <Fade right>
                            <ul className="list-inside list-disc">
                                <li className="pb-2">Corporate events</li>
                                <li className="pb-2">Themed parties</li>
                                <li className="pb-2">Bar & Bat Mitzvahs</li>
                                <li className="pb-2">Galas</li>
                                <li className="pb-2">Fundraising events</li>
                            </ul>
                        </Fade>
                        <Fade bottom>
                            <button
                                className="mt-4 text-sm md:text-base px-2 md:px-5 py-2 self-start bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                                LEARN MORE
                        </button>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Occassions
