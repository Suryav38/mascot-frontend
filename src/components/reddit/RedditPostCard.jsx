import React from 'react';
import { ThumbsUp, MessageCircle, Eye, Zap } from 'lucide-react';
import { GlassCard } from '../charts/Card';

export const RedditPostCard = ({ post, onClick, delay = '0ms' }) => {
  return (
    <div 
      onClick={onClick}
      style={{ animationDelay: delay }}
      className="bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 
                 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 
                 transition-all duration-300 cursor-pointer group animate-slide-up flex gap-6"
    >
      {/* Quick Stats Sidebar */}
      <div className="flex flex-col gap-4 min-w-[80px]">
        <div className="flex flex-col items-center bg-slate-900/50 rounded-xl p-3 border border-slate-700/30">
          <ThumbsUp className="w-5 h-5 text-green-400 mb-1" />
          <div className="text-2xl font-bold text-white">{post.upvotes}</div>
          <div className="text-xs text-slate-400">upvotes</div>
        </div>
        <div className="flex flex-col items-center bg-slate-900/50 rounded-xl p-3 border border-slate-700/30">
          <MessageCircle className="w-5 h-5 text-blue-400 mb-1" />
          <div className="text-2xl font-bold text-white">{post.comments}</div>
          <div className="text-xs text-slate-400">comments</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-orange-400 font-semibold text-sm">{post.subreddit}</div>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
              post.status === 'trending'
                ? 'bg-red-500/20 text-red-300 border-red-500/30 animate-pulse'
                : post.status === 'hot'
                ? 'bg-orange-500/20 text-orange-300 border-orange-500/30'
                : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
            }`}
          >
            🔥 {post.status.toUpperCase()}
          </span>
          <div className="text-slate-400 text-sm">{post.timestamp}</div>
        </div>

        <div className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
          {post.title}
        </div>
        <div className="text-slate-300 leading-relaxed line-clamp-2">{post.content}</div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2 text-slate-400">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{post.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">
              {post.autoReplied} AI replies ({Math.round((post.autoReplied / post.comments) * 100)}%)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { color: 'green', value: post.sentiment.positive },
              { color: 'gray', value: post.sentiment.neutral },
              { color: 'red', value: post.sentiment.negative },
            ].map((sentiment, idx) => (
              <div
                key={idx}
                className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                  sentiment.color === 'green'
                    ? 'bg-green-500/20 text-green-400'
                    : sentiment.color === 'gray'
                    ? 'bg-slate-500/20 text-slate-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {sentiment.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center text-slate-600 group-hover:text-orange-500 transition-colors text-2xl">
        →
      </div>
    </div>
  );
};