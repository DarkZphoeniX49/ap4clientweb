/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  viderStore,
} from "../../../../redux/CartSlice";
import { sendOrder } from "../../../../API/barAPI";
import NavBarAuth from "./NavBarAuth";
const Panier = () => {
  const cart = useSelector((state) => state.cart);
  let bar = {};

  // bar[50]="zzz"
  const dispatch = useDispatch();
  const productListId = [];
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += Math.round((item.price * 1.1) *100) / 100 * item.quantity;
    });
    return totalPrice ;
  };

  function volumeExist(volume) {
    if (volume) {
      return <p> volume : {volume} l</p>;
    } else {
      return 0;
    }
  }

  return (
    <>
      <NavBarAuth />
      <div className='container'>
        <h1 className='text-center'> Liste des articles :</h1>
        <br></br>
        <div className='row'>
          {cart?.map((item) => (
            
              productListId.push({
                id: item.id,
                quantite: item.quantity,
              }),
            
            <div className='col-sm-4' key={item.id}>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Nom produit: {item.title}</h5>
                  <p className='card-text'>Prix: {Math.round((item.price * 1.1) * 100)/100} €</p>
                
                  <div className='text-center'>
                    <button
                      className='btn btn-danger mr-2'
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <p className='btn btn-light mr-2'>  Quantitée : {item.quantity}</p>
                    <button
                      className='btn btn-success'
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className='btn btn-danger btn-block mt-2'
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-2'>
          <h2>Prix total : {getTotal()} € </h2>
        </div>
        <button
          className='btn btn-primary btn-block mt-2'
          onClick={async () => {
            console.log(productListId);
            try {
              await sendOrder(productListId, bar);
              dispatch(viderStore());
              alert("Commande passée avec succès");
            } catch (error) {
              alert(
                "Une erreur s'est produite lors de la passation de la commande"
              );
            }
          }}
        >
          Commander
        </button>
      </div>
    </>
  );
};

export default Panier;
