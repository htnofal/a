"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-white h-14 flex items-center justify-between px-6">
      
      <div className="flex space-x-4 items-center">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <Image src="/topleft.svg" width={30} height={30} alt="icon" />
        </button>

        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <Image src="/pen.svg" width={30} height={30} alt="icon" />
        </button>

        
        <div className="relative" >
          <button
            type="button"
            onClick={toggleMenu}
            className={`flex items-center gap-1 p-2 rounded-full cursor-pointer text-black text-base font-semibold focus:outline-none ${
              isMenuOpen ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
          >
            Job Role
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.586l3.71-3.354a.75.75 0 111.02 1.1l-4.25 3.85a.75.75 0 01-1.02 0l-4.25-3.85a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <div
              role="menu"
              className="absolute left-0 top-full mt-2 z-10 w-56 overflow-hidden rounded  bg-blue-500 shadow-sm">

              <a href="#"
                className="block px-3 py-2 text-sm font-medium  text-white hover:bg-blue-400"
                role="menuitem" >
                UI/UX Designer
              </a>

              <a href="#"
                className="block px-3 py-2 text-sm font-medium  text-white hover:bg-blue-400"
                role="menuitem">
                Front-End Developer
              </a>

              {/*  to add another job Role
               <a href="#"
                className="block px-3 py-2 text-sm font-medium  text-white hover:bg-blue-400"
                role="menuitem">
                Stock
              </a> */}
              
              <hr className="border-black mx-4" />

              <button className="flex items-center gap-1 cursor-pointer text-left w-full text-sm font-medium  px-3 py-2  text-white hover:bg-blue-400">
              Add another Job Role
              <span className=" text-lg font-bold ml-8">+</span>
            </button>
            </div>
          )}
        </div>
      </div>

      <UserButton />
    </div>
  );
}

export default Header;
