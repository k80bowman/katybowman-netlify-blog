import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

const Header = (location) => {
  const writerPage = location.location === 'writer';
  const devPage = location.location === 'developer';
  const writerLinkClass = classnames({
    current: writerPage,
  });
  const developerLinkClass = classnames({
    current: devPage,
  });

  return (
    <section className="header">
      <div className="sticky-wrapper">
        <Link className="name" to="/">
          <h1>
            <span className="first-name">Katy</span>
            <span className="last-name">Bowman</span>
          </h1>
        </Link>
        <ul className="nav">
          <li><Link className={writerLinkClass} to="/writer/">writer</Link></li>
          <li><Link className={developerLinkClass} to="/developer/">developer</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
