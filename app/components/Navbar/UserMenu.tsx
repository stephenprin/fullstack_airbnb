'use client'
import React, { useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

const UserMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    const toggle = useCallback(() => { 
        setIsOpen((prev) => !prev)
    }, [])

  return (
      <div className='relative'>
          <div className='flex flex-row items-center gap-3'>
              <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
                  Airbnb your home
              </div>
              <div onClick={()=>{toggle()}} className='p-4 md:py-2 md:px-2 border-neutral-200 flex flex-r items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                  <AiOutlineMenu size={20}/>
              </div>
              <div className='hidden md:block'>
                  <Avatar />
              </div>
          </div>
          {isOpen && (
              <div className='absolute top-12 overflow-hidden right-0  w-[300px] md:w-3/4 bg-white shadow-md rounded-md'>
                  <div className='flex flex-col cursor-pointer'>
                      <>
                          <MenuItem onClick={() => { }} title='Login' />
                          <MenuItem onClick={()=>{}} title='Sign up'/>
                      </>
                  </div>
                </div>
          )}
      
    </div>
  )
}

export default UserMenu
