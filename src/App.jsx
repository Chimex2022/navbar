import React, { useState } from 'react'
import logo from '../src/assets/melody_ai_logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'



const App = () => {

const [toggleMenu, setToggleMenu] = useState(false)

const handleClick = () => {
  setToggleMenu(!toggleMenu)
}

  return (
     <>
      <nav className='container mx-auto p-6 relative'>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="pt-2 w-[200px]">
            <img src={logo} alt="" />
          </div>
          {/* nav-links */}
          <div className="hidden md:flex space-x-6">
          <a href="/" className='hover:text-red-500'>Home</a>
          <a href="#" className='hover:text-red-500'>About</a>
          <a href="#" className='hover:text-red-500'>Contact</a>
          <a href="#" className='hover:text-red-500'>Solution</a>
          </div>
          {/* button */}
          <a href="" className='hidden md:block pt-2 p-3 bg-red-500 text-white rounded-full baseline'>Get Started</a>

          <div className='block cursor-pointer md:hidden'>
          <GiHamburgerMenu size={28} style={{color: 'red'}} onClick={handleClick} />
          { toggleMenu && (
          <div className='fixed top-0 left-0 w-full justify-center items-center flex flex-col transition-all 0.3 bg-black text-white h-full z-[5]'>
          <AiOutlineClose size={28} style={{color: 'red'}} className='absolute top-5 right-5' onClick={handleClick}  />

          <a href="/" className='hover:text-red-500 py-12'>Home</a>
          <a href="#" className='hover:text-red-500 py-12'>About</a>
          <a href="#" className='hover:text-red-500 py-12'>Contact</a>
          <a href="#" className='hover:text-red-500 py-12'>Solution</a> 
          </div>
  
          ) }
         
           
            {/* { click ? (<AiOutlineClose size={28} style={{color: 'red'}}  />) : ( <GiHamburgerMenu size={28} style={{color: 'red'}} />) }
            { click && <MobileMenu  /> }  */}

         </div>
         
        </div>
        
      </nav>

      <section id='hero'>
        <div className="flex flex-col-reverse container md:flex-row items-center px-6 space-y-0 mt-10 mx-auto">
          {/* left items */}
          <div className=''>
          
          </div>

          {/* right */}
          <div className=''>

          </div>

        </div>
      </section>
     </>
  )
}

export default App