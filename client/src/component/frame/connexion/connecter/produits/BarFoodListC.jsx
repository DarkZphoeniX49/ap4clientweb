/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getFoodList } from "../../../../../API/barAPI";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/CartSlice";
export default function BarFoodC() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    items: [],
    DataisLoaded: false,
  });
  useEffect(() => {
    return () => {
      getFoodList(id).then((food) => {
        setState({ items: food, DataisLoaded: true });
      });
    };
  }, []);
  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Liste de nourritures</h1>
      <div className='row'>
        {state.items.map((item) => (
          <div className='col-12' key={item.ID_PRODUIT}>
            <div className='card w-100'>
              <div className='card-body'>
                <h5 className='card-title'>Nom produit: {item.NOM_PRODUIT}</h5>
                <p className='card-text'>Prix: {Math.round((item.PRIX*1.1) * 100 )/100}  €</p>
                <p className='card-text'> Poids : {item.POIDS} g</p>          
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
                        poids: item.POIDS,
                        price:item.PRIX,
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
}

function allergeneSort(allergene) {
  if (!allergene) {
    return "Aucun";
  } else {
    return allergene;
  }
}
