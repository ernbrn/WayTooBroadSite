import React, { Component } from 'react';
import Nav from 'components/nav/Nav';
import Header from 'components/header/Header';
import Subheader from 'components/header/subheader/Subheader';
import Loader from 'react-loader-spinner';
import Episode from './episode/Episode';
import './Episodes.scss';

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
          <Header text="Episodes" />
        </header>
        <Subheader text="It's like a snack for your ears" />
        <Nav />
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
