import React from 'react';
import './About.css';


const About: React.FC = () => {
  return (
    <div className="about-container">
      <picture className="about-picture">
        <img src={`${process.env.PUBLIC_URL}/picture.jpeg`} alt="About Me" className="about-img" />
      </picture>
      <div className="about-text">
        <p>
          I am a Full Stack with AWS Software Engineer with 5 years of experience in designing, developing, and delivering high-quality, user-centric
          solutions as well as a strong commitment to continuous personal and professional development. Additionally, known as a mentor,
          offering technical guidance and collaborating with cross-functional Agile teams.
        </p>
      </div>
    </div>
  );
};

export default About;
