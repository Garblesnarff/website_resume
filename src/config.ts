// Base path for the application
export const BASE_PATH = import.meta.env.BASE_URL;

// Helper function to get the correct path for assets
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${BASE_PATH}${cleanPath}`;
}

// Helper function for chat images
export function getChatImagePath(path: string): string {
  return getAssetPath(path);
}
