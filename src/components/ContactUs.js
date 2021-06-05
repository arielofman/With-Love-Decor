import React from 'react'
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

function ContactUs() {
    function sendEmail(e) { 
        emailjs.sendForm('xxxx', 'template_', e.target, 'user_xxxx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className="contact_us flex flex-col pt-20 lg:p-20">
                <Fade left>
                    <div className="font-lato font-light mx-auto text-3xl pb-2">GET IN TOUCH</div>
                    <div className="font-lato font-light mx-auto text-xl">We would love to hear from you.</div>
                </Fade>
                <div className="p-10 md:px-20 md:py-10">
                    <form className="" onSubmit={e => sendEmail(e)}>
                        <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3">
                            <Fade left>
                                <div className=" mr-4 mb-4 w-full md:w-auto">
                                    <label className="block text-gray-700 text-sm font-lato font-light mb-2" htmlFor="name">
                                        YOUR FULL NAME
                                </label>
                                    <input
                                        className="border-black border-1 appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name" type="text" name="user_name" placeholder="Enter your full name..." />
                                </div>
                            </Fade>

                            <Fade left delay={100}>
                                <div className=" mr-4 mb-4 w-full md:w-auto">
                                    <label className="block text-gray-700 text-sm font-lato font-light mb-2" htmlFor="email">
                                        YOUR EMAIL
                                </label>
                                    <input
                                        className="border-black border-1 appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email" type="email" name="user_email" placeholder="Enter your email..." /> 
                                </div>
                            </Fade>

                            <Fade left delay={200} >
                                <div className=" mb-4 w-full md:w-auto">
                                    <label className="block text-gray-700 text-sm font-lato font-light mb-2" htmlFor="subject">
                                        SUBJECT
                                </label>
                                    <input
                                        className="border-black border-1 appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="subject" type="text" placeholder="Enter your subject..." />
                                </div>
                            </Fade>
                        </div>
                        <Fade left delay={300} >
                            <div className=" row-span-2 mb-7">
                                <label className="block text-gray-700 text-sm font-lato font-light mb-2" htmlFor="message">
                                    MESSAGE
                            </label>
                                <textarea className="w-full h-36 border p-3 border-black border-1" placeholder="Enter a message..." name="message" id="message" maxLength="500"></textarea>
                            </div>
                        </Fade>

                        <div>
                            <Fade bottom delay={400} >
                                <button type="submit"
                                    className="px-5 py-2 w-full bg-transparent hover:bg-black text-black font-lato tracking-widest hover:text-white border border-black hover:border-transparent">
                                    SUBMIT
                            </button>
                            </Fade>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
