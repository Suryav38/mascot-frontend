import { useState } from 'react';
import { defaultBotPersonality } from '../../mocks/brand';

export const useAutoReply = () => {
  const [autoReplyEnabled, setAutoReplyEnabled] = useState({
    reddit: true,
    instagram: false,
    twitter: false,
    facebook: false
  });

  const [botPersonality, setBotPersonality] = useState(defaultBotPersonality);
  const [useBrandKnowledge, setUseBrandKnowledge] = useState(true);

  const togglePlatform = (platform) => {
    setAutoReplyEnabled(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const updatePersonality = (trait, value) => {
    setBotPersonality(prev => ({
      ...prev,
      [trait]: parseInt(value)
    }));
  };

  const saveConfiguration = () => {
    console.log('Saving configuration:', { autoReplyEnabled, botPersonality, useBrandKnowledge });
    // API call would go here
  };

  return {
    autoReplyEnabled,
    togglePlatform,
    botPersonality,
    updatePersonality,
    useBrandKnowledge,
    setUseBrandKnowledge,
    saveConfiguration
  };
};