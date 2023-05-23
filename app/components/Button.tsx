'use client'

import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps { 
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?:IconType
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
}) => {
  return (
      <button onClick={onClick} disabled={ disabled} className={` relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
       ${outline ? 'bg-white' : 'bg-rose-500'} ${small ? 'py-2 px-4 text-sm font-light border-[1px]' : 'py-3 px-6 text-semibold border-[1.5px]'}
       ${outline ? 'border-black' : 'border-rose-500'} 
       ${outline?'text-black':'text-white'} 
      `}> {Icon && <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${outline ? 'text-black' : 'text-white'}`} size={20} />}
          
          {label}</button>
  )
}

export default Button