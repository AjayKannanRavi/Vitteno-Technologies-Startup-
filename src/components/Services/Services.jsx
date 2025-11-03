import React from 'react';
import { motion } from 'framer-motion'; // Import Motion
import styles from './Services.module.css';

// Icons for the cards
const KnowledgeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 2.2-1.8 4-4 4h-2.5a2 2 0 0 0-2 2.5V21" /><path d="M12 11V3l-2.5 2.5" /><path d="M14 5.5V3l2.5 2.5" /><path d="M4 11h2.5a2 2 0 0 1 2 2.5V21" /><path d="M3 21h18" /><path d="M5 11V9.5a2.5 2.5 0 0 1 .8-1.7L8 5.2a2.5 2.5 0 0 1 4 0l2.2 2.6c.5.6.8 1.3.8 2.1V11" /></svg> );
const IntuitiveIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.061 14.133 12 17.193l-3.061-3.06" /><path d="M12 17.193V6.807" /><path d="M11.366 4.342a2 2 0 1 1 2.828-1.528 2 2 0 0 1-2.828 1.528z" /><path d="M5.636 15.657a8 8 0 1 0 12.728 0" /></svg> );
const ImpactIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg> );

// Inner stagger variant for Services elements (consistent with other pages)
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card-specific variant for individual "boom" (scale + rotate for extra flair)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }, // Back-out for bounce
  },
};

const Services = () => {
    return (
        // --- ADD className HERE ---
        <section className={styles.servicesSection} id="services"> {/* id for Navbar scroll */}
            <div className="container">
                <motion.div 
                  className={styles.sectionTag} 
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Our Core Values
                </motion.div>
                <motion.h2 
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  How We Drive Innovation
                </motion.h2>
                <motion.p 
                  className={styles.sectionSubheading}
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                    Our three pillars of excellence guide everything we do
                </motion.p>

                <motion.div 
                  className={styles.cardGrid}
                  variants={contentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  staggerChildren={0.3} // Stagger cards sequentially for row "boom"
                >
                    <motion.div 
                      className={styles.valuesCard} 
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, rotateY: -5 }} // Hover boom: slight lift + tilt
                    >
                        <motion.div 
                          className={styles.cardIconWrapper} 
                          variants={cardVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <KnowledgeIcon />
                        </motion.div>
                        <motion.h3 whileHover={{ y: -2 }}>Advance Knowledge</motion.h3>
                        <motion.p whileHover={{ y: 2 }}>
                          We're committed to pushing the boundaries of technological understanding through research in AI, machine learning, and data analytics.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                      className={styles.valuesCard} 
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                    >
                        <motion.div 
                          className={styles.cardIconWrapper} 
                          variants={cardVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <IntuitiveIcon />
                        </motion.div>
                        <motion.h3 whileHover={{ y: -2 }}>Build Intuitive Products</motion.h3>
                        <motion.p whileHover={{ y: 2 }}>
                          Technology should enhance human capabilities, not complicate them. Our design philosophy focuses on creating user-friendly interfaces.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                      className={styles.valuesCard} 
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, rotateY: -5 }}
                    >
                        <motion.div 
                          className={styles.cardIconWrapper} 
                          variants={cardVariants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ImpactIcon />
                        </motion.div>
                        <motion.h3 whileHover={{ y: -2 }}>Create Impact</motion.h3>
                        <motion.p whileHover={{ y: 2 }}>
                          Our ultimate goal is to develop technologies that a positively impact society and contribute to the betterment of humanity.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;