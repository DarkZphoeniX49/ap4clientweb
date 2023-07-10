import React from 'react';
import { useState } from 'react';
import BarAlcoolList from './barAlcoolList';
import BarFoodList from './barFoodList';
import BarSoftDrink from './BarSoftDrink';
import NavBar from '../NavBar';
const BarSelectorProduct = () => {
    
    let [displayList, setDisplayList] = useState( 0);

  /*  const toggleDisplayList = () => {
        setDisplayList(displayList++);
        console.log(displayList);
        
    }*/

    const barSoft = () => {
        setDisplayList(displayList = 1);
        console.log(displayList);
    }

    const barAlcool = () => {
        setDisplayList(displayList = 2);
        console.log(displayList);
    }

    const barNourriture = () => {
        setDisplayList(displayList = 3);
        console.log(displayList);
    }

    const barBoisson = () => {
        setDisplayList(displayList = 4);
        console.log(displayList);
    }

    const barAll =() =>{
        setDisplayList(displayList = 0);
        console.log(displayList);
    }
    
    if(displayList === 0){
        return(
            <>
            <div className="container">
    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <button className="btn btn-secondary" onClick={barSoft}>Soft</button>
        <button className="btn btn-secondary" onClick={barAlcool}>Alcool</button>
        <button className="btn btn-secondary" onClick={barNourriture}>Nourriture</button>
        <button className="btn btn-secondary" onClick={barBoisson}>Boisson</button>
    </div>
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
            <BarAlcoolList/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
            <BarSoftDrink/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
            <BarFoodList/>
        </div>
    </div>
</div>
</>
        )
    }
    if(displayList === 1){
        return(
            <>
            <div className="container">
    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <button className="btn btn-secondary" onClick={barAll}>Tous les produits</button>
        <button className="btn btn-secondary" onClick={barAlcool}>Alcool</button>
        <button className="btn btn-secondary" onClick={barNourriture}>Nourriture</button>
        <button className="btn btn-secondary" onClick={barBoisson}>Boisson</button>
    </div>
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
            <BarSoftDrink/>
        </div>
    </div>
</div>
</>
        )
    }
    if(displayList === 2){
        return(
            <>
            <div className="container">
            <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
                <button className="btn btn-secondary" onClick={barAll}>Tous les produits</button>
                <button className="btn btn-secondary" onClick={barAlcool}>Alcool</button>
                <button className="btn btn-secondary" onClick={barNourriture}>Nourriture</button>
                <button className="btn btn-secondary" onClick={barBoisson}>Boisson</button>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <BarAlcoolList/>
                </div>
            </div>
        </div>
        </>
        )
    }
    if(displayList === 3){
        return(
            <>
            <div className="container">
            <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
                <button className="btn btn-secondary" onClick={barAll}>Tous les produits</button>
                <button className="btn btn-secondary" onClick={barAlcool}>Alcool</button>
                <button className="btn btn-secondary" onClick={barNourriture}>Nourriture</button>
                <button className="btn btn-secondary" onClick={barBoisson}>Boisson</button>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <BarFoodList/>
                </div>
            </div>
        </div>
        </>
        )
    }
    if(displayList === 4){
        return(
            <>
            <div className="container">
    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <button className="btn btn-secondary" onClick={barAll}>Tous les produits</button>
        <button className="btn btn-secondary" onClick={barSoft}>Soft</button>
        <button className="btn btn-secondary" onClick={barAlcool}>Alcool</button>
        <button className="btn btn-secondary" onClick={barNourriture}>Nourriture</button>
    </div>
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
            <BarAlcoolList/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
            <BarSoftDrink/>
        </div>
    </div>
</div>
</>
        )
        
}
}
export default BarSelectorProduct;
