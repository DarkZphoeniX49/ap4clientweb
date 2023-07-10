import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BarList from './component/barList'
import BarProductList from './component/frame/barInfo/barProductList'
import Unlog from './component/frame/userPart/Unlog'
import Error from './component/frame/Error'
import CGU from './component/frame/CGU'
import Plan from './component/frame/Plan'
export default function RouterDefault() {
  return (
    <Routes>
        <Route index element={<BarList />} /> 
        <Route path='/' element={<BarList />} />
        <Route path='/BarInfo/:id' element={<BarProductList />} />
        <Route path='*' element={<Error />} />
        <Route path = '/Unlog' element={<Unlog />} />
        <Route path = '/cgu' element={<CGU/>} />
        <Route path = '/Plan' element={<Plan/>} />
    </Routes>  
    )
}
