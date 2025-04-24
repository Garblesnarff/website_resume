/**
 * LEARNING RESOURCES PAGE - Displays curated AI learning resources
 * 
 * This component renders the list of AI podcasts and YouTube channels
 * curated by the user, organized by category.
 * 
 * Dependencies:
 * - react
 * - react-router-dom (for Link)
 * - lucide-react (for icons)
 * - ../data/learning-resources (data source)
 * - ../../public/backgrounds/aurora-background.png (or other appropriate background)
 * 
 * @author Cline (AI Assistant)
 */

import { Link } from 'react-router-dom';
import { learningResourcesData } from '../data/learning-resources';
import { Youtube, ArrowLeft } from 'lucide-react'; // Import YouTube and Back icon
import learningBackground from '../../public/backgrounds/aurora-background.png'; // Using aurora as placeholder

const LearningResources = () => {
  const { introduction, categories, note, lastUpdated } = learningResourcesData;

  return (
    <>
      {/* Header Section */}
      <section
        className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white"
        style={{
          backgroundImage: `url(${learningBackground})`, // Consider a unique background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom relative">
           {/* Back Button */}
           <Link 
             to="/about" // Link back to About page, or potentially Skills page
             className="absolute top-0 left-0 mt-4 ml-4 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
             aria-label="Back to About page"
           >
             <ArrowLeft size={20} />
             <span>Back</span>
           </Link>
          <h1 className="mb-4 text-white text-center">AI Learning Resources</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
            A curated list of podcasts and channels for continuous AI learning.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg mx-auto mb-12">
              <p>{introduction}</p>
            </div>

            {/* Categories and Resources */}
            {categories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">{category.title}</h2>
                <ul className="space-y-6">
                  {category.resources.map((resource, rIndex) => (
                    <li key={rIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-700 hover:text-primary-900 hover:underline flex items-center gap-2"
                        >
                          <Youtube size={20} className="text-red-600" /> 
                          {resource.title}
                        </a>
                      </h3>
                      {resource.host && (
                        <p className="text-sm text-gray-500 mb-2">Hosted by: {resource.host}</p>
                      )}
                      <p className="text-gray-700">{resource.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Note Section */}
            <div className="mt-12 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md text-blue-800">
              <h4 className="font-semibold mb-1">Note:</h4>
              <p className="text-sm">{note}</p>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center text-sm text-gray-500">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningResources;
