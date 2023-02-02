import React from 'react'
import Cel from '../public/assets/images/celulares.jpg';
import InstagramImg from './InstagramImg';
import Link from 'next/link';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Seguinos en Instagram</p>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <p className='pb-4'>@jymcomunicacionesvc</p>
        </Link>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cel} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cel} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cel} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cel} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cel} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cel} />
        </Link>
        </div>
    </div>
  )
}

export default Instagram