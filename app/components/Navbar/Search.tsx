'use client'
import { BiSearch } from "react-icons/bi";


const Search = () => {
  return (
    <div className='border-[1px] rounded-full py-2 md:w-auto shadow-sm hover:shadow-md cursor-pointer transition  '>
          <div className='flex flex-row items-center justify-center'>
              <div className='text-sm font-semibold px-6'>
                  Anywhere
              </div>
              <div className='border-x-[1px] hidden sm:block text-sm font-semibold px-6 flex-1 text-center'>
                  Any week
              </div>
              <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
                  <div className='hidden sm:block'>Add Guests</div>
                  <div className='bg-red-500 rounded-full p-[4px] items-center justify-center text-white font-semibold'>
                      <BiSearch size={18}/>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Search;
 