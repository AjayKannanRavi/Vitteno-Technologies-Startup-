import React from 'react';
import { motion } from 'framer-motion'; // Import Motion
import styles from './About.module.css';

// Inner stagger variant for About elements (consistent with other pages)
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Visual boom variant for circle + dots (scale + stagger)
const visualVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // Back-out bounce
  },
};

const About = () => {
  return (
    <section className={styles.aboutSection} id="about"> {/* id for Navbar scroll */}
      <div className="container">
        <motion.div 
          className={styles.sectionTag} 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Us
        </motion.div>
        <motion.h2 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Vitteno
        </motion.h2>
        <motion.div 
          className={styles.aboutLayout}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          staggerChildren={0.2} // Stagger text card and visual
        >
          <motion.div 
            className={styles.aboutTextCard} 
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            staggerChildren={0.1} // Stagger paragraphs
          >
            <motion.p variants={contentVariants}>
              <strong>Vitteno</strong> has established itself as a leader in developing intuitive, high-impact technologies.
            </motion.p>
            <motion.p 
              variants={contentVariants}
              style={{ marginTop: '1rem' }}
              whileHover={{ y: -2 }} // Subtle lift on hover
            >
              We combine expertise in <span>software development</span>, <span>data science</span>, and <span>user experience design</span> to create products that are technologically advanced and user-friendly.
            </motion.p>
          </motion.div>
          <motion.div 
            className={styles.aboutVisual} 
            variants={visualVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ originX: 0.5, originY: 0.5 }} // Center boom origin
          >
            <motion.div 
              className={styles.visualCircle} 
              variants={visualVariants}
              whileHover={{ scale: 1.05, rotate: 5 }} // Hover spin + scale
            >
              <motion.div 
                className={styles.visualCircleLetter} 
                variants={visualVariants}
              >
                V
              </motion.div>
              <motion.div 
                className={styles.visualCircleText} 
                variants={visualVariants}
              >
                Innovation
              </motion.div>
            </motion.div>
            {/* Animated dots with stagger */}
            <motion.div 
              className={`${styles.floatingDot} ${styles.dot1}`} 
              variants={visualVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1} // Stagger delay
            ></motion.div>
            <motion.div 
              className={`${styles.floatingDot} ${styles.dot2}`} 
              variants={visualVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            ></motion.div>
            <motion.div 
              className={`${styles.floatingDot} ${styles.dot3}`} 
              variants={visualVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            ></motion.div>
            <motion.div 
              className={`${styles.floatingDot} ${styles.dot4}`} 
              variants={visualVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;