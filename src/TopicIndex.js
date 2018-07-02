import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from './Nav';
import { getEpisodeNumberFromTitle } from './helpers';
import './TopicIndex.css';

export default function TopicIndex({ episodes }) {
  const topics = [].concat.apply([], episodes.map((ep) => {
    const subtitle = ep.itunes.subtitle;
    const topicsString = 'Topics: ';
    if (subtitle.includes(topicsString)) {
      const episodeNumber = getEpisodeNumberFromTitle(ep.title);
      return subtitle.split(topicsString)[1].split(', ').map(topic => (
        { topic, episodeNumber }
      ))
    }
    return null;
  }).filter(ob => ob));

  return (
    <div>
      <header>
        <h1>Topic Index</h1>
      </header>
      <h2>We've talked about <span>{topics.length}</span> things!</h2>

      <Nav />

      <div>
        {
          topics.map((topicOb, index) => (
            <div key={index}>
              <Link className="link" to={`/#${topicOb.episodeNumber}`}>{topicOb.topic}</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}