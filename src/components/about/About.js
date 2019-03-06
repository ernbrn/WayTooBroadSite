import React from 'react';
import Nav from 'components/nav/Nav';
import { HashLink as Link } from 'react-router-hash-link';
import QAndA from 'components/qanda/QAndA';
import Header from 'components/header/Header';
import Subheader from 'components/header/subheader/Subheader';
import ben from './ben.png';
import erin from './erin.PNG';
import hannah from './hannah.jpg';
import './About.scss';

export default function About() {
  return (
    <div>
      <header>
        <Header text="About Us" />
      </header>
      <Subheader text='A new era that spreads each small wing and can not be reached with one small wing' />
      <Nav />
      <div className="aboutWTB">
        <h2><b>WHAT IS WAY TOO BROAD?</b></h2>
        <div className="whatIsWTB">
          <p>
            Way Too Broad began in the Spring of 1988 with the birth of your first co-host, Erin.
            She was a happy, healthy baby, but she was a little bit lonely.
            Fortunately, your second co-host Hannah was coming hot on her heels, gracing the world with her presence in the Summer of 1988.
            Hannah, too, needed a playmate. Fortunately, Erin and Hannah’s parents knew each other because their dads were brothers.
            From the first time Erin and Hannah met (in a crib, probably, them both still being newborns) they just knew (presumably) that they would be friends forever!
          </p>
          <p>
            As Erin and Hannah continued being friends and growing up, they both eventually gained +2 siblings!
            Lucky them! One of Hannah’s siblings was a really grumpy baby named Ben who hated it when she kissed his cheeks all the time.
            Eventually, though, he miraculously grew a sense of humor about stuff and became a fun person/your third co-host.
          </p>
          <p>
            Your three co-hosts-to-be all grew into adults living in different parts of the United States, but they always saw each other at least once a year at Thanksgiving.
            One year, they stayed up into the wee hours of the night trying to catch each other up on ALL of the fun interests and observations they had gathered throughout the whole year, but they just didn’t have enough time to get to it all!
            So they decided that instead of saving up all of their fun new discoveries for when they saw each other, they would meet once a week and TELL THE WORLD about all of
            their interests, even the weird ones they don’t even remember they talked about, like, 2 weeks later. And now that’s what they do and they also made a website for it!
          </p>
        </div>
      </div>
      <div className="bio">
        <h2><b>WHO IS WAY TOO BROAD?</b></h2>
        <div className="container">
          <div className="bio__section">
            <div>
              <img className="pic" src={hannah} />
              <div className="twitter"><a href={`https://twitter.com/${hannahAnswers.twitter}`} target="_blank">@{hannahAnswers.twitter}</a></div>
            </div>
            <QAndA answers={hannahAnswers} />
          </div>
          <div className="bio__section">
            <div>
              <img className="pic" src={ben} />
              <div className="twitter"><a href={`https://twitter.com/${benAnswers.twitter}`} target="_blank">@{benAnswers.twitter}</a></div>
            </div>
            <QAndA answers={benAnswers} />
          </div>
          <div className="bio__section">
            <div>
              <img className="pic" src={erin} />
              <div className="twitter"><a href={`https://twitter.com/${erinAnswers.twitter}`} target="_blank">@{erinAnswers.twitter}</a></div>
            </div>
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
  twitter: 'hanthropology',
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
  twitter: 'nicelyprovedben',
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
  twitter: 'ernbrn',
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
