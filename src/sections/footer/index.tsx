import React from 'react'
import logo from '../../assets/logo/rmv logo CMYK-05.png'
export default function Footer() {
  return (
    <div className='bg-dark-blue py-4'>
        <div className='px-12 pb-2'>
            <img src={logo} alt="logo" />
        </div>
        <p className=' text-light-green-50 text-sm text-center font-medium'>Beyond Tecnologia © 2024. Todos os direitos reservados.</p>
    </div>
  )
}
