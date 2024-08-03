import React from 'react';
import './Experience.css';

const experienceData = [
  {
    duration: 'May 2024 — Present',
    company: 'JP Morgan Chase & Co.',
    description: 'Developed and maintained web applications using React and TypeScript.',
    skills: [
      { name: 'Java', url: 'https://www.java.com/' },
      { name: 'Spring', url: 'https://spring.io/' },
      { name: 'Adobe Experience Manager', url: 'https://business.adobe.com/in/products/experience-manager/adobe-experience-manager.html' },
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'Python', url: 'https://www.python.org/' }
    ]
  },
  {
    duration: 'June 2019 — May 2024',
    company: 'Principal Financial Group',
    description: 'Assisted in the development of internal tools using JavaScript and Python.',
    skills: [
      { name: 'Java', url: 'https://www.java.com/' },
      { name: 'Spring', url: 'https://spring.io/' },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Linux', url: 'https://www.linux.org/' },
      { name: 'Next.js', url: 'https://nextjs.org/' }
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="experience-table">
      {experienceData.map((job, index) => (
        <div key={index} className="experience-row">
          <div className="experience-header">
            <div className="experience-duration">{job.duration}</div>
            <div className="experience-company">
              <strong>{job.company}</strong>
            </div>
          </div>
          <div className="experience-details">
            <p>{job.description}</p>
            <div className="skills">
              {job.skills.map((skill, skillIndex) => (
                <a key={skillIndex} href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-button">
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
