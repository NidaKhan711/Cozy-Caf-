import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-6"id="contact">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* � Footer Heading */}
        <h2 className="text-5xl font-bold mb-8 text-yellow-400tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
          Let's Stay Connected!
        </h2>
        
        {/* 📍 Contact Details */}
        <div className="mt-8 grid md:grid-cols-3 gap-8 text-lg">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaMapMarkerAlt className="text-yellow-400 text-3xl mx-auto mb-4" />
            <p className="text-gray-300">123 Coffee Lane, Brew City</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaPhoneAlt className="text-yellow-400 text-3xl mx-auto mb-4" />
            <p className="text-gray-300">+92-XXX-XXXXXXX</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaEnvelope className="text-yellow-400 text-3xl mx-auto mb-4" />
            <p className="text-gray-300">hello@coffeeshop.com</p>
          </motion.div>
        </div>

        {/* 🌐 Social Media Icons */}
        <div className="flex justify-center gap-8 mt-12 text-3xl">
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 15 }}
            href="#" 
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <FaFacebook />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: -15 }}
            href="#" 
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 15 }}
            href="#" 
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <FaTwitter />
          </motion.a>
        </div>

        {/* ✅ CTA Buttons */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg shadow-lg font-semibold tracking-wide hover:shadow-xl transition"
          >
            Visit Us
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg shadow-lg font-semibold tracking-wide hover:bg-yellow-400 hover:text-black transition"
          >
            Get in Touch
          </motion.button>
        </div>

        {/* 🔥 Footer Bottom Line */}
        <div className="border-t border-gray-700 mt-14 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Coffee Brew Masters. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default ContactFooter;