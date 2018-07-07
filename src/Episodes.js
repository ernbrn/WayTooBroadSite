import React, { Component } from 'react';
import Episode from './Episode';
import Nav from './Nav';
import Header from './Header';
import Subheader from './Subheader';

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
          episodes && episodes.map(episode => (
            episode.enclosure && <Episode key={episode.guid} episode={episode} />
          ))
        }
      </div>
    );
  }
}

export default Episodes;