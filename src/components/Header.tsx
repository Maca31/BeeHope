import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, Waves } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Story', href: '#story' },
    { name: 'Impact', href: '#impact' },
    { name: 'Action', href: '#action' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <Waves className="h-8 w-8 text-primary" />
          <span className="text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
            Ocean Hope
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="relative group"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="text-foreground/80 hover:text-foreground transition-colors">
                {item.name}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="magnetic rounded-full"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
