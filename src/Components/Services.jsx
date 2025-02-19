import React from "react";
import { motion } from "framer-motion";
import { services } from "../assets/Data";



const Services = () => {
  return (
    <section className="bg-black py-16 mt-3 mb-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-yellow-500 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-yellow-100 shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105 hover:shadow-yellow-300-2xl hover:bg-amber-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
