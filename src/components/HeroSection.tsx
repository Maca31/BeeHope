import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { ParticleField } from './ParticleField';
import { OceanWaves } from './OceanWaves';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Field */}
      <ParticleField />
      
      {/* Animated Ocean Waves */}
      <OceanWaves />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-6"
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: '1.1', fontWeight: 600 }}
        >
          Protecting Our Oceans,
          <br />
          <span className="text-primary">Preserving Our Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="mb-12 text-foreground/70 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: '1.6' }}
        >
          Every wave carries a story. Every action creates ripples of change.
          Join us in our mission to restore and protect the world's oceans
          for generations to come.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="magnetic px-8 py-6 group relative overflow-hidden"
          >
            <span className="relative z-10" style={{ fontFamily: 'var(--font-sans)' }}>Take Action Now</span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="magnetic px-8 py-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-6 w-6 text-foreground/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}