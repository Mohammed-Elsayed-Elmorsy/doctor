'use client'
import React, { useContext } from 'react'
import MainTitle from './MainTitle'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/userContext/Usercontext'

const Landing = () => {
    const { user } = useContext(UserContext)
    const Router = useRouter()
    const goToLogin = () => {
        Router.push('/login')
    }
    const goToBooking = () => {
        Router.push('/booking')
    }
    return (
        <div className=' h-[100vh] flex justify-center landing items-center'>
            <div className='flex md:w-[550px] p-2 items-start gap-4 flex-col'>
                <MainTitle
                    title={' Welcome to Mohammed Elmorsy Medical Services'}
                    subTitle={'Providing Quality Healthcare You Can Trust :'}
                    color={' text-green-400'}
                    desc={'At Mohammed Elmorsy Medical Services, we are dedicated to offering the highest standard  medical care to our patients.Our experienced team healthcare professionals iscommitted to your well-being and health.'}
                />
                <button onClick={user ? goToBooking : goToLogin}
                    className='ml-[16px] cursor-pointer mt-[-16px] bg-green-600 text-gray-200  py-[10px] px-3'>
                    {user ? 'Book Now' : 'Start Now'}
                </button>
            </div>

        </div>
    )
}

export default Landing