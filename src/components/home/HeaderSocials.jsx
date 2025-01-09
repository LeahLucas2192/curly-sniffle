import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    
    <div className="home__socials">
  <a
    href="https://www.instagram.com"
    className="home__social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BsInstagram className="home__social-icon" />
  </a>
  <a
    href="https://www.linkedin.com/in/leahlucas377/"
    className="home__social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BsLinkedin className="home__social-icon" />
  </a>
  <a
    href="https://www.github.com/LeahLucas2192"
    className="home__social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BsGithub className="home__social-icon" />
  </a>
</div>

  );
}

export default HeaderSocials;
