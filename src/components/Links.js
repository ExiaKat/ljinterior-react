import React from 'react';
import { categoryNames as linkItems } from '../data/columnHelper';

// export const linkItems = ['design', 'wildlife', 'landscape', 'contact'];

const links = (props) => (
  <ul>
    {linkItems.map((link, index) => (
      <li key={link} className={props.activeLink === index ? 'active' : ''}>
        <a className="link" href={'#'+link}>{link}</a>
      </li>
    ))}    
  </ul>
);

export default links;