import React from 'react'
import Fade from 'react-reveal/Fade';

function Featured() {
    return (
        <div className="services flex flex-col bg-light-peach pb-10">
            <Fade left>
            <div className="mt-10 mx-auto font-formal-script text-2xl md:text-3xl pb-5 text-black border-b-1 border-black">Featured Journal
            </div>
            </Fade>
            <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 justify-items-center">
                <Fade left>
                    <div className="flex flex-col">
                        <img className="p-14 pb-0" src="images/decor.jpg" alt="decor" />
                        <div className="mt-5 font-jose text-2xl text-chocolate text-center tracking-wide">EVENT DECOR</div>
                        <div className="px-14 mt-3 font-lato text-grey-brown leading-5 text-center mb-4">
                            Extraordinary decor services for events to make the special day cherish forever. Our premium event decor
                            services ensure a spectacular occasion for our clients stress-free.
                    </div>
                        <button
                            className="px-5 py-2 mx-auto self-end bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                            DECOR
                    </button>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="flex flex-col">
                        <img className="p-14 pb-0" src="images/floral.jpg" alt="decor" />
                        <div className="mt-5 font-jose text-2xl text-chocolate text-center tracking-wide">FLORAL</div>
                        <div className="px-14 mt-3 font-lato text-grey-brown leading-5 text-center mb-8">
                            Flowers for events, loved ones, or yourself! Pick from a variety of beautiful flowers to make the perfect
                            bouquet and check our famous flower boxes too!
                    </div>
                        <button
                            className="px-5 py-2 mx-auto self-end bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                            FLORAL
                    </button>
                    </div>
                </Fade>
                <Fade right>
                    <div className="flex flex-col">
                        <img className="p-14 pb-0" src="images/gifts.jpg" alt="decor" />
                        <div className="mt-5 font-jose text-2xl text-chocolate text-center tracking-wide">GIFTS</div>
                        <div className="px-14 mt-3 font-lato text-grey-brown leading-5 text-center mb-3">
                            Show someone you really love them and get them a charming present they will treasure with all their heart.
                            Our services include gorgeous gift boxes, gift favours, gift wrapping,
                    </div>
                        <button
                            className="px-5 py-2 mx-auto self-end bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                            GIFTS
                    </button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Featured
