import React from 'react';
import './Episode.css';

export default function Episode({ episode }) {
  return (
    <div className="episode">
      <div className="episode__title"><b>Title: </b>{episode.title}</div>
      <div><b>Description: </b>{episode.contentSnippet}</div>
    </div>
  )
};