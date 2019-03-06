import React from 'react';
import './QAndA.scss';

export default function QAndA({ answers }) {
  return (
    <div className="qa">
      <h2 className="name">{answers.person}</h2>
      <p>
        <span className="qa__q">What instruments can you do? /</span> {answers.instruments}
      </p>
      <p>
        <span className="qa__q">Who are the musicians influenced? /</span> {answers.musicians}
      </p>
      <p>
        <span className="qa__q">What is your important movie? /</span> {answers.movie}
      </p>
      <p>
        <span className="qa__q">What is the important book? /</span> {answers.book}
      </p>
      <p>
        <span className="qa__q">What do you want to eat at the end in your life? /</span> {answers.endOfLife}
      </p>
      <p>
        <span className="qa__q">What is not good at beef tongue ? /</span> {answers.tongue}
      </p>
      <p>
        <span className="qa__q">What do you love? /</span> {answers.love}
      </p>
      <p>
        <span className="qa__q"> Why are you doing onga /</span> {answers.onga}
      </p>
      <p>
        <span className="qa__q">What are you doing when you are not doing something? /</span> {answers.whatAreYouDoing}
      </p>
      <p>
        <span className="qa__q">A word as Way Too Broad /</span> {answers.aWord}
      </p>
    </div>
  )
}
