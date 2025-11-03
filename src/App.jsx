import React from 'react';
import { motion } from 'framer-motion'; // Import Motion
import './App.css';

// Import components from their new folders
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Shared animation variant for "boom" effect
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 }, // Start small, faded, below
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8, // "Boom" speed
      ease: [0.22, 1, 0.36, 1], // Back-out ease for bounce
      staggerChildren: 0.2, // Stagger inner elements (if any)
    },
  },
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <motion.div
          id="home"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Trigger on 100px entry, once only
        >
          <Home />
        </motion.div>
        <motion.div
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.div>
        <motion.div
          id="services"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Services />
        </motion.div>
        <motion.div
          id="products"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Products />
        </motion.div>
        {/* We can add the Impact section back later if you want */}
        {/* <div id="impact"><Impact /></div> */}
        <motion.div
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;