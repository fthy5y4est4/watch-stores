import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import { MeshDistortMaterial } from './MeshDistortMaterial';

const AnimatedSphere = () => {
  const meshRef = useRef(null);
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color="#8b5cf6" speed={1.5} distort={0.3} />
    </mesh>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Immersive 3D Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Bringing your digital vision to life with cutting-edge motion design and interactive 3D elements.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#work" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium text-lg transition-colors duration-300"
            >
              Explore Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;