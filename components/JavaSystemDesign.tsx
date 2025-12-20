import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Database, Shield, Zap, CheckCircle, AlertTriangle, ArrowRight, RotateCcw, Cpu } from 'lucide-react';

type StepId = 'start' | 'concurrency' | 'consistency' | 'processing' | 'result';

interface Option {
  id: string;
  label: string;
  desc: string;
  isCorrect: boolean;
  feedback: string;
}

interface Question {
  id: StepId;
  title: string;
  icon: React.ElementType;
  scenario: string;
  options: Option[];
}

const QUESTIONS: Record<string, Question> = {
  concurrency: {
    id: 'concurrency',
    title: 'High Concurrency Handling',
    icon: Cpu,
    scenario: 'Your Payment Gateway API receives a spike of 10,000 requests/sec. The traditional thread-per-request model is exhausting system threads (Context Switching overhead). How do you modernize this in Java 21+?',
    options: [
      {
        id: 'thread-pool',
        label: 'Increase Thread Pool Size',
        desc: 'Simply add more OS threads to the ExecutorService.',
        isCorrect: false,
        feedback: 'Inefficient. OS threads are expensive (1MB stack) and context switching will kill CPU performance at this scale.'
      },
      {
        id: 'reactive',
        label: 'Spring WebFlux (Reactive)',
        desc: 'Rewrite the entire stack using non-blocking asynchronous streams.',
        isCorrect: false, // Semi-correct but high effort
        feedback: 'Valid, but high cognitive load. It requires rewriting the entire codebase and makes debugging stack traces difficult.'
      },
      {
        id: 'virtual-threads',
        label: 'Java 21 Virtual Threads (Project Loom)',
        desc: 'Use lightweight, JVM-managed threads allowing millions of concurrent tasks.',
        isCorrect: true,
        feedback: 'Excellent choice. Virtual threads provide the throughput of Reactive programming while maintaining the imperative style of standard Java.'
      }
    ]
  },
  consistency: {
    id: 'consistency',
    title: 'Financial Data Consistency',
    icon: Database,
    scenario: 'Two concurrent transactions try to deduct balance from the same Wallet entity. How do you prevent a Race Condition (Double Spending) in JPA/Hibernate?',
    options: [
      {
        id: 'synchronized',
        label: 'Java synchronized Keyword',
        desc: 'Wrap the deductBalance() method in a synchronized block.',
        isCorrect: false,
        feedback: 'Dangerous. This only works on a SINGLE JVM instance. In a distributed microservices environment, this fails completely.'
      },
      {
        id: 'pessimistic',
        label: 'Pessimistic Locking (SELECT FOR UPDATE)',
        desc: 'Lock the database row exclusively until the transaction commits.',
        isCorrect: true,
        feedback: 'Correct. For high-stakes financial data, Pessimistic Locking guarantees safety, even if it sacrifices some throughput.'
      },
      {
        id: 'optimistic',
        label: 'Optimistic Locking (@Version)',
        desc: 'Use a version column to check for updates at commit time.',
        isCorrect: false,
        feedback: 'Risky for high-contention wallets. It causes too many RetryExceptions under load, degrading user experience.'
      }
    ]
  },
  processing: {
    id: 'processing',
    title: 'Heavy Task Offloading',
    icon: Server,
    scenario: 'After payment success, the system must generate a PDF invoice and email it. This takes 2-3 seconds. The user is waiting.',
    options: [
      {
        id: 'sync',
        label: 'Synchronous Execution',
        desc: 'Process it in the same request thread before returning 200 OK.',
        isCorrect: false,
        feedback: 'Bad UX. The user waits 3 seconds unnecessarily, and you hold open HTTP connections.'
      },
      {
        id: 'async-annotation',
        label: 'Spring @Async',
        desc: 'Fire and forget using a background thread pool.',
        isCorrect: false,
        feedback: 'Risky. If the server crashes immediately after the response, the email task is lost in memory.'
      },
      {
        id: 'queue',
        label: 'Transactional Outbox + Kafka',
        desc: 'Persist an event to DB, then process via Message Queue.',
        isCorrect: true,
        feedback: 'Robust. Decouples critical path from side effects and ensures eventual consistency even on system failure.'
      }
    ]
  }
};

const JavaSystemDesign: React.FC = () => {
  const [step, setStep] = useState<StepId>('start');
  const [history, setHistory] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleStart = () => setStep('concurrency');

  const handleSelect = (option: Option) => {
    setSelectedOption(option.id);
    setFeedback(option.feedback);
  };

  const handleNext = () => {
    const currentQ = QUESTIONS[step as string];
    const isCorrect = currentQ.options.find(o => o.id === selectedOption)?.isCorrect;

    if (isCorrect) {
      const nextSteps: Record<string, StepId> = {
        'concurrency': 'consistency',
        'consistency': 'processing',
        'processing': 'result'
      };
      setHistory([...history, selectedOption!]);
      setSelectedOption(null);
      setFeedback(null);
      setStep(nextSteps[step]);
    }
  };

  const reset = () => {
    setStep('start');
    setHistory([]);
    setSelectedOption(null);
    setFeedback(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
      >
        {/* Header */}
        <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500/10 p-2 rounded-lg">
              <Zap className="text-orange-500 w-5 h-5" />
            </div>
            <h3 className="font-mono text-slate-200 font-bold">System Design Challenge: Payment Gateway</h3>
          </div>
          <div className="flex gap-2 text-xs font-mono text-slate-500">
            <span>Java 21</span>
            <span>Spring Boot 3</span>
            <span>PostgreSQL</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* START SCREEN */}
            {step === 'start' && (
              <motion.div 
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Server className="w-10 h-10 text-primary-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Architect the Backend</h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Demonstrate your engineering depth by making critical architectural decisions for a high-scale Payment Gateway service.
                </p>
                <button 
                  onClick={handleStart}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start Architecture Challenge <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* QUESTIONS */}
            {['concurrency', 'consistency', 'processing'].includes(step) && (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-3xl mx-auto"
              >
                <div className="flex items-start gap-4 mb-8">
                  {React.createElement(QUESTIONS[step].icon, { className: "w-8 h-8 text-primary-400 mt-1 shrink-0" })}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{QUESTIONS[step].title}</h3>
                    <p className="text-slate-300 leading-relaxed">{QUESTIONS[step].scenario}</p>
                  </div>
                </div>

                <div className="grid gap-4 mb-8">
                  {QUESTIONS[step].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(opt)}
                      disabled={selectedOption !== null && selectedOption !== opt.id && QUESTIONS[step].options.find(o => o.id === selectedOption)?.isCorrect}
                      className={`text-left p-4 rounded-xl border transition-all relative ${
                        selectedOption === opt.id 
                          ? opt.isCorrect 
                            ? 'bg-green-500/10 border-green-500/50' 
                            : 'bg-red-500/10 border-red-500/50'
                          : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'
                      } ${selectedOption !== null && selectedOption !== opt.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`font-bold block mb-1 ${selectedOption === opt.id ? (opt.isCorrect ? 'text-green-400' : 'text-red-400') : 'text-slate-200'}`}>
                          {opt.label}
                        </span>
                        {selectedOption === opt.id && (
                          opt.isCorrect ? <CheckCircle className="w-5 h-5 text-green-500" /> : <AlertTriangle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                      <span className="text-sm text-slate-400">{opt.desc}</span>
                    </button>
                  ))}
                </div>

                {/* Feedback Panel */}
                <AnimatePresence>
                  {feedback && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`p-4 rounded-lg mb-6 border ${
                        QUESTIONS[step].options.find(o => o.id === selectedOption)?.isCorrect 
                          ? 'bg-green-900/20 border-green-500/30 text-green-200' 
                          : 'bg-red-900/20 border-red-500/30 text-red-200'
                      }`}
                    >
                      <span className="font-bold mr-2">Lead Engineer Note:</span>
                      {feedback}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end">
                  {selectedOption && QUESTIONS[step].options.find(o => o.id === selectedOption)?.isCorrect && (
                    <button 
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 hover:bg-white px-6 py-2 rounded-lg font-bold transition-colors"
                    >
                      Next Decision <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* RESULT */}
            {step === 'result' && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center p-4 bg-green-500/20 rounded-full mb-6">
                  <Shield className="w-12 h-12 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Architecture Approved</h2>
                <p className="text-slate-400 mb-8">
                  You have designed a <span className="text-primary-400 font-bold">Resilient, High-Throughput System</span> utilizing modern Java features.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10 text-left">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-2">Concurrency</div>
                    <div className="font-mono text-green-400">Virtual Threads</div>
                    <p className="text-xs text-slate-400 mt-2">Maximized throughput without reactive complexity.</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-2">Data Integrity</div>
                    <div className="font-mono text-green-400">Pessimistic Locking</div>
                    <p className="text-xs text-slate-400 mt-2">Zero race conditions on financial transactions.</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-500 uppercase font-bold mb-2">Reliability</div>
                    <div className="font-mono text-green-400">Transactional Outbox</div>
                    <p className="text-xs text-slate-400 mt-2">Eventual consistency for non-blocking side effects.</p>
                  </div>
                </div>

                <button 
                  onClick={reset}
                  className="text-slate-500 hover:text-white flex items-center gap-2 mx-auto text-sm"
                >
                  <RotateCcw className="w-4 h-4" /> Reset Challenge
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default JavaSystemDesign;