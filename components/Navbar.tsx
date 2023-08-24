'use client'

import { useState } from 'react'

import Button from './Button'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="bg-yellow-200 tracking-widest text-xl w-full fixed top-0">
      {/* Desktop Nav */}
      <ul className="w-10/12 mx-auto flex flex-wrap justify-between py-3  items-center">
        <div className="">
          <li className="text-2xl font-bold cursor-pointer">JAWA-IN</li>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            activeClass="active"
            to="information"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer">
            Layanan
          </Link>
          <Link
            activeClass="active"
            to="package"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer">
            Paket
          </Link>
          <Link
            activeClass="active"
            to="testimony"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer">
            Testimoni
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Button />
        </div>
      </ul>
      <button
        type="button"
        className="absolute top-3 right-3 md:hidden text-3xl cursor-pointer"
        onClick={() => {
          setToggle(!toggle)
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* Mobile Nav */}
      <div className="relative">
        <ul
          className={`bg-yellow-200 px-4 md:hidden absolute flex flex-col transition-all duration-500 ease-in-out text-right  min-h-screen ${
            toggle === true ? 'right-0' : 'right-[990px] overflow-hidden'
          }`}>
          <Link
            activeClass="active"
            to="information"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer">
            Layanan
          </Link>
          <Link
            activeClass="active"
            to="package"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer">
            Paket
          </Link>
          <Link
            activeClass="active"
            to="testimony"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="cursor-pointer">
            Testimoni
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
