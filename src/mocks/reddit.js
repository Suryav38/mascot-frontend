export const redditPosts = [
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

export const engagementOverTimeData = [
  { time: '0h', upvotes: 20, comments: 5 },
  { time: '2h', upvotes: 80, comments: 15 },
  { time: '4h', upvotes: 150, comments: 30 },
  { time: '6h', upvotes: 250, comments: 55 },
  { time: '8h', upvotes: 320, comments: 70 }
];

export const weeklyEngagementData = [
  { day: 'Mon', upvotes: 180, comments: 45, views: 1200 },
  { day: 'Tue', upvotes: 220, comments: 58, views: 1580 },
  { day: 'Wed', upvotes: 195, comments: 42, views: 1350 },
  { day: 'Thu', upvotes: 280, comments: 71, views: 1890 },
  { day: 'Fri', upvotes: 245, comments: 63, views: 1720 },
  { day: 'Sat', upvotes: 150, comments: 38, views: 1100 },
  { day: 'Sun', upvotes: 239, comments: 55, views: 1510 }
];

export const topSubreddits = [
  { name: 'r/technology', value: 342 },
  { name: 'r/startups', value: 567 },
  { name: 'r/SaaS', value: 234 }
];

export const overallSentiment = [
  { name: 'Positive', value: 205, color: '#10b981' },
  { name: 'Neutral', value: 29, color: '#6b7280' },
  { name: 'Negative', value: 25, color: '#ef4444' }
];