import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faArrowUpRightDots, faNewspaper, faPhone, faSearch, faSeedling, faUser} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div className='w-full h-[80px]  sticky top-0 z-50'>
            <nav className="w-full h-full py-2 bg-green-500 text-white p-4 shadow-2xl">
                <ul className='w-full h-full flex flex-row items-center justify-between'>
                    <i className="bi bi-bank w-[10px] text-white h-[10px]" ></i>
                    <li><NavLink to="/home" className='text-2xl'>Agro <FontAwesomeIcon icon={faSeedling} className='ml-1 text-xl'/></NavLink></li>
                    <li className='lg:w-1/2 lg:h-2/3 relative '>
                        <input
                            className='w-full h-full rounded-2xl outline-none text-black px-3 text-sm shadow-lg  bg-white '
                            type="text"
                            placeholder='Search for Anything' />
                        <div className=' top-2 right-2 w-[20px] h-[20px] absolute z-0'>
                            <FontAwesomeIcon icon={faSearch} className='text-black' />
                        </div></li>
                    <li><NavLink to="/about">About Us </NavLink></li>
                    <li><NavLink to="/career">Career <FontAwesomeIcon icon={faArrowUpRightDots} className='ml-1'/></NavLink></li>
                    <li><NavLink to="/market" >Market Place <FontAwesomeIcon icon={faNewspaper} className='ml-1'/></NavLink></li>
                    <li><NavLink to="/login" >Login us <FontAwesomeIcon icon={faUser} className='ml-1'/></NavLink></li>
                    <li><NavLink to="/contact">Contact Us <FontAwesomeIcon icon={faPhone} className='ml-1'/></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
