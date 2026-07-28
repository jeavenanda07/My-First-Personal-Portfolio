'use client'

import React from 'react'
import { House, Code, User } from 'lucide-react'
import { FaInstagram } from "react-icons/fa6"
import { CiLinkedin } from "react-icons/ci"
import Image from 'next/image'
import Link from 'next/link' // 💡 Added Next.js Link for navigation

const MenuItem = [
  { name: 'Home', icon: <House size={20} />, link: '/' },
  { name: 'About', icon: <User size={20} />, link: '/about' },
  { name: 'Projects', icon: <Code size={20} />, link: '/projects' }, 
  { 
    name: "profile", 
    image: "/profile.jpg",
    link: '/profile' 
  },
  { name: 'Skills', icon: <FaInstagram size={20} />, link: 'https://www.instagram.com/jeavenparas/' }, 
  { name: 'Social Media', icon: <CiLinkedin size={20} />, link: 'https://www.linkedin.com/in/jeaven-paras-1a0b4b1b6/' }, 
  { name: 'Contact', icon: <User size={20} />, link: '/contact' }
]

const Menu = () => {
  return (
    <nav className="fixed bottom-0 p-5 w-full flex justify-center items-center">
      <ul className="w-fit px-8 py-4 rounded-2xl flex gap-3 navigation text-white items-center justify-center shadow-lg">
        {MenuItem.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.link} 
              className=' hover:bg-gray-600 p-3 transition-colors  rounded-full flex items-center justify-center cursor-pointer block'
              title={item.name}
            >
                
              {item.name === "profile" && item.image ? (
                <div className="relative w-5 h-5">
                  <Image 
                    src={item.image} 
                    alt="Profile" 
                    fill 
                    className="rounded-full object-cover" 
                  />
                </div>
              ) : (
                item.icon
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu