// eslint-disable-jsx-a11y/href-no-hash
// eslint-disable-next-line no-unused-vars
import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="https://www.google.ru/">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://www.google.ru/">People</a>
        </li>
        <li>
          <a href="https://www.google.ru/">Planets</a>
        </li>
        <li>
          <a href="https://www.google.ru/">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;