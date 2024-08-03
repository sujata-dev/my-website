import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Typed from 'typed.js';
import './App.css';
import Experience from './components/Experience';
import About from './components/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function App() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let typed: Typed | undefined;
    if (currentSection === 'home') {
      const options = {
        strings: ['Hi, I am Sujata Dev', 'I am a Software Engineer'],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
      };
      typed = new Typed(typedRef.current, options);
    }
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [currentSection]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const handleMouseMove = (event: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.classList.add('cursor-hover');
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const updatemenu = () => {
    const menu = document.getElementById('menu') as HTMLElement | null;
    const checkbox = document.getElementById('responsive-menu') as HTMLInputElement;

    if (menu && checkbox.checked) {
      menu.style.borderBottomRightRadius = '0';
      menu.style.borderBottomLeftRadius = '0';
    } else if (menu) {
      menu.style.borderRadius = '10px';
    }
  };

  const handleScrollToSection = (section: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(section);
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <Router>
      <div className="App">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src={`${process.env.PUBLIC_URL}/background.mp4?${new Date().getTime()}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div ref={cursorRef} className="cursor"></div>
        <nav id='menu'>
          <input type='checkbox' id='responsive-menu' onClick={updatemenu} />
          <label htmlFor='responsive-menu'></label>
          <ul>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={700}
                onClick={() => handleScrollToSection('home')}
                className={currentSection === 'home' ? 'selected' : ''}
              >
                <FontAwesomeIcon icon={faHouse} className="fa-icon" />
              </ScrollLink>

            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={700}
                onClick={() => handleScrollToSection('about')}
                className={currentSection === 'about' ? 'selected' : ''}
              >
                <FontAwesomeIcon icon={faUser} className="fa-icon" />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="experience"
                smooth={true}
                duration={700}
                onClick={() => handleScrollToSection('experience')}
                className={currentSection === 'experience' ? 'selected' : ''}
              >
                <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <Element name="home" className={`content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {currentSection === 'home' && (
            <>
              <div className="typing-effect">
                <span ref={typedRef} />
              </div>
              <div className="logo-container">
                <a href="https://en.wikipedia.org/wiki/Bangalore" target="_blank" rel="noopener noreferrer" title="Current Hideout">
                  <img src={`${process.env.PUBLIC_URL}/location_logo.png`} alt="Location" className="logo" />
                </a>
                <a href="mailto:sujatadev97@gmail.com" target="_blank" rel="noopener noreferrer" title="Let's Connect">
                  <img src={`${process.env.PUBLIC_URL}/email_logo.png`} alt="Email" className="logo" />
                </a>
                <a href="https://www.linkedin.com/in/sujata-dev/" target="_blank" rel="noopener noreferrer" title="Network Central">
                  <img src={`${process.env.PUBLIC_URL}/linkedin_logo.png`} alt="LinkedIn" className="logo" />
                </a>
                <a href="https://github.com/sujata-dev" target="_blank" rel="noopener noreferrer" title="Developer Hub">
                  <img src={`${process.env.PUBLIC_URL}/github_logo.png`} alt="Github" className="logo" />
                </a>
                <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download="resume.pdf" title="Professional Snapshot">
                  <img src={`${process.env.PUBLIC_URL}/resume_logo.png`} alt="Resume" className="logo" />
                </a>
              </div>
            </>
          )}
        </Element>

        <Element name="about" className={`content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="content">
            {currentSection === 'about' && <About />}
          </div>
        </Element>
        <Element name="experience" className={`content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="content">
            {currentSection === 'experience' && <Experience />}
          </div>
        </Element>
        <div className="video-credit">
          <a href="https://www.pexels.com/video/shades-of-lights-in-the-outer-space-2611250/" target="_blank" rel="noopener noreferrer">Video by Oleg Gamulinskii</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
