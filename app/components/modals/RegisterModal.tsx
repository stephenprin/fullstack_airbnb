'use client'
import React from 'react'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form'
import useRegisterModal from '../hooks/useRegisterModal'
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';


const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
        email: '',
        password: '',
       }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/auth/register', data)
            .then(() => {
                
                registerModal.onClose()
            })
            .catch((err) => {
                toast.error('something went wrong')
            })    
            .finally(() => { 
                setLoading(false)
            })
    }
    
    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading title='Welcome to Airbnb' subtitle='Create an account' />
            <Input id='email' label='Email' disabled={loading} register={register} error={errors} required />
            <Input id='name' label='Name' disabled={loading} register={register} error={errors} required />
            <Input id='password' label='Password' disabled={ loading} register={register} error={errors} required />
        </div>
    )
    const footerContent = (
        <div className='flex flex-col gap-4'>
            <hr />
            <Button label='Continue with Google' outline onClick={() => { }} icon={FcGoogle} />
            <Button label='Continue with Github' outline onClick={() => { }} icon={AiFillGithub} />\
            
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className=' justify-center flex flex-row items-center gap-2'>
                    <div>Already have an account?</div>
                    <div onClick={registerModal.onClose} className='text-neutral-800 hover:underline cursor-pointer'>Log in</div>
                    </div>
            </div>
        </div>
        
    )
  return (
      <div>
          <Modal disabled={loading}
              isOpen={registerModal.isOpen} title='Register'
              actionLabel='Continue'
              onClose={registerModal.onClose}
              onSubmit={handleSubmit(onSubmit)}
              body={bodyContent}
              footer={footerContent}
          
          />
    </div>
  )
}

export default RegisterModal