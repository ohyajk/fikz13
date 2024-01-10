import React from "react"

const Summery = () => {
    return (
        <div className='col-span-2 shadow-sm flex flex-col gap-2 bg-white p-4 rounded-lg'>
            <h4 className='text-xl font-semibold  text-fikz-black'>Summery</h4>
            <p className='text-[#828282] text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elzeeitsf xdd. Pellentesque amet enim volutpat maecenas nisl. Consectetaaur blandit eu id ornare turpis viverra arcu.</p>
            <button className='text-fikz-black text-left'>Read more</button>
            <div className='py-4 flex justify-start items-center flex-wrap gap-5'>
                <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
                <img className='rounded-lg h-24' src='/wires.svg' alt='wires' />
            </div>
        </div>
    )
}

export default Summery
