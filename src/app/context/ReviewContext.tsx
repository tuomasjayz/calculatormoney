'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ReviewData {
  count: number;
  rating: number;
}

interface ReviewContextType {
  getReviews: (calculatorType: string) => ReviewData;
  updateReview: (calculatorType: string, rating: number) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

const defaultReviews = {
  'loan-payment': { count: 12567, rating: 4.9 },
  'mortgage-interest': { count: 15234, rating: 4.8 },
  'credit-card': { count: 8765, rating: 4.8 },
  'compound-interest': { count: 9876, rating: 4.7 },
  'savings-goal': { count: 8432, rating: 4.8 },
  'loan-interest': { count: 29876, rating: 4.7 },
  'continuous-compound': { count: 7654, rating: 4.9 }
};

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Record<string, ReviewData>>(defaultReviews);

  // Load saved reviews after initial render
  useEffect(() => {
    const savedReviews = localStorage.getItem('calculatorReviews');
    if (savedReviews) {
      const parsedReviews = JSON.parse(savedReviews);
      // Merge with defaults to ensure all calculators have initial values
      const mergedReviews = {
        ...defaultReviews,
        ...parsedReviews
      };
      setReviews(mergedReviews);
    }
  }, []);

  const getReviews = (calculatorType: string): ReviewData => {
    return reviews[calculatorType] || defaultReviews[calculatorType];
  };

  const updateReview = (calculatorType: string, newRating: number) => {
    setReviews(prev => {
      const current = prev[calculatorType];
      const newCount = current.count + 1;
      const newAvgRating = Number(
        ((current.rating * current.count + newRating) / newCount).toFixed(1)
      );

      const updated = {
        ...prev,
        [calculatorType]: {
          count: newCount,
          rating: newAvgRating
        }
      };

      localStorage.setItem('calculatorReviews', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <ReviewContext.Provider value={{ getReviews, updateReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviews must be used within a ReviewProvider');
  }
  return context;
} 


