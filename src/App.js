import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './App.css';

// Data for skills and projects
const skills = [
  {
    name: "React",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "HTML5",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "Node.js",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Git",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  }
];

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    demo: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing daily tasks and projects.",
    technologies: ["React", "Firebase", "Material UI"],
    demo: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information application with 5-day forecast.",
    technologies: ["JavaScript", "API Integration", "CSS3"],
    demo: "#",
    code: "#",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400"
  }
];

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="app">
      {/* Navigation */}
      <header className="header">
        <div className="logo">
          <a href="#home">YourName</a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Hi, I'm <span>Your Name</span></h1>
          <h2>Frontend Developer</h2>
          <p>I build exceptional digital experiences with modern web technologies.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#projects" className="btn secondary">View Work</a>
          </div>
        </motion.div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=800"
            alt="Professional workspace"
            loading="lazy"
            width="600"
            height="800"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate frontend developer with 5 years of experience creating
              responsive and user-friendly web applications. My expertise includes React,
              JavaScript, and modern CSS techniques.
            </p>
            <p>
              I hold a degree in Computer Science and have worked with both startups
              and established companies to deliver high-quality digital products.
            </p>
            <div className="personal-info">
              <div>
                <span>Name:</span> Your Name
              </div>
              <div>
                <span>Email:</span> your.email@example.com
              </div>
              <div>
                <span>Location:</span> Your City, Country
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://placehold.co/400x500/EEE/31343C?font=montserrat&text=Your+Photo"
              alt="Your Name"
              loading="lazy"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} width="40" height="40" />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-level">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello.</p>
            <div className="info-item">
              <span>Email:</span> your.email@example.com
            </div>
            <div className="info-item">
              <span>Phone:</span> +1 (123) 456-7890
            </div>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;