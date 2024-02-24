import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Footer() {
    return (

        <div className='w-full h-[280px] bg-black py-8 px-14 shadow-xl'>
            <footer className="w-full h-full text-white flex flex-col justify-between">
                <ul className='w-full flex flex-row'>
                    <div className='w-1/2 h-full flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <h2>Contact Us</h2>
                            <p>Email: contact@example.com</p>
                            <p>Phone: 123-456-7890</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                                <h2>Follow Us</h2>
                                <li><a href="#" className='text-slate-200'>Facebook </a></li>
                                <li><a href="#" className='text-slate-200'>Twitter</a></li>
                                <li><a href="#" className='text-slate-200'>Instagram</a></li>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='w-full flex flex-row justify-end'>
                            <li className=''><a href="">
                                <button className='w-full h-full bg-white rounded-sm text-black font-bold py-1 px-2 shadow-md'>English</button></a>
                            </li>
                        </div>
                    </div>
                </ul>
                <ul className='flex flex-row justify-between items-center'>
                    <li><a href="#" className='text-3xl'>Agro</a></li>
                    <p>© 2024 Agro, Inc.</p>
                </ul>
            </footer>
        </div>

    );
}

export default Footer
