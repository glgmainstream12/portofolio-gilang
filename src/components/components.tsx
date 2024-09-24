import React from 'react';
import './Component.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={`${title} Screenshot`} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <section>
        <h1></h1>
      </section>
    </div>
  );
};

export default ProjectCard;
