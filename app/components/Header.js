
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";


function Header({textWhite}) {

    const textColorClass = textWhite ? "text-white" : "text-black";
    
  return (
    <div className="mx-auto bg-greybg  xl:w-[1200px] ">
        <div className="max-w-7xl py-[50px] mx-auto xl:w-[1200px] flex absolute z-50 justify-between">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <h1 className={`text-2xl lg:text-3xl ${textColorClass} `}>
                REANALOG
              </h1>
            </div>
          </Link>
          <div className="flex  items-center gap-x-8 cursor-pointer">
            <a
              href="/"
              className={`ml-2 text-xl lg:text-sm ${textColorClass} cursor-pointer`}
            >
              HERO
            </a>
            <a
              href="/prozess"
              className={`ml-2 text-xl lg:text-sm ${textColorClass} cursor-pointer`}
            >
              PROZESS
            </a>
            <a
              href="/vita"
              className={`ml-2 text-xl lg:text-sm ${textColorClass} cursor-pointer`}
            >
              VITA
            </a>
            <a
              href="/arbeiten"
              className={`ml-2 text-xl lg:text-sm ${textColorClass} cursor-pointer`}
            >
              ARBEITEN
            </a>
            <a
              href="/getintouch"
              className={`ml-2 text-xl lg:text-sm ${textColorClass} cursor-pointer`}
            >
              GET IN TOUCH
            </a>
            <a
              href="/blogoverview"
              className={`ml-2 text-xl lg:text-sm ${textColorClass} cursor-pointer`}
            >
              BLOG
            </a>
          </div>
          <div className="flex gap-x-4 items-center relative">
            <Link className="" href="/order">
              <FaRegHeart
                className={`text-2xl ${textColorClass} cursor-pointer hover:scale-125 transition-transform duration-300`}
              />
            </Link>
            <Link href="/cart">
            <BiCart 
                className={`text-2xl ${textColorClass} cursor-pointer hover:scale-125 transition-transform duration-300`}
              />
            </Link>
            {/* {totalItems > 0 && (
              <div className="ml-2 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-semibold">
                {totalItems}
              </div>
            )} */}

            
          </div>
        </div>
      </div>
  )
}

export default Header