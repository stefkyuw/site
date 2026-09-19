import React from 'react';
import { Copy, Check, Heart, Sparkles, MessageCircle } from 'lucide-react';

interface FooterProps {
  discordCopied: boolean;
  onCopyDiscord: () => void;
}

export const Footer: React.FC<FooterProps> = ({ discordCopied, onCopyDiscord }) => {
  return (
    <footer id="site-footer" className="mt-16 border-t border-slate-800/80 py-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-xs font-display">
            s
          </div>
          <span className="font-semibold text-slate-300">stefky</span>
          <span className="text-slate-600">•</span>
          <span>Hobbies & Passion Projects</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400">Discord:</span>
          <button
            type="button"
            id="footer-discord-copy"
            onClick={onCopyDiscord}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-amber-300 font-mono text-xs transition-colors"
          >
            <span>stefkyuw</span>
            {discordCopied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-slate-500" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};
