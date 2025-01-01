import React from 'react'

const Hero = () => {
    return (
        <div className='z-3'>
            <div className=' flex'>
                {/* <!-- Hero --> */}
                <div className="z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
                    {/* <!-- Grid --> */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                        <div>
                            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white pt-15">Spotless Spaces, Seamless Service –    <span className="text-blue-600">JP Cleaning</span></h1>
                            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Your Trusted Partner for a Spotless Space.</p>

                            {/* <!-- Buttons --> */}
                            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    Get started
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                    Contact Us
                                </a>

                            </div>
                            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Our cleaning service provides reliable, high-quality, and efficient cleaning solutions tailored to meet your specific needs. We ensure a spotless environment through a dedicated team of professionals, eco-friendly cleaning products, and advanced techniques.</p>
                            {/* <!-- End Buttons --> */}

                            {/* <!-- Review --> */}

                            {/* <!-- End Review --> */}
                        </div>
                        {/* <!-- End Col --> */}
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>

                <div className='z-1'>
                    <img src="/Traveller" alt="" />
                </div>
                {/* <!-- End Hero --> */}
            </div>
        </div>
    )
}

export default Hero