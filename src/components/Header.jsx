import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-[#F1F1FE] font-semibold text-2xl py-3'>
      <Link to={`/`}>
      <div className=' px-5 text-3xl font-bold'>
        D-Similar
      </div>
      </Link>
    </header>
  )
}

export default Header