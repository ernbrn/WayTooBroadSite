import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import cupLogo from './cuplogo.svg';

export default function Nav() {
  return (
    <div className="nav">
      <NavLink exact activeClassName="nav-link--active" className="nav-link" to="/">
        <div className="nav-link__button nav-link__button--yellow">
          Home
        </div>
      </NavLink>
      <NavLink exact activeClassName="nav-link--active" className="nav-link" to="/episodes">
        <div className="nav-link__button nav-link__button--green">
          Episodes
        </div>
      </NavLink>
      <NavLink exact activeClassName="nav-link--active" className="nav-link" to="/about">
        <div className="nav-link__button nav-link__button--purple">
          About
        </div>
      </NavLink>
      <NavLink exact activeClassName="nav-link--active" className="nav-link" to="/index">
        <div className="nav-link__button nav-link__button--red">
          Topic Index
        </div>
      </NavLink>
      <a className="supportLink" target="_blank" href="http://ko-fi.com/waytoobroad">
        <div className="nav-link__button nav-link__button--blue">
          <img src={cupLogo} className="coffeeLogo" /> Support us!
        </div>
      </a>
    </div>
  )
}
