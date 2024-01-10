import React from "react"

const Bid = () => {
    return (
        <div className='flex justify-between items-center p-2'>
            <div className='flex justify-start items-start'>
                <div className='flex flex-col sm:gap-2 '>
                    <img className='h-16 sm:h-20' src='/sq-profile.svg' alt='pr' />
                    <div className='flex justify-start items-center gap-[2px]'>
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-yellow.svg' alt='staryellow' />
                        <img className='h-2 sm:h-3' src='/star-empty.svg' alt='starempty' />
                        <h4 className='text-[12px] sm:text-sm font-semibold text-[#828282]'>(51)</h4>
                    </div>
                </div>
                <div className='flex flex-col gap-2 px-2'>
                    <div className='flex'>
                        <div className='flex justify-start items-center text-fikz-black gap-1 lg:gap-4'>
                            <h2 className='text-xl font-bold'>Mark John</h2>
                            <h4 className='text-sm font-bold'>San Fransisco, CA</h4>
                            <h6 className='text-sm font-bold'>6 miles away</h6>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-start items-center gap-2 lg:gap-4'>
                        <img className='h-6 sm:h-8 lg:h-11' src='/garage.svg' alt='garage' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/shower.svg' alt='shower' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/planes.svg' alt='planes' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/cube.svg' alt='cube' />
                        <img className='h-6 sm:h-8 lg:h-11' src='/bed.svg' alt='bed' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-xl sm:text-3xl lg:text-5xl font-bold '>$100</h1>
                <h4 className='text-[12px] sm:text-base font-semibold text-[#828282]'>July 21, 2021</h4>
            </div>
        </div>
    )
}

export default Bid
