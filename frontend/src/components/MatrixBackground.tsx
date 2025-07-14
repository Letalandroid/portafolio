
import React, { useEffect, useRef, useState } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('MatrixBackground: useEffect iniciado');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('MatrixBackground: No se encontró el canvas');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('MatrixBackground: No se pudo obtener el contexto 2d');
      return;
    }

    console.log('MatrixBackground: Canvas y contexto obtenidos correctamente');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`MatrixBackground: Canvas redimensionado a ${canvas.width}x${canvas.height}`);
    };
    
    // Initial resize
    resizeCanvas();
    setIsLoaded(true);
    console.log('MatrixBackground: Canvas inicializado y marcado como cargado');
    
    window.addEventListener('resize', resizeCanvas);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    console.log(`MatrixBackground: Configurado para ${columns} columnas`);

    // Initialize drops - each column starts at a random position
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -500; // Start above screen
    }

    let lastTime = 0;
    let frameCount = 0;
    const draw = (currentTime: number) => {
      // Control animation speed
      if (currentTime - lastTime < 50) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;
      frameCount++;

      // Log every 60 frames (approximately every 3 seconds)
      if (frameCount % 60 === 0) {
        console.log(`MatrixBackground: Frame ${frameCount} - Animación en curso`);
      }

      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'center';

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize + fontSize / 2;
        const y = drops[i];
        
        // Add glow effect
        ctx.shadowColor = '#00ff00';
        ctx.shadowBlur = 10;
        ctx.fillText(text, x, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Move drop down
        drops[i] += fontSize;

        // Reset drop to top when it reaches bottom
        if (drops[i] > canvas.height + 100) {
          drops[i] = Math.random() * -200;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Start animation
    console.log('MatrixBackground: Iniciando animación');
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      console.log('MatrixBackground: Limpiando recursos');
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  console.log(`MatrixBackground: Renderizando canvas, isLoaded: ${isLoaded}`);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        background: 'black',
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  );
};

export default MatrixBackground;
