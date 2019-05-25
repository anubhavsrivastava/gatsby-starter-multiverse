import React from 'react';
import config from '../../config';

export default function Header({ onAction = () => {} }) {
  return (
    <header id="header">
      <h1>
        <a href="index.html">
          <strong>{config.heading}</strong> {config.subHeading}
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a
              href="#footer"
              onClick={e => onAction(e, 'about')}
              className="icon fa-info-circle"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
