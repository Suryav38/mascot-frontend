export const platforms = [
  { id: 'reddit', name: 'Reddit', color: '#FF4500', icon: '🔴', available: true },
  { id: 'instagram', name: 'Instagram', color: '#E4405F', icon: '📷', available: false },
  { id: 'twitter', name: 'Twitter', color: '#1DA1F2', icon: '🐦', available: false },
  { id: 'facebook', name: 'Facebook', color: '#4267B2', icon: '👥', available: false }
];

export const defaultBrandKnowledge = {
  brandVoice: 'We are friendly, professional, and innovative. We believe in making technology accessible to everyone.',
  productInfo: 'Our AI-powered social media management tool helps brands engage authentically with their audience.',
  coreValues: 'Innovation, Authenticity, Customer Success, Transparency',
  targetAudience: 'Tech-savvy marketers, startups, and growing businesses looking to scale their social media presence.',
  commonResponses: 'Q: What platforms do you support?\nA: We support Reddit, Twitter, Instagram, and Facebook.\n\nQ: Is there a free trial?\nA: Yes, we offer a 14-day free trial.'
};

export const defaultBotPersonality = {
  sassiness: 3,
  comedy: 4,
  professionalism: 5,
  enthusiasm: 4,
  empathy: 5
};

export const knowledgeSections = [
  {
    field: 'brandVoice',
    title: 'Brand Voice & Tone',
    desc: 'Describe how your brand communicates',
    icon: 'Brain',
    colorClasses: 'bg-gradient-to-br from-blue-500 to-blue-600',
    rows: 4,
    placeholder: 'e.g., We are friendly, professional, and innovative. We believe in making technology accessible to everyone.',
    alert: false,
    mono: false
  },
  {
    field: 'productInfo',
    title: 'Product & Service Info',
    desc: 'Key details about what you offer',
    icon: 'Sparkles',
    colorClasses: 'bg-gradient-to-br from-purple-500 to-purple-600',
    rows: 5,
    placeholder: 'e.g., Our AI-powered social media management tool helps brands engage authentically with their audience.',
    alert: true,
    mono: false
  },
  {
    field: 'coreValues',
    title: 'Core Values & Mission',
    desc: 'What does your brand stand for?',
    icon: 'TrendingUp',
    colorClasses: 'bg-gradient-to-br from-green-500 to-emerald-600',
    rows: 4,
    placeholder: 'e.g., Innovation, Authenticity, Customer Success, Transparency',
    alert: false,
    mono: false
  },
  {
    field: 'targetAudience',
    title: 'Target Audience',
    desc: 'Who are you speaking to?',
    icon: 'MessageSquare',
    colorClasses: 'bg-gradient-to-br from-orange-500 to-red-600',
    rows: 3,
    placeholder: 'e.g., Tech-savvy marketers, startups, and growing businesses looking to scale their social media presence.',
    alert: false,
    mono: false
  },
  {
    field: 'commonResponses',
    title: 'Common Responses & FAQs',
    desc: 'Pre-approved responses to frequent questions',
    icon: 'Settings',
    colorClasses: 'bg-gradient-to-br from-pink-500 to-rose-600',
    rows: 6,
    placeholder: 'Q: What platforms do you support?\nA: We support Reddit, Twitter, Instagram, and Facebook.\n\nQ: Is there a free trial?\nA: Yes, we offer a 14-day free trial.',
    alert: false,
    mono: true
  }
];
