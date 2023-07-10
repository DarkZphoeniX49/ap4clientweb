import React, { useState } from "react";
import NavBarman from "./NavBarman";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

export default function BarValidationCode() {
  const [credential, setCredential] = useState({
    code: "",
    mail : ''
  });
  const [error, setError] = useState("");

  async function validationCode(code, mail) {
    try {
      const response = await axios.post(
        `http://192.168.68.32:9091/api/auth/verifyPin?${mail},${code}`
      );
      return response.data;
    } 
    catch (error) {
      console.error(error);
      return error.response;
    }
  }

  const onChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
   /* validationCode(credential.code, credential.mail).then((response) => {
      if (response.status !== 200) {
        setError(response.data.message);
      }
      else {
        alert('Code validé avec succès !');
      }
    });*/
  };

  return (
    <>
      <NavBarman />
      <Container className="my-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h3 className="text-center">Validez une commande à emporter :</h3>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formCode">
                <Form.Label>Code du client :</Form.Label>
                <Form.Control type="text" name="code" value={credential.code} onChange={onChange} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Mail du client :</Form.Label>
                <Form.Control type="email" name="mail" value={credential.mail} onChange={onChange} />
              </Form.Group>
              {error && <Alert variant="danger">{error}</Alert>}
              <Button variant="primary" type="submit" className="mt-3 w-100">
                Valider
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
