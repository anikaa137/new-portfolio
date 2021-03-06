import React, { useContext, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
 
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
 
  const [isAdmin, setIsAdmin] = useState(false);

  
 
  return (
 
  //  <div className="py-2" style={{backgroundColor: `##FCFCFE`,  opacity: 0.3}}>
      <nav className="sticky top-0 z-30 bg-white nav "   >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center mx-24 sm:mx-8 lg:mx-20 xl:mx-16">
            <div className="flex-shrink-0  " >
              <Link to="/">
                <h3 className="brand-2 font-bold "> Amina <span className="brand-1">Anika</span></h3>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className=" flex items-baseline space-x-2 ">
                <Link to="/">
                  {" "}
                  <h2 className="px-3 py-2 rounded-md text-sm font-medium nav-link">Home</h2>
                 
                </Link>
                
                    <Link to="/addBlog">
                      {" "}
                      <button className="px-3 py-2 rounded-md text-sm font-medium nav-link">
                         About
                      </button>{" "}
                    </Link>
                    <Link to="/manageBlog">
                      {" "}
                      <button className="px-3 py-2 rounded-md text-sm font-medium nav-link">
                         Portfolio
                      </button>{" "}
                    </Link>
                    <Link to="/addAdmin">
                      {" "}
                      <button className="px-3 py-2 rounded-md text-sm font-medium nav-link">
                         Reaume
                      </button>{" "}
                    </Link>
                    <Link to="/addAdmin">
                      {" "}
                      <button className="px-3 py-2 rounded-md text-sm font-medium nav-link">
                         Contact
                      </button>{" "}
                    </Link>
                    <Link to="/addAdmin">
                      {" "}
                      <button className="px-3 py-2 rounded-md text-sm font-medium nav-link">
                         Download
                      </button>{" "}
                    </Link>
                
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
            <Link to="/">
                  {" "}
                  <button className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                    Home
                  </button>{" "}
                </Link>
           
             
                  <Link to="/addBlog">
                    {" "}
                    <button className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                      Add Blog
                    </button>{" "}
                  </Link>
                  <Link to="/manageBlog">
                    {" "}
                    <button className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                      Manage Blog
                    </button>{" "}
                  </Link>
                  <Link to="/addAdmin">
                    {" "}
                    <button className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                      Add Admin
                    </button>{" "}
                  </Link>
              
 
            </div>
          </div>
        )}
      </Transition>
    </nav>
  //  </div>
  );
}

export default NavBar;