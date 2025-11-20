import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:devpunjabi@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Header */}
      <div className="pt-40 pb-10 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-stone-500 font-medium tracking-widest uppercase text-sm mb-6 pl-1">Reach Out</h2>
          <h1 className="text-2xl md:text-1xl lg:text-1xl font-serif font-light text-stone-900 leading-[0.7]">I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</h1>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-stone-600 mb-16 leading-relaxed font-light">
              
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Email</h4>
                <a href="mailto:hello@devpunjabi.com" className="text-2xl md:text-3xl font-serif text-stone-900 hover:text-stone-600 transition-colors">
                  hello@devpunjabi.com
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Studio</h4>
                <p className="text-xl text-stone-800">
                  Karlsruhe<br/>
                  Germany
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Socials</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors"><Twitter size={24} /></a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-stone-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-3 border-b border-stone-200 focus:border-stone-900 transition-colors outline-none bg-transparent text-lg text-stone-900 placeholder-stone-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-stone-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 border-b border-stone-200 focus:border-stone-900 transition-colors outline-none bg-transparent text-lg text-stone-900 placeholder-stone-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-stone-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full py-3 border-b border-stone-200 focus:border-stone-900 transition-colors outline-none bg-transparent text-lg text-stone-900 placeholder-stone-300 resize-none"
                  placeholder="Tell me about your ideas..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center space-x-3 text-stone-900 font-bold text-lg mt-4"
              >
                <span>Send Message</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                   <ArrowRight size={20} />
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;