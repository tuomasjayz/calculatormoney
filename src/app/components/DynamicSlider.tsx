'use client';

import { useState, useEffect, ChangeEvent } from 'react';

interface DynamicSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  defaultValue: number;
}

export default function DynamicSlider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
  defaultValue
}: DynamicSliderProps) {
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="w-32">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-golden-500 focus:border-golden-500"
            min={min}
            max={max}
            step={step}
          />
        </div>
      </div>
      <div className="relative w-full">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-golden"
          style={{
            background: `linear-gradient(to right, #EBA54D 0%, #EBA54D ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`
          }}
        />
      </div>
    </div>
  );
} 






