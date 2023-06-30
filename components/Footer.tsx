import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {


  return (

    <div style={{backgroundColor: '#000000'}} className='left-0 bottom-0 w-full'>
        <div className='max-w-[1240px] m-auto flex flex-col sm:flex-row justify-between items-center p-4 text-white'>
            <Link href='/'>
                <h1 style={{color: '#e2e8f0'}} className='font-bold text-4xl'>JyM</h1>
            </Link>
            <div className='mt-4 sm:mt-0'>
                <ul style={{color: '#e2e8f0'}} className='flex flex-row justify-center sm:flex-row-reverse items-center'>
                    <li className='p-4'>
                        <Link href='https://www.instagram.com/jymcomunicacionesvc/'><FaInstagram size={30} /></Link>
                    </li>
                    <li className='p-4'>
                        <Link href='https://wa.me/3416562298'><FaWhatsapp size={30} /></Link>
                    </li>
                </ul>
                <p style={{color: '#e2e8f0'}} className='block text-center sm:text-left'>Calle 52 N° 116, Villa Cañás, Santa Fe</p>
            </div>
        </div>
    </div>

  )
}

export default Footer