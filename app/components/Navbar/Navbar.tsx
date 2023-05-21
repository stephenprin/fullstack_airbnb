import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'


const Navbar = () => {
  return (
      <div className='fixed w-full shadow-sm z-10 bg-white'>
          <div className=' border-b-[1px] py-4'>
              <Container>
                  <div className='flex flex-row justify-between items-center gap-3 md:gap-0'>
                      <Logo />
                      <Search />
                      <UserMenu/>
                    </div>
              </Container>

          </div>
    </div>
  )
}

export default Navbar