import React from "react"

const Aside = () => {
    return (
        <div className=' col-span-1 bg-white shadow-md'>
            <div className='flex flex-col items-center justify-center'>
                <img className='h-full w-full bg-cover bg-center' src='/pr-bg.svg' alt='bg' />
                <img className='h-32 p-1 rounded-full bg-white -mt-16' src='/profile.svg' alt='' />
            </div>
            <div className='flex flex-col items-center gap-1'>
                <h2 className='text-xl font-bold text-center'>Mark John</h2>
                <div className='flex justify-start items-center gap-[2px]'>
                    <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-3 sm:h-4' src='/star-yellow.svg' alt='staryellow' />
                    <img className='h-3 sm:h-4' src='/star-empty.svg' alt='starempty' />
                    <h4 className='text-sm sm:text-base font-semibold text-[#828282]'>(51)</h4>
                </div>
            </div>
            <span className='w-full flex justify-center items-center px-4'>
                <button className='mt-2 py-3 px-8 w-[90%] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>
                    <img src='/phone.svg' alt='phone' />
                    <span>Call</span>
                </button>
                <button className='mt-2 py-3 px-8 w-[90%] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>
                    <img src='/chat.svg' alt='chat' />
                    <span>Chat</span>
                </button>
            </span>
            <div className='py-2 px-4 flex flex-col'>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-1' />
                <div className='flex justify-between items-center'>
                    <span className='flex justify-start items-center gap-4 py-2'>
                        <img className='h-4' src='/phone.svg' alt='phone' />
                        <h4 className='text-lg font-semibold text-[#828282]'>Phone</h4>
                    </span>
                    <span className='flex justify-start items-center gap-2 py-2'>
                        <img className='h-4' src='/copy.svg' alt='copy' />
                        <h4 className='text-lg font-semibold'>+123 456 789</h4>
                    </span>
                </div>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-1' />
                <div className='flex justify-between items-center'>
                    <span className='flex justify-start items-center gap-4 py-2'>
                        <img className='h-4' src='/add.svg' alt='add' />
                        <h4 className='text-lg font-semibold text-[#828282]'>Address</h4>
                    </span>
                    <h6 className='text-lg font-semibold'>Louisiana, UK</h6>
                </div>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-1' />
                <div className='flex justify-between items-center'>
                    <span className='flex justify-start items-center gap-4 py-2'>
                        <img className='h-4' src='/distance.svg' alt='distance' />
                        <h4 className='text-lg font-semibold text-[#828282]'>Distance</h4>
                    </span>
                    <h6 className='text-lg font-semibold'>6 miles away</h6>
                </div>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-1' />
                <div className='flex justify-between items-center'>
                    <span className='flex justify-start items-center gap-4 py-2'>
                        <img className='h-4' src='/lang.svg' alt='lang' />
                        <h4 className='text-lg font-semibold text-[#828282]'>Language</h4>
                    </span>
                    <span className='flex items-center'>
                        <h6 className='text-lg font-semibold'>English</h6>-<h6 className='text-lg font-semibold text-[#828282]'>Fluent</h6>
                    </span>
                </div>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-1' />
                <span className='pt-4 w-full flex justify-center items-center'>
                    <button className='mt-2 py-3 px-8 w-full mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2'>Proceed to Bid</button>
                </span>
            </div>
        </div>
    )
}

export default Aside
