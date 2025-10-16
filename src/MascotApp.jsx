import React, { useState, useEffect } from 'react';
import { BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MessageSquare, TrendingUp, Zap, Settings, Brain, ArrowUp, ArrowLeft, Save, Sparkles, ThumbsUp, ThumbsDown, MessageCircle, Eye, Plus } from 'lucide-react';

const MascotApp = () => {
  const [activeView, setActiveView] = useState('knowledge');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ posts: 0, upvotes: 0, comments: 0, views: 0, ai: 0 });
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeView === 'reddit' && !selectedPost) {
      const targets = { posts: 2, upvotes: 909, comments: 201, views: 14350, ai: 123 };
      const duration = 1500;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounters({
          posts: Math.floor((targets.posts / steps) * step),
          upvotes: Math.floor((targets.upvotes / steps) * step),
          comments: Math.floor((targets.comments / steps) * step),
          views: Math.floor((targets.views / steps) * step),
          ai: Math.floor((targets.ai / steps) * step)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [activeView, selectedPost]);
  
  const [autoReplyEnabled, setAutoReplyEnabled] = useState({
    reddit: true,
    instagram: false,
    twitter: false,
    facebook: false
  });
  
  const [botPersonality, setBotPersonality] = useState({
    sassiness: 3,
    comedy: 4,
    professionalism: 5,
    enthusiasm: 4,
    empathy: 5
  });
  
  const [useBrandKnowledge, setUseBrandKnowledge] = useState(true);
  
  const [brandKnowledge, setBrandKnowledge] = useState({
    brandVoice: 'We are friendly, professional, and innovative. We believe in making technology accessible to everyone.',
    productInfo: 'Our AI-powered social media management tool helps brands engage authentically with their audience.',
    values: 'Innovation, Authenticity, Customer Success, Transparency',
    faqs: 'Q: What platforms do you support?\nA: Currently Reddit, with Instagram, Twitter, and Facebook coming soon.',
    doNot: 'Avoid discussing competitor pricing. Never make promises about unreleased features.'
  });

  const redditPosts = [
    {
      id: 1,
      subreddit: 'r/technology',
      title: 'Introducing our new AI-powered productivity tool',
      content: 'After months of development, we are excited to share our latest innovation that helps teams collaborate better...',
      timestamp: '2 hours ago',
      upvotes: 342,
      downvotes: 23,
      comments: 78,
      views: 5420,
      engagement: 420,
      sentiment: { positive: 62, negative: 8, neutral: 8 },
      reactionBreakdown: {
        love: 45,
        insightful: 28,
        helpful: 34,
        skeptical: 8,
        critical: 5
      },
      autoReplied: 45,
      status: 'trending',
      topComments: [
        { 
          user: 'u/tech_enthusiast', 
          text: 'This looks amazing! Cannot wait to try it. Will there be a free tier?', 
          sentiment: 'positive', 
          upvotes: 23,
          replied: true,
          botReply: 'Thank you so much! We\'re thrilled about your interest. Yes, we\'ll have a free tier available at launch. Sign up on our website to get early access!'
        },
        { 
          user: 'u/developer_pro', 
          text: 'How does the pricing compare to competitors?', 
          sentiment: 'neutral',
          upvotes: 15,
          replied: true,
          botReply: 'Great question! Our pricing is designed to be competitive and transparent. We focus on delivering exceptional value. Check out our pricing page for full details!'
        },
        { 
          user: 'u/early_adopter', 
          text: 'Been waiting for something like this! The UI looks clean', 
          sentiment: 'positive',
          upvotes: 34,
          replied: true,
          botReply: 'We appreciate your patience and enthusiasm! Our design team worked hard to make it intuitive. Let us know what you think once you try it!'
        },
        { 
          user: 'u/skeptic_user', 
          text: 'Not sure about the privacy implications here', 
          sentiment: 'negative',
          upvotes: 8,
          replied: true,
          botReply: 'Privacy is one of our top priorities. All data is encrypted end-to-end, and we never share your information with third parties. Happy to answer any specific concerns!'
        }
      ]
    },
    {
      id: 2,
      subreddit: 'r/startups',
      title: 'We launched today - lessons learned from our journey',
      content: 'Here are the top 5 things we learned building our startup from idea to launch...',
      timestamp: '1 day ago',
      upvotes: 567,
      downvotes: 34,
      comments: 123,
      views: 8930,
      engagement: 690,
      sentiment: { positive: 98, negative: 12, neutral: 13 },
      reactionBreakdown: {
        love: 78,
        insightful: 65,
        helpful: 89,
        skeptical: 12,
        critical: 8
      },
      autoReplied: 78,
      status: 'hot',
      topComments: []
    }
  ];

  const platforms = [
    { id: 'reddit', name: 'Reddit', color: '#FF4500', icon: '🔴', available: true },
    { id: 'instagram', name: 'Instagram', color: '#E4405F', icon: '📷', available: false },
    { id: 'twitter', name: 'Twitter', color: '#1DA1F2', icon: '🐦', available: false },
    { id: 'facebook', name: 'Facebook', color: '#4267B2', icon: '👥', available: false }
  ];

  const PostDetailView = ({ post }) => {
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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Animated background */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2.5 hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95"
              >
                <ArrowLeft size={20} className="text-white" />
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                    {post.subreddit}
                  </span>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border ${
                    post.status === 'trending' ? 'bg-red-500/20 text-red-300 border-red-500/30 animate-pulse' :
                    post.status === 'hot' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                    'bg-blue-500/20 text-blue-300 border-blue-500/30'
                  }`}>
                    {post.status}
                  </span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{post.title}</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="col-span-2 space-y-6">
              {/* Post Content */}
              <div className="glass-card p-6 animate-slide-up">
                <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>
                <div className="text-sm text-gray-500">Posted {post.timestamp}</div>
              </div>

              {/* Engagement Chart */}
              <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="text-blue-400" size={20} />
                  Engagement Over Time
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={engagementOverTime}>
                    <defs>
                      <linearGradient id="upvotesGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="commentsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="upvotes" stroke="#10b981" strokeWidth={3} fill="url(#upvotesGrad)" />
                    <Area type="monotone" dataKey="comments" stroke="#3b82f6" strokeWidth={3} fill="url(#commentsGrad)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Comments Section */}
              <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="text-purple-400" size={20} />
                  Comments & AI Responses
                </h3>
                <div className="space-y-4">
                  {post.topComments.map((comment, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 font-medium">{comment.user}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-500 text-sm">{comment.upvotes} upvotes</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          comment.sentiment === 'positive' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          comment.sentiment === 'negative' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                          'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                        }`}>
                          {comment.sentiment}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{comment.text}</p>
                      {comment.replied && (
                        <div className="ml-4 pl-4 border-l-2 border-blue-500 bg-blue-500/10 rounded-r-lg p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles size={14} className="text-blue-400 animate-pulse" />
                            <span className="text-sm font-medium text-blue-400">Mascot AI replied:</span>
                          </div>
                          <p className="text-gray-300 text-sm">{comment.botReply}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analytics Sidebar */}
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '50ms' }}>
                <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Upvotes', value: post.upvotes, icon: ThumbsUp, color: 'text-green-400', bg: 'bg-green-500/20' },
                    { label: 'Downvotes', value: post.downvotes, icon: ThumbsDown, color: 'text-red-400', bg: 'bg-red-500/20' },
                    { label: 'Comments', value: post.comments, icon: MessageCircle, color: 'text-blue-400', bg: 'bg-blue-500/20' },
                    { label: 'Views', value: post.views.toLocaleString(), icon: Eye, color: 'text-purple-400', bg: 'bg-purple-500/20' }
                  ].map((metric, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-400">{metric.label}</span>
                        <div className={`p-2 rounded-lg ${metric.bg} group-hover:scale-110 transition-transform`}>
                          <metric.icon size={16} className={metric.color} />
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                    </div>
                  ))}
                  
                  <div className="pt-3 border-t border-white/10 group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">AI Auto-Replies</span>
                      <div className="p-2 rounded-lg bg-yellow-500/20 group-hover:scale-110 transition-transform">
                        <Zap size={16} className="text-yellow-400 animate-pulse" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">{post.autoReplied}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {Math.round((post.autoReplied / post.comments) * 100)}% response rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Sentiment Analysis */}
              <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
                <h3 className="text-lg font-semibold text-white mb-4">Sentiment</h3>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
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
                </ResponsiveContainer>
              </div>

              {/* Reaction Breakdown */}
              <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '250ms' }}>
                <h3 className="text-lg font-semibold text-white mb-4">Reactions</h3>
                <div className="space-y-3">
                  {Object.entries(post.reactionBreakdown).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-400 capitalize">{key}</span>
                        <span className="text-sm font-semibold text-white">{value}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out" 
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
      </div>
    );
  };

  if (selectedPost) {
    return <PostDetailView post={selectedPost} />;
  }

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
            {[
              { id: 'knowledge', label: 'Brand Knowledge', icon: Brain },
              { id: 'autoreply', label: 'Auto-Reply', icon: Sparkles },
              { id: 'reddit', label: 'Reddit', icon: MessageSquare, badge: '2' }
            ].map(tab => (
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
        {/* Brand Knowledge View */}
        {activeView === 'knowledge' && (
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                  Brand Knowledge Base
                </h2>
                <p className="text-gray-400">Train your AI mascot with your brand's unique voice</p>
              </div>
              <button className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <span className="relative flex items-center gap-2">
                  <Save size={18} />
                  Save Changes
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Brand Voice & Tone', icon: Brain, color: 'blue', field: 'brandVoice', rows: 4, desc: 'Describe how your brand communicates' },
                { title: 'Product & Service Info', icon: Sparkles, color: 'purple', field: 'productInfo', rows: 4, desc: 'Key details about what you offer' },
                { title: 'Core Values & Mission', icon: TrendingUp, color: 'green', field: 'values', rows: 3, desc: 'What does your brand stand for?' },
                { title: 'Common Questions & Answers', icon: MessageSquare, color: 'orange', field: 'faqs', rows: 6, desc: 'FAQs and common responses', mono: true },
                { title: 'Do Not Discuss', icon: Settings, color: 'red', field: 'doNot', rows: 3, desc: 'Topics to avoid or handle with caution', alert: true }
              ].map((section, idx) => (
                <div 
                  key={idx} 
                  className="glass-card p-6 animate-slide-up hover:scale-[1.01] transition-transform"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl bg-${section.color}-500/20 border border-${section.color}-500/30`}>
                      <section.icon className={`text-${section.color}-400`} size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{section.desc}</p>
                  <textarea 
                    className={`w-full bg-white/5 text-gray-100 p-4 rounded-xl border ${
                      section.alert ? 'border-red-500/30 focus:border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                    } backdrop-blur-xl focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all placeholder-gray-500 ${
                      section.mono ? 'font-mono text-sm' : ''
                    }`}
                    rows={section.rows}
                    value={brandKnowledge[section.field]}
                    onChange={(e) => setBrandKnowledge({...brandKnowledge, [section.field]: e.target.value})}
                    placeholder={`Enter ${section.title.toLowerCase()}...`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Auto-Reply Configuration View */}
        {activeView === 'autoreply' && (
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                Auto-Reply Configuration
              </h2>
              <p className="text-gray-400">Configure how your AI mascot responds across platforms</p>
            </div>

            {/* Platform Toggles */}
            <div className="glass-card p-6 animate-slide-up">
              <h3 className="text-xl font-semibold text-white mb-4">Enable by Platform</h3>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, idx) => (
                  <div 
                    key={platform.id}
                    className={`relative p-5 rounded-xl border-2 transition-all ${
                      !platform.available 
                        ? 'opacity-50 cursor-not-allowed bg-white/5 border-white/10' 
                        : autoReplyEnabled[platform.id]
                        ? 'bg-green-500/10 border-green-500/50 shadow-lg shadow-green-500/20'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    } group`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {autoReplyEnabled[platform.id] && platform.available && (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl"></div>
                    )}
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl transform group-hover:scale-110 transition-transform">{platform.icon}</div>
                        <div>
                          <div className="font-semibold text-white">{platform.name}</div>
                          {!platform.available && (
                            <div className="text-xs text-gray-500">Coming Soon</div>
                          )}
                        </div>
                      </div>
                      <label className="relative inline-block w-14 h-7 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={autoReplyEnabled[platform.id]}
                          onChange={(e) => setAutoReplyEnabled({...autoReplyEnabled, [platform.id]: e.target.checked})}
                          disabled={!platform.available}
                        />
                        <div className={`w-14 h-7 rounded-full transition-all ${
                          autoReplyEnabled[platform.id] && platform.available
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/50'
                            : 'bg-white/10'
                        }`}>
                          <div className={`absolute top-0.5 left-0.5 bg-white w-6 h-6 rounded-full transition-all shadow-lg ${
                            autoReplyEnabled[platform.id] ? 'translate-x-7' : ''
                          }`}></div>
                        </div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Knowledge Toggle */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                    <Brain className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Use Brand Knowledge</h3>
                    <p className="text-sm text-gray-400">Enable AI to reference your brand knowledge when replying</p>
                  </div>
                </div>
                <label className="relative inline-block w-16 h-8 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={useBrandKnowledge}
                    onChange={(e) => setUseBrandKnowledge(e.target.checked)}
                  />
                  <div className={`w-16 h-8 rounded-full transition-all ${
                    useBrandKnowledge 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/50' 
                      : 'bg-white/10'
                  }`}>
                    <div className={`absolute top-0.5 left-0.5 bg-white w-7 h-7 rounded-full transition-all shadow-lg ${
                      useBrandKnowledge ? 'translate-x-8' : ''
                    }`}></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Bot Personality Sliders */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <Sparkles className="text-purple-400 animate-pulse" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white">Personality Traits (5 Characters)</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">Customize how your AI mascot communicates</p>
              
              <div className="space-y-6">
                {Object.entries(botPersonality).map(([trait, value], idx) => (
                  <div key={trait} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-300 capitalize">{trait}</label>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {value}/5
                      </span>
                    </div>
                    <div className="relative">
                      <input 
                        type="range" 
                        min="1" 
                        max="5" 
                        value={value}
                        onChange={(e) => setBotPersonality({...botPersonality, [trait]: parseInt(e.target.value)})}
                        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 0%, #8b5cf6 ${(value - 1) * 25}%, rgba(255,255,255,0.1) ${(value - 1) * 25}%, rgba(255,255,255,0.1) 100%)`
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Low</span>
                      <span>High</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/30">
                <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Sparkles size={16} />
                  Preview Response Style:
                </h4>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  {botPersonality.sassiness >= 4 && "With a touch of wit, "}
                  {botPersonality.comedy >= 4 && "a dash of humor, "}
                  {botPersonality.professionalism >= 4 && "maintaining professionalism, "}
                  {botPersonality.enthusiasm >= 4 && "with genuine excitement, "}
                  {botPersonality.empathy >= 4 && "and heartfelt empathy, "}
                  your mascot will engage authentically with your audience.
                </p>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end animate-slide-up" style={{ animationDelay: '400ms' }}>
              <button className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <span className="relative flex items-center gap-2">
                  <Save size={18} />
                  Save Configuration
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Reddit Analytics View */}
        {activeView === 'reddit' && (
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <MessageSquare className="text-white" size={32} />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                    Reddit Analytics
                  </h2>
                  <p className="text-gray-400">Complete overview of your Reddit presence</p>
                </div>
              </div>
              <button className="group relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transition-transform group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <span className="relative flex items-center gap-2">
                  <Plus size={18} />
                  Create Post
                </span>
              </button>
            </div>

            {/* Overall Stats Grid */}
            <div className="grid grid-cols-5 gap-4">
              {[
                { label: 'Posts', value: counters.posts, icon: MessageSquare, gradient: 'from-orange-500 to-red-500', delay: '0ms' },
                { label: 'Upvotes', value: counters.upvotes.toLocaleString(), icon: ThumbsUp, color: 'green', growth: '+18.5%', delay: '100ms' },
                { label: 'Comments', value: counters.comments, icon: MessageCircle, color: 'blue', growth: '+24.3%', delay: '200ms' },
                { label: 'Views', value: counters.views.toLocaleString(), icon: Eye, color: 'purple', growth: '+31.2%', delay: '300ms' },
                { label: 'AI Replies', value: counters.ai, icon: Zap, gradient: 'from-purple-500 to-pink-500', rate: '61%', delay: '400ms' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className={`glass-card p-6 animate-slide-up hover:scale-105 transition-all ${
                    stat.gradient ? 'bg-gradient-to-br ' + stat.gradient : ''
                  }`}
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-medium ${stat.gradient ? 'text-white/80' : 'text-gray-400'}`}>
                      {stat.label}
                    </span>
                    <stat.icon className={stat.gradient ? 'text-white/80' : `text-${stat.color}-400`} size={20} />
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${stat.gradient ? 'text-white' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  {stat.growth && (
                    <div className={`text-${stat.color}-400 text-xs flex items-center gap-1 font-semibold`}>
                      <ArrowUp size={12} />
                      {stat.growth}
                    </div>
                  )}
                  {stat.rate && (
                    <div className="text-white/80 text-xs font-medium">{stat.rate} response rate</div>
                  )}
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-3 gap-6">
              {/* Engagement Trends */}
              <div className="col-span-2 glass-card p-6 animate-slide-up" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="text-blue-400" size={20} />
                    Engagement Trends
                  </h3>
                  <select className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-xl">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={[
                    { day: 'Mon', upvotes: 180, comments: 45, views: 1200 },
                    { day: 'Tue', upvotes: 220, comments: 58, views: 1580 },
                    { day: 'Wed', upvotes: 195, comments: 42, views: 1350 },
                    { day: 'Thu', upvotes: 280, comments: 71, views: 1890 },
                    { day: 'Fri', upvotes: 245, comments: 63, views: 1720 },
                    { day: 'Sat', upvotes: 150, comments: 38, views: 1100 },
                    { day: 'Sun', upvotes: 239, comments: 55, views: 1510 }
                  ]}>
                    <defs>
                      <linearGradient id="upvotes" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="comments" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="views" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px' }} />
                    <Legend />
                    <Area type="monotone" dataKey="upvotes" stroke="#10b981" strokeWidth={3} fill="url(#upvotes)" name="Upvotes" />
                    <Area type="monotone" dataKey="comments" stroke="#3b82f6" strokeWidth={3} fill="url(#comments)" name="Comments" />
                    <Area type="monotone" dataKey="views" stroke="#a855f7" strokeWidth={3} fill="url(#views)" name="Views" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Overall Sentiment */}
              <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <h3 className="text-lg font-semibold text-white mb-4">Overall Sentiment</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie 
                      data={[
                        { name: 'Positive', value: 205, color: '#10b981' },
                        { name: 'Neutral', value: 29, color: '#6b7280' },
                        { name: 'Negative', value: 25, color: '#ef4444' }
                      ]} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius={50}
                      outerRadius={75} 
                      dataKey="value"
                      label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      <Cell fill="#10b981" />
                      <Cell fill="#6b7280" />
                      <Cell fill="#ef4444" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {[
                    { label: 'Positive', color: 'green', value: '79.2%' },
                    { label: 'Neutral', color: 'gray', value: '11.2%' },
                    { label: 'Negative', color: 'red', value: '9.6%' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                        <span className="text-gray-400">{item.label}</span>
                      </div>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Subreddits */}
            <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '700ms' }}>
              <h3 className="text-lg font-semibold text-white mb-4">Top Performing Subreddits</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'r/technology', value: 342 },
                  { name: 'r/startups', value: 567 },
                  { name: 'r/SaaS', value: 234 }
                ].map((sub, idx) => (
                  <div key={idx} className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30 hover:border-orange-500/50 transition-all">
                    <div className="text-orange-400 font-semibold mb-1">{sub.name}</div>
                    <div className="text-3xl font-bold text-white mb-1">{sub.value}</div>
                    <div className="text-sm text-gray-400">avg upvotes</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="animate-slide-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Recent Posts</h3>
                <div className="flex items-center gap-2">
                  <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 backdrop-blur-xl">
                    <option>All Subreddits</option>
                    <option>r/technology</option>
                    <option>r/startups</option>
                  </select>
                  <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50 backdrop-blur-xl">
                    <option>All Time</option>
                    <option>Today</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {redditPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="glass-card p-6 cursor-pointer group hover:scale-[1.01] transition-all hover:border-orange-500/50"
                    style={{ animationDelay: `${900 + idx * 100}ms` }}
                  >
                    <div className="flex gap-6">
                      {/* Quick Stats Sidebar */}
                      <div className="flex flex-col items-center gap-3 py-2">
                        <div className="flex flex-col items-center">
                          <ThumbsUp className="text-green-400 mb-1" size={20} />
                          <span className="text-xl font-bold text-white">{post.upvotes}</span>
                          <span className="text-xs text-gray-500">upvotes</span>
                        </div>
                        <div className="w-12 h-px bg-white/20"></div>
                        <div className="flex flex-col items-center">
                          <MessageCircle className="text-blue-400 mb-1" size={20} />
                          <span className="text-xl font-bold text-white">{post.comments}</span>
                          <span className="text-xs text-gray-500">comments</span>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1.5 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold border border-orange-500/30">
                            {post.subreddit}
                          </span>
                          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                            post.status === 'trending' ? 'bg-red-500/20 text-red-300 border-red-500/30 animate-pulse' :
                            post.status === 'hot' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                            'bg-blue-500/20 text-blue-300 border-blue-500/30'
                          }`}>
                            🔥 {post.status.toUpperCase()}
                          </span>
                          <span className="text-gray-500 text-sm ml-auto">{post.timestamp}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">{post.content}</p>
                        
                        {/* Bottom Stats */}
                        <div className="flex items-center gap-6 text-sm pt-3 border-t border-white/10">
                          <div className="flex items-center gap-2">
                            <Eye className="text-purple-400" size={16} />
                            <span className="text-gray-300 font-medium">{post.views.toLocaleString()} views</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="text-yellow-400 animate-pulse" size={16} />
                            <span className="text-gray-300 font-medium">{post.autoReplied} AI replies</span>
                            <span className="text-xs text-gray-500">({Math.round((post.autoReplied / post.comments) * 100)}%)</span>
                          </div>
                          <div className="ml-auto flex items-center gap-3 bg-white/5 rounded-lg px-3 py-1.5 backdrop-blur-xl">
                            {[
                              { color: 'green', value: post.sentiment.positive },
                              { color: 'gray', value: post.sentiment.neutral },
                              { color: 'red', value: post.sentiment.negative }
                            ].map((sentiment, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <div className={`w-2.5 h-2.5 rounded-full bg-${sentiment.color}-500`}></div>
                                <span className="text-gray-300 font-medium">{sentiment.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center">
                        <div className="text-orange-400 text-2xl group-hover:translate-x-2 transition-transform">→</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          animation: gradient 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        input[type="range"].slider {
          -webkit-appearance: none;
          appearance: none;
        }
        
        input[type="range"].slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }
        
        input[type="range"].slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
        
        input[type="range"].slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          transition: all 0.2s;
        }
        
        input[type="range"].slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
        }
      `}</style>
    </div>
  );
};

export default MascotApp;