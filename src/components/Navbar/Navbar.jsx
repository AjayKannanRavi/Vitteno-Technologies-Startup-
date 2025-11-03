import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // Import Motion for boom effects
import styles from './Navbar.module.css';

// --- Import your new logo ---
import companyLogo from '../../assets/logo.png'; 

// --- ICONS for the hamburger menu ---
const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="6" x2="21" y2="6" /> <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// Mobile menu variants for "boom" slide-in
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.3 } },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={`${styles.navbarContainer} container`}>
                <Link to="home" smooth={true} duration={500} className={styles.logo} onClick={closeMenu}>
                    {/* --- Logo image followed by company name --- */}
                    <img src={companyLogo} alt="Vitteno Logo" className={styles.logoImage} />
                    Vitteno<span>.</span>
                </Link>

                {/* --- Desktop Menu --- */}
                <nav className={styles.navMenu}>
                    <ul className={styles.navLinks}>
                        <li>
                          <motion.div whileHover={{ scale: 1.05, x: 5 }}> {/* Subtle boom on hover */}
                            <Link to="home" spy={true} smooth={true} offset={-80} duration={500} activeClass={styles.active}>Home</Link>
                          </motion.div>
                        </li>
                        <li>
                          <motion.div whileHover={{ scale: 1.05, x: 5 }}>
                            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass={styles.active}>About</Link>
                          </motion.div>
                        </li>
                        <li>
                          <motion.div whileHover={{ scale: 1.05, x: 5 }}>
                            <Link to="services" spy={true} smooth={true} offset={-80} duration={500} activeClass={styles.active}>Core Values</Link>
                          </motion.div>
                        </li>
                        <li>
                          <motion.div whileHover={{ scale: 1.05, x: 5 }}>
                            <Link to="products" spy={true} smooth={true} offset={-80} duration={500} activeClass={styles.active}>Products</Link>
                          </motion.div>
                        </li>
                    </ul>
                    <motion.div whileHover={{ scale: 1.02 }}> {/* Button boom */}
                      <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.btnPrimary}`}>
                          Contact Us
                      </Link>
                    </motion.div>
                </nav>

                {/* --- Hamburger Icon --- */}
                <div className={styles.hamburger} onClick={toggleMenu}>
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </div>
            </div>

            {/* --- Mobile Menu --- */}
            <motion.div
              className={styles.mobileNavMenu}
              variants={mobileMenuVariants}
              initial="hidden"
              animate={isOpen ? "visible" : "exit"}
              exit="exit"
            >
                <ul className={styles.mobileNavLinks}>
                    <li>
                      <motion.div whileHover={{ scale: 1.05, x: 10 }}> {/* Mobile link boom */}
                        <Link to="about" smooth={true} offset={-80} duration={500} onClick={closeMenu}>About</Link>
                      </motion.div>
                    </li>
                    <li>
                      <motion.div whileHover={{ scale: 1.05, x: 10 }}>
                        <Link to="services" smooth={true} offset={-80} duration={500} onClick={closeMenu}>Core Values</Link>
                      </motion.div>
                    </li>
                    <li>
                      <motion.div whileHover={{ scale: 1.05, x: 10 }}>
                        <Link to="products" smooth={true} offset={-80} duration={500} onClick={closeMenu}>Products</Link>
                      </motion.div>
                    </li>
                </ul>
                <motion.div whileHover={{ scale: 1.02 }}> {/* Mobile button boom */}
                  <Link to="contact" smooth={true} duration={500} className={`${styles.btn} ${styles.btnPrimary}`} onClick={closeMenu}>
                      Contact Us
                  </Link>
                </motion.div>
            </motion.div>
        </header>
    );
};

export default Navbar;