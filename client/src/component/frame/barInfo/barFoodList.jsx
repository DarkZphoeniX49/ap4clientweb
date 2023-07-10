import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getFoodList } from '../../../API/barAPI';
import { useState } from 'react';
import allergeneSort from '../../../tools/utilities';
export default function BarFoodList() {

    const  {id}= useParams();

    const [state,setState] = useState({
        items: [],
        DataisLoaded: false
    });
  useEffect(() => {
    
    return () => {
        getFoodList(id).then(food =>{
            setState({items:food,
                    DataisLoaded: true
                });
        }
    )};
  },[]);
    return (
        <div className="container">
        <h1 className="text-center mb-5">Liste de nourritures</h1>
        <div className="row">
          {state.items.map((item) => (
            <div className="col-12" key={item.ID_PRODUIT}>
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">Nom produit: {item.NOM_PRODUIT}</h5>
                  <p className="card-text">
                    Prix: {Math.round((item.PRIX*1.1) * 100 )/100}€
                  </p>
                  <p className="card-text">
                    Allergène: {allergeneSort(item.LIBALLERGENE)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}