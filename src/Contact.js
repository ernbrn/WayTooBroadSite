import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Subheader from './Subheader';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <header>
        <Header text="Sosh Meeds" />
      </header>
      <Subheader text="If these don't work try yelling real loud" />
      <Nav />
      <div className="links">
        <a className="contact-link" href="mailto:waytoobroad@gmail.com">
          <i className="contact-icon far fa-envelope-open icon--red"></i>
          Email
        </a>
        <a className="contact-link" href="https://www.instagram.com/waytoobroad/" target="_blank">
          <i className="contact-icon fab fa-instagram icon--purple"></i>
          Instagram
        </a>
        <a className="contact-link" href="https://twitter.com/TooBroadPod" target="_blank">
          <i className="contact-icon fab fa-twitter icon--blue"></i>
          Twitter
        </a>
        <a className="contact-link" href="tel:7743260420" target="_blank">
          <i className="contact-icon fas fa-phone icon--green"></i>
          Call Us!
        </a>
      </div>
    </div>
  )
}
