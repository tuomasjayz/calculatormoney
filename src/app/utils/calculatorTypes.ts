export type CalculatorType = 
  | 'loan-payment'
  | 'mortgage-interest'
  | 'credit-card'
  | 'compound-interest'
  | 'savings-goal'
  | 'loan-interest'
  | 'continuous-compound';

const validCalculatorTypes: CalculatorType[] = [
  'loan-payment',
  'mortgage-interest',
  'credit-card',
  'compound-interest',
  'savings-goal',
  'loan-interest',
  'continuous-compound'
];

export function stringToCalculatorType(type: string): CalculatorType {
  const normalizedType = type.toLowerCase().trim();
  
  if (validCalculatorTypes.includes(normalizedType as CalculatorType)) {
    return normalizedType as CalculatorType;
  }
  
  throw new Error(`Invalid calculator type: ${type}. Valid types are: ${validCalculatorTypes.join(', ')}`);
}

export function isValidCalculatorType(type: string): type is CalculatorType {
  return validCalculatorTypes.includes(type as CalculatorType);
} 