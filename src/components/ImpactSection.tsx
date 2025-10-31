import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Droplets, Fish, Leaf, Users } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const impactStats = [
  {
    icon: Droplets,
    value: 50000,
    suffix: '+',
    label: 'Tons of plastic removed from oceans',
    color: 'text-blue-500',
  },
  {
    icon: Fish,
    value: 250,
    suffix: '+',
    label: 'Marine species protected',
    color: 'text-cyan-500',
  },
  {
    icon: Leaf,
    value: 1000,
    suffix: '+',
    label: 'Hectares of coral reef restored',
    color: 'text-teal-500',
  },
  {
    icon: Users,
    value: 100000,
    suffix: '+',
    label: 'Global supporters',
    color: 'text-primary',
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2', fontWeight: 600 }}
            className="mb-6"
          >
            Our <span className="text-primary">Impact</span> So Far
          </h2>
          <p
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.8' }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Together, we're making measurable change. Here's what we've accomplished
            with the support of our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`${stat.color} mb-6 inline-block`}
                >
                  <stat.icon className="h-12 w-12" />
                </motion.div>

                <p
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600 }}
                  className="mb-4 text-foreground"
                >
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </p>

                <p
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: '1.5' }}
                  className="text-foreground/70"
                >
                  {stat.label}
                </p>

                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h3
            style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', fontWeight: 600 }}
            className="mb-8 text-center"
          >
            2025 Conservation Goals
          </h3>

          <div className="space-y-8">
            {[
              { label: 'Ocean Cleanup Initiatives', progress: 75, color: 'bg-blue-500' },
              { label: 'Marine Protected Areas', progress: 60, color: 'bg-cyan-500' },
              { label: 'Sustainable Fishing Programs', progress: 85, color: 'bg-teal-500' },
              { label: 'Community Education', progress: 90, color: 'bg-primary' },
            ].map((goal, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span style={{ fontFamily: 'var(--font-sans)' }} className="text-foreground/80">
                    {goal.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)' }} className="text-foreground/60">
                    {goal.progress}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${goal.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${goal.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
