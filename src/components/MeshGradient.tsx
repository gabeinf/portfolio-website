import { useEffect, useRef } from 'react';
import '../styles/MeshGradient.css';

const MeshGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Gradient orbs with purple theme
    const orbs = [
      { x: 0.2, y: 0.2, radius: 0.4, color: '#8b5cf6', vx: 0.0003, vy: 0.0002 },
      { x: 0.8, y: 0.3, radius: 0.5, color: '#a855f7', vx: -0.0002, vy: 0.0003 },
      { x: 0.5, y: 0.7, radius: 0.45, color: '#7c3aed', vx: 0.0002, vy: -0.0002 },
      { x: 0.1, y: 0.8, radius: 0.35, color: '#6d28d9', vx: 0.0004, vy: 0.0001 },
      { x: 0.9, y: 0.9, radius: 0.4, color: '#5b21b6', vx: -0.0003, vy: -0.0003 },
    ];

    const animate = () => {
      // Clear canvas with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw orbs
      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges
        if (orb.x < 0 || orb.x > 1) orb.vx *= -1;
        if (orb.y < 0 || orb.y > 1) orb.vy *= -1;

        // Keep within bounds
        orb.x = Math.max(0, Math.min(1, orb.x));
        orb.y = Math.max(0, Math.min(1, orb.y));

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          orb.x * canvas.width,
          orb.y * canvas.height,
          0,
          orb.x * canvas.width,
          orb.y * canvas.height,
          orb.radius * Math.max(canvas.width, canvas.height)
        );

        gradient.addColorStop(0, orb.color + '66'); // 40% opacity
        gradient.addColorStop(0.5, orb.color + '33'); // 20% opacity
        gradient.addColorStop(1, orb.color + '00'); // 0% opacity

        // Draw gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="mesh-gradient" />;
};

export default MeshGradient;
