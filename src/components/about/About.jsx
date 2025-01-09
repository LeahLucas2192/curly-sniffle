import React from 'react';
import "./about.css";
import Me from "../../assets/me.jpg";

function About() {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
         <div className="about__info">
          <p className="about__description">I am Leah Lucas, web developer from Tacoma, Washington. I have rich experience in web design..etc (finish bio l8tr)</p>
          <a href="" className="btn">Download CV</a>
         </div>

         <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Development</h3>
              <span className="skills__number development">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>

          <div className="skills__data">
            
            <div className="skills__title">
              <h3 className="skills__name">UX/UI design</h3>
              <span className="skills__number">80%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
            </div>
          </div><div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Photography</h3>
              <span className="skills__number">60%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage"></span>
            </div>
          </div>

         </div>
        </div>
      </div>
    </section>
  )
}

export default About