import React from 'react';
import { MessageSquare, Plus, ThumbsUp, MessageCircle, Eye, Zap, TrendingUp } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { redditPosts, weeklyEngagementData, topSubreddits, overallSentiment } from '../../mocks/reddit';
import { RedditPostCard } from './RedditPostCard';
import { StatCard } from '../charts/Card';

export const RedditDashboard = ({ onPostClick }) => {
  const counters = useAnimatedCounter(
    { posts: 2, upvotes: 909, comments: 201, views: 14350, ai: 123 },
    true
  );

  const COLORS = {
    positive: '#10b981',
    neutral: '#6b7280', 
    negative: '#ef4444'
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="flex-1">
          <div className="text-4xl font-bold text-white mb-2">Reddit Analytics</div>
          <div className="text-gray-400 text-lg">Complete overview of your Reddit presence</div>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 
                         text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 
                         transition-all duration-300 hover:scale-105 active:scale-95">
          <Plus className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>

      {/* Overall Stats Grid */}
      <div className="grid grid-cols-5 gap-6">
        <StatCard 
          label="Posts" 
          value={counters.posts} 
          icon={MessageSquare}
          color="orange"
        />
        <StatCard 
          label="Upvotes" 
          value={counters.upvotes} 
          icon={ThumbsUp}
          color="green"
          trend="+18.5%"
        />
        <StatCard 
          label="Comments" 
          value={counters.comments} 
          icon={MessageCircle}
          color="blue"
          trend="+24.3%"
        />
        <StatCard 
          label="Views" 
          value={counters.views.toLocaleString()} 
          icon={Eye}
          color="purple"
          trend="+31.2%"
        />
        <StatCard 
          label="AI Replies" 
          value={counters.ai} 
          icon={Zap}
          color="yellow"
          subtitle="61% response rate"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Engagement Trends */}
        <div className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <div className="text-2xl font-bold text-white">Engagement Trends</div>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg font-semibold border border-blue-500/30">
              Last 7 days
            </button>
            <button className="px-4 py-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors">
              Last 30 days
            </button>
            <button className="px-4 py-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors">
              Last 3 months
            </button>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyEngagementData}>
              <defs>
                <linearGradient id="upvotesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="commentsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" opacity={0.3} />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)'
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="upvotes" stroke="#10b981" strokeWidth={2} fill="url(#upvotesGradient)" name="Upvotes" />
              <Area type="monotone" dataKey="comments" stroke="#3b82f6" strokeWidth={2} fill="url(#commentsGradient)" name="Comments" />
              <Area type="monotone" dataKey="views" stroke="#a855f7" strokeWidth={2} fill="url(#viewsGradient)" name="Views" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Overall Sentiment */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="text-2xl font-bold text-white mb-6">Overall Sentiment</div>

          <div className="flex justify-center mb-6">
            <PieChart width={260} height={220}>
              <Pie 
                data={overallSentiment}
                cx="50%" 
                cy="50%" 
                innerRadius={50}
                outerRadius={75} 
                dataKey="value"
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {overallSentiment.map((entry, idx) => (
                  <Cell key={idx} fill={COLORS[entry.name]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Positive', color: 'green', value: '79.2%' },
              { label: 'Neutral', color: 'gray', value: '11.2%' },
              { label: 'Negative', color: 'red', value: '9.6%' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    item.color === 'green' ? 'bg-green-500' :
                    item.color === 'gray' ? 'bg-gray-500' : 'bg-red-500'
                  }`} />
                  <div className="text-gray-300">{item.label}</div>
                </div>
                <div className="text-white font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Subreddits */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="text-2xl font-bold text-white mb-4">Top Performing Subreddits</div>
        <div className="grid grid-cols-3 gap-4">
          {topSubreddits.map((sub, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-orange-400 font-semibold mb-2">{sub.name}</div>
              <div className="text-3xl font-bold text-white">{sub.value}</div>
              <div className="text-gray-400 text-sm">avg upvotes</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl font-bold text-white">Recent Posts</div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg font-semibold border border-orange-500/30">
            All Subreddits
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors">
            r/technology
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors">
            r/startups
          </button>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg font-semibold border border-blue-500/30">
            All Time
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors">
            Today
          </button>
          <button className="px-4 py-2 text-gray-400 hover:bg-white/10 rounded-lg transition-colors">
            This Week
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {redditPosts.map((post, idx) => (
          <RedditPostCard 
            key={post.id}
            post={post}
            onClick={() => onPostClick(post)}
            delay={`${900 + idx * 100}ms`}
          />
        ))}
      </div>
    </div>
  );
};