import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Overlay from './Overlay';
import Login from './Login';

const Navbar = () => {
    const [popup,setPopup] = useState(false);
    const openPopup =()=>{
setPopup(true);
    }
    const closePopup =()=>{
setPopup(false);
    }
  return (
    <>
    <header>
        <div className='max-w-6xl mx-auto p-5 flex justify-between items-center gap-5'>
        <Link to="/" className="site-logo w-1/5">Writing Productivity</Link>
        <nav className='flex justify-end items-center w-2/5'>
            <ul className='flex justify-between items-center gap-2 '>
                <li>
                    <button onClick={openPopup} className='px-4 py-2 rounded-full bg-yellow text-navyblue cursor-pointer hover:opacity-90'>Login</button>
                </li>
                <li>
                    <Link to="/dashboard" className='px-4 py-2 rounded-full bg-green text-navyblue cursor-pointer hover:opacity-90'>Dashboard</Link>
                </li>
            </ul>
            <div className='w-1/5 flex justify-end'>
                <button className='w-10 h-10 rounded-full bg-navyblue text-white grid place-items-center text-xl'>J</button>
            </div>
        </nav>
        </div>
    </header>
    {
        popup && <Overlay onClose={closePopup}>{<Login/>}</Overlay>
    }
    </>
  )
}

export default Navbar