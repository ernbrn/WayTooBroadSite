import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Subheader from './components/header/subheader/Subheader';
import { orderedTopicsByLetter, topicCount } from './topicHelper';
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
    const topicsByLetter = orderedTopicsByLetter(this.props.episodes, this.state.order);
    return (
      <div>
        <header>
          <Header text="Topic Index" />
        </header>
        <Subheader text={`We've talked about ${topicCount(this.props.episodes)} things!`} />
        <Nav />

        <div className="sort">
          <div className="order">
            <i className={`${this.state.order === 'asc' && 'order__button--selected'} order__button asc fas fa-arrow-circle-up`} onClick={this.changeOrder('asc')}></i>
            <i className={`${this.state.order === 'desc' && 'order__button--selected'} order__button desc fas fa-arrow-circle-down`} onClick={this.changeOrder('desc')}></i>
          </div>
          <div className="alphabet-search">
            {
              Object.keys(topicsByLetter).map(letter => <Link className="alphabet-search__link" to={`/index#${letter}`}>{letter}</Link>)
            }
          </div>
        </div>

        <div className="topics">
          <div id="top"></div>
          {
            Object.keys(topicsByLetter).map((key) => {
              return (
                <div>
                  <div id={key}>
                    {key}
                  </div>
                  {
                    topicsByLetter[key].map((topicOb, index) => (
                      <div className="topics__item">
                        <Link key={index} className="topic-link" to={`/episodes#${topicOb.episodeNumber}`}>{topicOb.topic}</Link>
                      </div>
                    ))
                  }
                </div>
              )
            })
          }
          <div id="bottom"></div>
        </div>
      </div>
    )
  }
}
