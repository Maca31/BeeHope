import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.075;

    const updateScroll = () => {
      targetScroll = window.scrollY;
      currentScroll += (targetScroll - currentScroll) * ease;

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translate3d(0, ${-currentScroll}px, 0)`;
      }

      rafId = requestAnimationFrame(updateScroll);
    };

    rafId = requestAnimationFrame(updateScroll);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full">
      <div ref={scrollRef}>{children}</div>
    </div>
  );
}
