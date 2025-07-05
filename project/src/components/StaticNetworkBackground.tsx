import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  radius: number;
  connections: number[];
}

interface StaticNetworkBackgroundProps {
  className?: string;
  nodeCount?: number;
  connectionDistance?: number;
}

const StaticNetworkBackground: React.FC<StaticNetworkBackgroundProps> = ({
  className = "",
  nodeCount = 60,
  connectionDistance = 120
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    // Initialize nodes
    const initNodes = (): Node[] => {
      const nodes: Node[] = [];
      const rect = canvas.getBoundingClientRect();
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          radius: Math.random() * 2 + 1,
          connections: []
        });
      }
      
      // Calculate connections
      nodes.forEach((node, i) => {
        node.connections = [];
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              node.connections.push(j);
            }
          }
        });
      });
      
      return nodes;
    };

    // Draw everything
    const draw = (nodes: Node[]) => {
      if (!ctx || !canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      
      // Clear canvas with dark background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate line opacity based on distance
          const opacity = Math.max(0, 1 - distance / connectionDistance) * 0.3;
          
          if (opacity > 0.05) {
            // Create gradient for the line
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.6})`);
            gradient.addColorStop(0.5, `rgba(147, 197, 253, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * 0.6})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Draw main node
        const nodeGradient = ctx.createRadialGradient(
          node.x - node.radius * 0.3, node.y - node.radius * 0.3, 0,
          node.x, node.y, node.radius
        );
        
        nodeGradient.addColorStop(0, 'rgba(147, 197, 253, 0.8)');
        nodeGradient.addColorStop(0.7, 'rgba(59, 130, 246, 0.7)');
        nodeGradient.addColorStop(1, 'rgba(29, 78, 216, 0.6)');
        
        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Initialize and draw
    setCanvasSize();
    const nodes = initNodes();
    draw(nodes);

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      const newNodes = initNodes();
      draw(newNodes);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nodeCount, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    />
  );
};

export default StaticNetworkBackground;