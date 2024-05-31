import React from "react";
import Logo from "../../Asset/images/logo.png";


const Header = () => {
 
  return (
    <div>
      <header className="bg-white h-[100px] text-gray-800 py-4 border-b-2 shadow-lg">
        <div className="container mx-auto flex  items-center">
          <div>
            <img src= {Logo} alt="PharmaFinder" className="w-40 h-20 " />
          </div>
          <nav className="ml-60">
            <ul className="flex gap-8 font-mono text-xl font-bold text-gray-400	">

              {window.location.pathname === "/" ? (
                <li>
                <a href="#" className=" text-teal-500">
                  HOME
                </a>
              </li>
              )
              : (
                <li>
                <a href="/" className=" hover:text-teal-500">
                  HOME
                </a>
                </li>
              )
              }

              {window.location.pathname === "/about" ? (  
                <li>
                <a href="#" className=" text-teal-500">
                  ABOUT US
                </a>
              </li>
              )
              : (
                <li>
                <a href="/about" className=" hover:text-teal-500">
                  ABOUT US
                </a>
                </li>
              )
              }

              {window.location.pathname === "/contact" ? (
                <li>
                <a href="#" className=" text-teal-500">
                  CONTACT US
                </a>
              </li>
              )
              : (
                <li>
                <a href="/contact" className=" hover:text-teal-500">
                  CONTACT US
                </a>
                </li>
              )
              }

              {window.location.pathname === "/services" ? (
                <li>
                <a href="#" className=" text-teal-500">
                  SERVICES
                </a> 
              </li>
              )
              : (
                <li>
                <a href="/services" className=" hover:text-teal-500">
                  SERVICES
                </a>
                </li>
              )
              }

            </ul>
          </nav>


        </div>
      </header>
    </div>
  );
};

export default Header;
