import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from './Nav';
import Header from './Header';
import Subheader from './Subheader';
import { orderedTopicsWithEpisodes } from './topicHelper';
import './TopicIndex.css';

export default class TopicIndex extends Component {
  constructor(props) {
    super(props);
    this.changeOrder = this.changeOrder.bind(this);

    this.state = {
      order: 'asc'
    };
  }

  changeOrder(direction) {
    return () => {
      this.setState({
        order: direction
      })
    }
  }

  render() {
    const topics = orderedTopicsWithEpisodes(this.props.episodes, this.state.order);
    return (
      <div>
        <header>
          <Header text="Topic Index" />
        </header>
        <Subheader text={`We've talked about ${topics.length} things!`} />
        <Nav />

        <div className="order">
          <i class={`${this.state.order === 'asc' && 'order__button--selected'} order__button asc fas fa-arrow-circle-up`} onClick={this.changeOrder('asc')}></i>
          <i class={`${this.state.order === 'desc' && 'order__button--selected'} order__button desc fas fa-arrow-circle-down`} onClick={this.changeOrder('desc')}></i>
        </div>

        <div className="topics">
          {
            topics.map((topicOb, index) => (
              <div className="topics__item">
                <Link key={index} className="link" to={`/#${topicOb.episodeNumber}`}>{topicOb.topic}</Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}