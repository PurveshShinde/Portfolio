import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROFILE, SKILLS, PROJECTS, CONTACT } from '../constants';
import { Wand2, Sparkles } from 'lucide-react';

interface TerminalLine {
  id: number;
  type: 'input' | 'output';
  content: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  
  // Easter Egg State: Harry Potter Theme
  const [lumosActive, setLumosActive] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bootStartedRef = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // 1. Focus Management
  useEffect(() => {
    if (!isBooting) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isBooting]);

  const handleContainerClick = () => {
    if (!isBooting && inputRef.current) {
      if (window.getSelection()?.toString() === '') {
        inputRef.current.focus();
      }
    }
  };

  // 3. Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, isBooting]);

  // 4. Boot Sequence
  useEffect(() => {
    if (bootStartedRef.current) return;
    bootStartedRef.current = true;
    
    // Developer Hint for the Easter Egg
    console.log("%c⚡ Mischief Managed? Try 'lumos' to light the way.", "color: #fcd34d; font-size: 14px; font-weight: bold; background: #1e293b; padding: 4px; border-radius: 4px;");

    const bootLines = [
      "Initializing JVM...",
      "Loading Spring Context...",
      "Connecting to Database...",
      `Welcome, ${PROFILE.name}. Backend System ready.`
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

        if (index === bootLines.length - 1) {
          setIsBooting(false);
        }
      }, currentDelay);

      timeoutsRef.current.push(timeoutId);
    });

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const commands: Record<string, () => React.ReactNode> = {
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
          {/* Hidden commands are not listed here */}
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
    skills: () => commands.stack(), // alias
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
    
    // HARRY POTTER EASTER EGGS
    lumos: () => {
      setLumosActive(true);
      return (
        <span className="text-yellow-200 flex items-center gap-2 animate-pulse">
           <Wand2 className="w-4 h-4" /> 
           <span>*Lumos!* Your wand lights up the terminal. You notice a hidden inscription: <span className="font-bold border-b border-yellow-500/50 cursor-help">'revelio'</span></span>
        </span>
      );
    },

    nox: () => {
      setLumosActive(false);
      return <span className="text-slate-500">🌑 *Nox!* The light extinguishes. Darkness returns.</span>;
    },

    revelio: () => {
      if (!lumosActive) {
        return <span className="text-slate-600">It's too dark to reveal anything. Try lighting your wand first.</span>;
      }
      return (
        <div className="text-slate-300 space-y-2 my-2 p-3 border border-purple-500/30 bg-purple-900/10 rounded-md">
          <p className="text-purple-300 font-bold flex items-center gap-2">
             <Sparkles className="w-4 h-4" /> Secrets Revealed!
          </p>
          <p className="text-sm text-slate-200">
            <span className="text-red-400 font-bold">Logic Curse Found:</span> This terminal accepts commands without rate-limiting.
          </p>
          <p className="text-slate-400 italic text-sm mt-2 border-l-2 border-purple-500/50 pl-3">
            "I explore the Dark Arts (Security) for fun, but I build defenses to be <span className="text-white font-bold">secure by design</span>."
          </p>
        </div>
      );
    },
    
    // Alias for the user request "Revealo"
    revealo: () => commands.revelio(),

    clear: () => null
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = inputValue.trim();
      const newLine: TerminalLine = { id: Date.now(), type: 'input', content: cmd };
      let responseLines: TerminalLine[] = [newLine];

      if (cmd) {
        setHistory(prev => [cmd, ...prev]);
        setHistoryIndex(-1);
      }

      const lowerCmd = cmd.toLowerCase();

      if (lowerCmd === 'clear') {
        setLines([]);
        setInputValue('');
        return;
      }

      if (cmd) {
        if (commands[lowerCmd]) {
          responseLines.push({
            id: Date.now() + 1,
            type: 'output',
            content: commands[lowerCmd]()
          });
        } else {
          responseLines.push({
            id: Date.now() + 1,
            type: 'output',
            content: <span className="text-slate-400">Command not found: <span className="text-red-400">{cmd}</span>. Type <span className="text-yellow-400">'help'</span> for available commands.</span>
          });
        }
      }

      setLines(prev => [...prev, ...responseLines]);
      setInputValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(history[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const hiddenCmds = ['lumos', 'revelio', 'revealo', 'nox'];
      const availableCmds = Object.keys(commands).filter(c => {
         // Hide magical commands from tab completion unless already discovered/active? 
         // For now, keep them hidden to maintain the easter egg status.
         return !hiddenCmds.includes(c);
      });
      
      const match = availableCmds.find(c => c.startsWith(inputValue.toLowerCase()));
      if (match) {
        setInputValue(match);
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg rounded-xl bg-slate-950/90 shadow-2xl overflow-hidden border border-slate-800 font-mono text-sm sm:text-base flex flex-col h-[400px] backdrop-blur-sm ring-1 ring-white/5"
      onClick={handleContainerClick}
    >
      {/* Terminal Header */}
      <div className="bg-slate-900/50 px-4 py-3 flex items-center gap-2 border-b border-slate-800 shrink-0 select-none">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-3 text-slate-500 text-xs font-medium">purvesh@server:~/backend</div>
      </div>

      {/* Terminal Output Area */}
      <div 
        ref={containerRef}
        className="flex-1 p-6 overflow-y-auto cursor-text scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
        role="log" 
        aria-live="polite"
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

        {/* Active Input Line */}
        {!isBooting && (
          <div className="flex items-center text-slate-200 relative">
            <span className="text-primary-500 mr-2 font-bold">➜</span>
            <span className="text-blue-400 font-bold mr-2">~</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-slate-200 placeholder-slate-600 caret-primary-500 p-0 m-0"
              autoComplete="off"
              spellCheck="false"
              autoCorrect="off"
              autoCapitalize="off"
              aria-label="Terminal Input"
            />
          </div>
        )}
        
        {/* Spacer for bottom scrolling */}
        <div className="h-4" />
      </div>
    </motion.div>
  );
};

export default Terminal;