import React from 'react'
import Image from '../../Asset/images/hero-img.png'

const Hero = () => {
  return (
    <div>
      
      <div className='flex justify-center '>

        <div className='w-1/2'></div>
        <div className='w-1/2'>
            <img src={Image}></img>
        </div>

      </div>

    </div>
  )
}

export default Hero
