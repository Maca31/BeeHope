import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube, Waves } from 'lucide-react';

export function Footer() {
  const quotes = [
    "The cure for anything is salt water: sweat, tears, or the sea.",
    "The ocean stirs the heart, inspires the imagination.",
    "We are tied to the ocean. And when we go back to the sea, we are going back from whence we came.",
  ];

  const currentQuote = quotes[0];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerLinks = {
    'About': [
      { name: 'Our Mission', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    'Resources': [
      { name: 'Research', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Reports', href: '#' },
      { name: 'FAQs', href: '#' },
    ],
    'Get Involved': [
      { name: 'Volunteer', href: '#' },
      { name: 'Donate', href: '#' },
      { name: 'Partnerships', href: '#' },
      { name: 'Events', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
        <motion.div
          className="h-full w-[200%] bg-gradient-to-r from-primary via-accent to-primary"
          animate={{
            x: ['-50%', '0%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.blockquote
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', lineHeight: '1.6', fontStyle: 'italic' }}
            className="text-foreground/70"
          >
            "{currentQuote}"
          </motion.blockquote>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-6"
            >
              <Waves className="h-8 w-8 text-primary" />
              <span
                className="text-xl"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ocean Hope
              </span>
            </motion.div>
            <p
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: '1.6' }}
              className="text-foreground/60 mb-6 max-w-sm"
            >
              A global initiative dedicated to protecting and restoring our oceans
              through conservation, education, and community action.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="magnetic w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={categoryIndex}>
              <h4
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
                className="mb-4 text-foreground"
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
            className="text-foreground/50"
          >
            © 2025 Ocean Hope. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
