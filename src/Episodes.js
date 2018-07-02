import React, { Component } from 'react';
import Episode from './Episode';
import Nav from './Nav';

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
          <h1>Welcome to Way Too Broad!</h1>
        </header>
        <h2>
          A place for friends to talk about things that they're really really ridiculously excited about
        </h2>
        <Nav />
        {
          episodes && episodes.map(episode => (
            <Episode key={episode.guid} episode={episode} />
          ))
        }
      </div>
    );
  }
}

export default Episodes;