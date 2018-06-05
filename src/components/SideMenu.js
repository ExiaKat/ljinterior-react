import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { links as linkItems } from '../data/images';

class SideMenu extends Component {
  render() {
    return (
      <Menu>
        {linkItems.map(link => <a key={link} className="menu-item" href={'#' + link}>{link}</a>)}
      </Menu>
    );
  }
}

export default SideMenu;