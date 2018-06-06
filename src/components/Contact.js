import React from 'react';

const contact = (props) => {
  return (
    <div id="contact" className="section__contact">
      <h2 className="section-title">Contact</h2>
      <p>Mobile: (+61) 0433559293</p>
      <p>Email: lj.zhang@ljinterior.com.au</p>
      <p>Address: 1 Trueman Street, Bonnet Bay, Australia</p>
      <div className="social">
        <a href="https://www.facebook.com/RetailDesignSydney">
          <img className="social-icon" src="./images/logo-facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/Li-jun-zhang-b89865103"><img className="social-icon" src="./images/logo-linkedin.svg" alt="LinkedIn" /></a>
      </div>
    </div>
  );
};

export default contact;

