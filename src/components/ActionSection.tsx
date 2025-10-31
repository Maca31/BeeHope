import React from 'react';
import { motion } from 'motion/react';
import { Heart, Mail, Share2, Waves } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function ActionSection() {
  const actionCards = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Support our conservation efforts with a one-time or monthly contribution.',
      buttonText: 'Make a Donation',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Waves,
      title: 'Volunteer',
      description: 'Join our team of passionate ocean advocates and make hands-on impact.',
      buttonText: 'Get Involved',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description: 'Share our mission with your network and amplify our message.',
      buttonText: 'Share Now',
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];

  return (
    <section id="action" className="relative py-32 overflow-hidden">
      {/* Background with wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M0 50 Q 25 25, 50 50 T 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
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
            Be Part of the <span className="text-primary">Solution</span>
          </h2>
          <p
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.8' }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Your support creates real, lasting change for our oceans. Choose how you'd like to make an impact.
          </p>
        </motion.div>

        {/* Action cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {actionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} mb-6`}
                  >
                    <card.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3
                    style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600 }}
                    className="mb-4"
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: '1.6' }}
                    className="text-foreground/70 mb-6"
                  >
                    {card.description}
                  </p>

                  <Button
                    className="magnetic w-full group/btn relative overflow-hidden"
                    variant="outline"
                  >
                    <span className="relative z-10" style={{ fontFamily: 'var(--font-sans)' }}>
                      {card.buttonText}
                    </span>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-center"
        >
          <Mail className="h-12 w-12 text-white mx-auto mb-6" />
          <h3
            style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600 }}
            className="mb-4 text-white"
          >
            Stay Connected
          </h3>
          <p
            style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', lineHeight: '1.6' }}
            className="text-white/90 mb-8"
          >
            Get monthly updates on our conservation efforts, ocean news, and ways you can help.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
            <Button
              type="submit"
              className="magnetic bg-white text-primary hover:bg-white/90"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
