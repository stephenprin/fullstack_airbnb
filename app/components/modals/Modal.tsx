"use client";
import React, { useCallback, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

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
  const [showModal, setShowModal] = React.useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || secondaryAction) {
      return;
    }
    secondaryAction();

    
  }, [disabled, secondaryAction]);
  if (!isOpen) return null;

  return (
    <>
      <div className="justify-center items-center flex overscroll-y-auto overscroll-x-hidden fixed z-20 inset-0 outline-none focus:outline-none bg-neutral-800/70 ">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6  items-center">
          {/*content*/}
          <div
            className={`h-full translate duration-300 ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className=" h-full translate lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button className="p-1 border-0 hover:opacity-70 transition absolute left-8">
                  <IoMdClose size={24} onClick={handleClose} />
                </button>
                              <div className="font-semibold text-lg">{title}</div>
                
                          </div>
                          {/*body*/}  
                          <div className="relative p-6 flex-auto ">
                              {body}
                          </div>
                          {/*footer*/}
                          <div className="flex flex-col gap-2 p-6 ">
                              <div className="flex flex-row items-center gap-4 w-full">
                                  {secondaryAction && secondaryLabel && (
                                        <Button label={secondaryLabel}disabled={disabled} onClick={handleSecondaryAction} outline/>
                            )}
                                  <Button label={actionLabel} disabled={disabled} onClick={handleSubmit} />
                              </div>
                              {footer}
                          </div> 
                         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
