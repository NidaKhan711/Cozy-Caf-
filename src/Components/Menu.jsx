import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import menuItems from "../assets/Data"


const CoffeeMenu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section 
      className="bg-black text-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/public/meenu.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Our Special Brews</h2>
        <div ref={menuRef} className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-yellow-700 bg-opacity-80 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{item.emoji} {item.name}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg transition duration-300 hover:bg-[#ffcc99]">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default CoffeeMenu;
