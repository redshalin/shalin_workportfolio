import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center', padding: '150px 0' }}>
      <div className="container">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ color: 'var(--primary)', fontFamily: 'monospace', marginBottom: '20px' }}
        >
          05. What’s Next?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(40px, 5vw, 60px)', marginBottom: '20px' }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '600px', margin: '0 auto 50px', color: 'var(--text-dim)', fontSize: '18px' }}
        >
          I’m currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </motion.p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '50px' }}>
          <a href={`mailto:${portfolioData.email}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
            <Mail size={24} color="var(--primary)" />
          </a>
          <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
            <Linkedin size={24} color="var(--primary)" />
          </a>
          <a href={`tel:${portfolioData.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
            <Phone size={24} color="var(--primary)" />
          </a>
        </div>
        
        <motion.a 
          href={`mailto:${portfolioData.email}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glow-btn"
          style={{ fontSize: '18px', padding: '20px 40px', textDecoration: 'none', display: 'inline-block' }}
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
