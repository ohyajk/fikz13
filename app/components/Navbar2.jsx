import React from "react"

const Navbar2 = () => {
    return (
        <nav className='p-6 shadow-md'>
            <div className='mx-auto max-w-[1440px] w-full flex justify-start items-center gap-8'>
                <img className='h-8' src='/logo.svg' alt='fikz' />

                <form>
                    <div class='relative'>
                        <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <svg class='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                            </svg>
                        </div>
                        <input type='search' id='default-search' class='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Find Services' required />
                        <button type='submit' class='text-white absolute end-2.5 bottom-2.5 bg-[#131313] hover:bg-[#131313] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                            Search
                        </button>
                    </div>
                </form>
                <div className='flex-grow flex justify-end items-center gap-4 lg:gap-8'>
                    <button className='text-[#828282] font-semibold hidden lg:block'>Explore</button>
                    <button className='text-[#828282] font-semibold hidden lg:block'>Explore</button>
                    <button className='hidden md:block'>
                        <img src='/file.svg' alt='file' />
                    </button>
                    <button className='hidden md:block'>
                        <img src='/bell.svg' alt='bell' />
                    </button>
                    <button>
                        <div class='relative'>
                            <img class='w-10 h-10 rounded-full' src='/profile.svg' alt='profile' />
                            <span class='bottom-0 left-7 absolute  w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar2
