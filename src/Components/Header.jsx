import React from 'react'
import logo from '../images/logo.jpg'


function Header() {
    return (
        <div className='relative flex items-center bg-gray-200 gap-0 md:gap-20'>
            <img
                src={logo}
                alt='Logo'
                className='h-40 w-75'
            />
            <h1 id='Header' className="text-3x1 font-bold underline p-6 text-4xl md:text-5xl lg:text-6xl">NC-News</h1>
            <p className='absolute bottom-2 right-4 text-l md:text-xl'>Created by Joe Beaumont</p>
        </div>
    )
}

export default Header