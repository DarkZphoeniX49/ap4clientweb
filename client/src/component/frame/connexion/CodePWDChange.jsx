import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar';

export default function CodePWDChange() {
  const [mail, setMail] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();
const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    
       await axios.post(
        `http://192.168.68.32:9091/api/auth/resetPassword?email=${mail}&password=${password}&token=${pin}&password_confirmation=${passwordConfirm}`,
        {
          mail,
          pin,
          password,
          passwordConfirm,
        }
      ).then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
        }
       
      });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h3>Entrez votre code de vérification</h3>
              </div>
              {error && (<div className="alert alert-danger">{error}</div>)}
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="mail" className="form-label">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="mail"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pin" className="form-label">
                      Code de vérification
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pin"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordConfirm" className="form-label">
                      Confirmation du nouveau mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordConfirm"
                      value={passwordConfirm}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
