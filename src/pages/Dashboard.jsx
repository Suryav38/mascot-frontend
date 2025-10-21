// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { MessageSquare, TrendingUp, Users, Zap, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    totalPosts: 0,
    totalEngagement: 0,
    totalViews: 0,
    aiReplies: 0
  });

  useEffect(() => {
    const targets = { totalPosts: 8, totalEngagement: 1847, totalViews: 45230, aiReplies: 342 };
    const duration = 1500, steps = 60, interval = duration / steps;
    let step = 0;
    const t = setInterval(() => {
      step++;
      setCounters({
        totalPosts: Math.floor((targets.totalPosts / steps) * step),
        totalEngagement: Math.floor((targets.totalEngagement / steps) * step),
        totalViews: Math.floor((targets.totalViews / steps) * step),
        aiReplies: Math.floor((targets.aiReplies / steps) * step),
      });
      if (step >= steps) {
        clearInterval(t);
        setCounters(targets);
      }
    }, interval);
    return () => clearInterval(t);
  }, []);

  const channelStats = [
    {
      name: 'Reddit',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-600',
      posts: 2,
      engagement: 909,
      views: 14350,
      aiReplies: 123,
      active: true
    },
    {
      name: 'Twitter',
      icon: MessageSquare,
      color: 'from-blue-400 to-blue-600',
      posts: 3,
      engagement: 456,
      views: 12890,
      aiReplies: 89,
      active: false
    },
    {
      name: 'Instagram',
      icon: MessageSquare,
      color: 'from-pink-500 to-purple-600',
      posts: 2,
      engagement: 312,
      views: 10450,
      aiReplies: 78,
      active: false
    },
    {
      name: 'Facebook',
      icon: MessageSquare,
      color: 'from-blue-600 to-blue-800',
      posts: 1,
      engagement: 170,
      views: 7540,
      aiReplies: 52,
      active: false
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-400">Monitor your social media presence across all platforms</p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Posts", value: counters.totalPosts, icon: MessageSquare, color: "blue" },
          { label: "Total Engagement", value: counters.totalEngagement.toLocaleString(), icon: TrendingUp, color: "green" },
          { label: "Total Views", value: counters.totalViews.toLocaleString(), icon: Users, color: "purple" },
          { label: "AI Replies", value: counters.aiReplies, icon: Zap, color: "yellow" },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={24} className={`text-${stat.color}-400`} />
              <div className="text-xs text-green-400 flex items-center gap-1">
                <ArrowUpRight size={14} />
                +12%
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Channel Breakdown */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Platform Performance</h3>
        <div className="grid grid-cols-2 gap-4">
          {channelStats.map((channel, idx) => (
            <div
              key={idx}
              onClick={() => channel.active && navigate('/analyze')}
              className={`glass-card p-6 ${
                channel.active 
                  ? 'cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20' 
                  : 'opacity-50 cursor-not-allowed'
              } transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center`}>
                    <channel.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{channel.name}</div>
                    <div className="text-xs text-gray-400">
                      {channel.active ? 'Active' : 'Coming Soon'}
                    </div>
                  </div>
                </div>
                {!channel.active && (
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-xs font-semibold">
                    Soon
                  </span>
                )}
              </div>

              <div className="grid grid-cols-4 gap-3">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Posts</div>
                  <div className="text-white font-bold">{channel.posts}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Engagement</div>
                  <div className="text-white font-bold">{channel.engagement}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Views</div>
                  <div className="text-white font-bold">{channel.views.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">AI Replies</div>
                  <div className="text-purple-400 font-bold">{channel.aiReplies}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => navigate('/analyze')}
          className="glass-card p-6 hover:border-orange-500/50 transition-all group"
        >
          <MessageSquare className="text-orange-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
          <div className="text-white font-semibold mb-1">Analyze Posts</div>
          <div className="text-gray-400 text-sm">Deep dive into your content</div>
        </button>

        <button
          onClick={() => navigate('/mascot')}
          className="glass-card p-6 hover:border-purple-500/50 transition-all group"
        >
          <Zap className="text-purple-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
          <div className="text-white font-semibold mb-1">Configure Bot</div>
          <div className="text-gray-400 text-sm">Adjust personality & replies</div>
        </button>

        <button
          onClick={() => navigate('/knowledge')}
          className="glass-card p-6 hover:border-blue-500/50 transition-all group"
        >
          <Users className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
          <div className="text-white font-semibold mb-1">Brand Knowledge</div>
          <div className="text-gray-400 text-sm">Train your AI mascot</div>
        </button>
      </div>
    </div>
  );
};