import React from 'react'
import Starter from './pages/Starter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Starter />} />
        <Route path='/menu' element={<></>} />
        <Route path='/search' element={<></>} />
        <Route path='/profile' element={<></>} />
        <Route path='/shopcart' element={<></>} />
        <Route path='/ordercallback' element={<></>} />
        <Route path='/orderstatus' element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App