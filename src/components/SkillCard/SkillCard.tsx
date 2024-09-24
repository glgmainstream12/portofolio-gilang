import React from "react";

interface SkillCardProps {
    image: string;
    skill?: string;
    value: number; // Value from 1 to 5 representing skill level
}

const SkillCard: React.FC<SkillCardProps> = ({ image, skill, value }) => {
    const radius = 45; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Full circumference of the circle
    const progress = (value / 5) * circumference; // Progress based on value (1 to 5)

    return (
        <div className="skill-card">
            <div className="progress-circle">
                <svg width="120" height="120">
                    <circle
                        className="progress-background"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeWidth="10"
                    />
                    <circle
                        className="progress-bar"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                    />
                </svg>
                <img src={image} alt={`${skill} icon`} className="skill-icon" />
            </div>
            <h3>{skill}</h3>
        </div>
    );
};

export default SkillCard;