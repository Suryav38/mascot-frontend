import React from 'react';
import { ArrowLeft, TrendingUp, MessageCircle, ThumbsUp, ThumbsDown, Eye, Zap, Sparkles } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

export const RedditPostDetail = ({ post, onBack }) => {
  const sentimentData = [
    { name: 'Positive', value: post.sentiment.positive, color: '#10b981' },
    { name: 'Neutral', value: post.sentiment.neutral, color: '#6b7280' },
    { name: 'Negative', value: post.sentiment.negative, color: '#ef4444' }
  ];

  const engagementOverTime = [
    { time: '0h', upvotes: 20, comments: 5 },
    { time: '2h', upvotes: 80, comments: 15 },
    { time: '4h', upvotes: 150, comments: 30 },
    { time: '6h', upvotes: 250, comments: 55 },
    { time: '8h', upvotes: 320, comments: 70 },
    { time: 'Now', upvotes: post.upvotes, comments: post.comments }
  ];

  return (
    <div className="pb-12 animate-fade-in">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors group-hover:-translate-x-1" />
          <span className="text-gray-400 group-hover:text-white font-medium">Back to Dashboard</span>
        </button>
      </div>

      {/* Post Header */}
      <div className="mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/50">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-orange-400 font-bold text-lg">{post.subreddit}</div>
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border ${
                  post.status === 'trending'
                    ? 'bg-red-500/20 text-red-300 border-red-500/30 animate-pulse'
                    : post.status === 'hot'
                    ? 'bg-orange-500/20 text-orange-300 border-orange-500/30'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                }`}
              >
                🔥 {post.status.toUpperCase()}
              </span>
            </div>
            <div className="text-3xl font-bold text-white leading-tight">{post.title}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content - Left Column (2 cols wide) */}
        <div className="col-span-2 space-y-6">
          {/* Post Content */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-lg text-gray-200 leading-relaxed mb-4">{post.content}</div>
            <div className="text-sm text-gray-400 pt-4 border-t border-white/10">
              Posted {post.timestamp}
            </div>
          </div>

          {/* Engagement Chart */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <div className="text-2xl font-bold text-white">Engagement Over Time</div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementOverTime}>
                  <defs>
                    <linearGradient id="upvotesGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="commentsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(12px)'
                    }}
                  />
                  <Area type="monotone" dataKey="upvotes" stroke="#10b981" strokeWidth={3} fill="url(#upvotesGradient)" name="Upvotes" />
                  <Area type="monotone" dataKey="comments" stroke="#3b82f6" strokeWidth={3} fill="url(#commentsGradient)" name="Comments" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              <div className="text-2xl font-bold text-white">Comments & AI Responses</div>
            </div>
            <div className="space-y-4">
              {post.topComments.map((comment, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {comment.user[2]?.toUpperCase() || 'U'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-white font-semibold">
                          {comment.user} • <span className="text-gray-400 font-normal">{comment.upvotes} upvotes</span>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            comment.sentiment === 'positive'
                              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                              : comment.sentiment === 'negative'
                              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                              : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                          }`}
                        >
                          {comment.sentiment}
                        </span>
                      </div>
                      <div className="text-gray-200 leading-relaxed">{comment.text}</div>
                    </div>
                  </div>
                  {comment.replied && (
                    <div className="ml-12 mt-3 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <div className="text-purple-400 font-semibold text-sm">Mascot AI replied:</div>
                      </div>
                      <div className="text-gray-200">{comment.botReply}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Sidebar - Right Column */}
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-xl font-bold text-white mb-4">Key Metrics</div>
            <div className="space-y-3">
              {[
                { label: 'Upvotes', value: post.upvotes, icon: ThumbsUp, color: 'text-green-400', bg: 'bg-green-500/20' },
                { label: 'Downvotes', value: post.downvotes, icon: ThumbsDown, color: 'text-red-400', bg: 'bg-red-500/20' },
                { label: 'Comments', value: post.comments, icon: MessageCircle, color: 'text-blue-400', bg: 'bg-blue-500/20' },
                { label: 'Views', value: post.views.toLocaleString(), icon: Eye, color: 'text-purple-400', bg: 'bg-purple-500/20' }
              ].map((metric, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${metric.bg} rounded-lg flex items-center justify-center`}>
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <div className="text-gray-300 font-medium">{metric.label}</div>
                  </div>
                  <div className="text-xl font-bold text-white">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="text-gray-300 font-semibold">AI Auto-Replies</div>
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{post.autoReplied}</div>
              <div className="text-sm text-gray-400">
                {Math.round((post.autoReplied / post.comments) * 100)}% response rate
              </div>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-xl font-bold text-white mb-4">Sentiment</div>
            <div className="flex justify-center">
              <PieChart width={240} height={200}>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>

          {/* Reaction Breakdown */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <div className="text-xl font-bold text-white mb-4">Reactions</div>
            <div className="space-y-3">
              {Object.entries(post.reactionBreakdown).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-300 capitalize font-medium">{key}</div>
                    <div className="text-white font-bold">{value}</div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(value / post.comments) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};