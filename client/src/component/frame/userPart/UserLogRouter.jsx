import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import BarMenuC from '../connexion/connecter/produits/BarMenuConnected'
import BarProductListC from '../connexion/connecter/produits/BarProductListC'
import Panier from '../connexion/connecter/Panier'
import BarMenuConnected from '../connexion/connecter/produits/BarMenuConnected'
import Profile from '../connexion/connecter/Profile'
import Error from '../Error'
import Unlog from './Unlog'
export default function UserLogRouter() {

    //il faudra mettre les routes de l'utilisateur connecté ici

 return (
    <Routes>
      <Route path='/BarList' element={<BarMenuConnected/>}/>
      <Route path='/BarInfo/:id' element={<BarProductListC/>}/> 
      <Route path='/Panier' element={<Panier/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='*' element={<Error />} />
      <Route path = '/Unlog' element={<Unlog />} />
    </Routes>
   
  )
}
