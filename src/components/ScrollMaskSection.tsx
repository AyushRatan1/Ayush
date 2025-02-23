import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollMaskSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    const content = contentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "+=2000",
        pin: true,
        scrub: 1,
      }
    });

    // Initial state
    gsap.set(content, {
      clipPath: "circle(0% at 50% 50%)"
    });

    // Animation sequence
    tl.to(content, {
      clipPath: "circle(100% at 50% 50%)",
      duration: 1,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen w-full overflow-hidden"
      data-scroll-section
    >
      {/* White circle mask background */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Content that will be revealed */}
      <div 
        ref={contentRef}
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black"
      >
        <div className="flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white p-8">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg text-purple-200 mb-8">
              From concept to deployment, I bring innovative ideas to life through clean code and modern design principles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Full Stack Development",
                "Mobile Applications",
                "AI Integration"
              ].map((service, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">{service}</h3>
                  <div className="w-12 h-1 bg-purple-500 mx-auto mb-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollMaskSection;