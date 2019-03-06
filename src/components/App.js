import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import parser from 'rss-parser-browser';
import Episodes from 'components/episodes/Episodes';
import About from 'components/about/About';
import TopicIndex from '../TopicIndex';
import Contact from './contact/Contact';
import Homepage from './homepage/Homepage';
import './App.scss';

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
          <Homepage />
        )} />
        <Route exact path='/episodes' render={_props => (
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
