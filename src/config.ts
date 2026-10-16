// Base path for the application
export const BASE_PATH = import.meta.env.BASE_URL;

// Helper function to get the correct path for assets
export function getAssetPath(path: string): string {
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${BASE_PATH}${cleanPath}`;
}

// Helper function for chat images
export function getChatImagePath(path: string): string {
  return getAssetPath(path);
}

/** True when a link value in the data is a "[... will be added here]" placeholder. */
export function isPlaceholder(value?: string): boolean {
  return !value || value.trim().startsWith('[');
}

/** Make a full https URL from a data value that may or may not have a scheme. */
export function toUrl(value: string): string {
  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

/** Show a URL without the scheme and trailing slash. */
export function prettyUrl(value: string): string {
  return value.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export const CONTACT = {
  email: 'ro.jhanson@gmail.com',
  github: 'https://github.com/Garblesnarff',
  linkedin: 'https://www.linkedin.com/in/rob-hanson-ai/',
  x: 'https://x.com/PrintedPathways',
  youtube: 'https://www.youtube.com/@Sinister_Serials',
};
