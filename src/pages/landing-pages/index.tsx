import React from 'react';
import './index.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      {/* Header with Navigation */}
      <header className="header">
        <div className="logo">GILANG</div>
        <nav className="nav" id="navMenu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Landing Header Section */}
      <header className="landing-header" id="home">
  <div className="landing-header-content">
    <img 
      src="https://media.licdn.com/dms/image/v2/D5603AQE18hL8r7tNvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685096933559?e=1732752000&v=beta&t=uBp1UWlgX-q23-YypPemEQn2ELKq_eu3m79FHdUaJsc" 
      alt="Mohammad Gilang Fauzan" 
      className="profile-photo" 
    />
    <h1>Mohammad Gilang Fauzan</h1>
    <p>Full Stack Developer</p>
    <p>
      <a href="https://leetcode.com/u/glgmainstream12/" target="_blank" rel="noopener noreferrer">Leetcode ↗</a>
    </p>
    <p>
      <a href="https://github.com/glgmainstream12/" target="_blank" rel="noopener noreferrer">Github ↗</a>
    </p>
    <p>
      <a href="https://www.linkedin.com/in/mohammad-gilang-fauzan-6975411a6/" target="_blank" rel="noopener noreferrer">Linkedid ↗</a>
    </p>
  </div>
</header>


      {/* About Section */}
      <section id="about">
        <h1>About</h1>
        <p>
          An observer-oriented leader with the ability to work under pressure and commitment to continuous learning and improvement. Working on reducing work hours in Studia Academy without adding new expenses to the operation. Already reduced 1000 hours of admin and clerical work. Focus on maximizing what we have rather than making new expenses for something that we can work on. Interested in automation ideas and website development.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h1>Work Experience</h1>
        <div className="card-container">
          <ExperienceCard
            company="Studia Academy Ltd"
            role="Operation Analyst"
            duration="2023 - 2024"
            description="Worked on various full-stack web projects, contributing to both frontend and backend development."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaNDJN-mimRmJIWts2BgLF0sjVc1xhb_laA&s"
          />
          {/* Add more ExperienceCard components here */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h1>Projects</h1>
        <div className="card-container">
          <ProjectCard
            title="Project 1: Landing Page Bakery Delight"
            description="FIRST project with React JS. Page of bakery delight restaurant that already establish since 1939. The important updgrade for Internet of Things ."
            imageUrl="public/roti_enak.png"
            projectLink="/portofolio-1"
          />
          <ProjectCard
            title="Project 2: Cek Khodam"
            description="Cek khodam is the Indonesia Tiktok trend. The project colaborate with local Shaman to fortell your Khodam."
            imageUrl="public/cek_khodam.png"
            projectLink="/portofolio-2"
          />
          {/* Add more ProjectCard components here */}
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="contact" id="contact">
        <h2>CONTACT ME</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Mohammad Gilang Fauzan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
