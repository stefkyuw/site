import React, { useState } from 'react';
import { Sparkles, Copy, Check, MessageSquare, Compass, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  discordCopied: boolean;
  onCopyDiscord: () => void;
  onOpenMessageModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  discordCopied,
  onCopyDiscord,
  onOpenMessageModal,
}) => {
  return (
    <header
      id="site-navbar"
      className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0f1117]/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          id="nav-brand-link"
          href="#top"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            s
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-slate-100 text-lg tracking-tight group-hover:text-amber-300 transition-colors">
              stefky
            </span>
            <span className="text-[11px] font-medium text-amber-400/90 flex items-center gap-1.5 -mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              open for collaboration
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
          <a
            id="nav-link-about"
            href="#about"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            About
          </a>
          <a
            id="nav-link-hobbies"
            href="#hobbies"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            Hobbies & Passions
          </a>
          <a
            id="nav-link-help"
            href="#help"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
          >
            <HeartHandshake className="w-4 h-4 text-orange-400" />
            Get Help on a Project
          </a>
          <a
            id="nav-link-notes"
            href="#guestbook"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Guestbook
          </a>
        </nav>

        {/* Quick Discord CTA */}
        <div className="flex items-center gap-2">
          <button
            id="nav-discord-copy-btn"
            onClick={onCopyDiscord}
            type="button"
            className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-sm active:scale-95"
            title="Copy Discord Username"
          >
            <span className="w-2 h-2 rounded-full bg-[#5865F2]" />
            <span className="font-mono text-slate-300">stefkyuw</span>
            {discordCopied ? (
              <span className="flex items-center gap-1 text-emerald-400 text-xs">
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>

          <button
            id="nav-say-hi-btn"
            onClick={onOpenMessageModal}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 transition-all shadow-sm shadow-amber-500/20 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Say Hi</span>
          </button>
        </div>
      </div>
    </header>
  );
};
