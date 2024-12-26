import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className='justify-around'>
                {/* <!-- Hero --> */}
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* <!-- Grid --> */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                        <div>
                            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Start your journey with <span className="text-blue-600">Preline</span></h1>
                            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>

                            {/* <!-- Buttons --> */}
                            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    Get started
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                </a>
                                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                    Contact sales team
                                </a>

                            </div>
                            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus voluptatibus magni dolore expedita perspiciatis eum dolorem odio nisi minus veritatis similique, nam aspernatur exercitationem animi atque distinctio maxime suscipit sed voluptas quod dolorum sint cumque? Placeat fuga libero aspernatur maiores dicta officia, architecto quo impedit, aperiam error eveniet nam. Officia, quibusdam consequatur eius reprehenderit veritatis dolor libero minima necessitatibus fuga nobis commodi tempore quam repellat placeat facere assumenda aperiam, rerum, magnam ad quasi nostrum aspernatur. Obcaecati tenetur, provident maiores eum eveniet quibusdam, ducimus suscipit architecto excepturi, aliquam iure vitae laudantium consequatur possimus omnis ut explicabo. Ducimus eligendi dolorum explicabo!</p>
                            {/* <!-- End Buttons --> */}

                            {/* <!-- Review --> */}

                            {/* <!-- End Review --> */}
                        </div>
                        {/* <!-- End Col --> */}
                        {/* <!-- End Col --> */}
                    </div>
                    {/* <!-- End Grid --> */}
                </div>

                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ipsam pariatur perspiciatis in voluptates sequi sed, consequatur quae, magni ut fugit, ab a. Quisquam praesentium natus cumque reprehenderit modi explicabo placeat. Quibusdam officiis a qui eligendi suscipit. Magnam animi iusto explicabo veniam deserunt nostrum ut ad, adipisci labore nihil quaerat?</div>
                {/* <!-- End Hero --> */}
            </div>
        </div>
    )
}

export default Hero