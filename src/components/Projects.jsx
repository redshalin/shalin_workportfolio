import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '32px', marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '20px' }}>04.</span>
          Some Things I’ve Built
          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', flex: 1 }}></div>
        </h2>

        {/* Major Web/Full-Stack Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '100px' }}>
          {portfolioData.projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mobile-stack"
              style={{ display: 'flex', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', gap: '40px', alignItems: 'center' }}
            >
              <div style={{ flex: 1.5, background: 'var(--bg-darker)', padding: '40px', borderRadius: '8px', border: '1px solid rgba(0, 255, 136, 0.1)', position: 'relative' }}>
                <Folder style={{ color: 'var(--primary)', marginBottom: '20px' }} size={32} />
                <h3 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--primary)' }}>{project.title}</h3>
                <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} style={{ color: 'var(--text-dim)', marginBottom: '10px', fontSize: '16px' }}>
                      {point}
                    </li>
                  ))}
                </ul>
                {project.tech && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontFamily: 'monospace', color: 'var(--secondary)', fontSize: '13px' }}>
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Experience Grid */}
        <h3 style={{ fontSize: '24px', marginBottom: '40px', textAlign: 'center' }}>Other Noteworthy Projects</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {portfolioData.mobileExperience.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                padding: '25px', 
                background: 'var(--bg-darker)', 
                borderRadius: '8px',
                transition: 'var(--transition)',
                cursor: 'default',
                border: '1px solid transparent'
              }}
              whileHover={{ y: -5, borderColor: 'var(--primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Folder style={{ color: 'var(--primary)' }} size={32} />
                <div style={{ display: 'flex', gap: '10px', color: 'var(--text-dim)' }}>
                  <Github size={20} />
                  <ExternalLink size={20} />
                </div>
              </div>
              <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>{project.title}</h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '14px' }}>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
