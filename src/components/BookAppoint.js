import React from 'react'
import MainTitle from './MainTitle'
import { bookMeans } from '@/utils/data'

const BookAppoint = () => {
    return (
        <div className=' mb-[100px]'>
            <div className=' mb-4'>
                <MainTitle
                    color={' text-green-500'}
                    title={'Book an Appointment'}
                    subTitle={'Take the first step towards better health. Schedule an appointment with us today!'}
                    desc={'Contact Information'}
                />
            </div>
            <div className=' container mx-auto gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                {bookMeans.map(item => {
                    return (
                        <div key={item.id} className=' flex flex-col gap-2 bg-white shadow p-2'>
                            <span className=' text-green-600 text-[50px]'>
                                {item.icon}
                            </span>
                            <h3 className=' font-bold'>{item.title} :</h3>
                            <p className=' md:text-[20px]  text-blue-500'>{item.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BookAppoint