import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {

    const link = <>

<NavLink to={'/'} className={({isActive})=> isActive? 'border-2 border-[#23BE0A] px-5 py-3 rounded-lg text-[#23BE0A]' : 'px-5 py-3 text-[#131313CC] hover:bg-[#23BE0A] hover:text-white hover:rounded-lg'}>Home </NavLink>
<NavLink to={'/listed-book'} className={({isActive}) => isActive? 'border-2 border-[#23BE0A] px-5 py-3 rounded-lg text-[#23BE0A]' : 'px-5 py-3 hover:bg-gray-300 hover:rounded-lg text-[#131313CC]'}>Listed Books</NavLink>
<NavLink to={'/page-to-read'} className={({isActive}) => isActive? 'border-2 border-[#23BE0A] px-5 py-3 rounded-lg text-[#23BE0A]' : 'px-5 py-3 hover:bg-gray-300 hover:rounded-lg text-[#131313CC]'}>Pages to Read</NavLink>
<NavLink to={'/blogs'} className={({isActive}) => isActive? 'border-2 border-[#23BE0A] px-5 py-3 rounded-lg text-[#23BE0A]' : 'px-5 py-3 hover:bg-gray-300 hover:rounded-lg text-[#131313CC]'}>Blogs</NavLink>
<NavLink to={'/about'} className={({isActive}) => isActive? 'border-2 border-[#23BE0A] px-5 py-3 rounded-lg text-[#23BE0A]' : 'px-5 py-3 hover:bg-gray-300 hover:rounded-lg text-[#131313CC]'}>About</NavLink>
    </>
     
    
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {link}
      </ul>
    </div>
    <Link to={'/'}  className="btn btn-ghost text-lg lg:text-[28px] p-0 font-bold text-[#23BE0A] ">Books Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal gap-1 px-1 ">
    {link}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="cursor-pointer hover:border-2 border-[#23BE0A] hover:text-[#131313] hover:scale-95 hover:duration-300 hover:bg-white bg-[#23BE0A] lg:px-7 lg:py-4  px-2 py-1 text-white rounded-lg lg:font-bold">Sign In</a>
    <a className="cursor-pointer hover:border-2 border-[#1d6dad] hover:text-[#131313] hover:scale-95 hover:duration-300 hover:bg-white bg-[#1d6dad]  lg:px-7 lg:py-4 px-2 py-1 text-white rounded-lg lg:font-bold">Sign Up</a>
  </div>
</div>
    );
};

export default Nav;