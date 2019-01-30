import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="ui inverted menu">
      <div className="header item">
        <i className="big book icon"></i>
      </div>
      <Link to="/" className="item">home</Link>
      <Link to="/search" className="item">search</Link>
      <div className="right menu">
        <Link to="/login" className="item">login</Link>
      </div>
    </div>
  )
}

export default Header;