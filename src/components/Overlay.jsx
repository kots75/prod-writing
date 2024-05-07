
import React from 'react'

const Overlay = ({children,onClick}) => {
  return (
    <div className=' inset-0 bg-[rgba(0,0,0,0.5)] left-0 top-0 grid place-items-center min-h-screen fixed' onClick={(e)=>{
        e.stopPropagation();
        onClick();
    }}>
      {children}
    </div>
  )
}

export default Overlay
