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
import axios from "axios";
import { sendOrder } from "../../../../API/barAPI";
import NavBarman from "./NavBarman";
const BarSurPlace = () => {
  const cart = useSelector((state) => state.cart);
  let bar = {};

  const sendOrder = async (productListId, bar) => {
    try {
      const response = await axios.post(`http://192.168.68.32:9091/api/ajoutCommande/emporter/8/4/`)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  // bar[50]="zzz"
  const dispatch = useDispatch();
  const productListId = [];
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += (Math.round((item.price * 1.2)*100 )/100) * item.quantity;
    });
    return totalPrice;
  };

  function volumeExist(volume) {
    if (volume) {
      return <p> volume : {volume} ml</p>;
    } else {
      return 0;
    }
  }

  return (
    <>
      <NavBarman />
      <div className='container'>
        <h1 className='text-center'> Liste des articles :</h1>
        <br></br>
        <div className='row'>
          {cart?.map((item) => (
            <div className='col-sm-4' key={item.id}>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Nom produit: {item.title} </h5>
                  <p className='card-text'>Prix: {Math.round((item.price * 1.2) * 100)/100} €</p>
                  {productListId.push({
                    id: item.id,
                    quantite: item.quantity,
                  })}
                  {(bar = item.ID_BAR)}
                  <div className='text-center'>
                    <button
                      className='btn btn-danger mr-2'
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <p className='btn btn-light mr-2'>Quantitée : {item.quantity}</p>
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
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br></br>
       <label className="text-center" name = 'table' >Numéro de table : </label> 
       <input type="text" placeholder="table" className=" mt-2">

       </input>
       <br></br>
        <div className='text-center mt-2'>
          <h2>Prix total : {getTotal()} €</h2>
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
        </button>{" "}
      </div>
    </>
  );
};

export default BarSurPlace;
