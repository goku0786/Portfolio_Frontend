import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-[20px] px-[50px] mt-[65px] border-2 border-l-0 border-r-0 border-b-0 border-[rgba(255,255,255,.2)] ">
      <ul className="text-white flex justify-center items-center gap-4 text-2xl ">
        <li className="hover:-translate-y-1 transition-all ">
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li className="hover:-translate-y-1 transition-all">
          <a href="#">
            <FaTwitterSquare />
          </a>
        </li>
        <li className="hover:-translate-y-1 transition-all">
          <a href="https://www.linkedin.com/in/gaurav-kumar-25a769279/">
            <FaLinkedin />
          </a>
        </li>
        <li className="hover:-translate-y-1 transition-all">
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li className="hover:-translate-y-1 transition-all">
          <a href="https://github.com/goku0786">
          <FaGithubSquare />
          </a>
        </li>
      </ul>
      <ul className="text-white flex justify-center items-center gap-4 text-lg  mt-4">
        <li className="opacity-[0.70] hover:opacity-[1]">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="opacity-[0.70] hover:opacity-[1]">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="opacity-[0.70] hover:opacity-[1]">
          <NavLink to="/service">Services</NavLink>
        </li>
        <li className="opacity-[0.70] hover:opacity-[1]">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <p className="text-white flex justify-center items-center gap-2 mt-3 mb-1">
        {" "}
        <FaRegCopyright />
        2024 Admin Panel | All Rights Reserved
      </p>
      <p className="text-white flex justify-center items-center gap-2">
        Made with <FaHeart className="text-red-600" />
        by Goku
      </p>
    </footer>
  );
};
