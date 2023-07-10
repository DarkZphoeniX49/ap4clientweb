import React from 'react';
import { getAllBar } from '../../../../../API/barAPI';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { store } from '../../../../../redux/store';
import { viderStore } from '../../../../../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavBarAuth from '../NavBarAuth';
const BarMenuConnected = () => {

  const { id } = useParams();
  const dispatch = useDispatch()
  const tribune = "Carré Or"

  const [state, setState] = useState(
    {
      items: [],
      DataisLoaded: false
    }
  )
  useEffect(() => {
    return () => {
      getAllBar(id).then(food => {
        setState({
          items: food,
          DataisLoaded: true
        });
      }
      )
    };
  }, []);
  console.log(store.getState())
  const verifyStore = (id) => {
    if (store.getState().cart.length > 0) {
      const currentStore = store.getState().cart[0].ID_BAR; // récupération de l'ID du magasin actuel
      if (currentStore !== id) {
        // si l'ID du magasin actuel est différent de celui passé en paramètre
        const alertPanier = window.confirm("Vous avez déjà un panier en cours dans un autre bar, voulez vous le supprimer ?");
        if (alertPanier) {
          dispatch(viderStore())
          Navigate(`/BarInfo/${id}`);
        } else {
          console.log("panier non supprimé");
          Navigate(`/BarInfo/${currentStore}`);
        }
      } else {
        // si l'ID du magasin actuel est égal à celui passé en paramètre
        console.log("store déjà sélectionné");
        Navigate(`/BarInfo/${id}`);
      }
    } else {
      console.log("store vide");
      Navigate(`/BarInfo/${id}`);
    }
  }


//changer le liens pour le barinfo car il faut la bonne route
  return (
    <>
      <NavBarAuth />
      <div className="container">
        <div className="row">
          {state.items.map((item) => {
            if (item.typebar.NOM_TYPE === tribune) {
              return (
                <div className="col-sm-4" key={item.ID_BAR}>
                  <div className="card">
                    <img
                      src={item.PHOTOBAR}
                      className="card-img-top"
                      alt="Bar Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.NOMBAR}</h5>
                      <p className="card-text">Ouverture: {item.OUVERTURE}</p>
                      <p className="card-text">Fermeture: {item.FERMETURE}</p>
                      <p className="card-text">Adresse: {item.ADRESSE}</p>
                      <p className="card-text">Type: {item.typebar.NOM_TYPE}</p>
                      <Button onClick={() => verifyStore(item.ID_BAR)}>
                        <Link
                          style={{ textDecoration: 'none', color: '#e8e8e8' }}
                          to={`/User/BarInfo/${item.ID_BAR}`}
                        >
                          Voir le bar
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <br></br>
    </>
  );
  
 
}

export default BarMenuConnected;
