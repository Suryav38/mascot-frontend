import { useState, useEffect } from 'react';

export const useAnimatedCounter = (targetValues, shouldAnimate = true) => {
  const [counters, setCounters] = useState(
    Object.keys(targetValues).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  );

  useEffect(() => {
    if (!shouldAnimate) {
      setCounters(targetValues);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const newCounters = {};
      
      Object.keys(targetValues).forEach(key => {
        newCounters[key] = Math.floor((targetValues[key] / steps) * step);
      });
      
      setCounters(newCounters);
      
      if (step >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [shouldAnimate]);

  return counters;
};