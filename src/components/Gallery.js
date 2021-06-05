import React from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Carousel from 'react-grid-carousel'
 
function Gallery() {
    return (
        <div className="gallery flex flex-col">
        <Fade top> 
        <div className="mt-10 mx-auto text-center font-formal-script text-3xl pb-5 text-black border-b-1 border-black">Our
        Gallery
        </div>
        </Fade>
            {/* <div className="grid grid-rows-2 grid-cols-3 p-5 lg:p-20 lg:pt-10"> */}
                
                <div className="pb-10 md:p-14">
                     
                <Carousel
                cols={3}
                rows={2}
                gap={30} 
                > 
                <Carousel.Item>
                    <Flip top> 
                    <img className="w-full" src="images/gallery1.jpg" alt="" />
                    </Flip>
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery2.jpg" alt="" />
                </Flip>
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery3.jpg" alt="" />
                </Flip> 
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery4.jpg" alt="" />
                </Flip> 
                </Carousel.Item>

                <Carousel.Item> 
                <Flip top> 
                <img className="w-full" src="images/gallery5.jpg" alt="" />
                </Flip> 
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery6.jpg" alt="" />
                </Flip> 
                </Carousel.Item> 

                <Carousel.Item>
                    <Flip top> 
                    <img className="w-full" src="images/gallery1.jpg" alt="" />
                    </Flip>
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery2.jpg" alt="" />
                </Flip>
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery3.jpg" alt="" />
                </Flip> 
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery4.jpg" alt="" />
                </Flip> 
                </Carousel.Item>

                <Carousel.Item> 
                <Flip top> 
                <img className="w-full" src="images/gallery5.jpg" alt="" />
                </Flip> 
                </Carousel.Item>

                <Carousel.Item>
                <Flip top> 
                <img className="w-full" src="images/gallery6.jpg" alt="" />
                </Flip> 
                </Carousel.Item> 

                </Carousel> 
                </div>
            {/* </div> */}
        </div>
    )
}

export default Gallery
