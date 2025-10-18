// src/features/knowledge/useKnowledge.js
import { useAppStore } from '../../app/store';

export const useKnowledge = () => {
  const { brandKnowledge, setBrandKnowledge } = useAppStore();

  const updateKnowledge = (field, value) => {
    setBrandKnowledge({
      ...brandKnowledge,
      [field]: value
    });
  };

  const saveKnowledge = async () => {
    // Here you would typically save to your backend
    console.log('Saving brand knowledge:', brandKnowledge);
    
    // For now, just show a success message
    // You can add a toast notification here
    alert('Brand knowledge saved successfully!');
    
    // Example API call (uncomment when backend is ready):
    // try {
    //   const response = await fetch('/api/brand-knowledge', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(brandKnowledge)
    //   });
    //   if (response.ok) {
    //     alert('Saved successfully!');
    //   }
    // } catch (error) {
    //   console.error('Error saving:', error);
    //   alert('Failed to save. Please try again.');
    // }
  };

  return {
    brandKnowledge,
    updateKnowledge,
    saveKnowledge
  };
};