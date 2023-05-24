'use client'

import { UseFormRegister ,FieldValues, FieldErrors} from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps { 
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    formatPrice?: boolean;
    disabled?: boolean;
    register: UseFormRegister<FieldValues>
    error:FieldErrors
}
const Input:React.FC<InputProps>  = ({
    id,
    label,
    type,
    required,
    formatPrice,
    disabled,
    register,
    error
}) => {
  return (
    <div className="w-full relative">
          {formatPrice && (
              <BiDollar
                  size={24}
                  className="text-neutral-500 absolute left-2 top-1/2"
              
              />
          )}
          <input id={id} disabled={disabled} type={type}
              {...register(id, { required })} className={` w-full peer rounded-md py-5  p-4 font-light border-[0.8px] disabled:opacity-70 disabled:cursor-not-allowed outline-none focus:outline-none 
               ${error[id] ? 'border-red-500' : 'border-neutral-300'} 
               ${error[id] ? 'focus:border-red-500' : 'focus: border-black'}
              ${formatPrice ? 'pl-8' : 'pl-4'}`} placeholder='' />
           
          <label className={`absolute text-md duration-150 transform-translate-y-3 top-5 z-10 origin-[0] ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
          ${error[id] ? 'text-red-500' : 'text-zinc-400'}
          `}>
                {label}
          </label>
    </div>
  )
}

export default Input
