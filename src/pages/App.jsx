// src/pages/App.jsx
import React, { useState } from 'react';
import { AppShell } from '../components/layout/AppShell';
import { RedditDashboard } from '../components/reddit/RedditDashboard';
import { RedditPostDetail } from '../components/reddit/RedditPostDetail';
import { KnowledgePage } from '../features/knowledge/KnowledgePage';
import { AutoReplyPage } from '../features/autoreply/AutoReplyPage';
import { useAppStore } from '../app/store';

export const App = () => {
  const { activeView } = useAppStore();
  const [selectedPost, setSelectedPost] = useState(null);

  // Handler for when a post is clicked
  const handlePostClick = (post) => {
    console.log('Post clicked:', post); // Debug log
    setSelectedPost(post);
  };

  // Handler for going back to dashboard
  const handleBackToDashboard = () => {
    console.log('Going back to dashboard'); // Debug log
    setSelectedPost(null);
  };

  return (
    <AppShell>
      {/* Show Post Detail if a post is selected AND we're on Reddit view */}
      {activeView === 'reddit' && selectedPost ? (
        <RedditPostDetail 
          post={selectedPost} 
          onBack={handleBackToDashboard}
        />
      ) : (
        <>
          {activeView === 'knowledge' && <KnowledgePage />}
          {activeView === 'autoreply' && <AutoReplyPage />}
          {activeView === 'reddit' && (
            <RedditDashboard onPostClick={handlePostClick} />
          )}
        </>
      )}
    </AppShell>
  );
};