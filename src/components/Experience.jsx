import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '32px', marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '20px' }}>03.</span>
          Where I've Worked
          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', flex: 1 }}></div>
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              style={{ marginBottom: '50px' }}
            >
              <h3 style={{ fontSize: '22px', marginBottom: '5px' }}>
                {exp.role} <span style={{ color: 'var(--primary)' }}>@ {exp.company}</span>
              </h3>
              <p style={{ fontFamily: 'monospace', color: 'var(--text-dim)', marginBottom: '20px', fontSize: '14px' }}>
                {exp.period}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} style={{ color: 'var(--text-dim)', marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
                    <span style={{ position: 'absolute', left: 0, top: '5px', color: 'var(--primary)' }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
