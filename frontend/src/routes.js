import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Pages/Form/Login'
import Cadastro from './Pages/Form/Cadastro'
import Home from './Pages/Home/Home'
import Prof from './Pages/Prof/Prof'

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/prof" element={<Prof/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default routes