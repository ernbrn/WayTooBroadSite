import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from 'components/nav/Nav';
import Header from 'components/header/Header';
import Subheader from 'components/header/subheader/Subheader';
import {
  orderedTopicsByLetter,
  topicCount,
  chronologicalTopicsByDate,
} from './topicHelper';
import './TopicIndex.scss';

export default class TopicIndex extends Component {
  constructor(props) {
    super(props);
    this.changeOrder = this.changeOrder.bind(this);

    this.state = {
      order: localStorage.getItem('order') || 'asc',
      view: localStorage.getItem('view') || 'alphabetical',
    };
  }

  changeOrder(direction) {
    return () => {
      localStorage.setItem('order', direction);
      this.setState({
        order: direction
      })
    }
  }

  changeView(view) {
    return () => {
      localStorage.setItem('view', view);
      this.setState({ view })
    }
  }

  orderedPodcastYears(obj) {
    const keys = Object.keys(obj);

    if (this.state.order === 'desc') {
      return keys;
    }

    return keys.reverse();
  }

  render() {
    const topicsByLetter = orderedTopicsByLetter(this.props.episodes, this.state.order);
    const topicsByDate = chronologicalTopicsByDate(this.props.episodes);

    return (
      <div>
        <header>
          <Header text="Topic Index" />
        </header>
        <Subheader text={`We've talked about ${topicCount(this.props.episodes)} things!`} />
        <Nav />
        <div className="order-view">
          <div
            className={`order-view-link ${this.state.view === 'alphabetical' && 'order-view__button--selected'}`}
            onClick={this.changeView('alphabetical')}
          >
            Alphabetical order
          </div>
          <div
            className={`order-view-link ${this.state.view === 'chronological' && 'order-view__button--selected'}`}
            onClick={this.changeView('chronological')}
          >
            Chronological order
          </div>
        </div>

        <div className="sort">
          {
            (this.state.view == 'alphabetical')
              ? (
                <React.Fragment>
                  <div className="order">
                    <i className={`${this.state.order === 'asc' && 'order__button--selected'} order__button asc fas fa-arrow-circle-up`} onClick={this.changeOrder('asc')}></i>
                    <i className={`${this.state.order === 'desc' && 'order__button--selected'} order__button desc fas fa-arrow-circle-down`} onClick={this.changeOrder('desc')}></i>
                  </div>
                  <div className="alphabet-search">
                    {
                      Object.keys(topicsByLetter).map(letter => <Link key={letter} className="alphabet-search__link" to={`/index#${letter}`}>{letter}</Link>)
                    }
                  </div>
                </React.Fragment>
              )
              : (
                <React.Fragment>
                  <div className="order">
                    <i className={`${this.state.order === 'asc' && 'order__button--selected'} order__button asc fas fa-arrow-circle-up`} onClick={this.changeOrder('asc')}></i>
                    <i className={`${this.state.order === 'desc' && 'order__button--selected'} order__button desc fas fa-arrow-circle-down`} onClick={this.changeOrder('desc')}></i>
                  </div>
                  <div className="chronological-search">
                    {
                      Object.keys(topicsByDate).map((year) => (
                        <div key={year}>
                          <Link to={`/index#${year}`}>
                            <h3>{year}</h3>
                          </Link>
                          <div className="chrono-months">
                            {
                              Object.keys(topicsByDate[year]).map((month) => (
                                <Link key={month} className="alphabet-search__link" to={`/index#${year}-${month}`}>
                                  {month}
                                </Link>
                              ))
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </React.Fragment>
              )
          }
        </div>

        <div className="topics">
          <div id="top"></div>
          {
            this.state.view === 'alphabetical'
              ? (
                Object.keys(topicsByLetter).map((key) => {
                  return (
                    <div key={key}>
                      <div id={key}>
                        {key}
                      </div>
                      {
                        topicsByLetter[key].map((topicOb, index) => (
                          <div className="topics__item" key={index}>
                            <Link className="topic-link" to={`/episodes#${topicOb.episodeNumber}`}>{topicOb.topic}</Link>
                          </div>
                        ))
                      }
                    </div>
                  )
                })
              )
              : (
                this.orderedPodcastYears(topicsByDate).map((year) => {
                  return (
                    <div key={year}>
                      <h3 id={year}>
                        {year}
                      </h3>
                      {
                        Object.keys(topicsByDate[year]).map((month) => (
                          <React.Fragment key={month}>
                            <div id={`${year}-${month}`}>
                              <b>{month}</b>
                            </div>
                            {
                              topicsByDate[year][month].map((topicOb, index) => (
                                <div className="topics__item" key={index}>
                                  <Link className="topic-link" to={`/episodes#${topicOb.episodeNumber}`}>{topicOb.topic}</Link>
                                </div>
                              ))
                            }
                          </React.Fragment>
                        ))
                      }
                    </div>
                  )
                })
              )
          }
          <div id="bottom"></div>
        </div>
      </div>
    )
  }
}
