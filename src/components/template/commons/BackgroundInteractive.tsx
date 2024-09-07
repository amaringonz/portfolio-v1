'use client';

import { useCallback, useEffect, useState } from 'react';

const BackgroundInteractive = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = window.setTimeout(() => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY + window.scrollY,
      });
    }, 1);

    setTimeoutId(newTimeoutId);
  }, [timeoutId]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleMouseMove, timeoutId]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--foreground), 0.05), transparent 80%)`,
      }}
    >
    </div>
  );
};

export { BackgroundInteractive };
