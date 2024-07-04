import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className=' mt-[100px] md:w-[500px]
         mx-auto font-bold text-[25px] text-center flex flex-col gap-4 justify-center items-center'>
            <span className=' text-red-600'>
                Page Not Found
            </span>
            Return To <Link href={'/'} className=' text-blue-500 font-bold'>Home</Link>
        </div>
    )
}

export default NotFound