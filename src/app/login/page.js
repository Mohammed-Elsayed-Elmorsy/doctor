'use client'
import { UserContext } from '@/userContext/Usercontext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa'
const Login = () => {
    const { setUser, user, setImage, setEmailContext } = useContext(UserContext)
    const Router = useRouter()
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    const formData = new FormData()
    formData.append('email', email)
    formData.append('pass', pass)
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await fetch('api/login', {
                method: 'POST',
                body: formData
            })
            setLoading(false)
            const result = await res.json()
            console.log(result);
            toast(result.message)
            setUser(await result.firstName)
            setEmailContext(await result.email)
            setImage(await result.image)
            if (result.success) Router.push('/')
        } catch (error) {
            console.log(error.message);
        }

    }
    useEffect(() => {
        if (user) Router.push('/')
    }, [user])
    if (loading) return <div
        className='z-20 flex justify-center items-center relative mx-auto text-center mt-[100px] md:w-[400px] bg-white shadow rounded'>
        <span className=' relative font-bold text-[22px] loading'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay-more mr-1'> .</span>
        L O A D I N G
        <span className=' relative font-bold text-[22px] loading ml-1'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay-more'> .</span>
    </div>
    return (
        <div className=' login relative '>
            <div className='mt-[100px] mb-3 w-fit mx-auto shadow-md bg-white p-3 rounded-full '>
                <FaUserCircle className='text-blue-400 text-[45px]' />
            </div>
            <form onSubmit={handleLogin}
                className='flex flex-col gap-4 max-w-sm mx-auto bg-white p-3 shadow rounded'>
                <div className=' flex flex-col gap-1'>
                    <label className=' font-bold' htmlFor='email'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Ex:MohammedElmorsy@g.com'
                        type="email"
                        id='email'
                        className=' w-full px-2 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <div className=' flex flex-col gap-1 relative'>
                    {showPass
                        ?
                        <FaEyeSlash
                            onClick={() => setShowPass(false)}
                            className=' cursor-pointer text-blue-500 absolute right-[10px] top-10' />
                        :
                        <FaEye
                            onClick={() => setShowPass(true)}
                            className=' cursor-pointer text-blue-500 absolute right-[10px] top-10' />
                    }
                    <label className=' font-bold' htmlFor='pass'>Password</label>
                    <input onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        placeholder='Ex:MoEl550!'
                        type={showPass ? 'text' : "password"}
                        id='pass'
                        className=' w-full px-3 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <button className='px-3 py-2 rounded bg-blue-400 text-white'>Log in</button>
                <p className=' text-center'>Have No Account <Link className=' text-blue-400 font-bold mx-2 underline' href={'/register'}>Register</Link></p>
            </form>
        </div>
    )
}

export default Login

