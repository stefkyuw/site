import React, { useState } from 'react';
import { X, Copy, Check, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';

interface SayHiModalProps {
  isOpen: boolean;
  onClose: () => void;
  discordCopied: boolean;
  onCopyDiscord: () => void;
}

export const SayHiModal: React.FC<SayHiModalProps> = ({
  isOpen,
  onClose,
  discordCopied,
  onCopyDiscord,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        id="say-hi-dialog"
        className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700/80 p-6 shadow-2xl space-y-5"
      >
        {/* Close Button */}
        <button
          type="button"
          id="close-say-hi-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center border border-amber-400/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-display text-white">
              Connect with Stefky
            </h3>
            <p className="text-xs text-slate-400">
              Direct communication & project collaboration
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Discord Username
          </span>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-base font-bold text-white tracking-wide">
              stefkyuw
            </span>
            <button
              type="button"
              id="modal-copy-discord-btn"
              onClick={onCopyDiscord}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                discordCopied
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-[#5865F2] hover:bg-[#4752C4] text-white'
              }`}
            >
              {discordCopied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-100">How to reach out:</strong> Open Discord, head to <span className="text-amber-300 font-mono">Add Friend</span>, type <code className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 font-mono">stefkyuw</code>, and send a message about what you're working on or want to talk about!
          </p>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
