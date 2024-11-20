import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../navbar'

import Dashboard from '../dashboard'
import Home from '../../assets/pages/home'
import Chanel from '../../assets/pages/chanel'
import Reels from '../../assets/pages/Reels'

function  Root() {
  return (
    <>
    <Navbar/>

    <div className='flex items-center gap-4'>
    <div className='h-[100vh] bg-[#e6e1e1] w-[20%]'>

    <Dashboard/>
    </div>
    <div className='w-[80%]'>
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/chanel' element={<Chanel/>}/>
        <Route path='/Reels' element={<Reels/>}/>
        <Route path='*' element={<h1 className='font-bold flex justify-center items-center text-red-600'>Not found 404</h1>}/>
    </Routes>
    </div>
    </div>

    </>

  )
}

export default  Root