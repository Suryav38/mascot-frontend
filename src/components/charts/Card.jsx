// src/components/charts/Card.jsx
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { glassCard, statCardColors, iconContainer, textMuted, textBold, cn } from '../../utils/designsystem';

export const StatCard = ({ label, value, icon: Icon, color = 'blue', trend, subtitle }) => {
  const colors = statCardColors[color];

  return (
    <div className={cn(glassCard, 'p-6 hover:bg-white/10 hover:scale-105 group')}>
      {/* Icon and Trend */}
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform',
          `bg-gradient-to-br ${colors.gradient}`,
          colors.glow
        )}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {trend && (
          <div className={cn('flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold', colors.bg, colors.text)}>
            <TrendingUp className="w-3 h-3" />
            {trend}
          </div>
        )}
      </div>
      
      {/* Value */}
      <div className="text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
        {value}
      </div>
      
      {/* Label */}
      <div className={cn(textMuted, 'text-sm font-medium')}>{label}</div>
      
      {/* Subtitle */}
      {subtitle && (
        <div className="text-xs text-gray-500 mt-2">{subtitle}</div>
      )}
    </div>
  );
};

export const GlassCard = ({ children, className = '', interactive = false }) => {
  return (
    <div className={cn(
      glassCard,
      interactive && 'cursor-pointer hover:border-white/20 hover:bg-white/10',
      className
    )}>
      {children}
    </div>
  );
};

// Example Button Component
export const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-brand-primary to-brand-secondary shadow-glow-blue',
    secondary: 'bg-white/10 border border-white/20',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 shadow-glow-orange',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'px-6 py-3 text-white font-semibold rounded-button hover:scale-105 active:scale-95 transition-all duration-300',
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};