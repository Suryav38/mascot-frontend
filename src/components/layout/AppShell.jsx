import React, { useEffect } from 'react';
import { Zap, Settings, Brain, Sparkles, MessageSquare } from 'lucide-react';
import { useAppStore } from '../../app/store';

export const AppShell = ({ children }) => {
  const { activeView, setActiveView, isVisible, setIsVisible } = useAppStore();

  useEffect(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const navItems = [
    { id: 'knowledge', label: 'Brand Knowledge', icon: Brain },
    { id: 'autoreply', label: 'Auto-Reply', icon: Sparkles },
    { id: 'reddit', label: 'Reddit', icon: MessageSquare, badge: '2' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"> 
      {/* Animated background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <Zap className="text-yellow-400" size={32} strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mascot
                </h1>
                <p className="text-xs text-gray-400 font-medium">AI Social Media Intelligence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95">
                <Settings className="text-gray-400" size={20} />
              </button>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  U
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-[81px] z-30 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {navItems.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-4 transition-all group ${
                  activeView === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={18} className={activeView === tab.id ? 'animate-pulse' : ''} />
                <span className="font-medium">{tab.label}</span>
                {tab.badge && (
                  <span className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                    {tab.badge}
                  </span>
                )}
                {activeView === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};