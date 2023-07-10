
import React, { useState } from 'react';
import NavBarAuth from './NavBarAuth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Nav } from 'reactstrap';
import axios from 'axios';
const Profile = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem('nomClient'),
    email: localStorage.getItem('emailClient'),
  });




  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setName(user.name);
    setEmail(user.email);
    setPassword('');
  };


  async function changeInfo(nom, mail, password, mailorigin){
    const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
    await axios.post(`http://192.168.68.32:9091/api/auth/modifAccount?passwordVerif=${password}&emailModif=${mail}&name=${nom}&email=${mailorigin}`, config).then(
      res => {
        console.log(res)
        localStorage.setItem('nomClient', nom)
         localStorage.setItem('emailClient', mail)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
    
  }
  const handleSave = () => {
//envoie informations a l'api
//retourne false : alert (mdp incorrect) 
//true, enleve le mode edit  
    changeInfo(name, email, password, user.email)
  };

  return (
    
    <Container fluid>
      
      <NavBarAuth />
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {editMode ? (
            <Form>
              <Form.Group>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
                <Form.Label>Tribune</Form.Label>
                <select>
                  <option value="Carré Or">Carré Or</option>
                  <option value="Carré VIP">Carré VIP</option>
                  <option value="Tribune Océane">Tribune Océane</option>
                  <option value="Tribune Loire">Tribune Loire</option>
                  <option value="Tribune Erdre">Tribune Erdre</option>
                  <option value="Tribune Jule Verne">Tribune Jule Verne</option>
                </select>
              <Button onClick={handleSave}>Sauvegarder</Button>
              <Button onClick={handleCancel}>Annuler</Button>
            </Form>
          ) : (
            <>
              <p>Nom: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Tribune : {user.tribune}</p>
              <Button onClick={handleEdit}>Modifier</Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;