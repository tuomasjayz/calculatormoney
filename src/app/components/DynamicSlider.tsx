'use client';

import React from 'react';

interface DynamicSliderProps {
  label: string;
  value: number;
  onChangeAction: (value: number) => void;
  min: number;
  max: number;
  step: number;
}

export default function DynamicSlider({
  label,
  value,
  onChangeAction,
  min,
  max,
  step
}: DynamicSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-gray-700 font-medium">{label}</label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChangeAction(Number(e.target.value))}
          className="w-32 px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-golden-500 focus:border-transparent"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChangeAction(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-golden-600"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>${min.toLocaleString()}</span>
        <span>${max.toLocaleString()}</span>
      </div>
    </div>
  );
} 














