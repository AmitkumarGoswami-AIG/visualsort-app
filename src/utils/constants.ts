import { SortingAlgorithm } from '../types';
import { bubbleSort, selectionSort, insertionSort, quickSort } from './algorithms';

export const ALGORITHMS: SortingAlgorithm[] = [
  {
    name: 'Bubble Sort',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
    sort: bubbleSort
  },
  {
    name: 'Selection Sort',
    timeComplexity: {
      best: 'O(n²)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    description: 'Finds the minimum element and places it at the beginning, then repeats for the remaining elements.',
    sort: selectionSort
  },
  {
    name: 'Insertion Sort',
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    description: 'Builds the final sorted array one item at a time by inserting each element into its correct position.',
    sort: insertionSort
  },
  {
    name: 'Quick Sort',
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    description: 'Divides the array into sub-arrays around a pivot element and recursively sorts the sub-arrays.',
    sort: quickSort
  }
];

export const DEFAULT_ARRAY_SIZE = 30;
export const MIN_ARRAY_SIZE = 10;
export const MAX_ARRAY_SIZE = 100;
export const DEFAULT_SPEED = 500; // milliseconds
export const MIN_SPEED = 50;
export const MAX_SPEED = 2000;