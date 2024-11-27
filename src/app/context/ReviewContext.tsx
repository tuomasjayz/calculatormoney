'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { CalculatorType } from '../utils/calculatorTypes';

interface ReviewData {
  count: number;
  rating: number;
}

interface ReviewContextType {
  getReviews: (calculatorType: CalculatorType) => ReviewData;
  updateReview: (calculatorType: CalculatorType, rating: number) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

const defaultReviews: Record<CalculatorType, ReviewData> = {
  'loan-payment': { count: 12567, rating: 4.9 },
  'mortgage-interest': { count: 15234, rating: 4.8 },
  'credit-card': { count: 8765, rating: 4.8 },
  'credit-card-interest': { count: 9543, rating: 4.8 },  // Add this
  'compound-interest': { count: 9876, rating: 4.7 },
  'savings-goal': { count: 8432, rating: 4.8 },
  'loan-interest': { count: 29876, rating: 4.7 },
  'continuous-compound': { count: 7654, rating: 4.9 }
};

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Record<CalculatorType, ReviewData>>(defaultReviews);

  useEffect(() => {
    const savedReviews = localStorage.getItem('calculatorReviews');
    if (savedReviews) {
      setReviews({ ...defaultReviews, ...JSON.parse(savedReviews) });
    }
  }, []);

  const getReviews = (calculatorType: CalculatorType): ReviewData => {
    return reviews[calculatorType] || defaultReviews[calculatorType];
  };

  const updateReview = (calculatorType: CalculatorType, newRating: number) => {
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