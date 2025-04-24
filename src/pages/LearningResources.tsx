<<<<<<< HEAD
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
=======
import React from 'react';
import { Link } from 'react-router-dom';
import PodcastItem from '../components/PodcastItem';
import { coreAiPodcasts, techStartupAiPodcasts, aiLeadersOrganizations, specializedAiPodcasts } from '../data/learning-resources';

const LearningResources = () => {
  return (
    <>
      <section
        className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom">
          <h1 className="mb-6 text-white text-center">AI Learning Journey - Podcast YouTube Channels</h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <h2>Introduction</h2>
          <p>
            This page contains a curated list of AI learning resources that I have found helpful in my own AI learning journey.
          </p>

          <h2>Why I Listen</h2>
          <p>
            I'm not just listening to these to kill time driving my forklift around the factory. When I hear about some new capability or technique, I immediately start testing it with different models when I get home. I'll take what I learn from Cognitive Revolution about reasoning patterns and try it out with Claude, then compare it with Gemini and Grok to see the differences. This constant cycle of listen → test → build has taught me way more than I would've learned in some formal education program. It's all practical, hands-on learning that I can immediately apply to whatever I'm building.
          </p>

          <h2>Daily Audio Feed</h2>
          <p>These podcasts form the backbone of my 6+ hours of daily learning during factory shifts and commutes. They keep me connected to the latest developments, perspectives, and debates in AI.</p>

          <h3>Core AI-Focused Podcasts</h3>
          <ul>
            {coreAiPodcasts.map((podcast) => (
              <PodcastItem key={podcast.name} name={podcast.name} handle={podcast.handle} description={podcast.description} />
            ))}
          </ul>

          <h3>Tech & Startup Podcasts with Strong AI Coverage</h3>
          <ul>
            {techStartupAiPodcasts.map((podcast) => (
              <PodcastItem key={podcast.name} name={podcast.name} handle={podcast.handle} description={podcast.description} />
            ))}
          </ul>

          <h3>Specialized AI Podcasts</h3>
          <ul>
            {specializedAiPodcasts.map((podcast) => (
              <PodcastItem key={podcast.name} name={podcast.name} handle={podcast.handle} description={podcast.description} />
            ))}
          </ul>

          <h3>AI Leaders & Organizations</h3>
          <ul>
            {aiLeadersOrganizations.map((podcast) => (
              <PodcastItem key={podcast.name} name={podcast.name} handle={podcast.handle} description={podcast.description} />
            ))}
          </ul>

          <h2>Recommended Starting Point</h2>
          <ol>
            <li>AI Explained's introduction to Large Language Models</li>
            <li>Andrej Karpathy's "State of GPT" presentation</li>
            <li>The Cognitive Revolution interview with Professor Derya Unutmaz on AI in biomedical research: <a href="https://youtu.be/JOKvE47G_xA" target="_blank" rel="noopener noreferrer">https://youtu.be/JOKvE47G_xA</a> - This episode shows how AI is transforming scientific discovery, with insights from a ChatGPT Pro grant recipient who's using AI to revolutionize aging research and cancer immunotherapy</li>
            <li>This Day in AI's weekly recap episodes</li>
          </ol>

          <p><em>This list is regularly updated as new resources become available. Last updated: April 23, 2025</em></p>

          <Link to="/about" className="text-primary-600 hover:underline">
            &larr; Back to About
          </Link>
>>>>>>> 3be850e (chat log additions)
        </div>
      </section>
    </>
  );
};

export default LearningResources;
