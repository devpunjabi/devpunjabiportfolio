import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle, AlertCircle, Loader2, Info, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [showConfigModal, setShowConfigModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ------------------------------------------------------------------
    // Configure EmailJS keys (placeholders by default)
    // Get them from https://dashboard.emailjs.com/
    // ------------------------------------------------------------------
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setShowConfigModal(true);
      return;
    }

    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Dev Punjabi'
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 relative pb-28">
      {/* Header Section */}
      <div className="pt-36 pb-12 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto animate-slide-up">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-stone-400 uppercase mb-4 block pl-1">
            {t('reachOut')}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-light text-stone-900 leading-[1.05] tracking-tight max-w-4xl">
            {t('reachOutTitle')}
          </h1>
        </div>
      </div>

      {/* Main Grid Content (Fixed Layout Bug) */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 pt-8 animate-slide-up animate-delay-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">

          {/* Left Column: Contact Details (Takes 5 spans) */}
          <div className="lg:col-span-5 space-y-12">
            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
              {language === 'en' 
                ? "Let's build something exceptional together. Whether you want to discuss a new software architecture, an art commission, or simply say hello, my inbox is open." 
                : "Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen. Egal, ob Sie eine neue Softwarearchitektur, eine Kunstkommission besprechen oder einfach nur Hallo sagen möchten, mein Posteingang ist offen."}
            </p>

            <div className="space-y-8 pt-4">
              {/* Email details */}
              <div className="group">
                <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block mb-2">
                  {t('email')}
                </span>
                <a 
                  href="mailto:devpunjabi203@gmail.com" 
                  className="text-xl md:text-2xl font-serif text-stone-900 hover:text-stone-600 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300 w-fit"
                >
                  devpunjabi203@gmail.com
                  <ArrowUpRight size={16} className="text-stone-300 group-hover:text-stone-600 transition-colors" />
                </a>
              </div>

              {/* Location details */}
              <div>
                <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block mb-2">
                  {t('studio')}
                </span>
                <p className="text-lg text-stone-700 font-light leading-relaxed flex items-start gap-2.5">
                  <MapPin size={18} className="text-stone-400 mt-1 flex-shrink-0" />
                  <span>
                    Karlsruhe<br />
                    Germany
                  </span>
                </p>
              </div>

              {/* Social icons */}
              <div>
                <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block mb-4">
                  {t('socials')}
                </span>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin size={18} />, url: '#', label: 'LinkedIn' },
                    { icon: <Instagram size={18} />, url: '#', label: 'Instagram' },
                    { icon: <Twitter size={18} />, url: '#', label: 'Twitter' }
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.url}
                      aria-label={soc.label}
                      className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all duration-300 shadow-sm hover:scale-105"
                    >
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card (Takes 7 spans - Fixed Placement inside Grid) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-200/50 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.06)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Form Input fields */}
              {[
                { id: 'name', type: 'text', label: t('name'), placeholder: t('yourName') },
                { id: 'email', type: 'email', label: t('email'), placeholder: 'your@email.com' },
                { id: 'subject', type: 'text', label: t('subject'), placeholder: t('subjectPlaceholder') }
              ].map((input) => (
                <div key={input.id} className="relative group">
                  <label 
                    htmlFor={input.id} 
                    className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-stone-900 transition-colors"
                  >
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    value={(formData as any)[input.id]}
                    onChange={handleChange}
                    required
                    className="w-full py-3.5 border-b border-stone-200 focus:border-stone-900 transition-all duration-300 outline-none bg-transparent text-base text-stone-900 placeholder-stone-300"
                    placeholder={input.placeholder}
                  />
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              ))}

              {/* Message field */}
              <div className="relative group">
                <label 
                  htmlFor="message" 
                  className="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-stone-900 transition-colors"
                >
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full py-3.5 border-b border-stone-200 focus:border-stone-900 transition-all duration-300 outline-none bg-transparent text-base text-stone-900 placeholder-stone-300 resize-none"
                  placeholder={t('messagePlaceholder')}
                />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
              </div>

              {/* Submit Buttons and statuses */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group flex items-center space-x-3.5 font-bold text-base border-2 border-stone-900 px-7 py-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                    status === 'sending' 
                      ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-wait' 
                      : 'bg-stone-900 text-stone-50 hover:bg-stone-50 hover:text-stone-900 shadow-md hover:shadow-lg'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <span>{t('sending')}</span>
                      <Loader2 size={16} className="animate-spin text-stone-400" />
                    </>
                  ) : status === 'success' ? (
                    <>
                      <span>{t('messageSent')}</span>
                      <CheckCircle size={16} className="text-emerald-500" />
                    </>
                  ) : status === 'error' ? (
                    <>
                      <span>{t('failedToSend')}</span>
                      <AlertCircle size={16} className="text-red-500" />
                    </>
                  ) : (
                    <>
                      <span>{t('sendMessage')}</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                        <ArrowRight size={16} />
                      </span>
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <p className="mt-3 text-xs text-red-500 font-mono">
                    Please try again later or email directly to devpunjabi203@gmail.com.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Styled EmailJS configuration help modal overlay (replaces standard browser alerts) */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/40 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in">
          <div className="bg-white max-w-md w-full p-8 rounded-3xl border border-stone-200 shadow-2xl relative animate-slide-up">
            <button 
              onClick={() => setShowConfigModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center">
                <Info size={18} />
              </span>
              <div>
                <h3 className="text-xl font-serif text-stone-900">EmailJS Integration</h3>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">Setup Required</span>
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mb-6 font-light">
              This form uses <strong>EmailJS</strong> for client-side static static email delivery. To receive messages, replace the credential placeholders inside <code>Contact.tsx</code> (lines 30-32):
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 font-mono text-[11px] text-stone-500">
                <span className="text-stone-800 block font-bold">1. SERVICE_ID</span>
                Your email provider service identifier.
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 font-mono text-[11px] text-stone-500">
                <span className="text-stone-800 block font-bold">2. TEMPLATE_ID</span>
                Your custom email format template.
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 font-mono text-[11px] text-stone-500">
                <span className="text-stone-800 block font-bold">3. PUBLIC_KEY</span>
                Your account dashboard public API key.
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a 
                href="https://dashboard.emailjs.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-1.5 font-bold text-xs uppercase tracking-widest text-center bg-stone-900 text-white py-3.5 rounded-full hover:bg-stone-800 transition-colors shadow-md"
              >
                Register on EmailJS
                <ArrowUpRight size={12} />
              </a>
              <button 
                onClick={() => setShowConfigModal(false)}
                className="font-bold text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 text-center py-3.5 cursor-pointer"
              >
                Dismiss Prompt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
