'use client'
import React from 'react'

interface ClientOnlyProps {
    children: React.ReactNode

}

const ClientOnly:React.FC <ClientOnlyProps> = ({children}) => {
    const [isMounted, setIsMounted] = React.useState(false)
    
    React.useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if (!isMounted) return null
    
    

  return (
    <div>
      {children}
    </div>
  )
}

export default ClientOnly
