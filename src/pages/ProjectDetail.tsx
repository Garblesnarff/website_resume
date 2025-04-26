/**
 * ProjectDetail - Displays detailed information for a single project.
 *
 * This component fetches project data based on the ID from the URL
 * and renders the project's title, goal, process, outcome, and skills.
 * Applies special themes ("Tibetan" or "KeyGuardian") based on the project ID.
 *
 * Dependencies:
 * - react-router-dom (useParams)
 * - ../data/projects (projects data)
 * - ../data/skills (skills data)
 * - ../components/SkillItem (for displaying skills)
 *
 * @author Cline
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { skills } from '../data/skills'; // Import the central skills data
import SkillItem from '../components/SkillItem'; // Assuming SkillItem is used for skills display

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  // Function to find the full skill object by name
  const findSkillByName = (skillName: string) => {
    return skills.find(s => s.name === skillName);
  };

  if (!project) {
    return <div className="container mx-auto px-4 py-8">Project not found.</div>;
  }

  const isTibetanProject = project.id === 'tibetan-translation';
  const isKeyGuardianProject = project.id === 'api-key-wallet'; // Add check for KeyGuardian
  const isStoryAutomationProject = project.id === 'story-automation'; // Add check for Story Automation
  const isRecipeScraperProject = project.id === 'recipe-scraper'; // Add check for Recipe Scraper
  const isAstralAudioProject = project.id === 'astral-audio'; // Add check for Astral Audio

  // Define conditional classes based on the project theme
  let containerClasses = "py-8"; // Default padding
  let titleClasses = "text-gray-900 font-serif"; // Default
  let headingClasses = "text-gray-900 font-serif"; // Default
  let textClasses = "text-gray-700 font-sans"; // Default
  let linkClasses = "text-blue-600 hover:underline font-sans"; // Default
  let strongClasses = "text-gray-800 font-semibold font-sans"; // Default
  // Update skillTheme type to include 'story-automation', 'recipe-scraper', and 'astral-audio'
  let skillTheme: 'default' | 'tibetan' | 'keyguardian' | 'story-automation' | 'recipe-scraper' | 'astral-audio' = 'default';

  if (isTibetanProject) {
    containerClasses = "bg-gradient-to-br from-tibetan-gold/20 to-tibetan-maroon/15 border border-tibetan-gold/20 rounded-lg shadow-md p-6 md:p-8";
    titleClasses = "text-tibetan-maroon font-serif";
    headingClasses = "text-tibetan-maroon font-serif";
    textClasses = "text-tibetan-brown font-sans";
    linkClasses = "text-tibetan-maroon hover:text-tibetan-maroon/80 underline font-sans";
    strongClasses = "text-tibetan-maroon font-semibold font-sans";
    skillTheme = 'tibetan';
  } else if (isKeyGuardianProject) {
    containerClasses = "bg-keyguardian-teal border border-keyguardian-teal/80 rounded-lg shadow-lg p-6 md:p-8"; // Use teal bg
    titleClasses = "text-keyguardian-light-text font-sans text-2xl"; // White text, sans, adjusted size
    headingClasses = "text-keyguardian-light-text font-sans font-medium text-xl"; // White text, sans, medium weight, adjusted size
    textClasses = "text-keyguardian-gray-text font-sans text-sm"; // Gray text, sans, small size
    linkClasses = "text-keyguardian-vibrant-blue hover:text-blue-400 underline font-sans"; // Blue links, sans
    strongClasses = "text-keyguardian-light-text font-medium font-sans"; // White medium text
    skillTheme = 'keyguardian';
  } else if (isStoryAutomationProject) { // Add Story Automation theme
    containerClasses = "bg-gradient-to-br from-storyAutomation-purple-light to-storyAutomation-purple-dark border border-storyAutomation-purple-light/50 rounded-lg shadow-lg p-6 md:p-8";
    titleClasses = "text-storyAutomation-text-light font-sans text-2xl"; // Light text, sans, adjusted size
    headingClasses = "text-storyAutomation-text-light font-sans font-medium text-xl"; // Light text, sans, medium weight, adjusted size
    textClasses = "text-storyAutomation-text-muted font-sans text-sm"; // Muted light text, sans, small size
    linkClasses = "text-storyAutomation-text-light hover:text-white underline font-sans"; // Light links, sans
    strongClasses = "text-storyAutomation-text-light font-medium font-sans"; // Light medium text
    skillTheme = 'story-automation';
  } else if (isRecipeScraperProject) { // Add Recipe Scraper theme
    // Using sans-serif fonts primarily for this theme
    containerClasses = "bg-recipeScraper-card-bg border border-recipeScraper-border-light rounded-lg shadow-md p-6 md:p-8"; // White card bg
    titleClasses = "text-recipeScraper-primary-green font-sans text-2xl"; // Green title, sans
    headingClasses = "text-recipeScraper-text-dark font-sans font-semibold text-xl"; // Dark heading, sans, semi-bold
    textClasses = "text-recipeScraper-text-muted font-sans text-base"; // Muted text, sans
    linkClasses = "text-recipeScraper-primary-green hover:text-green-700 underline font-sans"; // Green links, sans
    strongClasses = "text-recipeScraper-text-dark font-semibold font-sans"; // Dark semi-bold text
    skillTheme = 'recipe-scraper';
  } else if (isAstralAudioProject) { // Add Astral Audio theme
    // Using sans-serif fonts primarily for this theme
    containerClasses = "bg-gradient-to-br from-astralAudio-bg-gradient-start to-astralAudio-bg-gradient-end border border-astralAudio-border rounded-lg shadow-xl p-6 md:p-8"; // Dark gradient bg
    titleClasses = "text-astralAudio-primary font-sans text-3xl"; // Primary color title, sans
    headingClasses = "text-astralAudio-primary font-sans font-semibold text-2xl"; // Primary color heading, sans, semi-bold
    textClasses = "text-astralAudio-foreground font-sans text-base"; // Light foreground text, sans
    linkClasses = "text-astralAudio-accent hover:text-cyan-400 underline font-sans"; // Accent color links, sans
    strongClasses = "text-astralAudio-foreground font-semibold font-sans"; // Light foreground semi-bold text
    skillTheme = 'astral-audio';
  }


  return (
    // Apply container classes conditionally
    <div className={`container mx-auto px-4 ${containerClasses}`}>
      <h1 className={`text-3xl font-bold mb-4 ${titleClasses}`}>{project.title}</h1>
      <p className={`text-lg mb-6 ${textClasses}`}><strong className={strongClasses}>Goal:</strong> {project.goal}</p>

      <div className="mb-6">
        <h2 className={`text-2xl font-semibold mb-2 ${headingClasses}`}>Process</h2>
        <p className={textClasses}>{project.process}</p>
      </div>

      <div className="mb-6">
        <h2 className={`text-2xl font-semibold mb-2 ${headingClasses}`}>Outcome</h2>
        <p className={textClasses}>{project.outcome}</p>
      </div>

      <div className="mb-6">
        <h2 className={`text-2xl font-semibold mb-2 ${headingClasses}`}>Skills</h2>
        {/* Render skills in a grid for better layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.skills.map((skillName, index) => {
            const fullSkill = findSkillByName(skillName);
            // Pass the dynamic theme prop conditionally to SkillItem
            return fullSkill ? (
              <SkillItem key={index} skill={fullSkill} theme={skillTheme} />
            ) : (
              // Fallback span styling - apply theme conditionally
              <span key={index} className={`px-3 py-1 rounded-full text-xs ${
                isTibetanProject ? 'bg-tibetan-maroon/10 text-tibetan-brown font-sans' : // Tibetan fallback
                isKeyGuardianProject ? 'bg-keyguardian-vibrant-blue/10 text-keyguardian-vibrant-blue font-sans' : // KeyGuardian fallback
                isStoryAutomationProject ? 'bg-storyAutomation-purple-dark/60 text-storyAutomation-text-light font-sans' : // Story Automation fallback
                isRecipeScraperProject ? 'bg-recipeScraper-light-green text-recipeScraper-text-dark font-sans' : // Recipe Scraper fallback
                isAstralAudioProject ? 'bg-astralAudio-secondary/50 text-astralAudio-accent font-sans' : // Astral Audio fallback
                'bg-gray-200 text-gray-800 font-sans' // Default fallback
              }`}>
                {skillName}
              </span>
            );
          })}
        </div>
      </div>

      {/* Links Section - Apply conditional styles */}
      {project.links && (
        <div className="mt-8">
          <h2 className={`text-2xl font-semibold mb-2 ${headingClasses}`}>Links</h2>
          {project.links.githubTool && (
            <p className={textClasses}><strong className={strongClasses}>GitHub:</strong> <a href={project.links.githubTool} target="_blank" rel="noopener noreferrer" className={linkClasses}>{project.links.githubTool}</a></p>
          )}
          {project.links.githubDatabase && (
            <p className={textClasses}><strong className={strongClasses}>GitHub (Database/Website):</strong> <a href={project.links.githubDatabase} target="_blank" rel="noopener noreferrer" className={linkClasses}>{project.links.githubDatabase}</a></p>
          )}
          {project.links.preview && (
            <p className={textClasses}><strong className={strongClasses}>Project Preview:</strong> <a href={project.links.preview} target="_blank" rel="noopener noreferrer" className={linkClasses}>{project.links.preview}</a></p>
          )}
          {project.links.video && project.links.video !== '[Demo video link will be added here]' && (
            <p className={textClasses}><strong className={strongClasses}>Demo Video:</strong> <a href={project.links.video} target="_blank" rel="noopener noreferrer" className={linkClasses}>{project.links.video}</a></p>
          )}
           {project.links.video && project.links.video === '[Demo video link will be added here]' && (
            <p className={textClasses}><strong className={strongClasses}>Demo Video:</strong> [Link will be added here]</p>
          )}
        </div>
      )}

      {/* Project Assessment Sections - Apply theme styles conditionally */}
      {/* Tibetan Assessment */}
      {isTibetanProject && (
        <div className="mt-8">
          {/* Apply theme text/heading colors manually within prose */}
          <div className={`prose max-w-none ${textClasses}`}>
            <h3 className={headingClasses}>Project Overview</h3>
            <p>The Tibetan Texts Grove project is a database-driven website for organizing, visualizing, and providing access to Tibetan texts and their translations. It is a companion or extension to the Tibetan Translation tool, focusing more on the relationships between texts, teachers, and lineages in Tibetan Buddhist traditions.</p>
            <h4 className={headingClasses}>Core Purpose</h4>
            <p>This project aims to create a comprehensive, interconnected digital library of Tibetan texts that preserves the relational context of these works - connecting texts to their authors, lineages, traditions, and related works. This contextual approach helps researchers, practitioners, and students understand texts within their broader cultural and historical frameworks.</p>
            <h4 className={headingClasses}>Target Audience</h4>
            <ul>
              <li>Scholars and academics in Tibetan studies and Buddhism</li>
              <li>Practitioners seeking to understand the relationships between texts</li>
              <li>Libraries and institutions maintaining collections of Tibetan literature</li>
              <li>Students learning about Tibetan Buddhist traditions and lineages</li>
            </ul>

            {/* Added personal reflection paragraphs */}
            <p className="text-lg mb-6 mt-6"> {/* Added margin top */}
              <strong>This is the project I'm most proud of.</strong> Give the AI tool a PDF of Tibetan text, and you get back a fully translated document in English. I've translated texts over 600 pages long. It's exciting because who knows what insights could be hidden in these ancient texts that haven't been widely accessible before.
            </p>
            <p className={`${textClasses} mt-4`}> {/* Used textClasses and added margin top */}
              The project also connects to my interest in storytelling, which might tie back to my Ojibwa heritage. As humans, we're fundamentally storytellers, and making these stories accessible across language barriers feels meaningful.
            </p>
          </div>
        </div>
      )}

      {/* KeyGuardian Assessment */}
      {isKeyGuardianProject && (
        <div className="mt-8">
           {/* Apply theme text/heading colors manually */}
          <div className={`prose max-w-none ${textClasses}`}> {/* Prose applies its own styles, override manually */}
            <h3 className={headingClasses}>Project Overview</h3>
            <p>KeyGuardian (also known as API Key Wallet) is a secure personal API key management system designed to provide developers with a centralized, encrypted vault for storing and organizing their API credentials. It addresses the common challenge of securely managing multiple API keys across various services and projects.</p>
            <h4 className={headingClasses}>Core Purpose</h4>
            <p>This application solves the critical problem of API key management for developers, who often struggle with securely storing, organizing, and accessing multiple API credentials. By providing a secure, encrypted storage system with easy access and organization features, KeyGuardian helps prevent credential leaks while improving workflow efficiency.</p>
            <h4 className={headingClasses}>Target Audience</h4>
            <ul className={`list-disc ml-5 ${textClasses}`}> {/* Ensure list text color matches */}
              <li>Individual developers working with multiple APIs</li>
              <li>DevOps engineers managing various service credentials</li>
              <li>System administrators handling access tokens</li>
              <li>Small teams needing secure credential sharing</li>
              <li>Projects requiring secure API key access (like Story Generator)</li>
            </ul>
          </div>
        </div>
      )}

      {/* Astral Audio Assessment */}
      {isAstralAudioProject && (
        <div className="mt-8">
           {/* Apply theme text/heading colors manually */}
          <div className={`prose max-w-none ${textClasses}`}> {/* Prose applies its own styles, override manually */}
            <h3 className={headingClasses}>Project Overview</h3>
            <p>Web application focused on delivering immersive auditory experiences using binaural beats and other sound presets. It features interactive audio playback controls, real-time waveform visualizations, and guided content for various auditory states like lucid dreaming, astral projection, and remote viewing. The app integrates sophisticated audio engine management with dynamic visual components to create a rich, user-friendly interface.</p>
            <h3 className={headingClasses}>Core Purpose</h3>
            <p>This project aims to provide users with customizable soundscapes that help induce specific mental or sensory states, such as relaxation, lucid dreaming, astral projection, and remote viewing. It combines audio synthesis with animated visualizers, session presets, and user controls to offer a holistic sensory experience. Additionally, it includes educational and safety information to enhance user understanding and responsible use of binaural and brainwave entrainment technologies.</p>
            {/* Add Target Audience if needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
