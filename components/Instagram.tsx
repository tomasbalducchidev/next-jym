import React from 'react'
import Cableiphone from '../public/assets/images/cableiphone.jpg';
import Cables from '../public/assets/images/cables.jpg';
import Fundaiphone from '../public/assets/images/fundaiphone.jpg';
import Fundas from '../public/assets/images/fundas.jpg';
import Fundass from '../public/assets/images/fundass.jpg';
import Varios from '../public/assets/images/varios.jpg';
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
          <InstagramImg socialImg={Cableiphone} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Cables} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Fundaiphone} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Fundas} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Fundass} />
        </Link>
        <Link href='https://www.instagram.com/jymcomunicacionesvc/'>
          <InstagramImg socialImg={Varios} />
        </Link>
        </div>
    </div>
  )
}

export default Instagram