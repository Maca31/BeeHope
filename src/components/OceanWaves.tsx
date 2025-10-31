import { useEffect, useRef } from 'react';

interface Wave {
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  yOffset: number;
  opacity: number;
  color: string;
}

interface Fish {
  x: number;
  y: number;
  targetY: number;
  velocityY: number;
  velocityX: number;
  rotation: number;
  scale: number;
  color: string;
  jumping: boolean;
  nextJumpTime: number;
}

export function OceanWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);
  const fishRef = useRef<Fish[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if dark mode
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize fish
    const initFish = () => {
      fishRef.current = Array.from({ length: 5 }, () => ({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight * 0.75,
        targetY: window.innerHeight * 0.75,
        velocityY: 0,
        velocityX: (Math.random() - 0.5) * 3 + 2,
        rotation: 0,
        scale: 0.5 + Math.random() * 0.5,
        color: isDarkMode() ? '#ffffff' : '#1a5f7a',
        jumping: false,
        nextJumpTime: Math.random() * 3000 + 2000,
      }));
    };

    // Define multiple wave layers with more vibrant colors
    const waves: Wave[] = [
      // Back waves (slower, larger, more vibrant)
      {
        amplitude: 60,
        frequency: 0.0015,
        phase: 0,
        speed: 0.025,
        yOffset: 0.55,
        opacity: 0.4,
        color: isDarkMode() ? '#0ea5e9' : '#0284c7',
      },
      {
        amplitude: 55,
        frequency: 0.002,
        phase: Math.PI / 2,
        speed: 0.03,
        yOffset: 0.6,
        opacity: 0.5,
        color: isDarkMode() ? '#06b6d4' : '#0891b2',
      },
      // Middle waves
      {
        amplitude: 50,
        frequency: 0.0025,
        phase: Math.PI,
        speed: 0.035,
        yOffset: 0.65,
        opacity: 0.6,
        color: isDarkMode() ? '#14b8a6' : '#0d9488',
      },
      {
        amplitude: 45,
        frequency: 0.003,
        phase: Math.PI * 1.5,
        speed: 0.04,
        yOffset: 0.68,
        opacity: 0.7,
        color: isDarkMode() ? '#22d3ee' : '#06b6d4',
      },
      // Front waves (faster, smaller, most vibrant)
      {
        amplitude: 40,
        frequency: 0.004,
        phase: 0,
        speed: 0.045,
        yOffset: 0.72,
        opacity: 0.8,
        color: isDarkMode() ? '#38bdf8' : '#0ea5e9',
      },
      {
        amplitude: 35,
        frequency: 0.005,
        phase: Math.PI / 3,
        speed: 0.05,
        yOffset: 0.75,
        opacity: 0.9,
        color: isDarkMode() ? '#7dd3fc' : '#38bdf8',
      },
    ];

    const drawWave = (wave: Wave, time: number) => {
      const { amplitude, frequency, phase, yOffset, opacity, color } = wave;
      
      ctx.beginPath();
      
      // Start from bottom left
      ctx.moveTo(0, canvas.height);
      
      // Draw wave curve
      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          canvas.height * yOffset +
          Math.sin(x * frequency + phase + time) * amplitude +
          Math.sin(x * frequency * 0.5 + time * 0.7) * amplitude * 0.5;
        
        if (x === 0) {
          ctx.lineTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      // Complete the path to fill
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      
      // Create vibrant gradient fill
      const gradient = ctx.createLinearGradient(
        0,
        canvas.height * yOffset - amplitude,
        0,
        canvas.height
      );
      
      const darkMode = isDarkMode();
      
      gradient.addColorStop(0, `${color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${color}${Math.floor(opacity * 0.7 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, darkMode ? '#0a0a0a00' : '#f8f9fa00');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add bright top highlight
      ctx.strokeStyle = `${color}${Math.floor(Math.min(opacity + 0.2, 1) * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 2) {
        const y =
          canvas.height * yOffset +
          Math.sin(x * frequency + phase + time) * amplitude +
          Math.sin(x * frequency * 0.5 + time * 0.7) * amplitude * 0.5;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const drawFish = (fish: Fish) => {
      ctx.save();
      ctx.translate(fish.x, fish.y);
      ctx.rotate(fish.rotation);
      ctx.scale(fish.scale, fish.scale);
      
      // Determine if fish faces left or right based on velocity
      const flipX = fish.velocityX < 0 ? -1 : 1;
      ctx.scale(flipX, 1);
      
      // Draw fish body (simplified silhouette)
      ctx.fillStyle = fish.color;
      ctx.beginPath();
      
      // Body
      ctx.ellipse(0, 0, 30, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Tail
      ctx.beginPath();
      ctx.moveTo(-25, 0);
      ctx.lineTo(-40, -15);
      ctx.lineTo(-40, 15);
      ctx.closePath();
      ctx.fill();
      
      // Top fin
      ctx.beginPath();
      ctx.moveTo(5, -12);
      ctx.lineTo(10, -25);
      ctx.lineTo(15, -12);
      ctx.closePath();
      ctx.fill();
      
      // Add shine/highlight
      ctx.fillStyle = isDarkMode() ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      ctx.ellipse(8, -3, 8, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const updateFish = (deltaTime: number) => {
      const currentTime = Date.now();
      
      fishRef.current.forEach((fish) => {
        // Move fish horizontally
        fish.x += fish.velocityX;
        
        // Wrap around screen
        if (fish.x > canvas.width + 100) {
          fish.x = -100;
        } else if (fish.x < -100) {
          fish.x = canvas.width + 100;
        }
        
        // Check if it's time to jump
        if (!fish.jumping && currentTime > fish.nextJumpTime) {
          fish.jumping = true;
          fish.velocityY = -15; // Initial jump velocity
          fish.targetY = canvas.height * 0.4; // Jump high
          fish.nextJumpTime = currentTime + Math.random() * 4000 + 3000; // Next jump in 3-7 seconds
        }
        
        // Update jump physics
        if (fish.jumping) {
          fish.velocityY += 0.5; // Gravity
          fish.y += fish.velocityY;
          
          // Rotation based on velocity
          fish.rotation = Math.atan2(fish.velocityY, fish.velocityX * 3);
          
          // Land back in water
          if (fish.y >= canvas.height * 0.75) {
            fish.y = canvas.height * 0.75;
            fish.velocityY = 0;
            fish.rotation = 0;
            fish.jumping = false;
          }
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      timeRef.current += 0.015;
      
      // Update wave colors based on theme
      const darkMode = isDarkMode();
      waves[0].color = darkMode ? '#0ea5e9' : '#0284c7';
      waves[1].color = darkMode ? '#06b6d4' : '#0891b2';
      waves[2].color = darkMode ? '#14b8a6' : '#0d9488';
      waves[3].color = darkMode ? '#22d3ee' : '#06b6d4';
      waves[4].color = darkMode ? '#38bdf8' : '#0ea5e9';
      waves[5].color = darkMode ? '#7dd3fc' : '#38bdf8';
      
      // Update fish colors based on theme
      fishRef.current.forEach((fish) => {
        fish.color = darkMode ? '#ffffff' : '#1a5f7a';
      });
      
      // Draw waves from back to front
      waves.forEach((wave) => {
        drawWave(wave, timeRef.current * wave.speed);
      });
      
      // Update and draw fish
      updateFish(0.016);
      fishRef.current.forEach((fish) => {
        drawFish(fish);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    
    // Initialize fish
    initFish();
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      // Theme changed, update will happen in next animation frame
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ mixBlendMode: 'normal', opacity: 0.85 }}
    />
  );
}
