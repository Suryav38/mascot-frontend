import React from 'react';
import { Save, Brain, Sparkles, TrendingUp, MessageSquare, Settings } from 'lucide-react';
import { useKnowledge } from './useKnowledge';
import { knowledgeSections } from '../../mocks/brand';
import { GlassCard } from '../../components/charts/Card';

export const KnowledgePage = () => {
  const { brandKnowledge, updateKnowledge, saveKnowledge } = useKnowledge();

  const iconMap = {
    Brain, Sparkles, TrendingUp, MessageSquare, Settings
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
            Brand Knowledge Base
          </h2>
          <p className="text-gray-400">Train your AI mascot with your brand's unique voice</p>
        </div>
        <button 
          onClick={saveKnowledge}
          className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
          <span className="relative flex items-center gap-2">
            <Save size={18} />
            Save Changes
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {knowledgeSections.map((section, idx) => {
          const Icon = iconMap[section.icon];
          const [bgClass, borderClass, textClass] = section.colorClasses.split(' ');
          
          return (
            <GlassCard
              key={section.field}
              className="p-6 animate-slide-up hover:scale-[1.01] transition-transform"
              delay={`${idx * 50}ms`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl ${bgClass} border ${borderClass}`}>
                  <Icon className={textClass} size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">{section.desc}</p>
              <textarea 
                className={`w-full bg-white/5 text-gray-100 p-4 rounded-xl border ${
                  section.alert ? 'border-red-500/30 focus:border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                } backdrop-blur-xl focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all placeholder-gray-500 ${
                  section.mono ? 'font-mono text-sm' : ''
                }`}
                rows={section.rows}
                value={brandKnowledge[section.field]}
                onChange={(e) => updateKnowledge(section.field, e.target.value)}
                placeholder={`Enter ${section.title.toLowerCase()}...`}
              />
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
};