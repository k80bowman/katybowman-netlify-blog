import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <div className="header">
    <h1 className="name">
      <span className="name__first">Katy</span>
      <span className="name__last">Bowman</span>
    </h1>
    <div className="letter-k">
      <div className="letter-k--up" />
      <div className="letter-k--down" />
    </div>
    <ul className="nav">
      <li><Link to="/writer/">writer</Link></li>
      <li><Link to="/developer/">developer</Link></li>
    </ul>
  </div>
);

export default Header;
