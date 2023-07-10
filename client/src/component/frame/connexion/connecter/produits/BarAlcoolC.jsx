/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDrinksAlcool } from "../../../../../API/barAPI";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, viderStore } from "../../../../../redux/CartSlice";
import { store } from "../../../../../redux/store";
import { Navigate } from "react-router-dom";
export default function BarAlcoolC() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    items: [],
    DataisLoaded: false,
  });
  useEffect(() => {
    return () => {
      getDrinksAlcool(id).then((food) => {
        setState({ items: food, DataisLoaded: true });
      });
    };
  }, []);
  const cart = store.getState().cart;

 /* function cartBarexist({ itemsList }) {
    if (store.getState().cart.length > 0) {
      const currentStore = store.getState().cart[0].ID_BAR; // récupération de l'ID du magasin actuel
      if (currentStore !== id) {
        // si l'ID du magasin actuel est différent de celui passé en paramètre
        const alertPanier = window.confirm(
          "Vous avez déjà un panier en cours dans un autre bar, voulez vous le supprimer ?"
        );
        if (alertPanier) {
          dispatch(viderStore());
        } else {
          console.log("panier non supprimé");
          dispatch(addToCart({ itemsList }));
        }
      } else {
        // si l'ID du magasin actuel est égal à celui passé en paramètre
        console.log("store déjà sélectionné");
        Navigate(`/BarInfo/${id}`);
      }
    }
  }*/

  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Liste des Alcool</h1>
      <div className='row'>
        {state.items.map((item) => (
          <div className='col-12' key={item.ID_PRODUIT}>
            <div className='card w-100'>
              <div className='card-body'>
                <h5 className='card-title'>Nom produit: {item.NOM_PRODUIT}</h5>
                <p className='card-text'>Prix: {Math.round((item.PRIX*1.1) * 100 )/100} €</p>
                <p className='card-text'>Volume: {item.VOLUME} Cl</p>
                <p className='card-text'>
                  Allergène: {allergeneSort(item.LIBALLERGENE)}
                </p>
                <button
                  className='btn btn-primary'
                  onClick={() => dispatch(addToCart( {
                    id: item.ID_PRODUIT,
                    title: item.NOM_PRODUIT,
                    poids: item.POIDS,
                    price: item.PRIX,
                    idBar: item.ID_BAR
                }))}
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
