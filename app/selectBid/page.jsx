import React from "react"
import Filter from "../components/Filter"
import Bid from "./Bid"

const page = () => {
    return (
        <section className='mx-auto max-w-[1440px] grid md:gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 px-2 md:px-4 lg:px-0 py-4 md:py-8'>
            <Filter />
            <div className='sm:col-span-2 lg:col-span-3 2xl:col-span-4'>
                <h4 className='text-lg  text-fikz-black'>Bids</h4>
                <hr className='h-[2px] w-full bg-[#828282]/20 my-3' />
                <Bid />
                <hr className='h-[2px] w-full bg-[#828282]/20 my-3' />
                <Bid />
                <hr className='h-[2px] w-full bg-[#828282]/20 my-3' />
            </div>
        </section>
    )
}

export default page
