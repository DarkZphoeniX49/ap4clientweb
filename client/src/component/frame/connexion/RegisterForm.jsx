import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../API/barAPI";
import NavBar from "../NavBar";

const RegisterForm = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
    name: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(credential)
      .then((data) =>{
        if(data.status !== 200){
          setError(data.data.message)
        }else{
        navigate("/Auth/Login")}})
   
  };

  const onChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <div className="card text-center" style={{ width: "18rem" }}>
          <div className="card-header">
            <h2>Inscription</h2>
          </div>
          <div className="card-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  value={credential.name}
                  onChange={onChange}
                />
                <br />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="mail"
                  name="email"
                  value={credential.email}
                  onChange={onChange}
                />
                <br />
              </div>
              <div className="form-group">
                <select>
                  <option value=''>Choississez votre tribune</option>
                  <option value="Carré VIP">Carré VIP</option>
                  <option value="Carré Or">Carré Or</option>
                  <option value="Tribune Loire">Tribune Loire</option>
                  <option value="Tribune Océane">Tribune Océane</option>
                  <option value="Tribune Erdre">Tribune Erdre</option>
                  <option value="Tribune Jule Verne">Tribune Jule Ver</option>
                </select>
              </div>
              <br/>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={credential.password}
                  onChange={onChange}
                />
                <br></br>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder=" repeat password"
                  name="password2"
                  value={credential.password2}
                  onChange={onChange}
                />
                <br></br>
              </div>
              <button type="submit" className="btn btn-primary">
                Inscrivez-vous
              </button>
            </form>
            <span>
              Vous avez déjà un compte ?{" "}
              <Link to="/Auth/Login" className="btn btn-link">
                Connectez-vous
              </Link>{" "}
            </span>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default RegisterForm;
