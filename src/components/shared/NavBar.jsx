import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start w-[42%]">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">الرئيسيه</NavLink>
            </li>
            <li>
              <NavLink to="/about">من نحن</NavLink>
            </li>
            <li>
              <NavLink to="/natiq">نَاطِقٌ</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal  px-6">
          <li>
            <NavLink to="/">الرئيسيه</NavLink>
          </li>
          <li>
            <NavLink to="/about">من نحن</NavLink>
          </li>
          <li>
            <NavLink to="/natiq">نَاطِقٌ</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
