
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full top-0 left-0 bg-gradient-to-r from-cyan-950 via-cyan-700 to-cyan-950 p-4 shadow-lg z-10"> 
            <div className="container mx-auto flex justify-between  items-center  ">
                {/* Logo Section */}
              

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden flex items-center bg-red-700">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-8 w-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex justify-center space-x-4 bg-white hover:bg-cyan-800 w-96 h-9 text-center rounded-xl scroll-p-7">
                    {/* Home Link */}
                    <Link
                        to="/"
                        className="text-cyan-950 text-lg font-bold relative group transform transition-all duration-200 ease-in-out hover:text-white hover:scale-110"
                    >
                         Home
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-900 transition-all duration-200 group-hover:w-full group-hover:bg-white rounded-lg"></span>
                    </Link>

                    {/* Browse Books Link */}
                    <Link
                        to="/browse-books"
                        className="text-cyan-950  text-lg font-bold relative group transform transition-all duration-200 ease-in-out hover:text-white hover:scale-110"
                    >
                         Browse Books
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-full group-hover:bg-white rounded-lg"></span>
                    </Link>

                    {/* Add Book Link */}
                    <Link
                        to="/add-book"
                        className="text-cyan-950 text-lg font-bold relative group transform transition-all duration-200 ease-in-out hover:text-white hover:scale-110"
                    >
                         Add Book
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-full group-hover:bg-white rounded-lg"></span>
                    </Link>
                </div>
                  <div className="text-4xl font-bold text-white">
                    <Link to="/" className="hover:text-blue-500">
                         Book Library
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div
                className={`lg:hidden bg-gradient-to-r from-blue-200 via-violet-300 to-indigo-400 p-1 transition-all transform ${isOpen ? 'max-h-screen' : 'max-h-0'
                    } overflow-hidden`}
            >
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700"
                        onClick={toggleMenu}
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-[3.2rem] group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>

                    <Link
                        to="/browse-books"
                        className=" font-medium block  text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700"
                        onClick={toggleMenu}
                    >
                        Browse Books
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-[7.2rem] group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>

                    <Link
                        to="/add-book"
                        className=" font-medium block relative group text-gray-800 text-lg font-medium relative group transform transition-all duration-200 ease-in-out hover:text-indigo-700 "
                        onClick={toggleMenu}
                    >
                        Add Book
                        <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-indigo-500 transition-all duration-200 group-hover:w-[5.1rem] group-hover:bg-indigo-700 rounded-lg"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;






// its simple ocmponent that will show the links to our diff pages .. like home , /brose-books, /add-book etc...


//