import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";




function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  


 
  const [show, setShow] = useState(false);
  
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-blue  backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <p className='mr-20 text-cool-gray-300 italic text-lg' width="100px" height="100px">  TIME-LEAD</p>       
           </Link>
          </div>
    
        

          {/* Site navigation */}
          <nav className=" hidden  lg:flex lg:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a href="/create-account" className="font-medium rounded-md ml-3 bg-white  text-blue hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">INVEST NOW</a>
              </li>
            </ul>
   
          </nav>

        <button onClick={() => setShow(!show)} 
              className="ml-auto text-inherit text-center lg:hidden px-2 py-2 rounded-lg"
           > 
             {show ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6  text-cool-gray-50" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-cool-gray-50" />
          )}
           </button>

            {
              show ? <div className=" w-5/6 absolute  mt-20 -mb-32 ml-10 items-center p-6 bg-white rounded shadow-xl">

          {/* Site navigation */}
          <nav>
            <ul className="items-center text-center">      
              <li  className='text-center' >
                <Link to="/create-account" className="justify-center text-center  font-medium rounded-md ml-3 text-gray-600 hover:text-gray-900 px-5 py-2 flex items-center  bg-blue ">Apply</Link>
              </li>

            </ul>
   
          </nav>
             
            </div>:null
               }


        </div>
      </div>
    </header>
  );
}

export default Header;
