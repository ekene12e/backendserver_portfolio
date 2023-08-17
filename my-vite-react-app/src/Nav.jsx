import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link className='home-link' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Nav