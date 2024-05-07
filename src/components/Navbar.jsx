import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { TiThMenu } from "react-icons/ti";
import { FaRegWindowClose } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const { isLoggedIn, user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed z-10 top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-300 py-3 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-Oxanium
      text-gray-800 "
        >
          <NavLink to="/" className="text-3xl text-indigo-600 ">
            <IoLogoIonic />
          </NavLink>
          <NavLink to="/"> Primus</NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-2.5 cursor-pointer md:hidden"
        >
          {open ? <FaRegWindowClose /> : <TiThMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-gray-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in pt-3 md:pt-0 ${
            open ? "top-19" : "top-[-490px]"
          }`}
        >
          <li className="font-semibold hover:bg-black hover:text-white p-1 md:p-1 pl-2 mr-7 rounded-sm">
            <NavLink to="/" className="hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li className="font-semibold hover:bg-black hover:text-white p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/about" className="hover:text-gray-300">
              About
            </NavLink>
          </li>
          <li className="font-semibold hover:bg-black hover:text-white p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/service" className="hover:text-gray-300">
              Service
            </NavLink>
          </li>
          <li className="font-semibold hover:bg-black hover:text-white p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/contact" className="hover:text-gray-300">
              Contact
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li className="font-semibold  flex">
              <NavLink
                to="/logout"
                className="hover:bg-black hover:text-cyan-300 p-1 pl-2 md:p-1 mr-2 rounded-sm"
              >
                Logout
              </NavLink>
              <span className=" text-md font-semibold text-purple-800 capitalize hover:underline hover:cursor-pointer hover:text-red-900 flex gap-2 pt-1">
                {user.username}
                <FaRegUserCircle className="mt-1" />
              </span>
            </li>
          ) : (
            <div className="flex gap-2 text-orange-800 font-semibold  hover:bg-black hover:text-white mr-7  rounded-sm ">
              <li className="font-semibold p-1  pl-2  hover:underline hover:text-blue-600">
                <NavLink to="register">SignUp</NavLink>
              </li>
              <p className="pt-1">/</p>
              <li className="font-semibold p-1 hover:underline hover:text-green-600">
                <NavLink to="login">Login</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
