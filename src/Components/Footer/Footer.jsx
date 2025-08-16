import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/Images/assignment-sass.vercel.app_.png'

export default function Footer() {
    return (
        <>
            <div className="footer text-center sticky z-50 bg-white py-10">
                <div className="container mx-auto">
                    <div className="uper-part flex justify-between pb-3 border-b-1 border-gray-300">
                        <Link className='text-2xl font-bold'><img src={img} className='w-12 inline' alt="logo" />Recipe</Link>
                        <h3 className='text-2xl text-blue-600 font-bold'>Route</h3>
                    </div>
                    <div className='pt-6'>
                        <p className='text-gray-500 text-sm'>© 2025 Omar Ahmed™. All Rights Reserved.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
