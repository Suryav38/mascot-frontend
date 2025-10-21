// src/components/layout/AppShell.jsx
import React from 'react';
import { Zap, Settings, Home, BarChart3, Brain, User, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStackApp, useUser } from '@stackframe/stack';

export const AppShell = ({ children }) => {
  const stackApp = useStackApp();
  const user = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />

      {/* header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Zap className="text-yellow-400" size={32} strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Mascot</h1>
              <p className="text-xs text-gray-400 font-medium">AI Social Media Engagement Tool</p>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10">
                  <User size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">{user.displayName || user.primaryEmail}</span>
                </div>
                <button 
                  onClick={() => stackApp.signOut()}
                  className="p-2.5 hover:bg-red-500/20 rounded-xl transition-all group"
                  title="Sign Out"
                >
                  <LogOut className="text-gray-400 group-hover:text-red-400" size={20} />
                </button>
                <button 
                  onClick={() => navigate('/settings')}
                  className="p-2.5 hover:bg-white/10 rounded-xl transition-all"
                >
                  <Settings className="text-gray-400" size={20} />
                </button>
              </>
            ) : (
              <>
                <a 
                  href="/sign-in"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all text-sm"
                >
                  Sign In
                </a>
                <a 
                  href="/sign-up"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 text-white font-semibold transition-all text-sm"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </header>

      {/* nav */}
      <nav className="sticky top-[81px] z-30 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: "dashboard", path: "/", label: "Dashboard", icon: Home },
              { id: "analyze", path: "/analyze", label: "Analyze", icon: BarChart3, badge: "2" },
              { id: "mascot", path: "/mascot", label: "Mascot Bot", icon: Zap },
              { id: "knowledge", path: "/knowledge", label: "Brand Knowledge", icon: Brain },
            ].map((tab) => {
              const isActive = tab.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(tab.path);
              
              return (
                <button
                  key={tab.id}
                  onClick={() => navigate(tab.path)}
                  className={`relative flex items-center gap-2 px-4 py-4 transition-all ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <tab.icon size={18} className={isActive ? "animate-pulse" : ""} />
                  <span className="font-medium">{tab.label}</span>
                  {tab.badge && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                      {tab.badge}
                    </span>
                  )}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* content */}
      <main className="relative max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};