import Logo from "../images/logo/logo2.svg";
import Avatar from "../images/user/avatar.png";
import Search from "../images/user/search.svg";
import Settings from "../images/user/settings.svg";
import Bell from "../images/user/bell.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="bg-primary text-white px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto container-xl md:container md:mx-auto">
          <div className="flex justify-center">
            <a href="/" className="flex items-center mr-7">
              <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Stack
              </span>
            </a>
            <ul className="flex items-center justify-center  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 lg:hover:bg-secondary active:bg-secondary lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
                {/* <a
                  href="#"
                  className="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white active:bg-blue-200"
                  aria-current="page"
                >
                  Home
                </a> */}
              </li>
              <li>
                <Link
                  to="/users"
                  className="block py-2 pr-4 px-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-secondary active:bg-secondary lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white  "
                >
                  Users
                </Link>
                {/* <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Users
                </a> */}
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Tasks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white active:bg-secondary hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Reporting
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <img src={Search} className="mr-3" alt="Search" />
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src={Settings} className="mr-3" alt="Settings" />
            </a>

            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <img src={Bell} className="mr-3 " alt="Bell" />
            </a>
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <img src={Avatar} className="mr-3 " alt="User" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
