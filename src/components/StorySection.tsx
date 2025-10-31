import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import oceanImage from 'figma:asset/92b78a6e7146bea94c9447a01f8dc003b8f81134.png';
import coralReefImage from 'figma:asset/2ad2696e1889ece4a10bdc3215a8e2fc15864ec7.png';

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div style={{ y: y1, opacity }}>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', fontWeight: 600 }}
              className="mb-6"
            >
              The Ocean's
              <br />
              <span className="text-primary">Silent Cry</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/70 mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              Our oceans cover 71% of Earth's surface and produce over half of the
              world's oxygen. Yet, they're facing unprecedented threats from
              pollution, overfishing, and climate change.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-foreground/70"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              Every minute, the equivalent of one garbage truck of plastic enters
              our oceans. By 2050, there could be more plastic than fish in the sea.
              But it's not too late to turn the tide.
            </motion.p>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src={oceanImage}
                alt="Ocean conservation - turtle and marine life with plastic pollution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <p className="text-primary" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600 }}>
                71%
              </p>
              <p className="text-foreground/70" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                of Earth is ocean
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Second row - reversed */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: y2 }}
            className="relative order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src={coralReefImage}
                alt="Vibrant coral reef ecosystem with colorful fish and sunlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <p className="text-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600 }}>
                1M+
              </p>
              <p className="text-foreground/70" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                species at risk
              </p>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y1, opacity }} className="order-1 md:order-2">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', fontWeight: 600 }}
              className="mb-6"
            >
              A Future Worth
              <br />
              <span className="text-accent">Fighting For</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-foreground/70 mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              Through dedicated conservation efforts, we've seen incredible
              recoveries. Coral reefs can regenerate. Marine populations can
              rebound. Communities can thrive sustainably.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-foreground/70"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.8' }}
            >
              But we need your help. Every action counts. Every donation matters.
              Every voice makes a difference. Together, we can create waves of
              change that will echo for generations.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
