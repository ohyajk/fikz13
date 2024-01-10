import React from "react"

const Property = () => {
    return (
        <div className='col-span-1 shadow-sm flex flex-col gap-2 bg-white p-2 rounded-lg'>
            <h4 className='text-xl font-semibold  text-fikz-black pt-2 px-2'>Property details</h4>
            <ul className='mt-4 border'>
                <li className='flex items-center justify-between px-4 py-2 border-b'>
                    <span className='flex items-center justify-start gap-2'>
                        <img className='h-8' src='/planes.svg' alt='planes' />
                        <h4 className=' font-semibold  text-fikz-black'>Floor</h4>
                    </span>
                    <h4 className=' font-semibold  text-fikz-black'>2</h4>
                </li>
                <li className='flex items-center justify-between px-4 py-2 border-b bg-[#828282]/20'>
                    <span className='flex items-center justify-start gap-2'>
                        <img className='h-8' src='/cube.svg' alt='Cube' />
                        <h4 className=' font-semibold  text-fikz-black'>Square Feet</h4>
                    </span>
                    <h4 className=' font-semibold  text-fikz-black'>425sqft</h4>
                </li>
                <li className='flex items-center justify-between px-4 py-2 border-b'>
                    <span className='flex items-center justify-start gap-2'>
                        <img className='h-8' src='/bed.svg' alt='bed' />
                        <h4 className=' font-semibold  text-fikz-black'>Bedrooms</h4>
                    </span>
                    <h4 className=' font-semibold  text-fikz-black'>8</h4>
                </li>
                <li className='flex items-center justify-between px-4 py-2 border-b bg-[#828282]/20'>
                    <span className='flex items-center justify-start gap-2'>
                        <img className='h-8' src='/garage.svg' alt='Garage' />
                        <h4 className=' font-semibold  text-fikz-black'>Garage</h4>
                    </span>
                    <h4 className=' font-semibold  text-fikz-black'>1</h4>
                </li>
                <li className='flex items-center justify-between px-4 py-2 border-b'>
                    <span className='flex items-center justify-start gap-2'>
                        <img className='h-8' src='/shower.svg' alt='Bathroom' />
                        <h4 className=' font-semibold  text-fikz-black'>Bathroom</h4>
                    </span>
                    <h4 className=' font-semibold  text-fikz-black'>2</h4>
                </li>
            </ul>
        </div>
    )
}

export default Property
