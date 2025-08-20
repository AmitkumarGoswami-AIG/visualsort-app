import { useState, useCallback, useRef } from 'react';
import { SortingStep, SortingAlgorithm, ArrayElement } from '../types';
import { DEFAULT_ARRAY_SIZE, DEFAULT_SPEED } from '../utils/constants';

export function useSorting() {
  const [array, setArray] = useState<ArrayElement[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<SortingStep[]>([]);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [arraySize, setArraySize] = useState(DEFAULT_ARRAY_SIZE);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortingAlgorithm | null>(null);
  const intervalRef = useRef<number | null>(null);

  const generateRandomArray = useCallback((size: number = arraySize) => {
    const newArray: ArrayElement[] = [];
    for (let i = 0; i < size; i++) {
      newArray.push({
        value: Math.floor(Math.random() * 300) + 10,
        state: 'default'
      });
    }
    setArray(newArray);
    setCurrentStep(0);
    setSteps([]);
  }, [arraySize]);

  const startSorting = useCallback((algorithm: SortingAlgorithm) => {
    if (!array.length) return;
    
    const arrayValues = array.map(el => el.value);
    const sortingSteps = algorithm.sort(arrayValues);
    setSteps(sortingSteps);
    setCurrentStep(0);
    setSelectedAlgorithm(algorithm);
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= sortingSteps.length - 1) {
          setIsPlaying(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return prev;
        }
        return prev + 1;
      });
    }, speed);
  }, [array, speed]);

  const pauseSorting = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resumeSorting = useCallback(() => {
    if (currentStep >= steps.length - 1) return;
    
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          return prev;
        }
        return prev + 1;
      });
    }, speed);
  }, [currentStep, steps.length, speed]);

  const resetSorting = useCallback(() => {
    pauseSorting();
    setCurrentStep(0);
    setSteps([]);
    setSelectedAlgorithm(null);
    generateRandomArray();
  }, [pauseSorting, generateRandomArray]);

  const stepForward = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, steps.length]);

  const stepBackward = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const updateSpeed = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return prev;
          }
          return prev + 1;
        });
      }, newSpeed);
    }
  }, [isPlaying, steps.length]);

  const updateArraySize = useCallback((size: number) => {
    setArraySize(size);
    generateRandomArray(size);
  }, [generateRandomArray]);

  const currentStepData = steps[currentStep];
  const displayArray = currentStepData ? currentStepData.array : array;

  return {
    array: displayArray,
    isPlaying,
    currentStep,
    steps,
    speed,
    arraySize,
    selectedAlgorithm,
    currentStepData,
    generateRandomArray,
    startSorting,
    pauseSorting,
    resumeSorting,
    resetSorting,
    stepForward,
    stepBackward,
    updateSpeed,
    updateArraySize
  };
}