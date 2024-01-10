import React from "react"

const Service = () => {
    return (
        <div className='flex justify-around items-center flex-wrap gap-4 mt-10'>
            <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                <span className='flex items-center gap-2'>
                    <h2 className='text-lg  text-fikz-black font-bold'>Electricity</h2>
                    <img className='h-4' src='/switch.svg' alt='switch' />
                </span>
                <ul className='text-[#828282] font-semibold text-sm list-disc appearance-auto py-4'>
                    <li className='decoration-clone'>Switch Board</li>
                    <li className='decoration-clone'>Room wiring</li>
                    <li className='decoration-clone'>Fan Connection</li>
                </ul>
            </div>
            <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                <span className='flex items-center gap-2'>
                    <h2 className='text-lg  text-fikz-black font-bold'>Lifting</h2>
                    <img className='h-4' src='/package.svg' alt='package' />
                </span>
                <ul className='text-[#828282] font-semibold text-sm list-disc appearance-auto py-4'>
                    <li className='decoration-clone'>Switch Board</li>
                    <li className='decoration-clone'>Room wiring</li>
                    <li className='decoration-clone'>Fan Connection</li>
                </ul>
            </div>
            <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                <span className='flex items-center gap-2'>
                    <h2 className='text-lg  text-fikz-black font-bold'>Roofing</h2>
                    <img className='h-4' src='/roof.svg' alt='roog' />
                </span>
                <ul className='text-[#828282] font-semibold text-sm list-disc appearance-auto py-4'>
                    <li className='decoration-clone'>Switch Board</li>
                    <li className='decoration-clone'>Room wiring</li>
                    <li className='decoration-clone'>Fan Connection</li>
                </ul>
            </div>
            <div className='h-44 w-56 rounded-lg border-2 border-fikz-black flex flex-col justify-center items-center'>
                <span className='flex items-center gap-2'>
                    <h2 className='text-lg  text-fikz-black font-bold'>Electricity</h2>
                    <img className='h-4' src='/switch.svg' alt='switch' />
                </span>
                <ul className='text-[#828282] font-semibold text-sm list-disc appearance-auto py-4'>
                    <li className='decoration-clone'>Switch Board</li>
                    <li className='decoration-clone'>Room wiring</li>
                    <li className='decoration-clone'>Fan Connection</li>
                </ul>
            </div>
        </div>
    )
}

export default Service
