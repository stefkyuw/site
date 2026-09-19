/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HobbiesSection } from './components/HobbiesSection';
import { PassionProjectHelper } from './components/PassionProjectHelper';
import { VisitorNotes } from './components/VisitorNotes';
import { Footer } from './components/Footer';
import { SayHiModal } from './components/SayHiModal';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [discordCopied, setDiscordCopied] = useState(false);
  const [isSayHiModalOpen, setIsSayHiModalOpen] = useState(false);
  const [prefilledTopic, setPrefilledTopic] = useState<string>('');

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText('stefkyuw');
      setDiscordCopied(true);
      setTimeout(() => {
        setDiscordCopied(false);
      }, 2500);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  };

  const handleSelectHobbyForHelp = (hobbyTitle: string) => {
    setPrefilledTopic(hobbyTitle);
    const element = document.getElementById('help');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#0f1117] text-slate-100 flex flex-col selection:bg-amber-400/30 selection:text-amber-200">
      {/* Toast Notification */}
      {discordCopied && (
        <div
          id="copy-toast-notification"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-500/30 animate-bounce"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Discord username copied: stefkyuw</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        discordCopied={discordCopied}
        onCopyDiscord={handleCopyDiscord}
        onOpenMessageModal={() => setIsSayHiModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        <HeroSection
          discordCopied={discordCopied}
          onCopyDiscord={handleCopyDiscord}
          onOpenMessageHelper={() => {
            const el = document.getElementById('help');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <HobbiesSection
          onSelectHobbyForHelp={handleSelectHobbyForHelp}
        />

        <PassionProjectHelper
          prefilledTopic={prefilledTopic}
          onClearPrefilledTopic={() => setPrefilledTopic('')}
          onCopyDiscord={handleCopyDiscord}
        />

        <VisitorNotes />
      </main>

      {/* Footer */}
      <Footer
        discordCopied={discordCopied}
        onCopyDiscord={handleCopyDiscord}
      />

      {/* Direct Connect Modal */}
      <SayHiModal
        isOpen={isSayHiModalOpen}
        onClose={() => setIsSayHiModalOpen(false)}
        discordCopied={discordCopied}
        onCopyDiscord={handleCopyDiscord}
      />
    </div>
  );
}
