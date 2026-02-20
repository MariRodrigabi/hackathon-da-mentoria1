import React, { useState, useEffect } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  start?: number;
  autoplay?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, className, start = 0, autoplay = false }) => {
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    // Ensure window is defined, for environments that might pre-render on server.
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  if (!origin) {
    // Don't render the iframe until the origin is known, to prevent an invalid request.
    return null;
  }

  // Construct the URL with all necessary parameters.
  const params = new URLSearchParams();
  params.append('origin', origin);
  if (start > 0) {
    params.append('start', start.toString());
  }
  if (autoplay) {
    params.append('autoplay', '1');
  }

  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <iframe
      className={className}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeEmbed;
