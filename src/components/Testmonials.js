import React from 'react'
import MainTitle from './MainTitle'
import { testmonials } from '@/utils/data'
import { FaFacebookMessenger, FaPersonBooth } from 'react-icons/fa'

const Testmonials = () => {
    return (
        <div className=' mb-[100px]'>
            <div>
                <MainTitle
                    color={' text-green-500'}
                    title={'Patient Testimonials'}
                    subTitle={'Here you can find what peopel say about us'}
                />
            </div>
            <div className=' container mx-auto gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-0 p-4'>
                {testmonials.map(item => {
                    return (
                        <div key={item.id} className=' flex flex-col gap-2 relative bg-white shadow p-2'>
                            <h3 className=' font-bold text-green-600'>{item.name} :</h3>
                            <p className=' md:text-[18px] break-words  text-gray-700'>{item.content}</p>
                            <div style={{ background: '#EEE' }}
                                className=' p-[5px] absolute w-[70px] h-[70px] rounded-full bg-white top-[-10%] right-[-8%]'>
                                <div className=' text-center leading-[40px] font-bold bg-white w-full h-full rounded-full'>
                                    . . .
                                    <FaFacebookMessenger className=' font-bold text-blue-500' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testmonials