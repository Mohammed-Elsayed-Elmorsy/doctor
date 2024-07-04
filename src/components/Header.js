'use client'
import { UserContext } from "@/userContext/Usercontext"
import { links } from "@/utils/data"
import Link from "next/link"
import { useContext } from "react"
import { FaUser, FaUserPlus } from "react-icons/fa"
const Header = () => {
    const { user, loadingfromContext, image } = useContext(UserContext)
    return (
        <header className=" fixed w-full z-10 right-0 left-0 top-0 shadow-md bg-white h-[70px] flex items-center">
            <div className="container  mx-auto flex justify-between items-center px-4 md:px-0">
                <div>
                    <Link href={'/'} className=" select-none">
                        <h1 className="text-[22px] font-bold select-none">ELMORSY</h1>
                        <p className=" text-green-600 mt-[-8px]">Relief</p>
                    </Link>
                </div>
                <nav >
                    <ul className=" flex items-center gap-3">
                        {links.map(link => {
                            return (
                                <li key={link.id}>
                                    <Link href={link.path}
                                        className="p-2 flex gap-1 justify-center items-center  hover:bg-slate-100 rounded transition-all ">
                                        {link.text}
                                        {/* <span className=" text-blue-400">
                                            {link.icon}
                                        </span> */}
                                    </Link>
                                </li>
                            )
                        })}
                        {!user &&
                            <li >
                                <Link href={'/login'}
                                    className="p-2 flex gap-1 justify-center items-center  hover:bg-slate-100 rounded transition-all ">
                                    Login
                                    <span className=" text-blue-400">
                                        <FaUser />
                                    </span>
                                </Link>
                            </li>}
                        {!user &&
                            <li >
                                <Link href={'/register'}
                                    className="p-2 flex gap-1 justify-center items-center  hover:bg-slate-100 rounded transition-all hover:text-gray-500">
                                    Sign Up
                                    <span className=" text-blue-400">
                                        <FaUserPlus />
                                    </span>
                                </Link>
                            </li>}
                        <li>
                            {!loadingfromContext && user &&
                                <Link href={'/profile'} className=" text-blue-500 hover:bg-slate-100 rounded transition-all p-2 capitalize flex items-center gap-1" >
                                    {user}
                                    <img src={image} className=" object-cover rounded-full w-[40px] h-[40px]" alt="" />
                                </Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header