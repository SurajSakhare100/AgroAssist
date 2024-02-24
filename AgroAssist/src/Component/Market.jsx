import React from 'react'
import i1 from '../assets/i1.webp'
import i2 from '../assets/i2.webp'
import i3 from '../assets/i3.webp'
import i4 from '../assets/i4.webp'
import i5 from '../assets/i5.webp'
import i6 from '../assets/i6.webp'
import i7 from '../assets/i7.webp'
import i8 from '../assets/i8.webp'
import i9 from '../assets/i9.webp'
import i10 from '../assets/i10.webp'
import i11 from '../assets/i11.webp'
import i12 from '../assets/i12.webp'
import i13 from '../assets/i13.webp'
import i14 from '../assets/i14.webp'
import i15 from '../assets/i15.webp'
function Market() {
  return (
    <div className='w-100 h-screen my-10'>
        <h1 className='text-4xl text-center font-bold my-12'>Market Place</h1>
      <div className='w-100  h-fit py-15 mb-20 flex flex-col gap-20'>
        <div className='flex flex-row px-20 items-center justify-between gap-10'>
          <div className='flex flex-row items-center justify-between '>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i4} width={100} />
              <h5 className='text-xl '>Sugar</h5>
              <h1 className='text-2xl font-bold'>40 RS</h1>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i5} width={100} />
              <h5>Active register Farmer</h5>
              <h1 className='text-2xl font-bold'>1.4 M+</h1>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i6} width={100} />
              <h5>Active register Farmer</h5>
              <h1 className='text-2xl font-bold'>1.4 M+</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-row  items-center px-20 justify-between gap-10'>
          <div className='flex flex-row items-center justify-between'>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i7} width={100} />
              <h5>Active register Farmer</h5>
              <h1 className='text-2xl font-bold'>1.4 M+</h1>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i8} width={100} />
              <h5>Active register Farmer</h5>
              <h1 className='text-2xl font-bold'>1.4 M+</h1>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i9} width={100} />
              <h5>Active register Farmer</h5>
              <h1 className='text-2xl font-bold'>1.4 M+</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Market
