import React from 'react';
import './ExperienceCard.css';

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  description: string;
  imageUrl: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, duration, description, imageUrl }) => {
  return (
    <div className="experience-card">
      <img src={imageUrl} alt={`${company} Logo`} className="experience-image" />
      <div className="experience-info">
        <h3>{company}</h3>
        <h4>{role}</h4>
        <p className="duration">{duration}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
