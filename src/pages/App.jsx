// src/pages/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@stackframe/stack';
import { AppShell } from '../components/layout/AppShell';
import { Dashboard } from './Dashboard';
import { AnalyzePage } from './AnalyzePage';
import { MascotBotPage } from './MascotBotPage';
import { KnowledgePage } from './KnowledgePage';
import { Settings } from './Settings';

export const App = () => {
  const user = useUser({ or: 'redirect' });

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analyze" element={<AnalyzePage />} />
        <Route path="/mascot" element={<MascotBotPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppShell>
  );
};