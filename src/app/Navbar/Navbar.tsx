import { useState } from "react";
import logo from "../../../public/AAlogo-removebg-preview.png"
import Image from "next/image"
import Link from "next/link";
interface NavbarProps {
  onSignupClick: () => void;
}

export default function Navbar({ onSignupClick }: NavbarProps) {

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <>


      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="bg-blue-200 h-10 w-10 rounded-full "><Image className="text-blue-300 my-2" src={logo}  width={100} height={50} alt=""></Image></div>
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black font-serif" >AlgoArena</span>
          </a>
          <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={` ${isNavVisible ? 'block' : 'hidden'}  w-full md:block md:w-auto `} id="navbar-default " >

            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white   dark:border-gray-700">

              <li className="my-[-5px] md:my-1  py-2 px-3">
                <Link href={"/Learn"} className="text-black" >
                  Learn</Link>

              </li>

              <li className="md:my-3">
                <Link href={"/ProblemSection"} className="text-black">
                  Problems
                </Link>
                {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Problems</a> */}
              </li>
              <li className="md:my-3">
                <a href="https://leetcode.com/contest/" className="block  px-3 text-gray-900 rounded md:dark:hover:bg-transparent">Contest</a>
              </li>
              <Link href={"/Discuss"}>
              <li className="md:my-3">
                <a href="#" className="block  px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0   md:dark:hover:bg-transparent">Discuss</a>
              </li>
              </Link>
              <li className="my-[-5px] md:my-1  py-2 ">
                <Link href={"/Interview"}>
                  <p className="text-black">Interview</p>
                </Link>

              </li>

              <li>
                <button onClick={onSignupClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0">
                    Signup
                  </span>
                </button>
              </li>
            </ul>

          </div >
        </div>
      </nav>

    </>
  )
}