import React from 'react'
import Cel from '../public/assets/images/cel.jpg';
import Case from '../public/assets/images/case.png';
import Charger from '../public/assets/images/charger.png';
import Headphone from '../public/assets/images/headphone.png';
import Speaker from '../public/assets/images/speaker.png';
import Mouse from '../public/assets/images/mouse.png';
import InstagramImg from './InstagramImg';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Seguinos en Instagram</p>
        <p className='pb-4'>@jymcomunicaciones</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={Cel} />
            <InstagramImg socialImg={Case} />
            <InstagramImg socialImg={Charger} />
            <InstagramImg socialImg={Headphone} />
            <InstagramImg socialImg={Speaker} />
            <InstagramImg socialImg={Mouse} />
        </div>
    </div>
  )
}

export default Instagram