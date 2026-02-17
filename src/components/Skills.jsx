import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '32px', marginBottom: '40px' }}>
          <span style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '20px' }}>02.</span>
          Technical Skills
          <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', flex: 1 }}></div>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
          {Object.entries(portfolioData.skills).map(([category, items], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                padding: '30px', 
                background: 'var(--bg-darker)', 
                borderRadius: '8px',
                border: '1px solid rgba(0, 255, 136, 0.1)'
              }}
            >
              <h3 style={{ textTransform: 'capitalize', color: 'var(--primary)', marginBottom: '20px', fontSize: '20px' }}>
                {category}
              </h3>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {items.map(item => (
                  <li key={item} style={{ color: 'var(--text-dim)', fontSize: '14px', position: 'relative', paddingLeft: '15px' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>▹</span>
                    {item}
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

export default Skills;
