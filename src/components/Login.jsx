import React from 'react'
import gicon from '../assets/gicon.png';
import { CloseIcon } from '../utils/icons';
const Login = () => {
  return (
   <>
   <h1 className='text-center text-2xl'>Sign In</h1>
      <h2 className='text-center mb-3 text-xl mt-3'>Writing Productivity</h2>
      <div className='grid place-items-center mb-3'>
        <button className='flex justify-center items-center gap-2 bg-black border px-4 py-1 rounded-full text-white'><img src={gicon}/>Sign In With Google</button>
      </div>
      <ul className='text-center mb-3'>
        <li>Your Basic Profile</li>
        <li>Drive - Restricted Access A Folder To Backup Your Data</li>
      </ul>
   </>
      
  )
}

export default Login