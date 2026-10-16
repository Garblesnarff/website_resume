/** Long-form write-ups shown on some project detail pages. */
export interface DetailBlock {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  /** A first-person note, shown as a pull quote. */
  personal?: string[];
}

export const projectDetails: Record<string, DetailBlock[]> = {
  'tibetan-translation': [
    {
      personal: [
        "This is the project I'm most proud of. Give the AI tool a PDF of Tibetan text, and you get back a fully translated document in English. I've translated texts over 600 pages long. It's exciting because who knows what insights could be hidden in these ancient texts that haven't been widely accessible before.",
        "The project also connects to my interest in storytelling, which might tie back to my Ojibwa heritage. As humans, we're fundamentally storytellers, and making these stories accessible across language barriers feels meaningful.",
      ],
    },
    {
      heading: 'Project overview',
      paragraphs: [
        'The Tibetan Texts Grove project is a database-driven website for organizing, visualizing, and providing access to Tibetan texts and their translations. It is a companion or extension to the Tibetan Translation tool, focusing more on the relationships between texts, teachers, and lineages in Tibetan Buddhist traditions.',
      ],
    },
    {
      heading: 'Core purpose',
      paragraphs: [
        'This project aims to create a comprehensive, interconnected digital library of Tibetan texts that preserves the relational context of these works - connecting texts to their authors, lineages, traditions, and related works. This contextual approach helps researchers, practitioners, and students understand texts within their broader cultural and historical frameworks.',
      ],
    },
    {
      heading: 'Target audience',
      list: [
        'Scholars and academics in Tibetan studies and Buddhism',
        'Practitioners seeking to understand the relationships between texts',
        'Libraries and institutions maintaining collections of Tibetan literature',
        'Students learning about Tibetan Buddhist traditions and lineages',
      ],
    },
  ],
  'api-key-wallet': [
    {
      heading: 'Project overview',
      paragraphs: [
        'KeyGuardian (also known as API Key Wallet) is a secure personal API key management system designed to provide developers with a centralized, encrypted vault for storing and organizing their API credentials. It addresses the common challenge of securely managing multiple API keys across various services and projects.',
      ],
    },
    {
      heading: 'Core purpose',
      paragraphs: [
        'This application solves the critical problem of API key management for developers, who often struggle with securely storing, organizing, and accessing multiple API credentials. By providing a secure, encrypted storage system with easy access and organization features, KeyGuardian helps prevent credential leaks while improving workflow efficiency.',
      ],
    },
    {
      heading: 'Target audience',
      list: [
        'Individual developers working with multiple APIs',
        'DevOps engineers managing various service credentials',
        'System administrators handling access tokens',
        'Small teams needing secure credential sharing',
        'Projects requiring secure API key access (like Story Generator)',
      ],
    },
  ],
  'astral-audio': [
    {
      heading: 'Project overview',
      paragraphs: [
        'Web application focused on delivering immersive auditory experiences using binaural beats and other sound presets. It features interactive audio playback controls, real-time waveform visualizations, and guided content for various auditory states like lucid dreaming, astral projection, and remote viewing. The app integrates sophisticated audio engine management with dynamic visual components to create a rich, user-friendly interface.',
      ],
    },
    {
      heading: 'Core purpose',
      paragraphs: [
        'This project aims to provide users with customizable soundscapes that help induce specific mental or sensory states, such as relaxation, lucid dreaming, astral projection, and remote viewing. It combines audio synthesis with animated visualizers, session presets, and user controls to offer a holistic sensory experience. Additionally, it includes educational and safety information to enhance user understanding and responsible use of binaural and brainwave entrainment technologies.',
      ],
    },
  ],
  'imagine-ink': [
    {
      heading: 'Project overview',
      paragraphs: [
        "Imagine Ink is an AI-powered children's storybook creation platform that enables users to design personalized storybooks with beautiful AI-generated illustrations. It combines AI storytelling with image generation to bring stories to life, providing customizable page layouts, easy editing, and seamless exporting.",
      ],
    },
    {
      heading: 'Core purpose',
      paragraphs: [
        "Imagine Ink addresses the challenge of creating engaging and personalized children's storybooks without requiring artistic or design skills. By integrating AI-driven image generation and text storytelling, it empowers users—especially parents and educators—to create magical, visually compelling stories efficiently. The app also simplifies book management and exporting, enhancing workflow and creativity.",
      ],
    },
    {
      heading: 'Target audience',
      list: [
        'Parents and guardians who want to make personalized stories for their children',
        'Educators looking to create custom educational storybooks',
        'Authors and storytellers seeking quick book prototyping with AI',
        'Hobbyists interested in AI-assisted creative writing and illustration',
        "Small creative teams focused on children's content production",
      ],
    },
    {
      heading: 'Colors and styling',
      paragraphs: [
        'Imagine Ink uses a modern light/dark theming approach with Tailwind CSS and CSS variables for color customization. The color palette features vibrant blue/purple shades, soft pastels for UI highlights, and clean contrasting backgrounds for optimal readability. The interface incorporates glassmorphism effects, smooth animations, and a professional typography system centered around the Inter font family.',
      ],
    },
  ],
};
