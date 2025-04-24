import React from 'react';
import { Headphones } from 'lucide-react';

interface PodcastItemProps {
  name: string;
  handle: string;
  description: string;
}

const PodcastItem = ({ name, handle, description }: PodcastItemProps) => {
  return (
    <li className="mb-4">
      <a href={handle} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
        <div className="flex items-center gap-2">
          <Headphones className="w-4 h-4 text-gray-600" />
          <strong className="text-lg">{name}</strong>
        </div>
      </a>
      <p className="text-gray-700">{description}</p>
    </li>
  );
};

export default PodcastItem;
