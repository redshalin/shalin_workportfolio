import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '32px', marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '20px' }}>01.</span>
          About Me
          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', flex: 1 }}></div>
        </h2>
        
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
          <div>
            <p style={{ color: 'var(--text-dim)', fontSize: '18px', marginBottom: '20px' }}>
              Hello! My name is Shalin and I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My interest in mobile development started back in 2019 when I decided to try building my first app — turns out hacking together a small React Native project taught me a lot about architecture and performance!
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: '18px', marginBottom: '20px' }}>
              Fast-forward to today, and I’ve had the privilege of working at a professional software development agency, a start-up, and as a freelancer. My main focus these days is building accessible, inclusive products and digital experiences at <span style={{ color: 'var(--primary)' }}>Redspark Technologies</span>.
            </p>
            <p style={{ color: 'var(--text-dim)', fontSize: '18px' }}>
              I also possess a strong background in the <span style={{ color: 'var(--primary)' }}>MERN stack</span>, which helps me bridge the gap between frontend fluidness and robust backend services.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'var(--bg-darker)', padding: '30px', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--white)', marginBottom: '10px' }}>Education</h4>
              <p style={{ color: 'var(--primary)', fontWeight: '600' }}>{portfolioData.education.degree}</p>
              <p style={{ color: 'var(--text-dim)' }}>{portfolioData.education.institution}</p>
              <p style={{ color: 'var(--text-dim)', fontSize: '14px', fontFamily: 'monospace' }}>{portfolioData.education.period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
