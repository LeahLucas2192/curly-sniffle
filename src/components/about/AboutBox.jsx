import React from 'react'

function AboutBox() {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">2192</h3>
                <span className="about__subtitle">Cups of tea</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">427</h3>
                <span className="about__subtitle">Satisfied clients</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>

            <div>
                <h3 className="about__title">35</h3>
                <span className="about__subtitle">Nominee winners</span>
            </div>
        </div>  

    </div>
  )
}

export default AboutBox