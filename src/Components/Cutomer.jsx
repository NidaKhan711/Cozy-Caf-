import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const backgroundImage = "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1600&q=80";

const reviews = [
    { name: "Aisha K.", review: "Best coffee in town! The aroma and taste are unbeatable.", rating: 5, image: "/cus1.jpg" },
    { name: "Ali R.", review: "Cozy place and friendly staff. Love the cappuccino!", rating: 5, image: "/cus2.jpg" },
    { name: "Sarah M.", review: "My go-to spot for a morning caffeine boost!", rating: 5, image: "/cus3.jpg" },
];

const Customer = () => {
  const reviewsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      reviewsRef.current.children,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, [currentIndex]);

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <section
      className="text-white py-16 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black ">What Our Customers Say</h2>
        <div className="relative w-full max-w-md mx-auto overflow-hidden">
          <div ref={reviewsRef} className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review, index) => (
              <div
                key={index} className="min-w-full backdrop-blur-md bg-black/60 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
               
              >
                <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-yellow-400" />
                <p className="text-gray-300 italic">"{review.review}"</p>
                <div className="mt-4 text-[#ffd700] flex gap-1 text-lg hover:text-yellow-500">
                  {Array(review.rating).fill("⭐").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="mt-2 font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
          <button onClick={prevReview} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#b3875a] transition">❮</button>
          <button onClick={nextReview} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#b3875a] transition">❯</button>
        </div>
      </div>
    </section>
  );
};

export default Customer;
