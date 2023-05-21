"use client"
import React, { useCallback, useEffect } from 'react'


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
  }
  
  const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel,
  }) => {
      const [isModal, setShowModal] = React.useState(isOpen);

      useEffect(() => {
        setShowModal(isOpen)
      }, [isOpen])

      const handleClose = useCallback(() => { 
          if (disabled) return
          setShowModal(false)
          setTimeout(() => { 
                onClose()
          }, 300)

      }, [disabled, onClose])

      const handleSubmit = useCallback(() => { 
          if (disabled) return
          onSubmit()
      }, [disabled, onSubmit])

      const handleSecondaryAction = useCallback(() => { 
          if (disabled || secondaryAction) {
                return
            } 
          secondaryAction()

          
          if (!isOpen) return null;

      }, [disabled, secondaryAction, isOpen])
  
      return (
        <>
      <div className='justify-center items-center flex overscroll-y-auto overscroll-x-hidden fixed z-20 inset-0 outline-none focus:outline-none bg-neutral-800/70'>
                  <div className='relative w-full md:h-4/6 lg:3/6 xl:2/5 my-6 h-full'>
                      
        </div>
      </div>
          </>
    );
  };
  
  export default Modal;
