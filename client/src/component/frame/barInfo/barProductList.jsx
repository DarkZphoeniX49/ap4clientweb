import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getBarById } from '../../../API/barAPI';
import { useState } from 'react';
import BarSelectorProduct from './BarSelectorProduct';
import NavBar from '../../../component/frame/NavBar';

//renvoie le header du bar et renvoie le selector pour choisir le menu à voir
const BarProductList = () => {
    const {id} = useParams();

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
        };
    },[]);
    //penser a adapter avec les tout les objets du bar
    return (
        
       <>
       <NavBar/>
<div className="container text-center">
  <div className="row">
    {
      state.items.map((item) => ( 
        <div className="col-sm-12" key={item.ID_BAR}>
          <div className="jumbotron">
            <h1 className="display-4">{item.NOMBAR}</h1>
            <p className="lead">Ouverture: {item.OUVERTURE}</p>
            <p className="lead">Fermeture: {item.FERMETURE}</p>
            <p className="lead">Adresse: {item.ADRESSE}</p>
          </div>
        </div>
      ))
    }
  </div>
  <BarSelectorProduct/>
</div>
          </>
    );
}

export default BarProductList;



