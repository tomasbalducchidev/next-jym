import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero
            heading={'Contacto'}
            message='Completa el formulario y nos pondremos en contacto (En desarrollo)'
        />
        <Contact />
    </div>
  )
}

export default contact