import React, { Component } from 'react';
import parser from 'rss-parser-browser';
import Episode from './Episode';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: {}
    };
  }
  componentDidMount() {
    parser.parseURL('https://waytoobroad.libsyn.com/rss', (_err, feed) => this.setState({ feed: feed.feed }));
  }

  render() {
    console.log(this.state.feed);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Way Too Broad!</h1>
        </header>
        <p className="App-intro">
          A place for friends to talk about things that they're really really ridiculously excited about
        </p>

        {
          this.state.feed.entries && this.state.feed.entries.map(episode => (
            <Episode key={episode.guid} episode={episode} />
          ))
        }
      </div>
    );
  }
}

export default App;
