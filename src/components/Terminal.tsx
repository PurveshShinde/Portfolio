import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROFILE, SKILLS, PROJECTS, CONTACT } from '../constants';
import { Wand2, Sparkles, Download } from 'lucide-react';

// ✅ IMPORT BADGES
import gryffindorBadge from './assets/Gryffindor.png';
import slytherinBadge from './assets/Slytherin.png';
import ravenclawBadge from './assets/Ravenclaw.png';
import hufflepuffBadge from './assets/Hufflepuff.png';



interface TerminalLine {
  id: number;
  type: 'input' | 'output';
  content: React.ReactNode;
}

const HOUSES = {
  Gryffindor: { color: 'text-red-500', badge: gryffindorBadge, trait: 'Brave at heart' },
  Slytherin: { color: 'text-emerald-500', badge: slytherinBadge, trait: 'Cunning and ambitious' },
  Ravenclaw: { color: 'text-blue-400', badge: ravenclawBadge, trait: 'Wit beyond measure' },
  Hufflepuff: { color: 'text-yellow-400', badge: hufflepuffBadge, trait: 'Just and loyal' }
};

const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isBooting, setIsBooting] = useState<boolean>(true);

  // Easter Egg States
  const [lumosActive, setLumosActive] = useState<boolean>(false);
  const [interactionMode, setInteractionMode] = useState<'none' | 'confirm_sorting' | 'quiz'>('none');
  const [quizStep, setQuizStep] = useState(0);
  const [houseScores, setHouseScores] = useState({ Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 });

  // Animation States
  const [isMagicClosing, setIsMagicClosing] = useState<boolean>(false);
  const [isFlash, setIsFlash] = useState<boolean>(false); // For Lumos

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Focus Management
  useEffect(() => {
    if (!isBooting) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isBooting, lines]);

  const handleContainerClick = () => {
    if (!isBooting && inputRef.current && window.getSelection()?.toString() === '') {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, isBooting]);

  // Boot Sequence
  const runBootSequence = (clearFirst = false) => {
    if (clearFirst) setLines([]);
    setIsBooting(true);
    setLumosActive(false);
    setInteractionMode('none');

    const bootLines = [
      "Initializing JVM...",
      "Loading Spring Context...",
      "Connecting to Database...",
      `Welcome, Visitor. Backend System ready.`
    ];

    let currentDelay = 0;
    bootLines.forEach((line, index) => {
      currentDelay += 300 + Math.random() * 200;
      const timeoutId = setTimeout(() => {
        setLines(prev => [...prev, {
          id: Date.now() + index,
          type: 'output',
          content: <span className={index === bootLines.length - 1 ? "text-primary-400 font-bold" : "text-slate-400"}>{line}</span>
        }]);
        if (index === bootLines.length - 1) setIsBooting(false);
      }, currentDelay);
      timeoutsRef.current.push(timeoutId);
    });
  };

  useEffect(() => {
    console.log("%c⚡ Mischief Managed? Try 'lumos' to light the way.", "color: #fcd34d; font-size: 14px; font-weight: bold; background: #1e293b; padding: 4px; border-radius: 4px;");
    runBootSequence();
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  // Questions
  const questions = [
    "History will remember you. For what? (Deeds / Greatness / Wisdom / Kindness)",
    "A troll blocks the bridge. You... (Fight / Trick / Analyze / Negotiate)",
    "The goblet offers four liquids. You drink the... (Golden / Emerald / Sapphire / Earthy)"
  ];

  const processQuizAnswer = (answer: string) => {
    const text = answer.toLowerCase();
    const scores = { ...houseScores };

    if (['deeds', 'fight', 'golden', 'brave', 'action', 'sword', 'glory', 'hero', 'battle'].some(k => text.includes(k))) scores.Gryffindor += 5;
    if (['greatness', 'trick', 'emerald', 'power', 'ambition', 'cunning', 'lead', 'rule', 'snake'].some(k => text.includes(k))) scores.Slytherin += 5;
    if (['wisdom', 'analyze', 'sapphire', 'truth', 'mind', 'learn', 'book', 'smart', 'wit'].some(k => text.includes(k))) scores.Ravenclaw += 5;
    if (['kindness', 'negotiate', 'earthy', 'fair', 'friend', 'loyal', 'trust', 'help', 'badger'].some(k => text.includes(k))) scores.Hufflepuff += 5;

    setHouseScores(scores);

    if (quizStep < questions.length - 1) {
      setQuizStep(prev => prev + 1);
      return <div className="text-yellow-200 mt-2"><span className="font-bold text-yellow-500">Sorting Hat:</span> "{questions[quizStep + 1]}"</div>;
    } else {
      return concludeSorting(scores);
    }
  };

  const concludeSorting = (finalScores: Record<string, number>) => {
    const maxScore = Math.max(...Object.values(finalScores));
    let topHouses = Object.keys(finalScores).filter(house => finalScores[house as keyof typeof finalScores] === maxScore);
    if (maxScore === 0) topHouses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    
    const winnerName = topHouses[Math.floor(Math.random() * topHouses.length)];
    const house = HOUSES[winnerName as keyof typeof HOUSES];

    setInteractionMode('none'); 

    return (
      <div className="mt-4 space-y-4">
        <p className="text-slate-300 italic">"Hmm... difficult. But I see exactly where you belong..."</p>
        
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`p-6 rounded-xl border border-slate-700 bg-slate-900/80 flex flex-col items-center text-center gap-4 ${house.color}`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-current opacity-20 blur-xl rounded-full"></div>
            <img src={house.badge} alt={`${winnerName} Badge`} className="w-24 h-24 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          </div>
          <div>
            <h3 className="text-3xl font-bold uppercase tracking-widest mb-1">{winnerName}!</h3>
            <p className="text-sm text-slate-400 italic">"{house.trait}"</p>
          </div>
          <div className="pt-4 border-t border-slate-700/50 w-full flex flex-col items-center gap-3">
            <a href={house.badge} download={`${winnerName}_Badge.png`} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-full transition-colors border border-slate-600 hover:border-white/50">
              <Download className="w-3 h-3" /> Claim Your Badge
            </a>
            <p className="text-xs text-slate-500 mt-2 font-mono">
              To wipe the traces of your magic, whisper: <br/> 
              <span className="text-yellow-500 font-bold border-b border-yellow-500/30 cursor-help">mischief managed</span>
            </p>
          </div>
        </motion.div>
      </div>
    );
  };

  type CommandFunction = () => React.ReactNode;

  // Base Commands
  const commands: Record<string, CommandFunction> = {
    help: () => (
      <div className="text-slate-300">
        <p className="mb-2 text-slate-400">Available commands:</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-primary-400 font-mono text-sm">
          <span>about</span>
          <span>stack</span>
          <span>projects</span>
          <span>contact</span>
          <span>clear</span>
          <span>whoami</span>
        </div>
      </div>
    ),
    about: () => (
      <div className="text-slate-300 space-y-1">
        <p className="font-bold text-white">Name: {PROFILE.name}</p>
        <p>Role: {PROFILE.title}</p>
        <p className="text-slate-400">{PROFILE.tagline}</p>
      </div>
    ),
    stack: () => (
      <div className="text-slate-300">
        {SKILLS.map((grp, i) => (
          <div key={i} className="mb-1">
            <span className="text-yellow-500 font-bold">[{grp.category}]:</span>{' '}
            <span className="text-slate-300">{grp.items.join(', ')}</span>
          </div>
        ))}
      </div>
    ),
    skills: () => commands.stack(),
    projects: () => (
      <div className="text-slate-300 space-y-3">
        {PROJECTS.map((p, i) => (
          <div key={i}>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-bold">{p.title}</span>
              <span className="text-xs text-slate-500">({p.techStack.join(', ')})</span>
            </div>
            <div className="text-slate-400 text-sm pl-0">- {p.description[0]}</div>
          </div>
        ))}
      </div>
    ),
    contact: () => (
      <div className="text-slate-300 grid grid-cols-[80px_1fr] gap-1">
        <span className="text-slate-500">Email:</span>
        <a href={`mailto:${CONTACT.email}`} className="text-primary-400 hover:underline">{CONTACT.email}</a>
        <span className="text-slate-500">GitHub:</span>
        <a href={CONTACT.github} target="_blank" rel="noreferrer" className="text-primary-400 hover:underline">github.com/purvesh</a>
        <span className="text-slate-500">LinkedIn:</span>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-primary-400 hover:underline">linkedin.com/in/purvesh</a>
      </div>
    ),
    whoami: () => <span className="text-emerald-400 font-bold">guest@portfolio-backend</span>,
    nox: () => {
      setLumosActive(false);
      return <span className="text-slate-500">🌑 *Nox!* The light extinguishes.</span>;
    },
    clear: () => null
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = inputValue.trim();
      if (!input) return;

      const newLine: TerminalLine = { id: Date.now(), type: 'input', content: input };
      setHistory(prev => [input, ...prev]);
      setHistoryIndex(-1);
      setInputValue('');

      const lowerCmd = input.toLowerCase();

      // --- 1. LUMOS (FLASH ANIMATION) ---
      if (lowerCmd === 'lumos') {
        setLines(prev => [...prev, newLine]);
        setLumosActive(true);
        setIsFlash(true); // ⚡ Trigger Flash
        setTimeout(() => setIsFlash(false), 500);
        
        setTimeout(() => {
           setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: <span className="text-yellow-200 flex items-center gap-2 animate-pulse"><Wand2 className="w-4 h-4" /> <span>*Lumos!* Your wand lights up. Hidden inscription: <span className="font-bold border-b border-yellow-500/50 cursor-help">'revelio'</span></span></span> }]);
        }, 300);
        return;
      }

      // --- 2. REVELIO (DOOR OPENING ANIMATION) ---
      if (lowerCmd === 'revelio' || lowerCmd === 'revealo') {
        setLines(prev => [...prev, newLine]);
        
        if (!lumosActive) {
            setTimeout(() => setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: <span className="text-slate-600">Too dark. Try lighting your wand first.</span> }]), 100);
            return;
        }

        // Trigger Door Sequence
        setIsMagicClosing(true); // Close doors to "load" the magic

        setTimeout(() => {
            setInteractionMode('confirm_sorting');
            setLines(prev => [...prev, { 
                id: Date.now() + 1, 
                type: 'output', 
                content: (
                    <div className="space-y-2">
                        <div className="text-slate-300 p-3 border border-purple-500/30 bg-purple-900/10 rounded-md">
                            <p className="text-purple-300 font-bold flex items-center gap-2"><Sparkles className="w-4 h-4"/> Secrets Revealed!</p>
                            <p className="text-sm text-slate-200">The "Diagon Alley" of the system opens before you...</p>
                        </div>
                        <div className="text-yellow-400 mt-4">
                            The Sorting Hat stirs from its shelf... "I sense a new student. Do you wish to be sorted into your House? (yes/no)"
                        </div>
                    </div>
                )
            }]);
            
            // Open doors to reveal result
            setTimeout(() => {
                setIsMagicClosing(false);
            }, 800);
        }, 1200);
        return;
      }

      // --- 3. INTERACTIVE MODE (Sorting Hat) ---
      if (interactionMode === 'confirm_sorting') {
        setLines(prev => [...prev, newLine]);
        if (['yes', 'y', 'sure', 'yeah'].includes(lowerCmd)) {
           setInteractionMode('quiz');
           setQuizStep(0);
           setHouseScores({ Gryffindor: 0, Slytherin: 0, Ravenclaw: 0, Hufflepuff: 0 });
           setTimeout(() => {
             setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: <div className="text-yellow-200"><span className="font-bold text-yellow-500">Sorting Hat:</span> "{questions[0]}"</div> }]);
           }, 300);
        } else {
           setInteractionMode('none');
           setTimeout(() => {
             setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: <span className="text-slate-500">The Hat goes back to sleep...</span> }]);
             // Reset
             setTimeout(() => {
                setIsMagicClosing(true);
                setTimeout(() => {
                    runBootSequence(true);
                    setTimeout(() => setIsMagicClosing(false), 1000);
                }, 1000);
             }, 1500);
           }, 300);
        }
        return;
      }

      if (interactionMode === 'quiz') {
        setLines(prev => [...prev, newLine]);
        setTimeout(() => {
          setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: processQuizAnswer(input) }]);
        }, 400);
        return;
      }

      // STANDARD COMMANDS
      setLines(prev => [...prev, newLine]);

      // --- 4. MISCHIEF MANAGED (CLOSING ANIMATION) ---
      if (lowerCmd === 'mischief managed') {
        setTimeout(() => {
            setLines(prev => [...prev, { 
                id: Date.now() + 1, 
                type: 'output', 
                content: <span className="text-purple-400 italic font-bold animate-pulse">✨ Mischief Managed.</span> 
            }]);
            
            setTimeout(() => {
                // Trigger Closing Sequence
                setIsMagicClosing(true);
                setTimeout(() => {
                    runBootSequence(true); // Wipe data
                    setTimeout(() => {
                        setIsMagicClosing(false); // Open doors to fresh terminal
                    }, 1000);
                }, 1000);
            }, 1500);
        }, 100);
        return;
      }

      if (lowerCmd === 'clear') {
        setLines([]);
        return;
      }

      setTimeout(() => {
        if (commands[lowerCmd]) {
          setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: commands[lowerCmd]() }]);
        } else {
          setLines(prev => [...prev, { id: Date.now() + 1, type: 'output', content: <span className="text-slate-400">Command not found: <span className="text-red-400">{input}</span>.</span> }]);
        }
      }, 100);

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        setHistoryIndex(prev => prev + 1);
        setInputValue(history[historyIndex + 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(prev => prev - 1);
        setInputValue(history[historyIndex - 1]);
      } else {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full max-w-lg rounded-xl bg-slate-950/90 shadow-2xl overflow-hidden border font-mono text-sm sm:text-base flex flex-col h-[400px] backdrop-blur-sm ring-1 ring-white/5 relative
        ${lumosActive ? 'border-yellow-500/30 shadow-yellow-500/10' : 'border-slate-800'} transition-all duration-700`}
      onClick={handleContainerClick}
    >
      {/* ✅ LUMOS FLASH OVERLAY */}
      <AnimatePresence>
        {isFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-white z-[60] pointer-events-none mix-blend-overlay"
          />
        )}
      </AnimatePresence>

      {/* ✅ MAGICAL DOORS OVERLAY (Animates on Revelio & Mischief Managed) */}
      <div className="absolute inset-0 pointer-events-none z-50 flex">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isMagicClosing ? "0%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-1/2 h-full bg-slate-950 border-r border-slate-800 shadow-2xl z-50 flex items-center justify-end pr-4"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMagicClosing ? "0%" : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-1/2 h-full bg-slate-950 border-l border-slate-800 shadow-2xl z-50 flex items-center pl-4"
        />
      </div>

      {/* Terminal Header */}
      <div className="bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-800 shrink-0 select-none relative z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-3 text-slate-500 text-xs font-medium">purvesh@server:~/backend</div>
      </div>

      {/* Terminal Content */}
      <div
        ref={containerRef}
        className="flex-1 p-6 overflow-y-auto cursor-text scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent relative z-10"
      >
        {lines.map((line) => (
          <div key={line.id} className="mb-2 break-words">
            {line.type === 'input' ? (
              <div className="flex items-center text-slate-200">
                <span className="text-primary-500 mr-2 font-bold">➜</span>
                <span className="text-blue-400 font-bold mr-2">~</span>
                <span>{line.content}</span>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="ml-6 mt-1 mb-3"
              >
                {line.content}
              </motion.div>
            )}
          </div>
        ))}

        {!isBooting && (
          <div className="flex items-center text-slate-200 relative">
            <span className="text-primary-500 mr-2 font-bold">➜</span>
            <span className="text-blue-400 font-bold mr-2">
              {interactionMode === 'quiz' || interactionMode === 'confirm_sorting' ? '?' : '~'}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-slate-200 placeholder-slate-600 caret-primary-500 p-0 m-0"
              autoComplete="off"
            />
          </div>
        )}
        <div className="h-4" />
      </div>
    </motion.div>
  );
};

export default Terminal;