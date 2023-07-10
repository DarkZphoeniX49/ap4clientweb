import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSoftDrinks } from '../../../API/barAPI';
import allergeneSort from '../../../tools/utilities';

const BarSoftDrink = () => {

    const {id}=useParams();
    const [state ,setState]=useState({
        items:[],
        dataIsLoaded:false
    });

    useEffect(() => {
        getSoftDrinks(id).then((bar) => {
            setState({
                items:  bar,
                dataIsLoaded: true
            });
        });
    }, []);

    return (
        <div className="container">
        <h1 className="text-center mb-5">Liste des Softs</h1>
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
                    Volume: {item.VOLUME} ml
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
    );
}

export default BarSoftDrink;
