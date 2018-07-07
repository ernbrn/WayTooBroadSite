import React from 'react';
import './Episode.css';
import { getEpisodeNumberFromTitle } from './titleHelper';

export default function Episode({ episode }) {
  return (
    <div className="episode" id={getEpisodeNumberFromTitle(episode.title)}>
      <div className="episode__title"><a href={episode.link} target="_blank">{episode.title.replace('- Way Too Broad', '')}</a></div>
      <div className="episode__info">Published {new Date(episode.pubDate).toLocaleDateString()} | Length {episode.itunes.duration}</div>
      <audio
        src={episode.enclosure.url}
        controls
        preload="none"
        className="audio-player"
      >
      </audio>
      <div className="episode__description" dangerouslySetInnerHTML={{ __html: episode.content }} />
    </div>
  )
};