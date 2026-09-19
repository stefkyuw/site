import React from 'react';
import { Sparkles, Compass, HeartHandshake, ArrowRight, Heart, Terminal } from 'lucide-react';
import { DiscordCard } from './DiscordCard';

interface HeroSectionProps {
  discordCopied: boolean;
  onCopyDiscord: () => void;
  onOpenMessageHelper: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  discordCopied,
  onCopyDiscord,
  onOpenMessageHelper,
}) => {
  return (
    <section id="about" className="pt-10 pb-12 sm:py-16">
      <div className="flex flex-col gap-8">
        {/* Stefky Introduction Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/25 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Welcome to my corner of the web</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span>stefky.dev</span>
          </div>
        </div>

        {/* The Exact User Statement */}
        <div className="relative">
          <div className="space-y-4 max-w-3xl">
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.15]"
            >
              Hi. I am <span className="text-amber-400 underline decoration-amber-400/40 decoration-wavy decoration-2">stefky</span>.
            </h1>

            <p
              id="hero-main-statement"
              className="text-lg sm:text-2xl text-slate-200 font-normal leading-relaxed tracking-normal"
            >
              I like exploring new hobbies and i love to help people with my hobbies and passion projects.
            </p>
          </div>
        </div>

        {/* Quick Personality Badges / Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-100">Always Exploring</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                From creative coding to DIY hardware and soundscapes.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-100">Helping Hands</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Happy to give tips, test builds, or brainstorm ideas.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#5865F2]/10 text-[#808cf7] border border-[#5865F2]/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-100">Discord: stefkyuw</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Reach out anytime for a chat, review, or collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Discord Highlight Card */}
        <DiscordCard
          discordCopied={discordCopied}
          onCopyDiscord={onCopyDiscord}
          onOpenMessageHelper={onOpenMessageHelper}
        />

        {/* Quick Action Navigation */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            id="hero-explore-hobbies-btn"
            href="#hobbies"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 transition-all shadow-md shadow-amber-500/15 active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>Explore My Hobbies</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            id="hero-get-help-btn"
            href="#help"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
          >
            <HeartHandshake className="w-4 h-4 text-orange-400" />
            <span>Get Help On Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
};
