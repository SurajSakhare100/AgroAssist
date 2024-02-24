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
import Slider from './Slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAdd, faPager, faSearch ,faVideo} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
    <Slider/>
    {/* section 1 */}
      <div className='h-screen flex flex-col w-100 items-center justify-center'>
        <div className='flex flex-row px-20 items-center justify-between'>
          <div className='flex flex-col gap-8 p-4 w-1/2 '>
            <h1 className='text-black font-bold text-5xl flex-shrink-0'>Solution for farmer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi </p>

          </div>
          <div>
            <img src={i6} width={500} />
          </div>
        </div>
      </div>
{/* section 2 */}
      <div className='w-100  h-fit py-15 mb-20 flex flex-col gap-20'>
        <div className='flex flex-row px-20 items-center justify-between gap-10'>
          <div className='flex flex-row items-center justify-between '>
            <div className='w-[350px] h-[250px] rounded-3xl flex flex-col items-center justify-center P-5 border border-gray gap-2 hover:shadow-md hover:scale-110'>
              <img src={i4} width={100} />
              <h5>Active register Farmer</h5>
              <h1 className='text-2xl font-bold'>1.4 M+</h1>
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
{/* section 3 */}
      <div className='h-screen flex flex-col w-100 items-center justify-center'>
        <div className='flex flex-row px-20 items-center justify-between'>
          <div className='flex flex-col gap-8 p-4 w-1/2 '>
            <h1 className='text-black font-bold text-5xl flex-shrink-0'>Access to Affordable insurence</h1>
            <p className='text-slate-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi.  </p>
            <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi </p>

          </div>
          <div>
            <img src={i1} width={500} />
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className='h-screen flex flex-col w-100 items-center justify-center'>
        <div className='flex flex-row px-20 items-center justify-between'>
        <div>
            <img src={i3} width={500} />
          </div>
          <div className='flex flex-col gap-8 p-4 w-1/2 '>
            <h1 className='text-black font-bold text-5xl flex-shrink-0'>Access to Affordable insurence</h1>
            <p className='text-slate-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi.  </p>
            <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi </p>

          <button className='bg-red-500 w-[150px] h-[50px] rounded-md hover:shadow-md text-white text-xl'><FontAwesomeIcon icon={faVideo} className='mr-1'/> E-Agro</button>
          </div>
        
        </div>
      </div>

{/* section 5 */}
<div className='h-screen flex flex-col w-100 items-center justify-center'>
        <div className='flex flex-row px-20 items-center justify-between'>
          <div className='flex flex-col gap-8 p-4 w-1/2 '>
            <h1 className='text-black font-bold text-5xl flex-shrink-0'>Access to Affordable insurence</h1>
            <p className='text-slate-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi.  </p>
            <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi suscipit modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis mollitia cupiditate nostrum dignissimos nesciunt tempore dolorum nisi </p>

          </div>
          <div>
            <img src={i12} width={500} />
          </div>
        </div>
      </div>
    </>


  )
}

export default Home
