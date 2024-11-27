'use client';

import { useState, useEffect } from 'react';
import DynamicSlider from './DynamicSlider';

export default function Calculator() {
  const [currentWeight, setCurrentWeight] = useState(80);
  const [targetWeight, setTargetWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(30);
  const [results, setResults] = useState({
    bmi: 0,
    calories: 0,
    // Add other relevant results
  });

  // Calculate results automatically when any value changes
  useEffect(() => {
    calculateResults();
  }, [currentWeight, targetWeight, height, age]);

  const calculateResults = () => {
    // Calculate BMI
    const bmi = currentWeight / Math.pow(height / 100, 2);
    
    // Calculate base metabolic rate (BMR)
    const bmr = 10 * currentWeight + 6.25 * height - 5 * age + 5;
    
    setResults({
      bmi: Number(bmi.toFixed(1)),
      calories: Math.round(bmr),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="space-y-6">
        <DynamicSlider
          label="Nykyinen paino (kg)"
          value={currentWeight}
          onChange={setCurrentWeight}
          min={40}
          max={200}
          defaultValue={80}
        />

        <DynamicSlider
          label="Tavoitepaino (kg)"
          value={targetWeight}
          onChange={setTargetWeight}
          min={40}
          max={200}
          defaultValue={70}
        />

        <DynamicSlider
          label="Pituus (cm)"
          value={height}
          onChange={setHeight}
          min={120}
          max={220}
          defaultValue={170}
        />

        <DynamicSlider
          label="Ikä (vuotta)"
          value={age}
          onChange={setAge}
          min={18}
          max={100}
          defaultValue={30}
        />

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Tulokset</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>BMI:</span>
              <span className="font-semibold">{results.bmi}</span>
            </div>
            <div className="flex justify-between">
              <span>Päivittäinen energiantarve:</span>
              <span className="font-semibold">{results.calories} kcal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 