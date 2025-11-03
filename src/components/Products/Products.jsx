import React from 'react';
import { motion } from 'framer-motion'; // Import Motion
import styles from './Products.module.css';

// --- ICONS FOR EACH PRODUCT ---
const AnalyticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
    </svg>
);

const ApiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" /> <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.5-3.5a1 1 0 1 0-3 3" />
        <path d="m13 8-2-2a1 1 0 1 0-3 3" /> <path d="m10 11-2.5-2.5a1 1 0 1 0-3 3l3.5 3.5a1 1 0 1 0 3-3" />
    </svg>
);

const MLIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" /><rect x="4" y="12" width="4" height="6" /><path d="M12 12v8h4" />
        <path d="M20 14v-4h-4" /><path d="m18 12 2-2" /><path d="m6 14-2 2" />
    </svg>
);

// Inner stagger variant for Products elements (consistent with other pages)
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

// --- MAIN COMPONENT ---
const Products = () => {
  // This useEffect hook adds the mouse tracking for the spotlight effect
  React.useEffect(() => {
    // Check if we're in a browser environment before running this code
    if (typeof window === 'undefined') return;

    const grid = document.querySelector(`.${styles.cardGrid}`);
    // If the grid doesn't exist, exit early to prevent errors
    if (!grid) return;

    const handleMouseMove = (e) => {
      const cards = grid.querySelectorAll(`.${styles.productCard}`);
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    grid.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  // This is the JSX that will be rendered for the component
  return (
    <section className={styles.productsSection} id="products"> {/* id for Navbar scroll */}
      <div className="container">
        <motion.h2 
          className={styles.sectionHeading} 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Built for the Future
        </motion.h2>
        <motion.p 
          className={styles.sectionSubheading}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore our suite of powerful, scalable, and intuitive products designed to drive your business forward.
        </motion.p>

        <motion.div 
          className={styles.cardGrid}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          staggerChildren={0.3} // Stagger cards sequentially for row "boom"
        >
          {/* Card 1 */}
          <motion.div 
            className={styles.productCard} 
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: -5 }} // Hover boom: slight lift + tilt
          >
            <motion.div className={styles.cardIcon} whileHover={{ scale: 1.1 }}>
              <AnalyticsIcon />
            </motion.div>
            <motion.h3 whileHover={{ y: -2 }}>HMS Platform</motion.h3>
            <motion.p whileHover={{ y: 2 }}>
              A comprehensive hostel management system that streamlines admissions, room allocations, and billing, featuring automated gate passes for seamless leave and return permissions via integrated services.
            </motion.p>
          </motion.div>
          {/* Card 2 */}
          <motion.div 
            className={styles.productCard} 
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: -5 }}
          >
            <motion.div className={styles.cardIcon} whileHover={{ scale: 1.1 }}>
              <ApiIcon />
            </motion.div>
            <motion.h3 whileHover={{ y: -2 }}>Billing Software</motion.h3>
            <motion.p whileHover={{ y: 2 }}>
              A robust billing platform for agro service providers that automates invoicing across sales, inventory, and payments, ensuring seamless financial workflows and real-time stock synchronization for optimized daily operations.
            </motion.p>
          </motion.div>
          {/* Card 3 */}
          <motion.div 
            className={styles.productCard} 
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateY: -5 }}
          >
            <motion.div className={styles.cardIcon} whileHover={{ scale: 1.1 }}>
              <MLIcon />
            </motion.div>
            <motion.h3 whileHover={{ y: -2 }}>EV Prioritization TM</motion.h3>
            <motion.p whileHover={{ y: 2 }}>
              A smart traffic management system that prioritizes emergency vehicles at signals, dynamically adjusting wait times based on real-time vehicle counts for safer, faster responses.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;