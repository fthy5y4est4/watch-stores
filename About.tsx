import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Code, Lightbulb, Zap } from 'lucide-react';

const AnimatedBox = () => {
  const meshRef = useRef(null);
  
  return (
    <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" wireframe />
    </mesh>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-6 rounded-xl"
    >
      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="text-white" size={24} />,
      title: "Custom 3D Development",
      description: "We build custom 3D experiences using cutting-edge web technologies like Three.js and WebGL."
    },
    {
      icon: <Lightbulb className="text-white" size={24} />,
      title: "Creative Direction",
      description: "Our team of creative directors ensures your 3D experiences align with your brand and objectives."
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Performance Optimization",
      description: "We optimize 3D experiences for all devices, ensuring smooth performance across platforms."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="h-64 w-full">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedBox />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Our Studio</h2>
              <p className="text-gray-400 mb-6">
                We are a specialized 3D motion design studio creating immersive digital experiences that captivate and engage. 
                Our team combines technical expertise with artistic vision to push the boundaries of what's possible on the web.
              </p>
              <p className="text-gray-400 mb-8">
                Founded in 2020, we've worked with brands across industries to transform their digital presence with cutting-edge 
                3D and motion design that stands out in today's crowded digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;