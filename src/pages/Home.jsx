import React, { useRef } from 'react';
import ShapeGrid from '../components/ShapeGrid';
import TextType from '../components/TextType';
import TiltedCard from '../components/TiltedCard';
import Professional from '../assets/Professional.png';
import CVAntonio from '../assets/CV_Antonio.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} id="Home" className="home-hero home-page-section relative flex w-full items-center overflow-hidden py-16 sm:py-20">
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />
      {/* The grid stays decorative so it never competes with the content. */}
      <div className="absolute inset-0 z-0 opacity-70" aria-hidden="true">
        <ShapeGrid 
          shape="square" 
          squareSize={80} 
          speed={0.55} 
          borderColor="rgba(167, 139, 250, 0.18)" 
          hoverFillColor="#6d5dfc"
          hoverTrailAmount={6}
          interactionTargetRef={heroRef}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 md:flex-row md:gap-8 lg:px-10">
        {/* Left Content */}
        <div className="w-full space-y-5 text-center md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Hi There,
          </h1>
          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            I'm Rhoanne Nicole <span className="home-name-accent block">Antonio</span>
          </h2>
          
          <div className="flex min-h-9 flex-wrap items-center justify-center gap-x-2 text-base font-semibold text-slate-600 sm:text-lg md:justify-start lg:text-xl">
            <span>I Am into</span>
            <TextType 
              text={['Cloud Engineering','DevOps Engineering', 'Web Development', 'Software Engineering']} 
              className="home-type-text"
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={2000}
            />
          </div>

          <p className="home-summary mx-auto max-w-xl text-center text-[0.95rem] leading-7 text-slate-300 sm:text-base md:mx-0 md:text-left">
            Fourth-year BS IT student who builds full-stack web apps with Laravel, React.js, and Tailwind CSS, with experience in REST APIs, cloud deployment, and CI/CD. Seeking to contribute to a development team and grow as a full stack developer.
          </p>

          <div className="pt-2">
            <a
              className="home-cta inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white transition hover:-translate-y-0.5"
              href={CVAntonio}
              download="CV_Antonio.pdf"
            >
              Resume <FontAwesomeIcon icon={faDownload} className="text-sm" aria-hidden="true" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 pt-3 md:justify-start">
            <a href="https://www.linkedin.com/in/rhoanne-antonio-3a6767364/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="home-social">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Ronni-Antonio?tab=overview&from=2026-11-01&to=2026-11-21" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="home-social">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/rhoannenicole.antonio.9" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="home-social">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        {/* Right Content - TiltedCard */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="home-portrait-wrap relative">
            
            <TiltedCard
              imageSrc={Professional}
              altText="Rhoanne Nicole Antonio"
              containerHeight="min(500px, 78vw)"
              containerWidth="min(400px, 78vw)"
              imageHeight="min(500px, 78vw)"
              imageWidth="min(400px, 78vw)"
              rotateAmplitude={8}
              scaleOnHover={1.03}
              showTooltip={false}
              showMobileWarning={false}
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
