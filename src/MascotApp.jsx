import React, { useEffect, useState } from "react";
import { MessageSquare, Zap, Settings, Brain, Plus, Save, Sparkles, TrendingUp } from "lucide-react";
import RedditPostDetail from "./components/reddit/RedditPostDetail.jsx";
import RedditPostCard from "./components/reddit/RedditPostCard.jsx";
import { redditPosts as POSTS, platforms as PLATFORMS } from "./mocks/reddit.js";

export default function MascotApp() {
  const [activeView, setActiveView] = useState("reddit"); // start on reddit so you see content
  const [selectedPost, setSelectedPost] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ posts: 0, upvotes: 0, comments: 0, views: 0, ai: 0 });

  // demo animation when on reddit list
  useEffect(() => setIsVisible(true), []);
  useEffect(() => {
    if (activeView === "reddit" && !selectedPost) {
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
        if (step >= steps) { clearInterval(t); setCounters(targets); }
      }, interval);
      return () => clearInterval(t);
    }
  }, [activeView, selectedPost]);

  // settings state (kept here for now)
  const [autoReplyEnabled, setAutoReplyEnabled] = useState({ reddit: true, instagram: false, twitter: false, facebook: false });
  const [botPersonality, setBotPersonality] = useState({ sassiness: 3, comedy: 4, professionalism: 5, enthusiasm: 4, empathy: 5 });
  const [useBrandKnowledge, setUseBrandKnowledge] = useState(true);
  const [brandKnowledge, setBrandKnowledge] = useState({
    brandVoice: "We are friendly, professional, and innovative. We believe in making technology accessible to everyone.",
    productInfo: "Our AI-powered social media management tool helps brands engage authentically with their audience.",
    values: "Innovation, Authenticity, Customer Success, Transparency",
    faqs: "Q: What platforms do you support?\nA: Currently Reddit, with Instagram, Twitter, and Facebook coming soon.",
    doNot: "Avoid discussing competitor pricing. Never make promises about unreleased features.",
  });

  const redditPosts = POSTS;
  const platforms = PLATFORMS;

  if (selectedPost) {
    return <RedditPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />

      {/* header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Zap className="text-yellow-400" size={32} strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Mascot</h1>
              <p className="text-xs text-gray-400 font-medium">AI Social Media Intelligence</p>
            </div>
          </div>
          <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all">
            <Settings className="text-gray-400" size={20} />
          </button>
        </div>
      </header>

      {/* nav */}
      <nav className="sticky top-[81px] z-30 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: "knowledge", label: "Brand Knowledge", icon: Brain },
              { id: "autoreply", label: "Auto-Reply", icon: Sparkles },
              { id: "reddit", label: "Reddit", icon: MessageSquare, badge: "2" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-4 transition-all ${
                  activeView === tab.id ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon size={18} className={activeView === tab.id ? "animate-pulse" : ""} />
                <span className="font-medium">{tab.label}</span>
                {tab.badge && tab.id === "reddit" && (
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

      {/* content */}
      <main className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Reddit View */}
        {activeView === "reddit" && (
          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {/* header actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <MessageSquare className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">Reddit Analytics</h2>
                  <p className="text-gray-400">Complete overview of your Reddit presence</p>
                </div>
              </div>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold flex items-center gap-2">
                <Plus size={18} /> Create Post
              </button>
            </div>

            {/* mini stats */}
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

            {/* recent posts */}
            <div className="space-y-4">
              {redditPosts.map((post) => (
                <RedditPostCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
              ))}
            </div>
          </div>
        )}

        {/* Knowledge View */}
        {activeView === "knowledge" && (
          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                  Brand Knowledge Base
                </h2>
                <p className="text-gray-400">Train your AI mascot with your brand's unique voice</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2">
                <Save size={18} /> Save Changes
              </button>
            </div>

            <div className="glass-card p-6">
              <div className="mb-2 text-gray-300 font-semibold">Brand Voice & Tone</div>
              <textarea
                className="w-full bg-white/5 text-gray-100 p-4 rounded-xl border border-white/10"
                rows={4}
                value={brandKnowledge.brandVoice}
                onChange={(e) => setBrandKnowledge({ ...brandKnowledge, brandVoice: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* Auto-Reply View */}
        {activeView === "autoreply" && (
          <div className={`space-y-6 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Auto-Reply Configuration
            </h2>
            <div className="glass-card p-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-purple-400" />
                  <div className="text-white font-semibold">Use Brand Knowledge</div>
                </div>
                <label className="inline-flex items-center gap-2 text-gray-300">
                  <input type="checkbox" checked={useBrandKnowledge} onChange={(e) => setUseBrandKnowledge(e.target.checked)} />
                  Enable
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((p) => (
                  <label key={p.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                    <span className="text-white">{p.name}</span>
                    <input
                      type="checkbox"
                      disabled={!p.available}
                      checked={!!autoReplyEnabled[p.id]}
                      onChange={(e) => setAutoReplyEnabled({ ...autoReplyEnabled, [p.id]: e.target.checked })}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
