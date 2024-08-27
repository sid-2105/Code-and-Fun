import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData) {
      dispatch(login({userData}))
    }
    else {
      dispatch(logout())
    }
  })
  .finally(()=>{
    setLoading(false)
  })
}, [])

  return !loading ? ( 
    <div className='min-h-screen flex flex-wrap content-between '> 
      <div className='w-full block'>
        <Header />
        <main>
        {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>

  ) : (<div className='m-auto'>Loading...</div>)
 

}

export default App
