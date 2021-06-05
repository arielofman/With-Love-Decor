import React from 'react' 
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

function Hero() {
    return (
        <div className="w-full h-96 lg:h-screen bg-center bg-cover bg-hero-pattern">
            <div className="flex flex-col h-full justify-center items-center">
                <Fade cascade>

                
                <div className="text-sm md:text-lg">CRAFTING BEAUTY SINCE 1997</div>
                <div className="text-center font-formal-script text-4xl md:text-6xl text-slight-brown pt-7">With Love</div>
                <div className="text-center font-formal-script text-4xl md:text-6xl text-slight-brown pb-7">Decor</div>
                </Fade>
                <Bounce left> 
                <Link activeClass="active"
                                        to="contact_us"
                                        spy={true}
                                        smooth={true}
                                        offset={5}> 
                                   
                <button className="bg-red-300 hover:bg-red-500 text-white py-3 px-8 rounded-full focus:outline-none">
                    CONTACT US
                </button>
                </Link>
                </Bounce>
            </div>
        </div>
    )
}

export default Hero
