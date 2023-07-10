/** @format */

import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSoftDrinks } from "../../../../../API/barAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/CartSlice";
const BarSoftC = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    items: [],
    dataIsLoaded: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      getSoftDrinks(id).then((bar) => {
        setState({
          items: bar,
          DataisLoaded: true,
        });
      });
    };
  }, []);
  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Liste des Softs</h1>
      <div className='row'>
        {state.items.map((item) => (
          <div className='col-12' key={item.ID_PRODUIT}>
            <div className='card w-100'>
              <div className='card-body'>
                <h5 className='card-title'>Nom produit: {item.NOM_PRODUIT}</h5>
                <p className='card-text'>Prix: {Math.round((item.PRIX*1.1) * 100 )/100}€</p>
                <p className='card-text'>Volume: {item.VOLUME} Cl</p>
                <p className='card-text'>
                  Allergène: {allergeneSort(item.LIBALLERGENE)}
                </p>
                <button
                  className='btn btn-primary'
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.ID_PRODUIT,
                        title: item.NOM_PRODUIT,
                        volume: item.VOLUME,
                        price: item.PRIX,
                        idBar: item.ID_BAR,
                      })
                    )
                  }
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function allergeneSort(allergene) {
  if (!allergene) {
    return "Aucun";
  } else {
    return allergene;
  }
}
export default BarSoftC;
