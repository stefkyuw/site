import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Lightbulb, 
  Compass, 
  MessageCircle,
  Code,
  Palette,
  Wrench
} from 'lucide-react';

interface PassionProjectHelperProps {
  prefilledTopic?: string;
  onClearPrefilledTopic?: () => void;
  onCopyDiscord: () => void;
}

export const PassionProjectHelper: React.FC<PassionProjectHelperProps> = ({
  prefilledTopic = '',
  onClearPrefilledTopic,
  onCopyDiscord,
}) => {
  const [visitorName, setVisitorName] = useState('');
  const [projectType, setProjectType] = useState('Web & Coding');
  const [projectDescription, setProjectDescription] = useState('');
  const [helpKind, setHelpKind] = useState('Feedback & Brainstorming');
  const [copiedDraft, setCopiedDraft] = useState(false);

  useEffect(() => {
    if (prefilledTopic) {
      setProjectType(prefilledTopic);
    }
  }, [prefilledTopic]);

  const presetTypes = [
    'Web & Coding',
    'Design & UI/UX',
    'Gaming & Modding',
    'DIY & Hardware',
    'Creative Writing & Notes',
    'General Chat / New Hobby',
  ];

  const helpKinds = [
    'Feedback & Brainstorming',
    'Debugging / Problem Solving',
    'Testing / Try it out',
    'Accountability & Motivation',
  ];

  // Generated Discord message text
  const generateMessage = () => {
    const fromStr = visitorName.trim() ? `I'm ${visitorName.trim()}` : "Hey there";
    const descStr = projectDescription.trim()
      ? `\nI'm currently working on: "${projectDescription.trim()}"`
      : '';

    return `Hey stefky! ${fromStr}. I visited your website and saw you love helping people with hobbies and passion projects! I'm exploring [${projectType}] and was wondering if you could give me a hand with [${helpKind}].${descStr}\n\nLooking forward to chatting!`;
  };

  const currentMessage = generateMessage();

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(currentMessage);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <section id="help" className="py-12 border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Context & Stefky's Promise */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/25">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Collaboration & Assistance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Need Help With a Hobby or Passion Project?
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            I genuinely love helping people turn ideas into reality, whether you're trying out a new craft, building a website, polishing a design, or just looking for honest feedback.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">No judgment, just curiosity</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Beginners and experienced makers are equally welcome.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#5865F2]/10 text-[#808cf7]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Direct on Discord</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Send a DM to <span className="font-mono text-amber-300">stefkyuw</span> with your question or idea.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Generator */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-100 font-display">
                Quick Discord Message Generator
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Draft a message, copy it, and paste it straight to <span className="text-amber-300 font-mono">stefkyuw</span>
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 bg-slate-800 rounded text-slate-400">
              Interactive
            </span>
          </div>

          <div className="space-y-4 pt-4">
            {/* Name input */}
            <div>
              <label htmlFor="input-visitor-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Your Name / Nickname (optional):
              </label>
              <input
                id="input-visitor-name"
                type="text"
                placeholder="e.g. Alex, Sam, or anonymous"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/80 transition-all"
              />
            </div>

            {/* Category selection */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                What hobby or topic is your project about?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {presetTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-2.5 py-2 rounded-lg text-xs font-medium text-left truncate transition-all ${
                      projectType === type
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 font-semibold'
                        : 'bg-slate-950/60 hover:bg-slate-800/80 text-slate-400 border border-slate-800/80'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Kind of help */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                What kind of help are you looking for?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {helpKinds.map((kind) => (
                  <button
                    key={kind}
                    type="button"
                    onClick={() => setHelpKind(kind)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                      helpKind === kind
                        ? 'bg-orange-400/20 text-orange-300 border border-orange-400/40 font-semibold'
                        : 'bg-slate-950/60 hover:bg-slate-800/80 text-slate-400 border border-slate-800/80'
                    }`}
                  >
                    {kind}
                  </button>
                ))}
              </div>
            </div>

            {/* Project description textarea */}
            <div>
              <label htmlFor="input-project-desc" className="block text-xs font-medium text-slate-300 mb-1.5">
                Brief notes about what you're making (optional):
              </label>
              <textarea
                id="input-project-desc"
                rows={2}
                placeholder="e.g. Building a cozy retro game or making a sleek portfolio layout..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/80 transition-all resize-none"
              />
            </div>

            {/* Generated Message Preview */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed relative group">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1 font-sans font-bold">
                Preview of your Discord message:
              </span>
              {currentMessage}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <button
                id="copy-generated-discord-msg-btn"
                type="button"
                onClick={handleCopyMessage}
                className={`w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                  copiedDraft
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-amber-500/10'
                }`}
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Copied Message to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Message for Stefky</span>
                  </>
                )}
              </button>

              <button
                id="helper-copy-username-btn"
                type="button"
                onClick={onCopyDiscord}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Copy Discord (stefkyuw)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
