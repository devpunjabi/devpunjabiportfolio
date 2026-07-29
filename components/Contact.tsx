import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { EMAILJS, EMAILJS_CONFIGURED, SITE, SOCIALS } from '../config/site';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
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

  /**
   * Hand the message off to the visitor's own mail client. Used when EmailJS
   * credentials are absent so the form always does something useful rather than
   * exposing the site's configuration state to whoever is trying to get in touch.
   */
  const handOffToMailClient = () => {
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href =
      `mailto:${SITE.email}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_CONFIGURED) {
      handOffToMailClient();
      return;
    }

    setStatus('sending');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: SITE.name
      };

      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        templateParams,
        EMAILJS.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Contact form submission failed', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 relative pb-28">
      {/* Ambient background warmth */}
      <div className="ambient-blob top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-200/30 opacity-40" />

      {/* Header Section */}
      <div className="pt-36 pb-12 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto relative">
        <div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-stone-400 uppercase mb-4 block pl-1 animate-fade-in animate-delay-100">
            {t('reachOut')}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-light text-stone-900 leading-[1.05] tracking-tight max-w-4xl animate-blur-up">
            {t('reachOutTitle')}
          </h1>
        </div>
      </div>

      {/* Main Grid Content (Fixed Layout Bug) */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 pt-8 relative animate-slide-up animate-delay-300">
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
                  href={`mailto:${SITE.email}`}
                  className="text-xl md:text-2xl font-serif text-stone-900 hover:text-stone-600 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300 w-fit"
                >
                  {SITE.email}
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
                    {SITE.location.city}<br />
                    {SITE.location.country}
                  </span>
                </p>
              </div>

              {/* Social links — only those configured in config/site.ts are rendered */}
              {SOCIALS.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block mb-4">
                    {t('socials')}
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {SOCIALS.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-900 hover:text-stone-50 hover:border-stone-900 transition-all duration-300 shadow-sm hover:scale-105"
                      >
                        {social.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
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
                    {language === 'en'
                      ? 'Please try again later, or email '
                      : 'Bitte später erneut versuchen oder direkt schreiben an '}
                    <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
                  </p>
                )}

                {!EMAILJS_CONFIGURED && (
                  <p className="mt-3 text-xs text-stone-400 font-light">
                    {language === 'en'
                      ? 'This opens a pre-filled message in your own email app.'
                      : 'Dies öffnet eine vorausgefüllte Nachricht in Ihrem E-Mail-Programm.'}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
