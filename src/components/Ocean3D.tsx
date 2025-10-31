import { useEffect, useRef } from 'react';

interface Vertex {
  x: number;
  y: number;
  z: number;
  origX: number;
  origY: number;
  origZ: number;
}

export function Ocean3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const verticesRef = useRef<Vertex[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create icosahedron-like sphere vertices
    const createSphere = () => {
      const vertices: Vertex[] = [];
      const radius = 150;
      const segments = 20;

      for (let lat = 0; lat <= segments; lat++) {
        const theta = (lat * Math.PI) / segments;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);

        for (let lon = 0; lon <= segments; lon++) {
          const phi = (lon * 2 * Math.PI) / segments;
          const sinPhi = Math.sin(phi);
          const cosPhi = Math.cos(phi);

          const x = radius * sinTheta * cosPhi;
          const y = radius * cosTheta;
          const z = radius * sinTheta * sinPhi;

          vertices.push({ x, y, z, origX: x, origY: y, origZ: z });
        }
      }

      return vertices;
    };

    verticesRef.current = createSphere();

    const project = (x: number, y: number, z: number) => {
      const scale = 300 / (300 + z);
      return {
        x: x * scale + canvas.width / 2,
        y: y * scale + canvas.height / 2,
        scale,
      };
    };

    const rotateX = (vertex: Vertex, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y = vertex.y * cos - vertex.z * sin;
      const z = vertex.y * sin + vertex.z * cos;
      return { ...vertex, y, z };
    };

    const rotateY = (vertex: Vertex, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = vertex.x * cos + vertex.z * sin;
      const z = -vertex.x * sin + vertex.z * cos;
      return { ...vertex, x, z };
    };

    const rotateZ = (vertex: Vertex, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x = vertex.x * cos - vertex.y * sin;
      const y = vertex.x * sin + vertex.y * cos;
      return { ...vertex, x, y };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Smooth rotation based on mouse
      rotationX += (mouseY * 0.5 - rotationX) * 0.05;
      rotationY += (mouseX * 0.5 - rotationY) * 0.05;
      rotationZ += 0.002;

      // Draw vertices with wave effect
      verticesRef.current.forEach((vertex, i) => {
        // Apply wave effect
        const wave =
          Math.sin(vertex.origX * 0.02 + time) * 5 +
          Math.sin(vertex.origY * 0.02 + time * 0.8) * 5;

        let v: Vertex = {
          x: vertex.origX,
          y: vertex.origY,
          z: vertex.origZ + wave,
          origX: vertex.origX,
          origY: vertex.origY,
          origZ: vertex.origZ,
        };

        // Apply rotations
        v = rotateX(v, rotationX);
        v = rotateY(v, rotationY);
        v = rotateZ(v, rotationZ);

        const projected = project(v.x, v.y, v.z);

        // Draw point with depth-based opacity and size
        const opacity = Math.max(0.1, Math.min(1, projected.scale));
        const size = Math.max(1, projected.scale * 3);

        ctx.beginPath();
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
        
        // Ocean-like gradient color
        const hue = 190 + (v.z / 10);
        const lightness = 40 + (projected.scale * 20);
        ctx.fillStyle = `hsla(${hue}, 60%, ${lightness}%, ${opacity * 0.6})`;
        ctx.fill();

        // Connect nearby points
        if (i > 0 && i % 21 !== 0) {
          const prevVertex = verticesRef.current[i - 1];
          let prevV: Vertex = {
            x: prevVertex.origX,
            y: prevVertex.origY,
            z: prevVertex.origZ + Math.sin(prevVertex.origX * 0.02 + time) * 5,
            origX: prevVertex.origX,
            origY: prevVertex.origY,
            origZ: prevVertex.origZ,
          };
          prevV = rotateX(prevV, rotationX);
          prevV = rotateY(prevV, rotationY);
          prevV = rotateZ(prevV, rotationZ);
          const prevProjected = project(prevV.x, prevV.y, prevV.z);

          ctx.beginPath();
          ctx.moveTo(projected.x, projected.y);
          ctx.lineTo(prevProjected.x, prevProjected.y);
          ctx.strokeStyle = `hsla(190, 60%, 50%, ${opacity * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />;
}
