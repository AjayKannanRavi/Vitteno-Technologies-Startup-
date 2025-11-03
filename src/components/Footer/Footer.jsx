import React from 'react';
import { motion } from 'framer-motion'; // Import Motion
import styles from './Footer.module.css';

// Icons (reused from Contact)
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-3.67A19.79 19.79 0 0 1 2.05 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.1.95.42 1.94.9 2.83 1.12 1.5 2.58 2.92 4.18 4.18.89.48 1.88.8 2.83.9a2 2 0 0 1 1.72 2v.01Z"/></svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Inner stagger variant for Footer elements (consistent with other pages)
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gradientBar}></div>
      <div className={`${styles.footerContent} container`}>
        <motion.div 
          className={styles.companySection}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <motion.h3 
            className={styles.companyName}
            custom={0}
          >
            Vitteno <span>.</span>
          </motion.h3>
          <motion.div 
            className={styles.tagline}
            custom={1}
          >
            <BoltIcon />
            Innovating the future, one solution at a time.
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.contactSection}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h4 className={styles.sectionTitle}>Get in Touch</h4>
          <motion.div 
            className={styles.address}
            custom={3}
          >
            <LocationIcon />
            <div>
              <div>Vitteno Technologies</div>
              <div>CSE DEPT-LIB</div>
              <div>CSE Block, Ground Floor</div>
              <div>ESEC, Thudupathi</div>
              <div>Perundurai, Erode 638052</div>
            </div>
          </motion.div>
          <motion.p 
            className={styles.contactItem}
            custom={4}
          >
            <PhoneIcon /> +91 9597237743
          </motion.p>
          <motion.a 
            href="mailto:vitteno.tech@gmail.com"
            className={styles.contactItem}
            custom={5}
          >
            <EmailIcon /> vitteno.tech@gmail.com
          </motion.a>
        </motion.div>

        <motion.p 
          className={styles.copyright}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          custom={6}
        >
          © 2025 Vitteno. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;