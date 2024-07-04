import MainTitle from '@/components/MainTitle'
import React from 'react'

const About = () => {
    return (
        <div className='about mt-[80px] flex flex-col gap-4 p-4'>
            <div className=' flex flex-col gap-4 md:w-[600px] mx-auto'>
                <div className=' border-b'>
                    <MainTitle title={'Elmorsy Medical Services'} />
                </div>
                <p className=' p-2 bg-white rounded shadow'>
                    At Mohammed Elmorsy Medical Services, we are dedicated to providing
                    exceptional healthcare with a personal touch. Our mission is to deliver
                    comprehensive, compassionate, and cutting-edge medical care to our community.
                    Whether you need routine check-ups, specialized treatments, or urgent care, our
                    team of highly skilled professionals is here to support your health and well-being
                    every step of the way.
                </p>
                <p className=' p-2 bg-white rounded shadow'>
                    With a focus on preventive medicine and
                    patient education, we strive to empower you with
                    the knowledge and tools needed to make informed decisions about your health. Our state-of-the-art
                    facilities and innovative medical
                    technologies ensure that you receive the best possible care in a comfortable and welcoming environment.
                </p>
                <p className=' p-2 bg-white rounded shadow'>
                    We believe that every patient deserves personalized
                    attention and a treatment plan tailored to their unique needs. At Mohammed
                    Elmorsy Medical Services, your health is our priority, and we are
                    committed to helping you achieve your health goals with excellence and compassion.
                </p>
            </div>
            <div className='my-[120px] flex flex-col gap-4 md:w-[600px] mx-auto'>
                <div>
                    <MainTitle title={'Our Mission'} />
                </div>
                <p className='mb-[100px] p-2 bg-white rounded shadow'>
                    At Mohammed Elmorsy Medical Services,
                    our mission is to provide high-quality,
                    patient-centered care that promotes health and
                    wellness for individuals and families in our community. We are committed to
                    advancing medical knowledge and practices through continuous learning and innovation.
                </p>
            </div>
        </div>
    )
}

export default About