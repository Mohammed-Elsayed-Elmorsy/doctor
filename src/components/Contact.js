import React from 'react'
import MainTitle from './MainTitle'
import { Medias } from '@/utils/data'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className=' mb-[100px]'>
            <div>
                <MainTitle
                    color={' text-green-500'}
                    title={'Stay Connected'}
                    subTitle={'Follow us on social media for health tips, updates, and more.'}
                    desc={'My Media For Contacting Me Keep in Touch'}
                />

            </div>
            <div className=' container mx-auto gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-0 p-4'>
                {Medias.map(item => {
                    return (
                        <div key={item.id} className=' flex flex-col gap-2 bg-white shadow p-2'>
                            <span className=' text-green-600 text-[50px]'>
                                {item.icon}
                            </span>
                            <h3 className=' font-bold'>{item.title} :</h3>
                            <Link href={item.content} className=' md:text-[20px] text-wrap break-all break-words  text-blue-500'>{item.content}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Contact