import React from "react"

const page = () => {
    return (
        <section className='mt-4 mx-auto max-w-[1440px] w-full '>
            <h4 className='text-lg  text-[#131313]'>Bid Details</h4>
            <hr className='h-[2px] w-full bg-[#828282]/20 my-3' />
            <h4 className='text-xl font-semibold  text-[#131313]'>Services Details</h4>
            <div className='pt-4 px-2 flex justify-center sm:justify-start items-center gap-5 flex-wrap'>
                <span className='w-36 h-32 border p-6 rounded-lg flex flex-col gap-2 text-center'>
                    <img className='h-12 sm:h-16 ' src='/reno.svg' alt='reno' />
                    <h4 className='text-sm font-semibold text-[#333333]'>Renovation</h4>
                </span>
                <span className='w-36 h-32 border p-6 rounded-lg flex flex-col gap-2 text-center'>
                    <img className='h-12 sm:h-16 ' src='/clean.svg' alt='clean' />
                    <h4 className='text-sm font-semibold text-[#333333]'>Cleaning</h4>
                </span>
                <span className='w-36 h-32 border p-6 rounded-lg flex flex-col gap-2 text-center'>
                    <img className='h-12 sm:h-16 ' src='/painter.svg' alt='painter' />
                    <h4 className='text-sm font-semibold text-[#333333]'>Walls</h4>
                </span>
                <span className='w-36 h-32 border p-6 rounded-lg flex flex-col gap-2 text-center'>
                    <img className='h-12 sm:h-16 ' src='/other.svg' alt='other' />
                    <h4 className='text-sm font-semibold text-[#333333]'>Other</h4>
                </span>
                <span className='w-36 h-32 border p-6 rounded-lg flex flex-col gap-2 text-center'>
                    <img className='h-12 sm:h-16 ' src='/other.svg' alt='other' />
                    <h4 className='text-sm font-semibold text-[#333333]'>Other</h4>
                </span>
            </div>
            <h4 className='mt-4 text-xl font-semibold  text-[#131313]'>Cover Letter</h4>
            <div className='grid md:grid-cols-2 gap-5 w-full p-2'>
                <div>
                    <textarea className='p-4 rounded-lg border-[#828282]/50 outline-none appearance-none resize-none bg-white w-full' cols='30' rows='10' placeholder='Describe Your Offer'></textarea>
                    <p className='text-[#828282] text-sm text-right'>0 / 1500 CHARS MAX</p>
                </div>
                <div className='w-full'>
                    <div className='flex flex-col justify-center items-center gap-4 w-full border border-[#828282]/50 p-4 rounded-lg h-fit'>
                        <div className='flex flex-col sm:flex-row gap-5 items-center justify-between w-full'>
                            <h4 className='text-xl font-semibold  text-[#333333]'>Total Offer Amount</h4>
                            <input className='p-4 rounded-lg border-[#828282]/50 outline-none appearance-none resize-none bg-inherit w-fit' type='number' placeholder='$' />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-5 items-center justify-between w-full'>
                            <h4 className='text-xl font-semibold  text-[#333333]'>Schedule</h4>
                            <input className='p-4 rounded-lg border-[#828282]/50 outline-none appearance-none resize-none bg-inherit w-full text-[#828282]' type='date' placeholder='$' />
                            <input className='p-4 rounded-lg border-[#828282]/50 outline-none appearance-none resize-none bg-inherit w-full text-[#828282]' type='date' placeholder='$' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 w-full'>
                        <button className='mt-2 py-3 px-4 w-full max-w-[390px] mx-auto text-center border-2 bg-[#131313] text-white rounded-xl '>Submit</button>
                        <button className='text-[#828282] text-sm'>We will notify you as soon as customer accepts your offer</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
