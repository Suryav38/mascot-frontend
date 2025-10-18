// src/utils/designSystem.js

/**
 * Centralized Design System
 * Change styles here, applies everywhere!
 */

// Glass Card Styles
export const glassCard = "bg-white/5 backdrop-blur-glass border border-white/10 rounded-card shadow-card hover:shadow-card-hover transition-all";

export const glassCardInteractive = `${glassCard} cursor-pointer hover:border-white/20 hover:bg-white/10`;

// Stat Card Variants
export const statCardColors = {
  orange: {
    gradient: 'from-orange-500 to-red-600',
    bg: 'bg-orange-500/20',
    text: 'text-orange-400',
    glow: 'shadow-glow-orange'
  },
  green: {
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-500/20',
    text: 'text-green-400',
    glow: 'shadow-glow-green'
  },
  blue: {
    gradient: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-500/20',
    text: 'text-blue-400',
    glow: 'shadow-glow-blue'
  },
  purple: {
    gradient: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-500/20',
    text: 'text-purple-400',
    glow: 'shadow-glow-purple'
  },
  yellow: {
    gradient: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-500/20',
    text: 'text-yellow-400',
    glow: 'shadow-glow-orange'
  }
};

// Button Styles
export const buttonPrimary = "px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-button hover:shadow-glow-blue hover:scale-105 active:scale-95 transition-all duration-300";

export const buttonSecondary = "px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-button hover:bg-white/20 hover:scale-105 active:scale-95 transition-all";

export const buttonDanger = "px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-button hover:shadow-glow-orange hover:scale-105 active:scale-95 transition-all";

// Text Styles
export const headingGradient = "font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent";

export const textMuted = "text-gray-400";
export const textBody = "text-gray-200";
export const textBold = "text-white font-semibold";

// Input Styles
export const inputBase = "w-full bg-white/5 text-gray-100 p-4 rounded-button border border-white/10 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none transition-all placeholder-gray-500 backdrop-blur-glass";

export const textareaBase = inputBase;

// Badge Styles
export const badgeTrending = "px-3 py-1.5 bg-red-500/20 text-red-300 border border-red-500/30 rounded-full text-xs font-semibold animate-pulse";

export const badgeHot = "px-3 py-1.5 bg-orange-500/20 text-orange-300 border border-orange-500/30 rounded-full text-xs font-semibold";

export const badgeNew = "px-3 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-semibold";

// Toggle Switch Styles
export const toggleActive = "w-14 h-7 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-glow-green transition-all";

export const toggleInactive = "w-14 h-7 rounded-full bg-white/10 transition-all";

export const toggleThumb = "absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full shadow-lg transition-all";

// Icon Container Styles
export const iconContainer = (color = 'blue') => {
  const colors = statCardColors[color];
  return `w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center shadow-lg ${colors.glow}`;
};

// Animation Classes
export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  gradient: 'animate-gradient',
  pulseGlow: 'animate-pulse-glow'
};

// Helper function to combine classes
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};