import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../config'; // Import BASE_PATH

const headlines = [
  "Rob Hanson: AI-native operator & builder",
  "Judgment under constraints. Production orchestration.",
  "From the factory floor to frontier-model collaboration"
];

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 500);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white"
      style={{
        backgroundImage: `url('${BASE_PATH}backgrounds/hero-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="absolute inset-0 opacity-80 bg-gradient-to-b from-gray-900/80 to-primary-900/80"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`mb-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} text-primary-300`}
          >
            {headlines[currentHeadline]}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Chetek, Wisconsin. Day job in factory logistics; nights and weekends collaborating with frontier models since ChatGPT launched.
            I pair with AI for code and say so. The asset is judgment under constraints and production orchestration — eval taste, multi-turn behavior, shipping real systems — not prompt novelty or a CS pedigree.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn btn-primary">
              Learn About Me
            </Link>
            <Link to="/projects" className="btn bg-white text-primary-800 hover:bg-gray-100">
              View Selected Work <ArrowRight className="ml-2 inline" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
