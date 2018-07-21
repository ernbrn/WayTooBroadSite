import React, { Component } from 'react';
import Episode from './Episode';
import Nav from './Nav';
import Header from './Header';
import Subheader from './Subheader';
import Loader from 'react-loader-spinner';
import './Episodes.css';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'desc'
    };
  }


  render() {
    const { episodes } = this.props;

    const colors = [
      "D2A3EE",
      "A2E9FE",
      "FBA2A6",
      "D0E5A0",
      "FEE097"
    ];

    return (
      <div>
        <header>
          <Header text="Welcome to Way Too Broad!" />
        </header>
        <Subheader text="A place for friends to talk about things that they're really really ridiculously excited about" />
        <Nav />
        <div>
          Other ways to listen:
          <div className="episode-link-container">
            <a className="episode-link link" href="https://itunes.apple.com/us/podcast/way-too-broad/id1278674242?mt=2" target="_blank"><i className="episode-icon fab fa-itunes"></i>iTunes</a>
            <a className="episode-link link" href="https://play.google.com/music/listen?u=0#/ps/Imivonektqfwtuaiq57lxzvnsla" target="_blank"><i className="episode-icon fab fa-google-play"></i>Google play</a>
            <a className="episode-link link" href="https://open.spotify.com/show/4YYnvldkosN3eaKrVnRK1o?si=xLxsVrWnSNC79cot-BSA7Q" target="_blank"><i className="episode-icon fab fa-spotify"></i>Spotify</a>
            <a className="episode-link link" href="https://www.stitcher.com/podcast/podfriends/way-too-broad" target="_blank"><i className="episode-icon fas fa-microphone"></i>Stitcher</a>
            <a className="episode-link link" href="https://radiopublic.com/way-too-broad-WxV4eV" target="_blank"><i className="episode-icon fas fa-broadcast-tower"></i>Radio Public</a>
          </div>
        </div>
        {
          episodes.length ? episodes.map(episode => (
            episode.enclosure && <Episode key={episode.guid} episode={episode} />
          )) :
            <div>
              <Loader
                type="Audio"
                color={`#${colors[Math.floor(Math.random() * colors.length)]}`}
              />
              Loading episodes!
          </div>
        }
      </div>
    );
  }
}

export default Episodes;
