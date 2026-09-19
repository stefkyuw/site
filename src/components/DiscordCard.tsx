import React, { useState } from 'react';
import { Copy, Check, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface DiscordCardProps {
  discordCopied: boolean;
  onCopyDiscord: () => void;
  onOpenMessageHelper: () => void;
}

export const DiscordCard: React.FC<DiscordCardProps> = ({
  discordCopied,
  onCopyDiscord,
  onOpenMessageHelper,
}) => {
  return (
    <div
      id="discord-feature-card"
      className="relative overflow-hidden rounded-2xl border border-[#5865F2]/30 bg-gradient-to-br from-slate-900/90 via-[#181a29]/90 to-slate-900/90 p-5 sm:p-6 shadow-xl shadow-[#5865F2]/5"
    >
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#5865F2]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Side: Avatar and Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* Discord Avatar */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#5865F2] to-[#808cf7] p-0.5 shadow-lg shadow-[#5865F2]/20">
              <div className="w-full h-full rounded-[14px] bg-[#23272a] flex items-center justify-center overflow-hidden">
                <span className="font-display font-black text-2xl text-amber-300">
                  S
                </span>
              </div>
            </div>
            {/* Online Badge */}
            <span
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center"
              title="Online & Ready to chat"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5865F2]">
                Discord Contact
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                Active
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <h3 className="text-xl font-bold font-mono tracking-tight text-white">
                stefkyuw
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Feel free to add or message me anytime about your projects!
            </p>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-2.5 sm:self-center">
          <button
            id="discord-copy-btn-large"
            type="button"
            onClick={onCopyDiscord}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 ${
              discordCopied
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-[#5865F2] hover:bg-[#4752C4] text-white hover:shadow-[#5865F2]/25'
            }`}
          >
            {discordCopied ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Copied: stefkyuw</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Username</span>
              </>
            )}
          </button>

          <button
            id="discord-prep-msg-btn"
            type="button"
            onClick={onOpenMessageHelper}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
            title="Draft a project message to stefky"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Message Starter</span>
            <span className="sm:hidden">Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};
