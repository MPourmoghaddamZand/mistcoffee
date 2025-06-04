import React from 'react'
import Starter from './pages/Starter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Search from './pages/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Starter />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<></>} />
          <Route path='/shopcart' element={<></>} />
          <Route path='/ordercallback' element={<></>} />
          <Route path='/orderstatus' element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App