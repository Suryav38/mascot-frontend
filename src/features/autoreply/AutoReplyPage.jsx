import React from 'react';
import { Save, Brain, Sparkles } from 'lucide-react';
import { useAutoReply } from './useAutoReply';
import { platforms } from '../../mocks/brand';

export const AutoReplyPage = () => {
  const { 
    autoReplyEnabled, 
    togglePlatform, 
    botPersonality, 
    updatePersonality,
    useBrandKnowledge,
    setUseBrandKnowledge,
    saveConfiguration 
  } = useAutoReply();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
          Auto-Reply Configuration
        </h2>
        <p className="text-gray-400">Configure how your AI mascot responds across platforms</p>
      </div>

      {/* Platform Toggles */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl animate-slide-up">
        <h3 className="text-xl font-semibold text-white mb-4">Enable by Platform</h3>
        <div className="grid grid-cols-2 gap-4">
          {platforms.map((platform, idx) => (
            <div 
              key={platform.id}
              className={`relative p-5 rounded-xl border-2 transition-all ${
                !platform.available 
                  ? 'opacity-50 cursor-not-allowed bg-white/5 border-white/10' 
                  : autoReplyEnabled[platform.id]
                  ? 'bg-green-500/10 border-green-500/50 shadow-lg shadow-green-500/20'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              } group`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {autoReplyEnabled[platform.id] && platform.available && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl"></div>
              )}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">{platform.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{platform.name}</div>
                    {!platform.available && (
                      <div className="text-xs text-gray-500">Coming Soon</div>
                    )}
                  </div>
                </div>
                <label className="relative inline-block w-14 h-7 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={autoReplyEnabled[platform.id]}
                    onChange={() => togglePlatform(platform.id)}
                    disabled={!platform.available}
                  />
                  <div className={`w-14 h-7 rounded-full transition-all ${
                    autoReplyEnabled[platform.id] && platform.available
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50'
                      : 'bg-white/10'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full transition-all shadow-lg ${
                      autoReplyEnabled[platform.id] ? 'translate-x-7' : ''
                    }`}></div>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Knowledge Toggle */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
              <Brain className="text-blue-400" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Use Brand Knowledge</h3>
              <p className="text-sm text-gray-400">Enable AI to reference your brand knowledge when replying</p>
            </div>
          </div>
          <label className="relative inline-block w-16 h-8 cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={useBrandKnowledge}
              onChange={(e) => setUseBrandKnowledge(e.target.checked)}
            />
            <div className={`w-16 h-8 rounded-full transition-all ${
              useBrandKnowledge 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50' 
                : 'bg-white/10'
            }`}>
              <div className={`absolute top-0.5 left-0.5 bg-white w-7 h-7 rounded-full transition-all shadow-lg ${
                useBrandKnowledge ? 'translate-x-8' : ''
              }`}></div>
            </div>
          </label>
        </div>
      </div>

      {/* Bot Personality Sliders */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
            <Sparkles className="text-purple-400 animate-pulse" size={28} />
          </div>
          <h3 className="text-xl font-semibold text-white">Personality Traits (5 Characters)</h3>
        </div>
        <p className="text-sm text-gray-400 mb-6">Customize how your AI mascot communicates</p>
        
        <div className="space-y-6">
          {Object.entries(botPersonality).map(([trait, value], idx) => (
            <div key={trait} className="group">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-300 capitalize">{trait}</label>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {value}/5
                </span>
              </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={value}
                  onChange={(e) => updatePersonality(trait, e.target.value)}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${(value - 1) * 25}%, rgba(255,255,255,0.1) ${(value - 1) * 25}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Response Style */}
        <div className="mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
          <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
            <Sparkles size={16} />
            Preview Response Style:
          </h4>
          <p className="text-sm text-gray-300 italic leading-relaxed">
            {botPersonality.sassiness >= 4 && "With a touch of wit, "}
            {botPersonality.comedy >= 4 && "a dash of humor, "}
            {botPersonality.professionalism >= 4 && "maintaining professionalism, "}
            {botPersonality.enthusiasm >= 4 && "with genuine excitement, "}
            {botPersonality.empathy >= 4 && "and heartfelt empathy, "}
            your mascot will engage authentically with your audience.
          </p>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end animate-slide-up" style={{ animationDelay: '400ms' }}>
        <button 
          onClick={saveConfiguration}
          className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
          <span className="relative flex items-center gap-2">
            <Save size={18} />
            Save Configuration
          </span>
        </button>
      </div>

      {/* CSS for range slider */}
      <style>{`
        input[type="range"].slider {
          -webkit-appearance: none;
          appearance: none;
        }
        
        input[type="range"].slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }
        
        input[type="range"].slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
        
        input[type="range"].slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }
        
        input[type="range"].slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </div>
  );
};