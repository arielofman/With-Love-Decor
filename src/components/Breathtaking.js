import React from 'react'
import Fade from 'react-reveal/Fade';

function Breathtaking() {
    return (
         
        <div className="flex flex-col px-10 lg:px-64 py-5 md:py-16">
            <Fade top> 
            <div className="mt-10 mx-auto font-display-fair italic text-2xl md:text-3xl text-black tracking-widest pb-4 px-5 border-b-1 border-black">
            Breathtaking Events
            </div>
            </Fade>
            <Fade bottom> 
            <div className="font-lato py-10 text-grey-brown">It all starts with an idea from our clients, which our event planners
            breath life to with a touch
            of love and magic! For us every event comes with its own distinctive style that is designed and developed with
            unique creativity by our consultants. Almost anything imaginable we can bring to life!</div>
            </Fade>
        </div> 
    )
}

export default Breathtaking
