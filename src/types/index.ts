export interface ArrayElement {
  value: number;
  state: 'default' | 'comparing' | 'sorted' | 'pivot';
}

export interface SortingStep {
  array: ArrayElement[];
  comparisons: number;
  swaps: number;
  description: string;
}

export interface SortingAlgorithm {
  name: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  description: string;
  sort: (array: number[]) => SortingStep[];
}

export interface SortingStats {
  comparisons: number;
  swaps: number;
  arrayAccesses: number;
}