'use client'
import { UserContext } from '@/userContext/Usercontext'
import React, { useContext, useState } from 'react'

const Profile = () => {
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
    const { user, emailFromContext, loadingfromContext, logout } = useContext(UserContext)
    return (
        <>
            {showLogoutConfirm &&
                <div onClick={(e) => {
                    e.stopPropagation()
                    setShowLogoutConfirm(false)
                }} className=' flex text-center justify-center items-center fixed top-0 left-0 w-full h-[100vh] z-50 bg-black bg-opacity-50'>
                    <div onClick={(e) => e.stopPropagation()} className='shadow-md flex flex-col bg-white ' >
                        <h3 className=' font-bold text-black p-3 border-b'>Are You Sure </h3>
                        <div className=' flex items-center'>
                            <span className='border-r w-[100px] hover:bg-slate-200 block cursor-pointer py-2 px-3' onClick={logout}>Log out</span>
                            <span className=' hover:bg-slate-200 w-[100px]  block cursor-pointer py-2 px-3' onClick={() => setShowLogoutConfirm(false)}>Cancel</span>
                        </div>
                    </div>
                </div>}
            <div className=' flex items-center justify-center mt-[100px]'>
                {!loadingfromContext ?
                    <div className='bg-white shadow p-2 md:w-[400px] text-center rounded flex flex-col gap-4'>
                        <p>
                            UserName : <span className=' capitalize font-bold text-blue-500'>{user}</span>
                        </p>
                        <p>
                            Email : <span className='  font-bold text-blue-500'>{emailFromContext}</span>
                        </p>
                        <button className=' w-[120px] mx-auto text-white bg-blue-500 rounded py-2 px-3 cursor-pointer'
                            onClick={() => setShowLogoutConfirm(true)}>Logout</button>
                    </div>
                    : 'Loading'}
            </div>
        </>
    )
}

export default Profile