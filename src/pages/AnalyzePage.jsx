// src/pages/AnalyzePage.jsx
import React, { useEffect, useState } from 'react';
import { MessageSquare, Zap, Plus, TrendingUp } from 'lucide-react';
import { RedditPostDetail } from '../components/reddit/RedditPostDetail';
import { RedditPostCard } from '../components/reddit/RedditPostCard';
import { redditPosts as POSTS } from '../mocks/reddit';

export const AnalyzePage = () => {
  const [activeChannel, setActiveChannel] = useState('reddit');
  const [selectedPost, setSelectedPost] = useState(null);
  const [counters, setCounters] = useState({ posts: 0, upvotes: 0, comments: 0, views: 0, ai: 0 });

  const channels = [
    { id: 'reddit', name: 'Reddit', color: 'orange', available: true },
    { id: 'twitter', name: 'Twitter', color: 'blue', available: false },
    { id: 'instagram', name: 'Instagram', color: 'pink', available: false },
    { id: 'facebook', name: 'Facebook', color: 'blue', available: false }
  ];

  useEffect(() => {
    if (activeChannel === 'reddit') {
      const targets = { posts: 2, upvotes: 909, comments: 201, views: 14350, ai: 123 };
      const duration = 1200, steps = 60, interval = duration / steps;
      let step = 0;
      const t = setInterval(() => {
        step++;
        setCounters({
          posts: Math.floor((targets.posts / steps) * step),
          upvotes: Math.floor((targets.upvotes / steps) * step),
          comments: Math.floor((targets.comments / steps) * step),
          views: Math.floor((targets.views / steps) * step),
          ai: Math.floor((targets.ai / steps) * step),
        });
        if (step >= steps) {
          clearInterval(t);
          setCounters(targets);
        }
      }, interval);
      return () => clearInterval(t);
    }
  }, [activeChannel]);

  if (selectedPost) {
    return <RedditPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Channel Selector */}
      <div className="glass-card p-2 inline-flex gap-2 rounded-2xl">
        {channels.map((channel) => (
          <button
            key={channel.id}
            onClick={() => channel.available && setActiveChannel(channel.id)}
            disabled={!channel.available}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeChannel === channel.id
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                : channel.available
                ? 'text-gray-400 hover:text-white hover:bg-white/5'
                : 'text-gray-600 cursor-not-allowed'
            }`}
          >
            {channel.name}
            {!channel.available && (
              <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">Soon</span>
            )}
          </button>
        ))}
      </div>

      {/* Reddit Content */}
      {activeChannel === 'reddit' && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <MessageSquare className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  Reddit Analytics
                </h2>
                <p className="text-gray-400">Complete overview of your Reddit presence</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/50 transition-all">
              <Plus size={18} /> Create Post
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-4">
            {[
              { label: "Posts", value: counters.posts, icon: MessageSquare },
              { label: "Upvotes", value: counters.upvotes.toLocaleString(), icon: TrendingUp },
              { label: "Comments", value: counters.comments, icon: MessageSquare },
              { label: "Views", value: counters.views.toLocaleString(), icon: MessageSquare },
              { label: "AI Replies", value: counters.ai, icon: Zap },
            ].map((s, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{s.label}</span>
                  <s.icon size={18} className="text-white/70" />
                </div>
                <div className="text-2xl font-bold text-white">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {POSTS.map((post) => (
              <RedditPostCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </>
      )}

      {/* Other Channels - Coming Soon */}
      {activeChannel !== 'reddit' && (
        <div className="glass-card p-12 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
          <p className="text-gray-400">
            {channels.find(c => c.id === activeChannel)?.name} analytics will be available soon!
          </p>
        </div>
      )}
    </div>
  );
};