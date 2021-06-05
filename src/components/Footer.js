import React from 'react'
import Fade from 'react-reveal/Fade'; 
function Footer() {
    return (
        <div className="p-10 lg:p-0 w-full lg:pt-16 md:pb-52 lg:pb-80 h-auto bg-center bg-footer-flowers">
            <div className="flex flex-col md:flex-row md:justify-around">
                <div className="flex flex-col font-lato italic font-light">
                    <Fade top>
                        <div className="pb-4">CONTACT US</div>
                    </Fade>
                    <Fade left> 
                    <div className="flex pb-5">

                        <div className="pr-4 my-auto">

                            <i className="fas fa-map-marked-alt text-2xl"></i>

                        </div>
                        <div className="flex flex-col text-sm"> 
                                <div className="top">
                                    15160 Yonge St Unit 103,
                                </div>
                                <div className="bottom">
                                    Aurora, ON L4G 1M2
                                </div> 
                        </div>
                    </div>
                    <div className="flex pb-5">
                        <div className="pr-4 my-auto">
                            <i className="fas fa-phone text-2xl"></i>
                        </div>
                        <div className="flex flex-col text-sm"> 
                                <div className="top">
                                    <a href="tel:647-648-3703">(647) 648 3703</a>
                                </div> 
                        </div>
                    </div>
                    <div className="flex pb-10">
                        <div className="pr-4 my-auto">
                            <i className="far fa-envelope text-2xl"></i>
                        </div>
                        <div className="flex flex-col text-sm"> 
                                <div className="top">
                                    <a href="mailto:WithLoveDecor@gmail.com">WithLoveDecor@gmail.com</a>
                                </div> 
                        </div>
                    </div>
                    </Fade>
                </div>

                <div className="flex flex-col font-lato italic font-light pb-10 ">
                    <Fade top>
                        <div className="pb-4">GET SOCIAL</div>
                    </Fade>
                    <div className="flex text-4xl">
                        <Fade left delay={1500}>
                            <a href="https://www.facebook.com/WithLoveDecor/"><i className="fab fa-facebook pr-4"></i></a>
                        </Fade>
                        <Fade left delay={1000}>
                            <a href="https://www.youtube.com/channel/UCvLkOtci7Qieqtmp-pc5dKg"><i className="fab fa-youtube-square pr-4"></i></a>
                        </Fade>
                        <Fade left delay={500} >
                            <a href="https://www.yelp.ca/biz/with-love-decor-and-flowers-aurora"><i class="fab fa-yelp pr-4"></i></a>
                        </Fade>
                        <Fade left  >
                            <a href="https://www.instagram.com/withlovedecor/?hl=en"><i className="fab fa-instagram-square pr-4"></i></a>
                        </Fade>
                    </div>
                </div>

                <div className="flex flex-col font-lato italic font-light">
                    <Fade top>
                        <div className="pb-4 ">SUBSCRIBE</div>
                    </Fade>
                    <div className="flex flex-col">
                        <Fade right> 
                        <input className="bg-white p-2 w-60 md:bg-transparent placeholder-black font-lato font-light text-sm border-black border-solid border-1 mb-2"
                            type="text" placeholder="Enter an email..." />
                            <div className="text-xs mb-4 not-italic">We respect your privacy.</div>
                        </Fade>
                        <Fade bottom> 
                        <button
                            className="bg-black text-white self-start py-2 px-6 text-xs bg-transparent hover:bg-black md:bg-transparent md:text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                            SUBMIT
                        </button>
                        </Fade> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
