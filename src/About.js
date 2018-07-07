import React from 'react';
import Nav from './Nav';
import { HashLink as Link } from 'react-router-hash-link';
import ben from './ben.png';
import erin from './erin.PNG';
import hannah from './hannah.jpg';
import QAndA from './QAndA';
import Subheader from './Subheader';
import './About.css';

export default function About() {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>
      <Subheader text='A new era that spreads each small wing and can not be reached with one small wing' />
      <h2></h2>
      <Nav />
      <div className="bio">
        <div className="container">
          <div className="bio__section">
            <div><img className="pic" src={hannah} /></div>
            <QAndA answers={hannahAnswers} />
          </div>
          <div className="bio__section">
            <div><img className="pic" src={ben} /></div>
            <QAndA answers={benAnswers} />
          </div>
          <div className="bio__section">
            <div><img className="pic" src={erin} /></div>
            <QAndA answers={erinAnswers} />
          </div>

        </div>
      </div>
      <div className="footer">Q&A Questions taken from the Google translated <a href="http://goosehouse.jp/profile/" target="_blank">Goose House website</a> and talked about on <Link to="/#32">this episode</Link></div>
    </div>
  )
}

const hannahAnswers = {
  person: 'HANNAH',
  instruments: 'French horn, trumpet, bad piano',
  musicians: 'Janelle Monáe, Guster, Erin Brown',
  movie: 'I saw Ladybird recently, that was pretty good',
  book: 'Since Harry Potter is a series of books, I gotta say Ella Enchanted (MAKE IT A MINISERIES PLEASE)',
  endOfLife: 'An entire key lime pie made with fresh key lime juice. No effing raspberry sauce',
  tongue: 'All of it, I think',
  love: 'Cats, Ian, a lot of other things you can hear about on the podcast!',
  onga: 'None of your business',
  whatAreYouDoing: 'This is a fucking trick question and I won’t be tricked',
  aWord: 'LAUGHING!'
};

const benAnswers = {
  person: 'BEN',
  instruments: 'Guitar, piano, formerly french horn and trumpet',
  musicians: 'Ben Folds, Guster, Lin-Manuel Miranda',
  movie: 'MY important movie Lord of the Rings: Return of the King',
  book: `THE important book is either Island by Aldous Huxley or Kafka on the Shore by Haruki Murakami`,
  endOfLife: 'A real good turkey club',
  tongue: 'I would imagine anything that\'s not beef tongue',
  love: 'Komo, kind of Kylie',
  onga: 'WHY, ONGA??',
  whatAreYouDoing: 'Nothing, don\'t try to fucking trick me',
  aWord: 'Omelet (occasionally)'
};

const erinAnswers = {
  person: 'ERIN',
  instruments: 'Guitar, piano, vocables',
  musicians: 'I\'ve influenced a lot of musicians, but if I have to choose who I\'ve influenced the most I\'d say probably Janelle Monáe or Taylor Swift',
  movie: 'Meet Joe Black and My Big Fat Greek Wedding. There was a summer that Hannah and I watched these fine films OVER AND OVER AND OVER.',
  book: 'The Harry Potter series did a lot for Wizard visibility so I\'ll say those',
  endOfLife: 'Something that I\'ve not just choked to death on',
  tongue: 'This is a tough one (beef tongue joke)',
  love: 'My wife, my dog, my family, my podcast co-hosts (who are also my family)',
  onga: 'WHY NOT',
  whatAreYouDoing: 'Probably recording this podcast.',
  aWord: 'Cousins'
};
