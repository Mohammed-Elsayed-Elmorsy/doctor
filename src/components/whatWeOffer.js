import React from 'react'
import MainTitle from './MainTitle'
import { services } from '@/utils/data'

const WhatWeOffer = () => {
    return (
        <div className=' mb-[100px]'>
            <div className=' mb-4'>
                <MainTitle
                    color={' text-green-500'}

                    title={'Our Services'}
                    subTitle={'Comprehensive Medical Care'}
                    desc={'From routine check-ups to advanced medical treatments, we offer a wide range of services tailored to meet your healthcare needs.'}
                />
            </div>
            <div className=' container mx-auto gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
                {services.map(item => {
                    return (
                        <div key={item.id} className=' bg-white shadow p-2'>
                            <img className=' w-full object-cover mb-1' src={item.image} alt="" />
                            <h3 className=' text-[18px] text-green-600'>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WhatWeOffer