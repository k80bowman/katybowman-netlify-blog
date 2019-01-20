import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <section className="footer">
    <ul className="footer__nav">
      <li><Link to="/">home</Link></li>
      <li><Link to="/writer/">writer</Link></li>
      <li><Link to="/developer/">developer</Link></li>
    </ul>
    <p className="footer__copyright">
      &copy;
      {`${new Date().getFullYear()} `}
      Katy Bowman
    </p>
  </section>
);

export default Footer;
