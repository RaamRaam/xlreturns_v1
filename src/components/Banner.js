import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
  return (
    <div className="relative">
        
        {/* <Carousel
            autoPlay
            infiniteLoop={true}
            interval={3000}
            transitionTime={1000}
            showThumbs={false}
            showStatus={false}
        > */}
            <div className="bg-[url('/bg03.jpg')] h-full">
                {/* <img src="/bg03.jpg" className='w-full'/>   */}
                {/* <p>714*260 height 136</p> */}
                <h1 className='text-4xl text-center h-[70vh] font-bold text-white pt-12'>We are working on something exciting. Please visit us back soon</h1>
            </div>
            {/* <div >
                <img src="/bg03.jpg" /> 
            </div>
            <div  >
                <img src="/bg03.jpg" />
                
            </div> */}
        {/* </Carousel> */}
    </div>
  )
}
