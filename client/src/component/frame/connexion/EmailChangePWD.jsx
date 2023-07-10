/** @format */

import React, { useState } from "react";
import NavBar from "../NavBar";
import { sendEmail } from "../../../API/barAPI";
import { Link } from "react-router-dom";
const EmailChangePWD = () => {
  const [credentials, setCredentials] = useState({ email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(credentials).then((res) => {
     
        // Si la requête réussit, on redirige vers la page de changement de mot de passe avec le code
        // Vous pouvez remplacer "/Auth/CodeVerif" par l'URL de la page de votre choix
      
        // Sinon, on affiche un message d'erreur
        
              window.location.href = "/Auth/CodeVerif";

    });
  };

  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-center my-5'>Mot de passe oublié ?</h1>
        <p className='text-center mb-5'>
          Entrez votre adresse mail pour recevoir un code de vérification
        </p>
        <form
          onSubmit={handleSubmit}
          className='d-flex flex-column align-items-center'
        >
          {error && <div className="alert alert-danger">{error}</div>}
          <div className='form-group'>
            <input
              type='text'
              onChange={handleChange}
              name='email'
              value={credentials.email}
              placeholder='Adresse mail'
              className='form-control'
            />
          </div>
          <button type='submit' className='btn btn-primary mt-3'>
            Envoyer
          </button>
        </form>
        <br/>
        <span>Vous n'avez pas de compte ? <Link to="/Auth/Register" className="btn btn-link">Inscrivez-vous</Link> </span>
        <br/>
        <span>Vous avez déjà un compte ? <Link to="/Auth/Connexion" className="btn btn-link">Connectez-vous</Link> </span>
      </div>
    </>
  );
};

export default EmailChangePWD;
