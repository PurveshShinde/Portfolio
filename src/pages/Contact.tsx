import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import TiltCard from '../components/ui/TiltCard';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // ⚠️ REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
    const SERVICE_ID = 'service_b2cpt8q';
    const TEMPLATE_ID = 'template_8otheig';
    const PUBLIC_KEY = 'MOYK4CoYJB8TzCDTS';

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
          console.log('Email sent:', result.text);
          setLoading(false);
          setStatus('success');
          formRef.current?.reset(); // Clear the form
          
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
        }, (error) => {
          console.error('Email error:', error.text);
          setLoading(false);
          setStatus('error');
        });
    }
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in touch</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            I'm currently looking for Java Developer internships and entry-level opportunities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2"
        >

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">{CONTACT.email}</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href={`tel:${CONTACT.phone}`} className="text-slate-400 hover:text-primary-400 transition-colors">{CONTACT.phone}</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-slate-400">{CONTACT.location}</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <h4 className="font-semibold text-white mb-4">Connect on Socials</h4>
              <div className="flex gap-4">
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-md hover:opacity-90 transition-opacity">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={CONTACT.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-md hover:opacity-90 transition-opacity">
                  <Github className="h-4 w-4" /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ACTIVE Contact Form */}
          <motion.div variants={fadeInUp}>
            <TiltCard>
              <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/50 overflow-hidden relative group h-full">

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name Input */}
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-medium leading-6 text-slate-200">Name</label>
                      <input 
                        type="text" 
                        name="user_name" // ✅ MATCHES {{user_name}} in Template
                        id="user_name" 
                        required
                        className="mt-1 block w-full rounded-md border-0 bg-slate-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-colors focus:bg-slate-800" 
                        placeholder="Your Name" 
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium leading-6 text-slate-200">Email</label>
                      <input 
                        type="email" 
                        name="user_email" // ✅ MATCHES {{user_email}} in Template
                        id="user_email" 
                        required
                        className="mt-1 block w-full rounded-md border-0 bg-slate-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-colors focus:bg-slate-800" 
                        placeholder="you@example.com" 
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-200">Message</label>
                      <textarea 
                        name="message" // ✅ MATCHES {{message}} in Template
                        id="message" 
                        rows={4} 
                        required
                        className="mt-1 block w-full rounded-md border-0 bg-slate-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-colors focus:bg-slate-800" 
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button with States */}
                    <div className="space-y-3">
                      <motion.button
                        whileHover={!loading && status !== 'success' ? { scale: 1.02 } : {}}
                        whileTap={!loading && status !== 'success' ? { scale: 0.98 } : {}}
                        type="submit"
                        disabled={loading || status === 'success'}
                        className={`w-full flex items-center justify-center gap-2 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all
                          ${status === 'success' ? 'bg-green-600 hover:bg-green-600' : 'bg-primary-600 hover:bg-primary-500'}
                          ${loading ? 'opacity-80 cursor-wait' : ''}
                        `}
                      >
                        {loading ? (
                          <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
                        ) : status === 'success' ? (
                          <>Message Sent! <CheckCircle className="h-4 w-4" /></>
                        ) : status === 'error' ? (
                          <>Failed. Try Again <AlertCircle className="h-4 w-4" /></>
                        ) : (
                          <>Send Message <Send className="h-4 w-4" /></>
                        )}
                      </motion.button>
                      
                      {/* Error Helper Text */}
                      {status === 'error' && (
                        <p className="text-xs text-center text-red-400">
                          Something went wrong. Please check your internet connection or email me directly.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;