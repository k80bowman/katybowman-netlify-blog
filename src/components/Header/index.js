import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <section className="header">
    <Link to="/">
      <h1 className="name">Katy Bowman</h1>
    </Link>
    <hr className="header__line" />
    <ul className="nav">
      <li><Link to="/writer/">writer</Link></li>
      <li><Link to="/developer/">developer</Link></li>
    </ul>
  </section>
);

export default Header;
