import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' , marginTop: '50px' }}>
      <div className="container mobile-stack mobile-center" style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
        <div style={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              background: 'rgba(0, 210, 255, 0.1)', 
              border: '1px solid rgba(0, 210, 255, 0.2)',
              marginBottom: '25px'
            }}
          >
            <span style={{ 
              color: 'var(--primary)', 
              fontSize: '14px', 
              fontFamily: 'monospace', 
              fontWeight: '600',
              letterSpacing: '1px'
            }}>
              Hi, my name is
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(40px, 8vw, 80px)', lineHeight: 1.1, marginBottom: '10px' }}
          >
            {portfolioData.name}.
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: 'clamp(30px, 6vw, 60px)', color: 'var(--text-dim)', lineHeight: 1.1, marginBottom: '30px' }}
          >
            I build mobile and web apps.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ maxWidth: '600px', color: 'var(--text-dim)', fontSize: '18px', marginBottom: '50px' }}
          >
            {portfolioData.summary}
          </motion.p>
          <div className="mobile-center" style={{ display: 'flex' }}>
            <motion.a 
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glow-btn"
              style={{ fontSize: '18px', padding: '15px 35px', display: 'inline-block', textDecoration: 'none' }}
            >
              Check out my work!
            </motion.a>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Decorative Border Box */}
          <motion.div 
            whileHover={{ top: '10px', left: 'calc(50% - 140px)' }}
            transition={{ duration: 0.3 }}
            style={{ 
              width: '300px', 
              height: '400px', 
              border: '2px solid var(--primary)', 
              borderRadius: '4px',
              position: 'absolute',
              top: '20px',
              left: 'calc(50% - 130px)',
              zIndex: 0
            }}
          ></motion.div>

          {/* Image Container */}
          <motion.div 
            whileHover={{ y: -5, x: -5 }}
            transition={{ duration: 0.3 }}
            style={{ 
              width: 'clamp(250px, 80vw, 300px)', 
              height: 'clamp(350px, 100vw, 400px)', 
              background: 'var(--primary)', 
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.img 
              src={profileImg} 
              alt={portfolioData.name} 
              initial={{ opacity: 0.6, filter: 'grayscale(100%) contrast(1.2)' }}
              whileHover={{ opacity: 1, filter: 'none' }}
              transition={{ duration: 0.3 }}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                mixBlendMode: 'multiply'
              }} 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
