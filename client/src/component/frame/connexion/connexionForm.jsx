import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { authUser } from '../../../API/barAPI';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import NavBar from '../NavBar';

const ConnexionForm = () => {

    const [credential, setCredential] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState(null); // State variable for error message
    const navigate = useNavigate();

    function verifyUser() {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            navigate('/User/BarList');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        authUser(credential).then((data) =>
           { verifyUser(); 
            if(data.status!==200)
            {
                setErrorMessage(data.data.message); // Update error message state variable
            }
        }
        );
    }

    const onChange = (e) => {
        setCredential({
            ...credential, [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <NavBar />
            <div className="d-flex justify-content-center">
                <br />
                <div className="card text-center" style={{ width: "18rem" }}>
                    <div className="card-header">
                        <h2>Connexion</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name='email' placeholder='mail' value={credential.email} onChange={onChange} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="password" className="form-control" name='password' placeholder='password' value={credential.password} onChange={onChange} />
                            </div>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message if set */}
                            <br />
                            <button type="submit" className="btn btn-primary">Connexion</button>
                        </form>
                        <span>Vous n'avez pas de compte ? <Link to="/Auth/Register" className="btn btn-link">Inscrivez-vous</Link> </span>
                        <br />
                        <span>Mot de passe oublié ? <Link to="/Auth/MdpOublie" className="btn btn-link">Cliquez ici</Link> </span>
                        <br />
                        <span>Vous êtes un bar ? <Link to="/Auth/ConnexionBar" className="btn btn-link">Cliquez ici</Link> </span>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default ConnexionForm;
