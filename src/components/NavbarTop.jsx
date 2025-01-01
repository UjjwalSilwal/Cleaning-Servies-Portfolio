import React from 'react'
import FacebookLogo from '../assets/facebook.svg'
import InstaLogo from '../assets/instagram.svg'

const NavbarTop = () => {
    return (
        <div className='w-screen h-[25px] z-50 bg-slate-100 drop-shadow-lg relative pt-3 pb-4 '>
            <div className='pl-3 flex justify-end items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <ul className='hidden md:flex '>

                        <div className='font-sans font-bold flex'><p>Email:</p><a href=""><p className='font-semibold underline ml-2'>ujjwalsilwal321@gmail.com</p></a></div>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <p className='font-sans font-bold pl-40 flex'>Contact us at: <p className=' underline flex font-semibold ml-2'>9808982141</p> </p>

                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookLogo} alt="Facebook" style={{ width: '20px', margin: '5px' }} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={InstaLogo} alt="Instagram" style={{ width: '20px', margin: '5px' }} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default NavbarTop