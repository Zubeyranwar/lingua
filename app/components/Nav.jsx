'use client'
import Image from "next/image"
import logo from "../assets/Logo.svg"
import { navLinks } from "../constant"
import { useState } from "react"
import Link from "next/link"
const Nav = () => {
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <nav className="flex justify-between">
        <div className="relative container flex justify-between items-center mx-auto py-5 px-3">
                <Link href="/">
                    <Image src={logo} width={110} height={36}/>
                </Link>
                <ul className="hidden md:flex space-x-12 md:space-x-6 ">
                    {
                        navLinks.map((link,index)=>{
                            return <li key={index}><Link href={link.href}>{link.title}</Link></li>
                        })
                    }
                </ul>
                <div className="hidden md:block"><button className="bg-[#fff] px-[32px] py-[12px] rounded-[73px] text-[#524FD5] leading-[28px]">Get started</button></div>

                {/* Mobile Navigation */}
                {
                    isModalOpen && (
                        <div className="absolute bg-white top-12 right-3 px-[80px] py-[40px] rounded">
                            <ul className="space-y-4">
                                {
                                    navLinks.map((link,index)=>{
                                        return <li key={index}><Link href={link.href}>{link.title}</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
                <div className="flex md:hidden" onClick={()=>setIsModalOpen(prev=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
        </div>
    </nav>
  )
}

export default Nav