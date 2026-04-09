import React from 'react';
import ShapeGrid from '../components/ShapeGrid';
import TextType from '../components/TextType';
import Button from '../components/Button';
import TiltedCard from '../components/TiltedCard';
import Picture from '../assets/Picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section id="Home" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f8f9fa]">
      {/* Background ShapeGrid */}
      <div className="absolute inset-0 z-0 bg-white">
        <ShapeGrid 
          shape="square" 
          squareSize={80} 
          speed={0.2} 
          borderColor="#eee" 
          hoverFillColor="#6366f1"
          hoverTrailAmount={10}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi There,
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            I'm Rhoanne Nicole <span className="text-indigo-700">Antonio</span>
          </h2>
          
          <div className="text-xl md:text-2xl font-semibold text-gray-700 flex items-center gap-2">
            <span>I Am Into</span>
            <TextType 
              text={['Backend Development', 'Web Design', 'Software Engineering']} 
              className="text-indigo-600"
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={2000}
            />
          </div>

          <div className="pt-4">
            <Button 
              value={
                <span className="flex items-center gap-2">
                  About Me <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </span>
              }
              className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg"
              clickHandler={() => {
                const aboutSection = document.getElementById('About');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-indigo-700 transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Right Content - TiltedCard */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative">
            {/* Circular shadow/background for the profile image as seen in the screenshot */}
            <div className="absolute inset-0 bg-gray-200 rounded-full blur-2xl opacity-50 transform scale-110"></div>
            
            <TiltedCard
              imageSrc={Picture}
              altText="Jorenz Ruiz Profile"
              containerHeight="450px"
              containerWidth="450px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showTooltip={false}
              showMobileWarning={false}
              borderRadius="50%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
