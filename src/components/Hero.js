import React from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { TorusKnot, OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Create a custom shader material that mixes two colors based on vertex y-coordinate.
const GradientMaterial = shaderMaterial(
  {
    color1: new THREE.Color('#B65849'), // Tomato
    color2: new THREE.Color('#C30CF3')  // Aqua
  },
  // Vertex Shader
  `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec3 vPosition;
    void main() {
      // Normalize y coordinate from -1 to 1 into a mix factor between 0 and 1.
      float mixFactor = (vPosition.y + 1.0) / 2.0;
      vec3 gradColor = mix(color1, color2, mixFactor);
      gl_FragColor = vec4(gradColor, 1.0);
    }
  `
);

// Extend the material so it can be used as a JSX tag
extend({ GradientMaterial });

function AnimatedTorusKnot(props) {
  const ref = React.useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  
  return (
    <TorusKnot ref={ref} args={[1.5, 0.5, 100, 16]} {...props}>
      {/* Use our custom gradient shader material instead of a standard material */}
      <gradientMaterial attach="material" color1="#ff6347" color2="#C30CF3" />
    </TorusKnot>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Canvas style={{ position: 'absolute', top: 0 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedTorusKnot position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="hero-content">
        <h2>Digital Art Collection</h2>
        <p>by: Pranav Chahal</p>
        <a href="#gallery" className="btn">Explore Gallery</a>
      </div>
    </section>
  );
}

export default Hero;
