import React from "react"

const Filter = () => {
    return (
        <div className='sm:col-span-1 lg:col-span-1 2xl:col-span-1'>
            <div className='flex justify-start items-center gap-4'>
                <img className='h-4' src='/filter.svg' alt='filter' />
                <h4 className='text-lg font-semibold text-[#333333]'>Filter</h4>
            </div>
            <hr className='h-[2px] w-full bg-[#828282]/20 my-3' />
            <div className='flex justify-start items-center gap-4'>
                <img className='h-4' src='/star-brown.svg' alt='star' />
                <h4 className='text-lg font-semibold text-[#828282]'>Rating</h4>
            </div>
            <div className='flex justify-start items-center gap-3 py-4'>
                <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                <img className='h-8' src='/star-yellow.svg' alt='staryellow' />
                <img className='h-8' src='/star-empty.svg' alt='starempty' />
                <h4 className='text-lg font-semibold text-[#333333]'>& UP</h4>
            </div>
            <div className='flex justify-start items-center gap-4 py-2'>
                <img className='h-4' src='/distance.svg' alt='distance' />
                <h4 className='text-lg font-semibold text-[#828282]'>Distance</h4>
            </div>
            <div className='relative acccent'>
                <input id='default-range' type='range' value='50' class='w-full h-2 bg-inherit rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />

                <span className='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>0</span>

                <span className='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>1000</span>
            </div>
            <div className='flex justify-start items-center gap-4 py-2 mt-12'>
                <img className='h-4' src='/dollar.svg' alt='dollar' />
                <h4 className='text-lg font-semibold text-[#828282]'>Cost</h4>
            </div>
            <div className='relative acccent'>
                <input id='default-range' type='range' value='50' class='w-full h-2 bg-inherit rounded-lg appearance-none cursor-pointer dark:bg-gray-700' />

                <span className='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>0</span>

                <span className='text-lg font-semibold text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>1000</span>
            </div>
            <div className='flex justify-start items-center gap-4 py-2 mt-12'>
                <img className='h-4' src='/case.svg' alt='case' />
                <h4 className='text-lg font-semibold text-[#828282]'>Availability</h4>
            </div>
            <div className='flex flex-col gap-1 pt-2'>
                <span className=' font-semibold text-[#828282]'>from</span>
                <input className='p-2 rounded-md' type='date' />
                <span className=' font-semibold text-[#828282]'>to</span>
                <input className='p-2 rounded-md' type='date' />
            </div>
            <div className='flex justify-start items-center gap-4 py-2 mt-6'>
                <img className='h-4' src='/spec.svg' alt='spec' />
                <h4 className='text-lg font-semibold text-[#828282]'>building spec</h4>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-start items-center gap-2'>
                    <img className='h-10' src='/planes.svg' alt='planes' />
                    <input type='number' id='number-input' aria-describedby='helper-text-explanation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Min' />
                    <span className=' font-semibold text-[#828282]'>to</span>
                    <input type='number' id='number-input' aria-describedby='helper-text-explanation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Max' />
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <img className='h-10' src='/cube.svg' alt='cube' />
                    <input type='number' id='number-input' aria-describedby='helper-text-explanation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Min' />
                    <span className=' font-semibold text-[#828282]'>to</span>
                    <input type='number' id='number-input' aria-describedby='helper-text-explanation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Max' />
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <img className='h-10' src='/bed.svg' alt='bed' />
                    <input type='number' id='number-input' aria-describedby='helper-text-explanation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Min' />
                    <span className=' font-semibold text-[#828282]'>to</span>
                    <input type='number' id='number-input' aria-describedby='helper-text-explanation' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Max' />
                </div>
                <button className='mt-2 py-2 px-4 w-full border-2 border-fikz-black text-fikz-black rounded-xl'>Apply</button>
            </div>
        </div>
    )
}

export default Filter
