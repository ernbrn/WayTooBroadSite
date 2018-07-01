import React from 'react';
import './Episode.css';

export default function Episode({ episode }) {
  return (
    <div className="episode">
      <div className="episode__title"><a href={episode.link} target="_blank">{episode.title.replace('- Way Too Broad', '')}</a></div>
      <div dangerouslySetInnerHTML={{ __html: episode.content }} />
    </div>
  )
};