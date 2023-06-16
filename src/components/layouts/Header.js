import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className="border-b  border-gray-200">
        <nav className="bg-white dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to="/" className="flex items-center">
                <img src={Logo} className="h-8 mr-3" alt="Camping_Gears_Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Camping Gears</span>
            </Link>
            <div className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                {/* dark mode */}
            <NavLink to='/' className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white" end><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-wrench-adjustable-circle"></span></NavLink>
              {/* cart */}
              <NavLink to='/empty' className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white" end><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-cart"></span></NavLink>
             {/* <NavLink to='/search' className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white"><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-search"></span></NavLink> */}
             {/* login Page */}
             <NavLink to='/login' className="text-sm mx-2 p-2 rounded-md text-gray-500 dark:text-white"><span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-person-circle"></span></NavLink>
            </div>
        </div>
    </nav>
 </header>
  )
}
