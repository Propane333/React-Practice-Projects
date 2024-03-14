import React from 'react'

const Hero = () => {
    return (
        <>
            <main className='container flex mt-20 px-40'>
                <div className='left w-2/3'>
                    <div>
                        <h1 className='text-9xl font-extrabold'>YOUR FEET DESERVE THE BEST</h1>
                        <p className='text-sm mt-5 pl-5 font-medium'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. <br />YOUR FEET DESERVE THE BEST <br /> AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div className='mt-8 pl-5'>
                        <button className='w-28 h-10 bg-red-700 text-sm font-semibold text-white'>Shop Now</button>
                        <button className='ml-10 w-28 h-10 border-solid border-2 border-gray-500'>Category</button>
                    </div>
                    <div className='mt-5 pl-5'>
                        <h3>Also available On</h3>
                        <div className='flex gap-5 h-5 mt-4'>
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                        </div>
                        
                    </div>
                </div>
                <div className='right'>
                    <img src="/images/hero-image.png" alt="" />
                </div>
            </main>

        </>
    )
}

export default Hero