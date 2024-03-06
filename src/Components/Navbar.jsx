import React, { useState } from 'react';
import Menu from './Menu';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="">
      <div className="flex items-center justify-between h-16 px-4 mx-auto border-b border-solid max-w-7xl border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider text-grey">
          PARENTS LOVER
        </div>
        <div className="hidden md:flex md:items-center">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden text-grey focus:outline-none"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'}`}>
        <Menu />
      </div>
    </nav>
  );
}

export default Navbar;
