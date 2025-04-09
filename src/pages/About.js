import React from 'react';
import { motion } from 'framer-motion';
import TopPage from '../components/TopPage';
import Footer from '../components/Footer';
import './About.css';

function About() {
  // Animation variants for section containers
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Honors data from your provided content.
  const honors = [
    "Children's Science Foundation Award – Secured 3 STEM patents before age 18, recognizing innovation",
    "Asian Space Settlement Design Challenge – Gold Medalist: success in Nationals & Regionals as well",
    "3rd in World Series of Innovation by Network for Tech & Entrepreneurship – Prize: $500",
    "Moonshot Pirates '23, Shape the Future Challenge – Top 7 global finalist out of 500+ teams"
  ];

  // Extracurricular activities (ECs) data.
  const ecs = [
    "Head Developer & Patentee, CAR.L.A – Created a vehicle device addressing regulatory loopholes, curbing pollution & saving money",
    "Freelance 3D Artist – Designed on CGTrader; 25+ professional designs sold",
    "Patentee, OT 2'3 Engine – Developed new combustion engine designs; finalist for Future Port Awards '23",
    "Developer & Patentee, Shared Computing Architecture – Pioneered 5G-enabled CPU/memory sharing for secure and cost-efficient transfers",
    "HOD of 3D Dept., Space Settlement Design Challenge – Led a team of 7 designers",
    "Individual Researcher – Explored nanomaterials for self-cleaning cars, reducing dirt adhesion"
  ];

  return (
    <>
      <TopPage />
      <main className="about-main">
        {/* Animated Background Overlay */}
        <div className="background-overlay" />

        {/* Introduction Section with Profile Picture */}
        <motion.section
          className="about-intro section-card"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="profile-container">
            <img src="/images/me.png" alt="Profile" />
          </div>
          <h2>About Me</h2>
          <p>
            I'm Pranav Chahal – a creative innovator who blends 3D design, programming, and web development to craft immersive digital experiences.
          </p>
        </motion.section>

        {/* Honors Section */}
        <motion.section
          className="honors section-card"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3> Achievements </h3>
          <div className="card-grid">
            {honors.map((item, index) => (
              <motion.div 
                key={index} 
                className="card honor-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Extracurricular Activities Section */}
        <motion.section
          className="ecs section-card"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Other work</h3>
          <div className="card-grid">
            {ecs.map((item, index) => (
              <motion.div 
                key={index}
                className="card ec-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Startups & Projects Section */}
        <motion.section
          className="startups section-card"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Startups &amp; Projects</h3>
          <div className="startup-list">
            <div className="startup-item">
              <img src="/images/phAIre-2.png" alt="Startup One Logo" className="startup-logo" />
              <div className="startup-info">
                <h4>sphAIre</h4>
                <p>3D designing Ai for Industrial and Professional standards</p>
                <a href="https://sphaire3d.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            </div>
            <div className="startup-item">
              <img src="/images/Gold Luxury Initial Circle Logo-2 Background Removed-2.png" alt="Startup Two Logo" className="startup-logo" />
              <div className="startup-info">
                <h4>CAR.L.A</h4>
                <p>Carbon emission assesor and tracker for combustion engine vehicles</p>
                <a href="https://carbonlevelassesor.autos" target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            </div>
            <div className="startup-item">
              <img src="/images/F-5.png" alt="Startup Two Logo" className="startup-logo" />
              <div className="startup-info">
                <h4>fAIshon</h4>
                <p>An AI-powered style advisor that transforms your wardrobe into a personalized runway of smart, effortless fashion.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="skills section-card"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Skills</h3>
          <div className="skills-list">
            <div className="skill-item">
              <span>Designing</span>
            </div>
            <div className="skill-item">
              <span>3D Designing</span>
            </div>
            <div className="skill-item">
              <span>Programming</span>
            </div>
            <div className="skill-item">
              <span>Web Development</span>
            </div>
            <div className="skill-item">
              <span>Entrepreneurship</span>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

export default About;
