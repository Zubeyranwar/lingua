import Image from "next/image"
import logo from "../assets/Logo.svg"
import { navLinks } from "../constant"
const Nav = () => {
  return (
    <nav className="flex justify-between">
        <div className="max-w-full mx-auto py-5 px-3">
            <div className="flex justify-between items-center mx-auto">
                <Image src={logo} width={110} height={36}/>
                <ul className="flex space-x-[44px]">
                    {
                        navLinks.map((link,index)=>{
                            return <li><a>{link}</a></li>
                        })
                    }
                </ul>
                <button className="bg-[#fff] px-[32px] py-[12px]">Get started</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav