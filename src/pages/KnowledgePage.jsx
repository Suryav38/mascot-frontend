// src/pages/KnowledgePage.jsx
import React from 'react';
import { Brain, Save } from 'lucide-react';
import { useAppStore } from '../app/store';

export const KnowledgePage = () => {
  const { brandKnowledge, setBrandKnowledge } = useAppStore();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
            Brand Knowledge Base
          </h2>
          <p className="text-gray-400">Train your AI masbot with your brand's unique voice</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all">
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className="glass-card p-6 space-y-4">
        <div>
          <div className="mb-2 text-gray-300 font-semibold">Brand Voice & Tone</div>
          <textarea
            className="w-full bg-white/5 text-gray-100 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
            rows={4}
            value={brandKnowledge.brandVoice}
            onChange={(e) => setBrandKnowledge({ ...brandKnowledge, brandVoice: e.target.value })}
          />
        </div>

        <div>
          <div className="mb-2 text-gray-300 font-semibold">Product Information</div>
          <textarea
            className="w-full bg-white/5 text-gray-100 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
            rows={3}
            value={brandKnowledge.productInfo}
            onChange={(e) => setBrandKnowledge({ ...brandKnowledge, productInfo: e.target.value })}
          />
        </div>

        <div>
          <div className="mb-2 text-gray-300 font-semibold">Core Values</div>
          <textarea
            className="w-full bg-white/5 text-gray-100 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
            rows={2}
            value={brandKnowledge.coreValues}
            onChange={(e) => setBrandKnowledge({ ...brandKnowledge, coreValues: e.target.value })}
          />
        </div>

        <div>
          <div className="mb-2 text-gray-300 font-semibold">Common Responses / FAQs</div>
          <textarea
            className="w-full bg-white/5 text-gray-100 p-4 rounded-xl border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
            rows={5}
            value={brandKnowledge.commonResponses}
            onChange={(e) => setBrandKnowledge({ ...brandKnowledge, commonResponses: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};