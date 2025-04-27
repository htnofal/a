import React from 'react'
import Image from "next/image";

function Dashboard() {
  return (
    <div  className='flex flex-col items-center justify-center space-y-2'> 
        <Image src="/logo.svg" width={200} height={150} alt="logo"  />
        <h3  className='text-black text-xl font-medium not-italic text-center text-bold'>Welcome to ClickView, </h3>
        <h3  className='text-black text-xl font-medium not-italic text-center'>would you like to start an interwiew ?</h3>
    </div>
  )
}

export default Dashboard