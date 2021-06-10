import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Fade from 'react-reveal/Fade';

function Philosophy() {
    const isSmallScreen = useMediaQuery({ query: '(max-device-width: 640px)' })

    return (
        <div className="philosophy">
            <div className="h-24 flex flew-col items-end w-full">
                <Fade top> 
                <div className="tracking-widest title mb-4 pl-8 md:pl-14 font-lato">OUR PHILOSOPHY</div>
                </Fade>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-rows-none xl:grid-cols-2 bg-calm-peach">
                <div className="flex p-8 md:p-14 xl:pr-0 pt-0 md:pt-0 flex-col">
                    <Fade left> 
                    <hr className="border-0 mt-6 bg-gray-500 text-gray-500 h-px w-1/6" />
                    {isSmallScreen ? (<div className="text-4xl my-6 font-display-fair">our <span className="italic">passion</span> is to turn our client’s dreams into realities.</div>) :
                        (<><div className="text-4xl mt-6 font-display-fair">our <span className="italic">passion</span> is to turn our</div>
                        <div className="text-4xl mt-5 mb-6 font-display-fair">client’s dreams into realities.</div></>)
                    }
                    
                    <div className="font-lato text-calm-text">At <span className="text-bold-calm">With Love Decor</span>, our passion is to
                    turn our clients dreams into realities. We provide top of the line event decor and floral design services that
                    are certain to make the special day to be cherished forever. Our professional and distinguished specialists
                    take great pride in their work and are thrilled to bring to life captivating ideas. We take away the stress
                    and time needed to make a memorable event look fantastic, and treat every event with special care and as if it
                    were our own.</div>
                    </Fade>
                    <Fade bottom> 
                    <button
                        className="my-10 py-2 px-4 self-end bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                        EXPLORE
                    </button>
                    </Fade>
                </div>
                <div className="relative flex justify-center w-full h-full items-center">
                    <Fade right>
                        <img className="hidden md:block md:w-96 lg:w-500 shadow-sm px-14 md:p-0 md:absolute lg:-top-10" src="images/wedding.jpg"
                            alt="" />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Philosophy
