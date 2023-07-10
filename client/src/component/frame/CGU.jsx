import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import NavBarAuth from './connexion/connecter/NavBarAuth';
import NavBarman from './connexion/ConnexionBar/NavBarman';
export default function CGU() {
  let navbar=null;
  function navbardisplay(){
  if(localStorage.getItem('token') === null){
     navbar = <NavBar/>;
  }
  else{
    if(localStorage.getItem('token') ){
       navbar = <NavBarAuth/>;
    }}
    
      if(localStorage.getItem('idBar')){
         navbar = <NavBarman/>;

      }}
    
  return (
    <>
    {
<NavBar/>   }
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 >CGU</h1>
          <p className="text-justify">
            MENTIONS LÉGALES
            La structure générale, ainsi que les textes, photos, vidéos et sons composants ce site, sont la propriété de Hackat'Innov. L’ensemble de ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques sonores et photographiques. Toute représentation totale ou partielle de ce site ou d’un ou plusieurs de ces composants, par quelque procédé que ce soit, sans autorisation expresse du directeur de la publication est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
          <p className="text-justify">
            INFORMATIQUE ET LIBERTÉS
            L’utilisateur de ce site est notamment informé que les informations qu’il communique sur les formulaires présents sur le site, sont nécessaires pour répondre à sa demande, et sont destinées à Hackat'Innov, responsable du traitement, à des fins de gestion administrative et commerciale.
          </p>
          <p className="text-justify">
            Les marques et logos figurant sur ce site sont des marques déposées. Leur mention n’accorde en aucune manière une licence ou un droit d’utilisation quelconque desdites marques, qui ne peuvent donc être utilisées sans le consentement préalable et écrit du propriétaire de la marque sous peine de contrefaçon.
          </p>
          <p className="text-justify">
            L’ensemble des informations présentes sur ce site peut être téléchargé, reproduit, imprimé sous réserve de :
            <ul>
              <li>n’utiliser de telles informations qu’à des fins personnelles et en aucune manière à des fins commerciales ;</li>
              <li>ne pas modifier de telles informations ;</li>
              <li>reproduire sur toutes copies la mention des droits d’auteur (« le copyright ») de Hackat'Innov</li>
            </ul>
          </p>
          <p className="text-justify">
            Toute autre utilisation non expressément autorisée ou toute représentation totale ou partielle de ce site, par quelque procédé que ce soit, est strictement interdite sans autorisation préalable et écrite de Hackat'Innov et constituerait une contrefaçon sanctionnée par les articles L 355-2 et suivants du Code de la Propriété Intellectuelle. Hackat'Innov utilise parfois des « cookies » ou des technologies telles que Google Analytics afin d’analyser les visites de notre site Web. Vous pouvez paramétrer votre navigateur pour éviter toute traçabilité de vos visites ou pour être notifiés lors de la création de cookies.
          </p>
          <h4 >Crédits</h4>
            <p className="text-justify">
                Conception et production : Hackat'Innov
                <ul>
                    <li>Directeur de la publication : Milan Richard</li>
                    <li>Textes : ©Hackat'Innov</li>
                    <li>Crédits et photos : ©Hackat'Innov</li>
                </ul>
            </p>
        <h4 className='text_justify'>Contact</h4><br></br>
        <p className='text_justify'>Mail : Contact@hackatinnov.com</p><br></br>
        <h4>Réalisation du site</h4>
        <p className='text_justify'>Freelancer Hackat'Innov – contact@hackatinnov.com – www.HackatInnov.com – 85000 Vendée– FRANCE</p>

        </Col>
        </Row>
    </Container>

    </>
    );
}

