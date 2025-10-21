// src/app/store.js
import { create } from 'zustand';

// Default brand knowledge (defined here to avoid import issues)
const defaultBrandKnowledge = {
  brandVoice: 'We are friendly, professional, and innovative. We believe in making technology accessible to everyone.',
  productInfo: 'Our AI-powered social media management tool helps brands engage authentically with their audience.',
  coreValues: 'Innovation, Authenticity, Customer Success, Transparency',
  targetAudience: 'Tech-savvy marketers, startups, and growing businesses looking to scale their social media presence.',
  commonResponses: 'Q: What platforms do you support?\nA: We support Reddit, Twitter, Instagram, and Facebook.\n\nQ: Is there a free trial?\nA: Yes, we offer a 14-day free trial.'
};

export const useAppStore = create((set) => ({
  // UI State
  isVisible: false,
  
  // Brand Knowledge
  brandKnowledge: defaultBrandKnowledge,
  
  // Auto-Reply Settings
  autoReplyEnabled: {
    reddit: true,
    instagram: false,
    twitter: false,
    facebook: false
  },
  
  botPersonality: {
    sassiness: 3,
    comedy: 4,
    professionalism: 5,
    enthusiasm: 4,
    empathy: 5
  },
  
  useBrandKnowledge: true,
  
  
  setBrandKnowledge: (knowledge) => set({ brandKnowledge: knowledge }),
  
  setAutoReplyEnabled: (platform, enabled) => 
    set((state) => ({
      autoReplyEnabled: {
        ...state.autoReplyEnabled,
        [platform]: enabled
      }
    })),
  
  setBotPersonality: (trait, value) =>
    set((state) => ({
      botPersonality: {
        ...state.botPersonality,
        [trait]: value
      }
    })),
  
  setUseBrandKnowledge: (use) => set({ useBrandKnowledge: use }),
}));