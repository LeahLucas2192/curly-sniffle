import React from 'react';
import "./about.css";
import Me from "../../assets/me.jpg";
import AboutBox from './AboutBox';
import CV from "../../assets/Leah CV 2025.pdf";

function About() {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
         <div className="about__info">
          <p className="about__description">Hey, I’m Leah Lucas—a full-stack developer with a flair for design and a knack for turning code into something beautiful. I love making tech feel human, creating websites that are as fun to use as they are to build. With a mix of software engineering skills and a creative background, I design with purpose and code with heart. When I’m not deep in code, you’ll find me reading a book, gaming, exploring with my camera or brainstorming my next big project. Let’s make something awesome!</p>
          <a href={CV} download="LeahLucas_CV.pdf" className="btn">Download CV</a>
         </div>

         <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>
          </div>

          <div className="skills__data">
            
            <div className="skills__titles">
              <h3 className="skills__name">UX/UI design</h3>
              <span className="skills__number">80%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
            </div>
          </div><div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Photography</h3>
              <span className="skills__number">60%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage photography"></span>
            </div>
          </div>

         </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About