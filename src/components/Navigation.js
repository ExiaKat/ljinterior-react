import React, { Component } from 'react';
import Links from './Links';

class Navigation extends Component {
  render() {
    const className = ["nav"];
    if(this.props.className) {
      className.push(this.props.className);
    }
    return (
      <div className={className.join(' ')} style={this.props.style}>
        <img className="logo" src="./images/unsplash.svg" alt="Lj Interior logo"/>
        <Links activeLink={this.props.activeLink} />
      </div>
    );
  }
}

export default Navigation;