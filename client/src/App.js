/** @format */

import "./App.css";
import BarRouter from "./component/frame/connexion/ConnexionBar/BarRouter";
import NavBar from "./component/frame/NavBar";
import BarList from "./component/barList";
import { Route, Routes } from "react-router-dom";
import BarProductList from "./component/frame/barInfo/barProductList";
import RouterLogin from "./component/frame/connexion/RouterLogin";
import UserLogRouter from "./component/frame/userPart/UserLogRouter";
import AuthGuard from "./component/frame/connexion/HelperLogin/AuthGuard";
import AntiAuthGuard from "./component/frame/connexion/HelperLogin/AntiAuthGuard";
import RouterDefault from "./RouterDefault";
import StoreGuard from "./component/frame/connexion/HelperLogin/StoreGuard";
function App() {
  //   <Provider store={store}>
  //pour la deconnexion / bloc d'accès au router login penser à faire un AntiAuthGuard

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/*'
          element={
            <StoreGuard>
              <RouterDefault />
            </StoreGuard>
          }
        />

        <Route
          path='/Auth/*'
          element={
            <AntiAuthGuard>
              <RouterLogin />
            </AntiAuthGuard>
          }
        />
        <Route
          path='/User/*'
          element={
            <AuthGuard>
              <UserLogRouter />
            </AuthGuard>
          }
        />
        <Route 
          path='/Bar/*'
          element={
            <AuthGuard>
              <BarRouter />
            </AuthGuard>
          }
        />
      </Routes>
      <br></br>
      <br></br>
      <footer style={{backgroundColor:"#f5f5f5", padding:"20px"}}>
                <p style={{marginBottom:"0"}}>©2023 Tous droits réservés.</p>
                <a href="/cgu" style={{color:"#337ab7"}}>Conditions Générales d'Utilisation</a>
                <a href="" style={{color:"#337ab7", marginLeft:"20px"}}>Conditions Générales de ventes</a>
            </footer>
    </div>
  );
}

export default App;
