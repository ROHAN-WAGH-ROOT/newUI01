import React from "react";
import "./home.css";
import first from '../assets/person_1@2x.png';
import second from '../assets/person_2@2x.png';
import third from '../assets/person_3@2x.png';
import fourth from '../assets/person_4@2x.png';
import five from '../assets/person_5@2x.png';
import backgroundImage from '../assets/Background_decor@2x.png';

export default function home() {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="typography">
        <div className="ourTeam">Our team</div>
        <div className="heading">Meet the brain</div>
        <div className="content">
          We are proud to have them as part of our community and look forward to
          continuing to push the boundaries of what's possible in the world of
          digital art.
        </div>
      </div>
      <div className="firstContainer">
        <img src={first} alt="image"/>
        <div className="textInsideImage">
          <div className="textInsideImageTitle">Liam Novak</div>
          <div className="textInsideImageDesc">Software Engineer</div>
          </div>
      </div>
      <div className="secondContainer">
      <img src={second} alt="image"/>
      <div className="textInsideImage">
          <div className="textInsideImageTitle">Sophia Moretti</div>
          <div className="textInsideImageDesc">Business Development Manager</div>
          </div>
      </div>
      <div className="allMembers">See all members</div>
      <div className="thirdContainer">
      <img src={third} alt="image"  />
      <div className="textInsideImage">
          <div className="textInsideImageTitle">Ethan Rossi</div>
          <div className="textInsideImageDesc">Business Development Manager</div>
          </div>
      </div>
      <div className="fourthContainer">
      <img src={fourth} alt="image"/>
      <div className="textInsideImage">
          <div className="textInsideImageTitle">Isabella Ricci</div>
          <div className="textInsideImageDesc">UX Designer</div>
          </div>
      </div>
      <div className="fiveContainer">
      <img src={five} alt="image"/>
      <div className="textInsideImage">
          <div className="textInsideImageTitle">Noah Conti</div>
          <div className="textInsideImageDesc">Content Creator</div>
          </div>
      </div>
    </div>
  );
}
