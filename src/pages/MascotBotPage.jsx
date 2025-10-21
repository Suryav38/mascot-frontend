// src/pages/MascotBotPage.jsx
import React from 'react';
import { Sparkles, Zap, Save } from 'lucide-react';
import { useAppStore } from '../app/store';
import { platforms } from '../mocks/reddit';

export const MascotBotPage = () => {
  const {
    botPersonality,
    setBotPersonality,
    autoReplyEnabled,
    setAutoReplyEnabled,
    useBrandKnowledge,
    setUseBrandKnowledge
  } = useAppStore();

  const personalityTraits = [
    { key: 'sassiness', label: 'Sassiness', emoji: '😏', color: 'pink' },
    { key: 'comedy', label: 'Comedy', emoji: '😂', color: 'yellow' },
    { key: 'professionalism', label: 'Professionalism', emoji: '💼', color: 'blue' },
    { key: 'enthusiasm', label: 'Enthusiasm', emoji: '🎉', color: 'orange' },
    { key: 'empathy', label: 'Empathy', emoji: '❤️', color: 'red' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
            Mascot Bot Configuration
          </h2>
          <p className="text-gray-400">Customize your AI's personality and auto-reply settings</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
          <Save size={18} /> Save Changes
        </button>
      </div>

      {/* Bot Personality */}
      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-purple-400" size={28} />
          <div>
            <h3 className="text-xl font-bold text-white">Bot Personality</h3>
            <p className="text-sm text-gray-400">Adjust how your AI mascot responds</p>
          </div>
        </div>

        <div className="space-y-6">
          {personalityTraits.map((trait) => (
            <div key={trait.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{trait.emoji}</span>
                  <span className="text-white font-semibold">{trait.label}</span>
                </div>
                <span className="text-white font-bold text-lg">{botPersonality[trait.key]}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={botPersonality[trait.key]}
                onChange={(e) => setBotPersonality(trait.key, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${
                    (botPersonality[trait.key] / 5) * 100
                  }%, rgb(55, 65, 81) ${(botPersonality[trait.key] / 5) * 100}%, rgb(55, 65, 81) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Reply Settings */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="text-purple-400" size={28} />
          <div>
            <h3 className="text-xl font-bold text-white">Auto-Reply Settings</h3>
            <p className="text-sm text-gray-400">Configure automated responses per platform</p>
          </div>
        </div>

        {/* Brand Knowledge Toggle */}
        <div className="mb-6 flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="text-purple-400" />
            <div>
              <div className="text-white font-semibold">Use Brand Knowledge</div>
              <div className="text-sm text-gray-400">AI will reference your brand knowledge when replying</div>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={useBrandKnowledge}
              onChange={(e) => setUseBrandKnowledge(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>

        {/* Platform Toggles */}
        <div className="mb-2 text-gray-300 font-semibold">Enable Auto-Reply Per Platform</div>
        <div className="grid grid-cols-2 gap-3">
          {platforms.map((p) => (
            <label
              key={p.id}
              className={`flex items-center justify-between bg-white/5 rounded-lg p-4 transition-all ${
                p.available ? 'hover:bg-white/10 cursor-pointer' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${p.available ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                <span className="text-white font-medium">{p.name}</span>
              </div>
              <input
                type="checkbox"
                className="w-4 h-4 accent-purple-600"
                disabled={!p.available}
                checked={!!autoReplyEnabled[p.id]}
                onChange={(e) => setAutoReplyEnabled(p.id, e.target.checked)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};