'use client';
import React, { useState, useEffect } from 'react';

const features = [
  "Get Research paper recommendations for your topic.",
  "Keep your current research organized and documented.",
  "Scrape relevant paragraphs from articles for easy reference.",
  "Learning resources recommendations for your chosen tech stack.",
  "Set deadlines and manage tasks for group members effectively.",
    "Get notified of upcoming deadlines and milestones.",
];

export const Typewriter = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(75); // Increased typing speed

  useEffect(() => {
    const handleTyping = () => {
      const current = features[index];
      const updatedText = isDeleting 
        ? current.substring(0, text.length - 1) 
        : current.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % features.length); // Loop through features
      }

      const typingSpeed = isDeleting ? 30 : 75; // Increased typing speed
      setSpeed(typingSpeed);
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, index, speed]);

  return (
    <div className="flex items-center justify-center min-h-96 bg-black py-12 pt-20 border-b border-gray-500">
      <p className="text-white text-center text-3xl lg:text-5xl font-medium px-4 lg:px-14 w-3/4">
        {text}
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default Typewriter;
