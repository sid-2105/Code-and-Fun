import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication=true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus!==authentication) {
            navigate('/login')
        }
        else if(!authentication && authStatus!==authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus,navigate,authentication])
  return (
    <>
    {loader ? (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    ) : (
        <>{children}</>
    )}
    </>
  )
}

