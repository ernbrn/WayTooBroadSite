import React from 'react';
import './Episode.css';

export default function Episode({ episode }) {
  return (
    <div className="episode">
      <div className="episode__title"><a href={episode.link} target="_blank">{episode.title.replace('- Way Too Broad', '')}</a></div>
      {
        episode.enclosure &&
        <audio
          src={episode.enclosure.url}
          controls
          preload="none"
        >
          You are using an outdated browser so you can't hear the audio you fool!
        </audio>
      }
      <div dangerouslySetInnerHTML={{ __html: episode.content }} />
    </div>
  )
};