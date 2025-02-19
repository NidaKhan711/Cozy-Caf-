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
      className="bg-black text-white py-16 px-6 bg-cover bg-center "
      id="menu"
      style={{ backgroundImage: "url('/public/meenu.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Our Special Coffee</h2>
        <div ref={menuRef} className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-yellow-400 bg-opacity-80 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-300 hover:text-black"
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-black">{item.emoji} {item.name}</h3>
              <p className="text-black mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CoffeeMenu;
