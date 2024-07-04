'use client'
import { useState } from 'react'
import { FaEye, FaEyeSlash, FaUserPlus } from 'react-icons/fa'
import { imageToBase64 } from '../../utils/Base64'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const Register = () => {
    const Router = useRouter()
    const [showPass, setShowPass] = useState(false)
    const [showPassConfirm, setShowPassConfirm] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [image, setImage] = useState(null)
    const [base64, setBase64] = useState(null)
    const [loading, setloading] = useState(false)
    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('pass', pass)
    formData.append('image', image)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (pass !== passConfirm) return toast('Pass not the same as Confirm Pass')
            setloading(true)
            const res = await fetch('api/register', {
                method: "POST",
                body: formData
            })
            setloading(false)
            const result = await res.json()
            console.log(result);
            toast(result.message)
            if (result.success) Router.push('/login')
        } catch (error) {
            console.log(error.message);
        }

    }
    const handleUploadImage = async (file) => {
        const image = await imageToBase64(file)
        setBase64(image)
    }
    if (loading) return <div
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        className='z-20 flex justify-center items-center absolute w-full h-full left-0 top-0 text-white'>
        <span className=' relative font-bold text-[22px] loading'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay-more mr-1'> .</span>
        L O A D I N G
        <span className=' relative font-bold text-[22px] loading ml-1'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay'> .</span>
        <span className=' relative font-bold text-[22px] loading-delay-more'> .</span>
    </div>
    return (
        <div className=' container px-3 mt-[100px]  mx-auto'>
            <div className=' mt-[65px] md:mt-0'>
                <p className=' w-fit p-1 mx-auto mt-3'>Upload Your Profile Image</p>
                <label htmlFor='upload'
                    className='my-4 mb-6 w-[80px] h-[80px] cursor-pointer hover:drop-shadow transition-all 
            text-center mx-auto flex flex-col items-center justify-center shadow-md bg-white p-1 rounded-full ' >
                    {image ? <img className=' w-full h-full rounded-full' src={base64} /> : <>
                        <FaUserPlus className='text-blue-400 mx-auto text-[30px]' />
                        <span className=' text-[14px]'>Upload</span>
                    </>}
                    <input onChange={(e) => {
                        handleUploadImage(e.target.files[0]);
                        setImage(e.target.files[0])
                    }} type="file" id='upload' hidden className=' w-full h-full' />
                </label>
            </div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-[25px] md:flex-row flex-wrap  w-[384px] md:w-[640px] lg:w-[740px]  mx-auto bg-white p-3 shadow rounded'>
                <div className=' flex flex-col gap-1'>
                    <label className=' font-bold' htmlFor='first'>First Name</label>
                    <input
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        placeholder='Ex:Mohammed'
                        type="text"
                        id='first'
                        className=' w-full px-3 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label className=' font-bold' htmlFor='last'>Last Name</label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Ex:Elmorsy'
                        type="text"
                        id='last'
                        className=' w-full px-3 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <label className=' font-bold' htmlFor='email'>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Ex:MohammedElmorsy@g.com'
                        type="email"
                        id='email'
                        className=' w-full px-3 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <div className=' flex flex-col gap-1 relative'>
                    {showPass
                        ?
                        <FaEyeSlash
                            onClick={() => setShowPass(false)}
                            className=' cursor-pointer text-blue-500 absolute right-[10px] top-[40px]' />
                        :
                        <FaEye
                            onClick={() => setShowPass(true)}
                            className=' cursor-pointer text-blue-500 absolute right-[10px] top-[40px]' />
                    }
                    <label className=' font-bold' htmlFor='pass'>Password</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder='Ex:MoEl550!'
                        type={showPass ? 'text' : "password"}
                        id='pass'
                        className=' w-full px-3 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <div className=' flex flex-col gap-1 relative'>
                    {showPassConfirm
                        ?
                        <FaEyeSlash
                            onClick={() => setShowPassConfirm(false)}
                            className=' cursor-pointer text-blue-500 absolute right-[10px] top-[42px]' />
                        :
                        <FaEye
                            onClick={() => setShowPassConfirm(true)}
                            className=' cursor-pointer text-blue-500 absolute right-[10px] top-[42px]' />
                    }
                    <label className=' font-bold' htmlFor='Confirm'>Confirm Password</label>
                    <input
                        value={passConfirm}
                        onChange={(e) => setPassConfirm(e.target.value)}
                        placeholder='Ex:MoEl550!'
                        type={showPassConfirm ? 'text' : "password"}
                        id='Confirm'
                        className=' w-full px-3 py-2 rounded border focus:outline-blue-300 focus:outline' />
                </div>
                <div className=' flex-1 '>
                    <button style={{ width: 'calc(100% - 18px)' }} className=' px-3 mx-auto mr-2 py-2 w-full md:mt-[27px] rounded bg-blue-400 text-white'>Sign Up</button>
                </div>
                <p className=' text-center'>Have an Account <Link className=' text-blue-400 font-bold mx-2 underline' href={'/login'}>Log in</Link></p>
            </form>
        </div>
    )
}

export default Register

