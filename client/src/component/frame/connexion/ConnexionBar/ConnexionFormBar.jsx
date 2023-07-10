import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { authBar } from '../../../../API/barAPI';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavBar from '../../NavBar';
const ConnexionFormBar = () => {
    //make a form with email and password
    //make a button to submit the form
    //make a button to go to the inscription page

   const [credential, setCredential] = useState({
    email: '', 
    password: ''});
    const navigate= useNavigate();

    function verifyUser() {
        if(localStorage.getItem('token'))
        {
            navigate('/Bar/');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        authBar(credential).then(() =>
        
            verifyUser()
        );
    }
    const onChange = (e) => {
        setCredential({
            ...credential, [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <NavBar/>
        <div className="d-flex justify-content-center">
            <br/>
    <div className="card text-center" style={{width: "18rem"}}>
        <div className="card-header">
            <h2>Connexion</h2>
        </div>
        <div className="card-body">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name='email' placeholder='mail' value={credential.email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name='password' placeholder='password' value={credential.password} onChange={onChange}/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Connexion</button>
            </form>
            
            <span>Mot de passe oublié ? <Link to="/Auth/MdpOublie" className="btn btn-link">Cliquez ici</Link> </span>
            <br/>
            <span>Vous êtes un client ? <Link to="/Auth/Login" className="btn btn-link">Cliquez ici</Link> </span>
        </div>
    </div>
</div>
</>
    );
}

export default ConnexionFormBar;
