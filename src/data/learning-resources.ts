/**
 * LEARNING RESOURCES DATA - List of AI Podcasts/YouTube Channels
 * 
 * This file contains the curated list of AI-related learning resources,
 * categorized for display on the Learning Resources page.
 * 
 * Dependencies: None
 * @author Cline (AI Assistant) based on user input
 */

// Define the structure for a learning resource item
export interface LearningResource {
  title: string;
  url: string;
  description: string;
  host?: string; // Optional: Host information
}

// Define the structure for a category of learning resources
export interface LearningResourceCategory {
  title: string;
  resources: LearningResource[];
}

// Define the overall structure for all learning resources
export interface LearningResourcesData {
  introduction: string;
  categories: LearningResourceCategory[];
  note: string;
  lastUpdated: string;
}

// Populate the data
export const learningResourcesData: LearningResourcesData = {
  introduction: "This page compiles a list of YouTube channels and podcasts that I've found valuable in my AI learning journey. Staying current with the rapidly evolving field of AI requires constant engagement, and these resources offer diverse perspectives, from core technical developments to business applications and ethical considerations.",
  categories: [
    {
      title: "Core AI-Focused Podcasts",
      resources: [
        {
          title: "AI Explained",
          url: "https://www.youtube.com/@aiexplained-official",
          description: "Solid breakdowns of the newest AI models like o3, o4-mini, GPT-4.1, Gemini and Kling. No BS or hype, just practical stuff about what these models can actually do.",
          host: "AI Explained"
        },
        {
          title: "Last Week in AI",
          url: "https://www.youtube.com/@lastweekinai",
          description: "My weekly must-listen to catch up on everything that happened that i might have missed, from new model releases, benchmarks, business news and everything in-between.",
          host: "Andrey Kurenkov and Jeremie Harris"
        },
        {
          title: "This Day in AI Podcast",
          url: "https://www.youtube.com/@thisdayinai",
          description: "A pretty average weekly podcast hosted by two average tech guys who break down models, agents, and everything else AI in a way that's easy to follow without getting too technical.",
          host: "Michael and Chris Sharkey"
        },
        {
          title: "Cognitive Revolution",
          url: "https://www.youtube.com/@CognitiveRevolutionPodcast",
          description: "Interviews with the actual researchers and engineers building AI from all the frontier labs, as well as many of the top researchers in the field. This is a great way to get a feel for the latest research and trends in AI, and to hear from the people who are actually doing the work.",
          host: "Nathan Labenz and Erik Torenberg"
        },
        {
          title: "The Artificial Intelligence Show",
          url: "https://www.youtube.com/@aishowpod",
          description: "Formerly The Marketing AI Show, focused on the AIs impact on the marketing world mainly. Lots of future thinking from some very knowledgeable people in that world",
          host: "Paul Roetzer and Mike Kaput"
        },
        {
          title: "Lenny's Podcast",
          url: "https://www.youtube.com/@LennysPodcast",
          description: "Mainly about product and growth, but lately he's been focusing more and more on how AI is changing everything in tech careers. Good interviews and better deals on lots of AI products through his newsletter.",
          host: "Lenny Rachitsky"
        },
        {
          title: "Doom Debates",
          url: "https://www.youtube.com/@DoomDebates",
          description: "Keeps it real about the existential risks of advanced AI. Good for keeping up with the pessimistic side of the AI world, with lots of interesting debates and a good reality check when I get too excited about all the new capabilities.",
          host: "Liron Shapira"
        }
      ]
    },
    {
      title: "Tech & Startup Podcasts with Strong AI Coverage",
      resources: [
        {
          title: "The MAD Podcast with Matt Turck",
          url: "https://www.youtube.com/@DataDrivenNYC",
          description: "Matt's a partner at FirstMark Capital, so he talks AI from both tech and investment angles. He interviews CEOs of AI companies about the latest advancements.",
          host: "Matt Turck"
        },
        {
          title: "My First Million",
          url: "https://www.youtube.com/@MyFirstMillionPod",
          description: "Discussing business ideas and opportunities, including those related to AI. Not super AI focused, but it still comes up frequently.",
          host: "Shaan Puri and Sam Parr"
        },
        {
          title: "This Week in Startups",
          url: "https://www.youtube.com/@startups",
          description: "Covering startup news and trends with increasing focus on AI startups and developments, form a VCs perspective.",
          host: "Jason Calacanis"
        },
        {
          title: "All-In Podcast",
          url: "https://www.youtube.com/@allin",
          description: "Discussing tech, economics, and AI's impact.",
          host: "Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg"
        },
        {
          title: "20VC with Harry Stebbings",
          url: "https://www.youtube.com/@20VC",
          description: "Interviews top VCs and founders, featuring discussions on AI startup investments and industry trends.",
          host: "Harry Stebbings"
        },
        {
          title: "Aarthi and Sriram",
          url: "https://www.youtube.com/@AarthiandSriram",
          description: "Featuring optimistic conversations with people building new technologies.",
          host: "Aarthi Ramamurthy and Sriram Krishnan"
        }
      ]
    },
    {
      title: "Specialized AI Podcasts",
      resources: [
        {
          title: "AI For Humans",
          url: "https://www.youtube.com/@AIForHumansShow",
          description: "Making AI educational and engaging through news updates and technology demos.",
          host: "Kevin Pereira and Gavin Purcell"
        },
        {
          title: "Lex Fridman Podcast",
          url: "https://www.youtube.com/@lexfridman",
          description: "Featuring in-depth conversations about AI, science, technology, and the nature of intelligence.",
          host: "Lex Fridman"
        },
        {
          title: "Latent Space",
          url: "https://www.youtube.com/@LatentSpacePod",
          description: "The podcast by and for AI Engineers focusing on foundation models in code generation, multimodality, and AI agents.",
          host: "swyx and Alessio"
        },
        {
          title: "NVIDIA AI Podcast",
          url: "https://www.youtube.com/@NVIDIADeveloper",
          description: "Featuring interviews with experts discussing AI's impact across various fields and industries.",
          host: "Noah Kravitz"
        },
        {
          title: "Hard Fork",
          url: "https://www.youtube.com/@hardfork",
          description: "Exploring the rapidly changing world of tech including AI developments.",
          host: "Kevin Roose and Casey Newton"
        }
      ]
    },
    {
      title: "AI Leaders & Organizations",
      resources: [
        {
          title: "David Shapiro",
          url: "https://www.youtube.com/@DaveShap",
          description: "Exploring philosophical aspects of AI, including concepts like metamodernism and post-labor economics."
        },
        {
          title: "ThePrimeTime",
          url: "https://www.youtube.com/@ThePrimeagen",
          description: "Tech-focused content that's been covering more and more AI stuff lately. It's good to get the perspective of someone who has actually coded for a living, and he's just geuninely an entertaining guy to watch.",
        },
        {
          title: "Theo - t3.gg",
          url: "https://www.youtube.com/@t3dotgg",
          description: "Developer-focused content showing how programmers are using AI tools in practice. Just like Primeagen, Theo is a real developer who has been using AI tools to help him code. He also has a lot of experience with the latest AI tools and trends, and is also very entertaining.",
        },
        {
          title: "Andrej Karpathy",
          url: "https://www.youtube.com/@AndrejKarpathy",
          description: "Expert explanations of complex AI concepts from a former OpenAI and Tesla AI leader."
        },
        {
          title: "Logan Kilpatrick",
          url: "https://www.youtube.com/LoganKilpatrickYT",
          description: "Lead product for Google AI Studio and the Gemini API at Google DeepMind, sharing AI development trends."
        },
        {
          title: "Mathew Berman",
          url: "https://www.youtube.com/@matthew_berman",
          description: "Focuses on practical applications of AI technologies."
        },
        {
          title: "Google DeepMind",
          url: "https://www.youtube.com/@GoogleDeepMind",
          description: "Official channel for Google DeepMind's research announcements and explanations."
        },
        {
          title: "Anthropic",
          url: "https://www.youtube.com/@anthropic-ai",
          description: "Official channel for Anthropic, creators of Claude AI assistant."
        },
        {
          title: "Peter H. Diamandis",
          url: "https://www.youtube.com/@PeterDiamandis",
          description: "Big-picture thinker about how AI will transform society and future trends."
        }
      ]
    }
  ],
  note: "Note: This list is a work in progress and will be updated regularly as I discover new resources.",
  lastUpdated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) // Automatically sets to current date
};
