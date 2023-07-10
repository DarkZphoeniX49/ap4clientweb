import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RegisterForm from './RegisterForm'
import Error from '../Error'
import ConnexionForm from './connexionForm'
import CodePWDChange from './CodePWDChange'
import EmailChangePWD from './EmailChangePWD'
import ConnexionFormBar from './ConnexionBar/ConnexionFormBar'
export default function RouterLogin() {
  return (
    <Routes>
        <Route index element={<ConnexionForm />} /> 
        <Route path='/Login' element={<ConnexionForm />} />
        <Route path='/Register' element={<RegisterForm />} />
        <Route path='/MdpOublie' element={<EmailChangePWD />} />
        <Route path='/CodeVerif' element={<CodePWDChange />} />
        <Route path='*' element={<Error />} />
        <Route path='/ConnexionBar' element={
            <ConnexionFormBar />
        } />

    </Routes>
  )
}
