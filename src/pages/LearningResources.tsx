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
        </div>
      </section>
    </>
  );
};

export default LearningResources;
