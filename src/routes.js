import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Profissional from './pages/Profissional';
import Reflexoes from './pages/Reflexoes';
import MenuStatic from './pages/MenuStatic';
import Menu from './components/Menu';
import Contatos from './pages/Contatos';
import RedesSociais from './pages/RedesSociais';

const Routes = () => {
  return (
    <BrowserRouter>
      <MenuStatic />
      <div className="menu-content">
        <Route exact path="/" component={Profissional} />
        <Route exact path="/reflexoes" component={Reflexoes} />
        <Route exact path="/contatos" component={Contatos} />
        <Route exact path="/redes-sociais" component={RedesSociais} />
        <Menu className="nav-bar"/>
      </div>
    </BrowserRouter>
  );
}

export default Routes;