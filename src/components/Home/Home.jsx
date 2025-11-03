import React from 'react';
import { motion } from 'framer-motion'; // Import Motion
import styles from './Home.module.css';

// Icons
const ArrowIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const SparkleIcon = () => ( <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg> );
const ScrollIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M12 5C10.8954 5 10 5.89543 10 7V12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12V7C14 5.89543 13.1046 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> );

// Inner stagger variant for Home elements
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <section className={styles.hero}>
        {/* The particle container now has multiple divs for a richer effect */}
        <div className={styles.particleContainer}>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
        </div>

      <div className={`${styles.heroContainer} container`}>
        <motion.div 
          className={styles.heroContent} 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          staggerChildren={0.1} // Stagger kids by 0.1s
        >
          <motion.div className={styles.heroTag} variants={contentVariants}> {/* Staggered tag */}
            <SparkleIcon /> Innovation For Tech
          </motion.div>
          <motion.h1 variants={contentVariants}> {/* Staggered heading */}
             Energetic Hello<span>.</span>
          </motion.h1>
          <motion.p className={styles.description} variants={contentVariants}> {/* Staggered description */}
            We develop intuitive, high-impact technologies that combine cutting-edge innovation with user-friendly design to create solutions that matter.
          </motion.p>
          <motion.div className={styles.buttonGroup} variants={contentVariants}> {/* Staggered buttons */}
            <a href="#about" className={`${styles.btn} ${styles.btnPrimary}`}>
              Discover Our Story <ArrowIcon />
            </a>
            <a href="#products" className={`${styles.btn} ${styles.btnSecondary}`}>
              View Our Products
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className={styles.scrollIndicator} 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            <ScrollIcon />
            <span></span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;