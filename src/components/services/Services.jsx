import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const servicesData = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description:
      "I design visually stunning and user-friendly interfaces that provide seamless experiences. By combining creativity and strategy, I ensure every design aligns with user needs and business goals.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "I specialize in building responsive, functional, and aesthetically pleasing websites. From concept to deployment, I deliver solutions tailored to your unique requirements.",
  },
  {
    id: 3,
    image: Image3,
    title: "Photography",
    description:
      "I capture captivating moments and visuals that enhance storytelling. My photography complements digital projects, ensuring a cohesive and professional aesthetic.",
  },
];


const Services = () => {
  return <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {servicesData.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
  </section>
}

export default Services