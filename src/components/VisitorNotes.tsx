import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, Heart, Smile, ThumbsUp, Coffee } from 'lucide-react';
import { VisitorNote } from '../types';

const INITIAL_NOTES: VisitorNote[] = [
  {
    id: 'note-1',
    name: 'Kira',
    message: 'Love the creative vibe! Excited to see your hobby projects grow.',
    emoji: '✨',
    timestamp: 'Just now',
  },
  {
    id: 'note-2',
    name: 'Leo',
    message: 'Thanks for the quick frontend advice on Discord earlier, super helpful!',
    emoji: '🚀',
    timestamp: '2 hours ago',
  },
  {
    id: 'note-3',
    name: 'Aiden',
    message: 'Exploring mechanical keyboards too, definitely hitting you up on Discord!',
    emoji: '⌨️',
    timestamp: 'Yesterday',
  },
];

export const VisitorNotes: React.FC = () => {
  const [notes, setNotes] = useState<VisitorNote[]>(() => {
    try {
      const saved = localStorage.getItem('stefky_visitor_notes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // Fallback
    }
    return INITIAL_NOTES;
  });

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('✨');
  const [submitted, setSubmitted] = useState(false);

  const emojiList = ['✨', '🚀', '💡', '🎨', '🕹️', '☕', '❤️', '🔥'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newNote: VisitorNote = {
      id: `note-${Date.now()}`,
      name: name.trim() || 'Friendly Explorer',
      message: message.trim(),
      emoji: selectedEmoji,
      timestamp: 'Just now',
    };

    const updated = [newNote, ...notes];
    setNotes(updated);
    try {
      localStorage.setItem('stefky_visitor_notes', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }

    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="guestbook" className="py-12 border-t border-slate-800/80">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-2">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Visitor Guestbook</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Say Hello to Stefky
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Leave a quick greeting or share what you're working on.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Form */}
          <form
            id="guestbook-form"
            onSubmit={handleSubmit}
            className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg"
          >
            <h3 className="text-sm font-bold text-slate-200">
              Leave a note:
            </h3>

            <div>
              <label htmlFor="note-author" className="block text-xs font-medium text-slate-300 mb-1">
                Your Name / Discord Handle:
              </label>
              <input
                id="note-author"
                type="text"
                placeholder="e.g. Alex"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/80"
              />
            </div>

            <div>
              <label htmlFor="note-body" className="block text-xs font-medium text-slate-300 mb-1">
                Message:
              </label>
              <textarea
                id="note-body"
                required
                rows={2}
                placeholder="Drop a quick friendly message or question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/80 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Pick a reaction emoji:
              </label>
              <div className="flex items-center gap-1.5 flex-wrap">
                {emojiList.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center transition-all ${
                      selectedEmoji === emoji
                        ? 'bg-amber-400/20 border border-amber-400/60 scale-110'
                        : 'bg-slate-950 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <button
              id="submit-note-btn"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all shadow-md active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Greeting</span>
            </button>

            {submitted && (
              <p className="text-xs text-emerald-400 text-center font-medium animate-fade-in">
                ✨ Thanks for dropping by! Note added.
              </p>
            )}
          </form>

          {/* Notes list */}
          <div className="lg:col-span-7 space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                id={`note-item-${note.id}`}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-lg shrink-0 border border-slate-700/60 shadow-inner">
                  {note.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-200 truncate">
                      {note.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">
                      {note.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed break-words">
                    {note.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
