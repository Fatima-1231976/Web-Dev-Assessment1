import React from 'react';
import logoImg from './assets/logo.svg';

function Header() {
  return (
    <header className="site-header">
      <img
        src={logoImg}
        alt="Erased Tapes Records Logo"
        className="brand-logo"
      />

      <nav className="nav-menu">
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>
    </header>
  );
}

export default Header;


