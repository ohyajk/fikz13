import React from "react"
import Aside from "./Aside"
import Service from "./Service"
import Summery from "./Summery"
import Property from "./Property"

const page = () => {
    return (
        <section className=' mx-auto max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-3 md:gap-5'>
            <Aside />
            <div className='col-span-2 py-4'>
                <h4 className='text-lg  text-fikz-black'>deliver order</h4>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-3' />
                <h4 className='text-xl font-semibold  text-fikz-black'>Services Details</h4>
                <Service />
                <div className='grid lg:grid-cols-3 gap-6 w-full pt-4'>
                    <Summery />
                    <Property />
                </div>
            </div>
        </section>
    )
}

export default page
