'use client';

import { useState, useEffect } from 'react';
import { useReviews } from '../context/ReviewContext';

interface ReviewSectionProps {
  calculatorType: string;
}

export default function ReviewSection({ calculatorType }: ReviewSectionProps) {
  const [userRating, setUserRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);
  const { getReviews, updateReview } = useReviews();
  const reviews = getReviews(calculatorType);

  useEffect(() => {
    const userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
    if (userRatings[calculatorType]) {
      setHasRated(true);
      setUserRating(userRatings[calculatorType]);
    }
  }, [calculatorType]);

  const handleRating = (rating: number) => {
    if (!hasRated) {
      updateReview(calculatorType, rating);
      
      const userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
      userRatings[calculatorType] = rating;
      localStorage.setItem('userRatings', JSON.stringify(userRatings));
      
      setUserRating(rating);
      setHasRated(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4 text-golden-700">Rate this Calculator</h2>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((coin) => (
            <button
              key={coin}
              onClick={() => handleRating(coin)}
              onMouseEnter={() => !hasRated && setHoveredRating(coin)}
              onMouseLeave={() => !hasRated && setHoveredRating(0)}
              disabled={hasRated}
              className={`text-3xl transition-colors duration-200 ${
                hasRated
                  ? userRating >= coin
                    ? 'text-golden-500'
                    : 'text-gray-300'
                  : hoveredRating >= coin
                    ? 'text-golden-400'
                    : 'text-gray-300'
              }`}
            >
              {hasRated || hoveredRating >= coin ? '🪙' : '⚪'}
            </button>
          ))}
        </div>
        <p className="text-gray-600">
          {hasRated 
            ? `You rated this calculator ${userRating} coins` 
            : 'Rate this calculator with coins'}
        </p>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Average Rating: <span className="font-bold">{reviews.rating}/5</span>
          </p>
          <p className="text-gray-600 mb-6">
            ({reviews.count.toLocaleString()} ratings)
          </p>
        </div>

        {/* Author Box */}
        <div className="border-t pt-6 mt-6 w-full">
          <div className="flex items-center gap-4">
            <img 
              src="/author-avatar.jpg" 
              alt="Tuomas J."
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Tuomas J.</h3>
              <p className="text-gray-600">Financial Calculator Expert</p>
              <p className="text-sm text-gray-500 mt-1">
                Creating precise financial calculators to help you make better money decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






























































































































































































































































































































































































































































































































