import React, { Component } from 'react';
import Episode from './Episode';
import Nav from './Nav';
import Header from './Header';
import Subheader from './Subheader';
import Loader from 'react-loader-spinner';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'desc'
    };
  }


  render() {
    const { episodes } = this.props;

    return (
      <div>
        <header>
          <Header text="Welcome to Way Too Broad!" />
        </header>
        <Subheader text="A place for friends to talk about things that they're really really ridiculously excited about" />
        <Nav />
        {
          episodes.length ? episodes.map(episode => (
            episode.enclosure && <Episode key={episode.guid} episode={episode} />
          )) :
            <div>
              <Loader
                type="Audio"
                color="#a640e1"
              />
              Loading episodes!
          </div>
        }
      </div>
    );
  }
}

export default Episodes;
