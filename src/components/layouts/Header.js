import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { Search } from "../other";

import Logo from '../../assets/logo.png';


export const Header = () => {
  // dark mode
  const [ darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  useEffect(()=>{
    localStorage.setItem('darkMode',JSON.stringify(darkMode));
    darkMode ?   document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
  },[darkMode])
  // dark mode end


  // search 
  const [ searchBar, setSearchBar ] = useState(false);
  // search end

  return (
    <header>
        <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to="/" className="flex items-center">
                <img src={Logo} className="h-8 mr-3" alt="Camping_Gears_Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Camping Gears</span>
            </Link>
            
    <div className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
     
      {/* dark mode */}
            <Link onClick={()=>setDarkMode(!darkMode)} className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white"><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-wrench-adjustable-circle"></span></Link>
     
      {/* cart */}
              <Link to='/cart' className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white">
                <span className="text-2xl bi bi-cart-fill relative">
                  <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                </span>
              </Link>
     
      {/* search */}        
             <Link onClick={()=>setSearchBar(!searchBar)} className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white"><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-search"></span></Link>
      
      {/* login Page */}
             <Link to='/login' className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white"><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-person-circle"></span></Link>
            </div>
        </div>
    </nav>
   
   {/* toogle search bar */}
    {searchBar &&  <Search setSearchBar={setSearchBar} />}
 </header>
  )
}
