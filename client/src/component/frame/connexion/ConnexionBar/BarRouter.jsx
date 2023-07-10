import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BarProduct from './BarProduct'
import BarValidationCode from './BarValidationCode'
import BarSurPlace from './BarSurPlace'
import BarAEmporter from './BarAEmporter'
export default function BarRouter() {
  return (
    <Routes>
        <Route index element={<BarProduct />} /> 
        <Route path='/*' element={<BarProduct />} />
        <Route path='/ValidationCode' element={<BarValidationCode />} />
        <Route path='/SurPlace' element={<BarSurPlace />} />
        <Route path='/AEmporter' element={<BarAEmporter />} />
    </Routes>
  )
}
