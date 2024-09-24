import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import SkillCard from '../../components/SkillCard/SkillCard';
import CheckKhodam from '../../../public/cek_khodam.png';
import RotiEnak from '../../../public/roti_enak.png';

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_9lq6sao', // Replace with your EmailJS Service ID
        'template_dsaxkwr', // Replace with your EmailJS Template ID
        formData,
        'oKVvwjfs3Ga_swctU4ia_' // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email.');
      });
  };

  return (
    <div className="landing-container">
      {/* Header with Navigation */}
      <header className="header">
        <div className="logo">GILANG</div>
        <nav className="nav" id="navMenu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skill">Skill</a>
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
            description="Worked on various full-stack web projects, contributing to both frontend, backend development, and Operation."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaNDJN-mimRmJIWts2BgLF0sjVc1xhb_laA&s"
          />
        </div>
      </section>

      {/* Skill Section */}
      <section id="skill">
        <h1>Skill</h1>
        <div className="card-container">
          <SkillCard
            image="https://i.pinimg.com/originals/b4/de/20/b4de205cb6d4e7cad43c2971f780cfd9.png"
            skill='Javascript'
            value={3.2}
          />
          <SkillCard
            image="https://miro.medium.com/v2/resize:fit:435/1*fnNd53zHlT6ECXtaFYXxYg.png"
            skill='HTML 5'
            value={3.5}
          />
          <SkillCard
            image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
            skill='CSS 3'
            value={2.5}
          />
          <SkillCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1T97eMN1mqcpgMMlku5F5yU2CMQ2yYVcDA&s"
            skill='Typescript'
            value={3}
          />
          <SkillCard
            image="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            skill='React JS'
            value={3.5}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h1>Projects</h1>
        <div className="card-container">
          <ProjectCard
            title="Project 1: Landing Page Bakery Delight"
            description="FIRST project with React JS. Page of bakery delight restaurant that already establish since 1939. The important upgrade for Internet of Things."
            imageUrl={RotiEnak}
            projectLink="/portofolio-1"
          />
          <ProjectCard
            title="Project 2: Cek Khodam"
            description="Cek khodam is the Indonesia Tiktok trend. The project collaborates with local Shaman to fortell your Khodam."
            imageUrl={CheckKhodam}
            projectLink="/portofolio-2"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact" id="contact">
        <h2>CONTACT ME</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
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