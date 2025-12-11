
import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ------------------------------------------------------------------
    // TODO: Replace these with your actual EmailJS credentials
    // Get them from https://dashboard.emailjs.com/
    // ------------------------------------------------------------------
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      alert('Please configure your EmailJS credentials in Contact.tsx to send emails.');
      return;
    }

    setStatus('sending');

    try {
      // These parameters must match the variables in your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Dev Punjabi' // Optional, depends on your template
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Header */}
      <div className="pt-40 pb-10 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto">
        <div>
          <h2 className="text-stone-500 font-medium tracking-widest uppercase text-sm mb-6 pl-1">{t('reachOut')}</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-stone-900 leading-[1.1] tracking-tight">{t('reachOutTitle')}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left Column: Info */}
          <div>
            <p className="text-xl md:text-2xl text-stone-600 mb-16 leading-relaxed font-light">

            </p>

            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">{t('email')}</h4>
                <a href="mailto:devpunjabi203@gmail.com" className="text-2xl md:text-3xl font-serif text-stone-900 hover:text-stone-600 transition-colors">
                  devpunjabi203@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">{t('studio')}</h4>
                <p className="text-xl text-stone-800">
                  Karlsruhe<br />
                  Germany
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">{t('socials')}</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-stone-900 hover:text-stone-500 transition-colors"><Twitter size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Minimal Form */}
        <div
          className="bg-white p-8 md:p-12 rounded-3xl shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-stone-400">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-3 border-b border-stone-200 focus:border-stone-900 transition-colors outline-none bg-transparent text-lg text-stone-900 placeholder-stone-300"
                placeholder={t('yourName')}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-stone-400">{t('email')}</label>
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
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-stone-400">{t('subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full py-3 border-b border-stone-200 focus:border-stone-900 transition-colors outline-none bg-transparent text-lg text-stone-900 placeholder-stone-300"
                placeholder={t('subjectPlaceholder')}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-stone-400">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full py-3 border-b border-stone-200 focus:border-stone-900 transition-colors outline-none bg-transparent text-lg text-stone-900 placeholder-stone-300 resize-none"
                placeholder={t('messagePlaceholder')}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group flex items-center space-x-3 font-bold text-lg transition-all duration-300 ${status === 'sending' ? 'text-stone-400 cursor-wait' : 'text-stone-900 hover:opacity-80'
                  }`}
              >
                {status === 'sending' ? (
                  <>
                    <span>{t('sending')}</span>
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : status === 'success' ? (
                  <>
                    <span className="text-green-600">{t('messageSent')}</span>
                    <CheckCircle size={20} className="text-green-600" />
                  </>
                ) : status === 'error' ? (
                  <>
                    <span className="text-red-600">{t('failedToSend')}</span>
                    <AlertCircle size={20} className="text-red-600" />
                  </>
                ) : (
                  <>
                    <span>{t('sendMessage')}</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      <ArrowRight size={20} />
                    </span>
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="mt-2 text-sm text-red-500">Please try again later or email directly.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
