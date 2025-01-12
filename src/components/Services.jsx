import { useGSAP } from '@gsap/react'
import React from 'react'

export const Services = () => {
    
    useGSAP(()=>{

    })

    return (
        <div className=''>
            {/* <!-- Card Blog --> */}
            <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto z-50">
                {/* <!-- Title --> */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 ">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Services</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">We go beyond the surface to deliver unmatched cleaning solutions that leave your home or office spotless, fresh, and inviting—because you deserve a space that feels as good as it looks.</p>
                </div>
                {/* <!-- End Title --> */}

                {/* <!-- Grid --> */}
                <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* <!-- Card --> */}
                    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" href="" ref={el=>{serviceCard =el}}>
                        <div className="aspect-w-16 aspect-h-10">
                            <img className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            Unity’s inside sales team drives 80% of its revenue with Preline.
                        </h3>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Learn more
                            <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" href="">
                        <div className="aspect-w-16 aspect-h-10">
                            <img className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            Living Spaces creates a unified experience across the customer journey.
                        </h3>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Learn more
                            <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a>
                    {/* <!-- End Card --> */}

                    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" href="">
                        <div className="aspect-w-16 aspect-h-10">
                            <img className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            Living Spaces creates a unified experience across the customer journey.
                        </h3>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Learn more
                            <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a>
                    {/* <!-- End Card --> */}

                    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" href="">
                        <div className="aspect-w-16 aspect-h-10">
                            <img className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            Living Spaces creates a unified experience across the customer journey.
                        </h3>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Learn more
                            <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a>
                    {/* <!-- End Card --> */}
                    
                    <a className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10" href="">
                        <div className="aspect-w-16 aspect-h-10">
                            <img className="w-full h-80 object-cover rounded-xl" src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image"/>
                        </div>
                        <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                            Living Spaces creates a unified experience across the customer journey.
                        </h3>
                        <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                            Learn more
                            <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </p>
                    </a>
                    {/* <!-- End Card --> */}


                </div>
                {/* <!-- End Grid --> */}
            </div>
            {/* <!-- End Card Blog --> */}
        </div>
    )
}
