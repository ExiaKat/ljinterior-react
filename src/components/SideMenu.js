import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { linkItems } from './Links';

class SideMenu extends Component {
  render() {
    return (
      <Menu>
        {linkItems.map(link => <a key={link} className="menu-item" href="#">{link}</a>)}
      </Menu>
    );
  }
}

export default SideMenu;