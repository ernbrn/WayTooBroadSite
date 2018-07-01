import React from 'react';
import './Episode.css';

export default function Episode({ episode }) {
  return (
    <div className="episode">
      <div className="episode__title">{episode.title}</div>
      <div dangerouslySetInnerHTML={{ __html: episode.content }} />
    </div>
  )
};