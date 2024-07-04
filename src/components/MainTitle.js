import React from 'react'

const MainTitle = ({ title, subTitle, desc, color }) => {
    return (
        <div className='flex p-4 flex-col md:w-[550px] mx-auto container'>
            <h2 className=' capitalize font-bold text-[30px]'>
                {title}
            </h2>
            <div>
                <span className={`font-bold text-[18px] block${color}`}>
                    {subTitle}
                </span>
                <p className=' text-gray-700'>{desc}</p>
            </div>
        </div>
    )
}

export default MainTitle