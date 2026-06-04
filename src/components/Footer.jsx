import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='mt-40'>

            {/* Main Footer */}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

                {/* Left Section */}
                <div>
                    <img src={logo} className='mb-5 w-32' alt='Logo' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book </p>
                </div>

                {/* Company */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 8010029094</li>
                        <li>support@forever.com</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Footer (Full Width Centered) */}
            <div className="text-center">
                <hr />
                <p className="py-5 text-sm text-gray-500">
                    Copyright 2026 @ forever.com — All Rights Reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer