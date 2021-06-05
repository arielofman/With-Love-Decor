import React from 'react'
import Headroom from 'react-headroom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

function Header() {
    return (

        <Headroom>
            <nav className="relative z-50 items-center h-24 flex flex-wrap bg-white">
                <div className="flex flex-wrap items-center justify-around w-full mx-auto">
                    <div className="">
                        <Fade top cascade delay={300}>
                            <ul className="cursor-pointer flex flex-wrap justify-self-start text-xs sm:text-base">

                                <li className="mx-1 md:mx-2">
                                    <Link activeClass="border-b-2"
                                        to="philosophy"
                                        spy={true}
                                        smooth={true}
                                        offset={0}>
                                        ABOUT
                                   </Link>
                                </li>
                                <li className="mx-1 md:mx-2">
                                    <Link activeClass="border-b-2"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={5}>
                                        SERVICES
                                   </Link>
                                </li>
                                <li className="mx-1 md:mx-2">
                                    <Link activeClass="border-b-2"
                                        to="occassions"
                                        spy={true}
                                        smooth={true}
                                        offset={5}>
                                        OCCASIONS
                                   </Link>
                                </li>
                                <li className="mx-1 md:mx-2">
                                    <Link activeClass="border-b-2"
                                        to="gallery"
                                        spy={true}
                                        smooth={true}
                                        offset={5}>
                                        GALLERY
                                   </Link>
                                </li>
                                <li className="mx-1 md:mx-2">
                                    <Link activeClass="border-b-2"
                                        to="contact_us"
                                        spy={true}
                                        smooth={true}
                                        offset={5}>
                                        CONTACT US
                                   </Link></li>
                            </ul>
                        </Fade>
                    </div>
                </div>

                <Link activeClass="border-b-2"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}>
                    <Fade left>
                        <img className="cursor-pointer invisible sm:visible absolute left-0 top-0 right-0 bottom-0 my-auto ml-5 w-11" src="images/logo.png" alt="" />
                    </Fade>
                </Link>
            </nav>
        </Headroom>
    )
}

export default Header
