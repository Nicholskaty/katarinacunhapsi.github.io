import React from 'react';
import { NavLink} from 'react-router-dom';

import './styles.css';

const Menu = () => {
  return (
    <ul className="item-group">
      <li><NavLink to="/" exact activeClassName="active">Profissional</NavLink></li>
      <li><NavLink to="/reflexoes" activeClassName="active">Reflexões</NavLink></li>
      <li><NavLink to="/contatos" activeClassName="active">Contatos</NavLink></li>
      <li><NavLink to="/redes-sociais" activeClassName="active">Redes sociais</NavLink></li>
    </ul>
  );
}

export default Menu;