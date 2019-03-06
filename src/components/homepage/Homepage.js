import React, { Component } from 'react';
import Nav from 'components/nav/Nav';
import Header from 'components/header/Header';
import Subheader from 'components/header/subheader/Subheader';
import logo from './logo.jpg';
import './Homepage.scss';

class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <Header text="Welcome to Way Too Broad!" />
        </header>
        <img className='homepage-logo' src={logo} height={150} />
        <Subheader text="It's like show and tell, but with more laughing and swearing!" />
        <Nav />
        <div>
          Ways to listen:
          <div className="listen-link-container">
            <a className="listen-link link" href="https://waytoobroad.com/episodes"><i className="episode-icon fas fa-map-pin"></i>Right here</a>
            <a className="listen-link link" href="https://itunes.apple.com/us/podcast/way-too-broad/id1278674242?mt=2" target="_blank"><i className="episode-icon fab fa-itunes"></i>iTunes</a>
            <a className="listen-link link" href="https://play.google.com/music/m/Imivonektqfwtuaiq57lxzvnsla?t=Way_Too_Broad" target="_blank"><i className="episode-icon fab fa-google-play"></i>Google play</a>
            <a className="listen-link link" href="https://open.spotify.com/show/4YYnvldkosN3eaKrVnRK1o?si=xLxsVrWnSNC79cot-BSA7Q" target="_blank"><i className="episode-icon fab fa-spotify"></i>Spotify</a>
            <a className="listen-link link" href="https://www.stitcher.com/podcast/podfriends/way-too-broad" target="_blank"><i className="episode-icon fas fa-podcast"></i>Stitcher</a>
            <a className="listen-link link" href="https://radiopublic.com/way-too-broad-WxV4eV" target="_blank"><i className="episode-icon fas fa-broadcast-tower"></i>Radio Public</a>
            <a className="listen-link link" href="https://podknife.com/podcasts/7035" target="_blank"><i className="episode-icon fas fa-microphone"></i>Pod Knife</a>
          </div>
        </div>
        <div>
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
      </div>
    );
  }
}

export default Homepage;
