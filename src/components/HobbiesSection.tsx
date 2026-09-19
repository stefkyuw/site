import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Gamepad2, 
  Headphones, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  HeartHandshake, 
  Filter, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { HOBBIES_DATA } from '../data/hobbies';
import { HobbyItem } from '../types';

interface HobbiesSectionProps {
  onSelectHobbyForHelp: (hobbyTitle: string) => void;
}

export const HobbiesSection: React.FC<HobbiesSectionProps> = ({
  onSelectHobbyForHelp,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedHobby, setSelectedHobby] = useState<HobbyItem | null>(null);

  const categories = ['All', 'Tech', 'Creative', 'Gaming', 'Makers', 'Life'];

  const filteredHobbies = activeCategory === 'All'
    ? HOBBIES_DATA
    : HOBBIES_DATA.filter((item) => item.category === activeCategory);

  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-emerald-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-orange-400" />;
    }
  };

  return (
    <section id="hobbies" className="py-12 border-t border-slate-800/80">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-amber-300 border border-slate-700 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Hobbies & Passion Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              What I Love Exploring & Doing
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              I love picking up new crafts, exploring ideas, and using what I learn to help others with their own projects.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`hobby-filter-${cat.toLowerCase()}`}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHobbies.map((hobby) => (
            <div
              key={hobby.id}
              id={`hobby-card-${hobby.id}`}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800/50 hover:border-slate-700/90 transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {hobby.status}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-bold text-slate-100 font-display group-hover:text-amber-300 transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {hobby.description}
                </p>

                {/* How I can help callout box */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/90">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 mb-1">
                    <HeartHandshake className="w-3.5 h-3.5" />
                    <span>How I can help you:</span>
                  </div>
                  <p className="text-[12px] text-slate-300 leading-normal">
                    {hobby.howICanHelp}
                  </p>
                </div>
              </div>

              {/* Bottom: Tags & Action */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {hobby.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/60 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  id={`ask-help-${hobby.id}`}
                  onClick={() => onSelectHobbyForHelp(hobby.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors p-1"
                >
                  <span>Ask Stefky</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
