import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import TiltCard from '../components/ui/TiltCard';

const Contact = () => {
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
            I'm currently looking for internships and entry-level opportunities.
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

          {/* Contact Form Simulation */}
          <motion.div variants={fadeInUp}>
            <TiltCard>
              <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-xl shadow-slate-900/50 overflow-hidden relative group h-full">

                {/* Background Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
                  <form className="space-y-4" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-200">Name</label>
                      <input type="text" id="name" className="mt-1 block w-full rounded-md border-0 bg-slate-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-colors focus:bg-slate-800" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-200">Email</label>
                      <input type="email" id="email" className="mt-1 block w-full rounded-md border-0 bg-slate-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-colors focus:bg-slate-800" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-200">Message</label>
                      <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-0 bg-slate-800/50 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 backdrop-blur-sm transition-colors focus:bg-slate-800" placeholder="How can I help you?"></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </motion.button>
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