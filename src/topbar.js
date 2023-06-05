import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg fixed top-0 w-screen z-[5]">
            <div className="container mx-auto flex items-center justify-between py-4">
                <a href="/" className="text-gray-800 text-xl font-bold">
                    Netanel Arbiv
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#main" className="text-gray-800 hover:text-gray-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-gray-800 hover:text-gray-600">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-gray-800 hover:text-gray-600">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-gray-800 hover:text-gray-600">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
