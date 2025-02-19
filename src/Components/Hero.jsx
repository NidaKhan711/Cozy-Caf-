import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
    ).fromTo(
      ".hero-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-6 z-50">
        <h1 className="text-4xl md:text-6xl font-bold hero-text">
          A Perfect Cup of Coffee, Every Time!
        </h1>
        <p className="text-lg md:text-xl mt-4 hero-text">
          Enjoy freshly brewed coffee with rich flavors and a comforting aroma. Start your day the right way!
        </p>
        <a href="#menu"><button herf='#menu' className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition hero-button">
          Explore Menu
        </button></a>
      </div>
    </section>
  );
};

export default Hero;


