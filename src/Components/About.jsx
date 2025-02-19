import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img2img } from "../assets/Data"; // Make sure this image path is correct!

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade-in animation for heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "restart none none none",
        },
      });

      // Fade-in animation for content
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "restart none none none",
        },
      });

      // Fade-in animation for image
      gsap.from(imgRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "restart none none none",
        },
      });

      // Ensure ScrollTrigger refreshes on resize
      ScrollTrigger.refresh();
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section className="bg-yellow-500 text-black py-20 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 ref={headingRef} className="text-5xl font-bold font-serif">
            Who We Are
          </h1>
          <p ref={contentRef} className="text-lg leading-relaxed">
            At <span className="font-semibold">Cozy Café</span>, we believe that every cup of coffee tells a story.
            From hand-picked beans to the perfect roast, we bring you the finest blends crafted with love.
            Whether you need a morning boost or an evening relaxer, we've got the perfect brew for you!
          </p>
        </div>

        {/* Image */}
        <div ref={imgRef} className="md:w-1/2 mt-10 md:mt-0">
          <img src={img2img} alt="Coffee Cup with Latte Art" className="rounded-lg shadow-2xl w-96" />
        </div>
      </div>
    </section>
  );
};

export default About;
