import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import parser from 'rss-parser-browser';
import Episodes from './Episodes';
import About from './About';
import TopicIndex from './TopicIndex';
import Contact from './Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: []
    };
  }

  componentDidMount() {
    parser.parseURL('https://waytoobroad.libsyn.com/rss', (_err, feed) => {
      this.setState({ episodes: feed.feed.entries });
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={_props => (
          <Episodes episodes={this.state.episodes} />
        )} />
        <Route exact path='/about' component={About} />
        <Route exact path='/index' render={_props => (
          <TopicIndex episodes={this.state.episodes} />
        )} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    )
  }
}

export default App;
