import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = ({ icon, title, content }: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
}) => {
  return (
    <div className="flex items-start mb-8">
      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? 
            We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <ContactInfo 
              icon={<Mail className="text-white" size={20} />}
              title="Email Us"
              content="hello@dimension.studio"
            />
            <ContactInfo 
              icon={<Phone className="text-white" size={20} />}
              title="Call Us"
              content="+1 (555) 123-4567"
            />
            <ContactInfo 
              icon={<MapPin className="text-white" size={20} />}
              title="Visit Us"
              content="123 Design Street, Creative District, New York, NY 10001"
            />
          </div>
          
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;