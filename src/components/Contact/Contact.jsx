import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Motion
import styles from './Contact.module.css';

// --- Existing Phone, Email Icons ---
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-3.67A19.79 19.79 0 0 1 2.05 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.1.95.42 1.94.9 2.83 1.12 1.5 2.58 2.92 4.18 4.18.89.48 1.88.8 2.83.9a2 2 0 0 1 1.72 2v.01Z"/></svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.12"/>
        <path d="M12 15.5V13c0-1 .5-2 1-2h1.5c.5 0 1-.5 1-1V7.5c0-.5-.5-1-1-1H12c-.5 0-1-.5-1-1V3c0-1 .5-2 1-2h1.5c.5 0 1 .5 1 1v2c0 .5.5 1 1 1h1.5c.5 0 1 .5 1 1v1.5c0 .5.5 1 1 1h1.5c.5 0 1 .5 1 1v1.5c0 .5-.5 1-1 1h-1.5c-.5 0-1 .5-1 1v1.5c0 .5-.5 1-1 1H16c-.5 0-1 .5-1 1v1.5c0 .5-.5 1-1 1h-1.5c-.5 0-1-.5-1-1Z"/>
        <path d="m12.5 14.5-3-3"/>
        <path d="M16 11.5a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0Z"/>
    </svg>
);

// Inner stagger variant for Contact elements (consistent with other pages)
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with your backend (e.g., EmailJS, Formspree, or API endpoint)
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Check console for details)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection}>
        {/* --- ADD THIS PARTICLE CONTAINER --- */}
        <div className={styles.particleContainer}>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
            <div className={styles.particle}></div>
        </div>

      <div className={`${styles.contentWrapper} container`}>
        <motion.div 
          className={styles.contactCard} 
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className={styles.leftCircle} 
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ originX: 0.5, originY: 0.5 }} // Center scale origin for boom
          >
            <RocketIcon />
          </motion.div>
          <motion.div 
            className={styles.rightContent}
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            staggerChildren={0.2} // Stagger right-side elements for cascade
          >
            <motion.h3 
              className={styles.cardHeading} 
              variants={contentVariants}
            >
              Contact Us
            </motion.h3>
            <motion.p 
              className={styles.phone}
              variants={contentVariants}
            >
              <PhoneIcon /> +91 9597237743
            </motion.p>
            <motion.form 
              className={styles.contactForm}
              onSubmit={handleSubmit}
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ originX: 0, originY: 0 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ originX: 0, originY: 0 }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ originX: 0, originY: 0 }}
              />
              <motion.button
                type="submit"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </motion.form>
            <motion.a 
              href="mailto:ajaykannanesec@gmail.com" 
              className={styles.emailBtn}
              variants={contentVariants}
              whileHover={{ scale: 1.05 }} // Bonus: Hover boom
            >
              <EmailIcon /> Or Email Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;