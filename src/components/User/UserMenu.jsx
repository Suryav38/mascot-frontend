import React, { useState } from 'react';
import { Settings, LogOut, ChevronDown } from 'lucide-react';
import { useUser } from '@stackframe/stack';
import { stackClientApp } from '../../stack';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const user = useUser();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const userInitial = user?.displayName?.[0]?.toUpperCase() || user?.primaryEmail?.[0]?.toUpperCase() || 'U';

  const handleSignOut = async () => {
    await stackClientApp.signOut();
    navigate('/sign-in');
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="relative flex items-center gap-2 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl cursor-pointer hover:scale-110 transition-transform">
          {userInitial}
        </div>
        <ChevronDown className={`text-gray-400 transition-transform ${showMenu ? 'rotate-180' : ''}`} size={16} />
      </button>

      {showMenu && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />
          
          {/* CLEAN DROPDOWN - NO GLASS EFFECT */}
          <div className="absolute right-0 mt-2 w-64 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 z-50 overflow-hidden">
            {/* User Info */}
            <div className="p-4 bg-slate-900/50 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {userInitial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold truncate">
                    {user?.displayName || 'User'}
                  </p>
                  <p className="text-gray-400 text-sm truncate">
                    {user?.primaryEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items - SIMPLIFIED */}
            <div className="p-2">
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate('/settings');
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-700 rounded-lg transition-all text-left group"
              >
                <Settings size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-white text-sm font-medium">Settings</span>
              </button>

              <div className="my-1 border-t border-slate-700"></div>

              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/20 rounded-lg transition-all text-left group"
              >
                <LogOut size={18} className="text-gray-400 group-hover:text-red-400 transition-colors" />
                <span className="text-white text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};