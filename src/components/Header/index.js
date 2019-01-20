import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <section className="header">
    <Link to="/">
      <h1 className="name">
        <span className="name__first">Katy</span>
        <span className="name__last">Bowman</span>
      </h1>
    </Link>
    <ul className="nav">
      <li><Link to="/writer/">writer</Link></li>
      <li><Link to="/developer/">developer</Link></li>
    </ul>
  </section>
);

export default Header;
