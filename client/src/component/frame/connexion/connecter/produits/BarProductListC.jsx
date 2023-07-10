import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getBarById } from '../../../../../API/barAPI';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToCart}  from '../../../../../redux/CartSlice'
import BarSelectorAuth from './BarSelectorAuth';
import PanierNum from '../PanierNum';
import NavBarAuth from '../NavBarAuth';
//renvoie le header du bar et renvoie le selector pour choisir le menu à voir
const BarProductListC = () => {
    const dispatch = useDispatch()
    const {id} = useParams();
    console.log(id);
    localStorage.setItem('idBar',id);

    const [state,setState] = useState(
         {
            items: [],
            DataisLoaded: false
        }
    )


    useEffect(() => {
        return () => {
            getBarById(id).then((bar) => {
                setState({
                    items:  bar,
                    DataisLoaded: true
                });
                
            } )
            console.log(state.items);
        };
    },[]);

    //penser a adapter avec les tout les objets du bar
    return (
        <>
        <NavBarAuth/>
        <div className="container">
        <div className="jumbotron">
          {state.items.map((item) => (
            <div key={item.ID_BAR}>
              <h1 className="display-4">Nom: {item.NOMBAR}</h1>
              <p className="lead">Ouverture: {item.OUVERTURE}</p>
              <p className="lead">Fermeture: {item.FERMETURE}</p>
              <p className="lead">Adresse: {item.ADRESSE}</p>
              <hr className="my-4" />
            </div>
          ))}
        </div>
        <BarSelectorAuth />
        <br />
        <PanierNum />
      </div>
        </>
    );
}

export default BarProductListC;
