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
  }).filter(ob => ob)).sort((a, b) => {
    const topicA = a.topic.toUpperCase().trim();
    const topicB = b.topic.toUpperCase().trim();

    if (topicA < topicB) {
      return -1;
    }

    if (topicA > topicB) {
      return 1;
    }

    return 0;
  });

  return (
    <div>
      <header>
        <h1>Topic Index</h1>
      </header>
      <h2>We've talked about <span>{topics.length}</span> things!</h2>

      <Nav />

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