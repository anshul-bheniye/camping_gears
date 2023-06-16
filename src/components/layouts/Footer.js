import { Link } from "react-router-dom";

export const Footer = () => {
    const year = new Date();
  return (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year.getFullYear()}  
            <Link to="/" className="hover:underline"> Camping Gears™. All Rights Reserved.</Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="https://github.com/anshul-bheniye" className="mr-4 md:mr-6" target='_blank' rel='noreferrer'>GitHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/anshul-bheniye/" className="mr-4 md:mr-6" target='_blank' rel='noreferrer'>LinkedIn</a>
            </li>
            <li>
                <a href="https://twitter.com/anshul_bheniye" className="mr-4 md:mr-6" target='_blank' rel='noreferrer'>Twitter</a>
            </li>
        </ul>
    </footer>
  )
}
