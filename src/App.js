import './App.scss';



import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import PublicContainer from './containers/PublicContainer';
import PrivateContainer from './containers/PrivateContainer';
import PrivateAdminContainer from './containers/PrivateAdminContainer';


import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/loginLogout/Login';

import React from 'react';
import Settings from './pages/profileSettings/Settings';
import Utilizadores from './pages/utilizadores/Utilizadores';
import Contactos from './pages/contactos/Contactos';
import HistoricoGeral from './pages/historicoGeral/HistoricoGeral';
import ListaProdutos from './pages/produtos/Produtos';
import Dashboard from './pages/dashboard/Dashboard';
import GestaoProdutos from './pages/gestaoProdutos/Produtos';
import Sobre from './pages/sobre/Sobre';
import ForceUpdatePassword from './pages/forceUpdatePassword/ForceUpdatePassword';


function App() {

  return (
    <div className="main ">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/public" replace="true" />}></Route>
          <Route exact path="/public" element={<Navigate to="/public/landing" replace="true" />}> </Route>
          <Route path="/public" element={<PublicContainer></PublicContainer>}>
            <Route path="/public/landing" element={<LandingPage></LandingPage>} ></Route>
            <Route path="/public/login" element={<LoginPage></LoginPage>} ></Route>
          </Route>

          <Route exact path="/private" element={<Navigate to="/private/gerirprodutos" replace="true" />}> </Route>
          <Route path="/private" element={<PrivateContainer></PrivateContainer>} >
            <Route path="/private/profilesettings" element={<Settings></Settings>} ></Route>
            <Route path="/private/forceupdatepassword" element={<ForceUpdatePassword></ForceUpdatePassword>} ></Route>

            {/* ################ Painel de abastecimento ################ */}
            {/* ## Gestão de Produtos ## */}
            <Route path="/private/gerirprodutos" element={<GestaoProdutos></GestaoProdutos>} ></Route>

            <Route exact path="/private/admin" element={<Navigate to="/private/admin/dashboard" replace="true" />}> </Route>
            <Route path="/private/admin" element={<PrivateAdminContainer></PrivateAdminContainer>}>
              {/* ################ Administração ################ */}
              {/* ## Dashboard ## */}
              <Route path="/private/admin/dashboard" element={<Dashboard></Dashboard>} ></Route>
              {/* ######## Lista de Utilizadores ######## */}
              <Route path="/private/admin/utilizador" element={<Utilizadores></Utilizadores>} ></Route>
              {/* ######## Lista de Produtos ######## */}
              <Route path="/private/admin/listarprodutos" element={<ListaProdutos></ListaProdutos>} ></Route>
              {/* ######## Historico ######## */}
              <Route path="/private/admin/historicogeral" element={<HistoricoGeral></HistoricoGeral>} ></Route>
            </Route>

            {/* ################ Informação ################ */}
            {/* ######## Sobre Nós ######## */}
            <Route path="/private/sobre" element={<Sobre></Sobre>} ></Route>
            {/* ######## Contactos ######## */}
            <Route path="/private/contactos" element={<Contactos></Contactos>} ></Route>






          </Route>
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}



export default App;
