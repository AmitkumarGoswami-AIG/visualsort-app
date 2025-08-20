import { SortingStep, ArrayElement } from '../types';

export function bubbleSort(array: number[]): SortingStep[] {
  const steps: SortingStep[] = [];
  const arr = array.slice();
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      comparisons++;
      
      const stepArray: ArrayElement[] = arr.map((value, index) => ({
        value,
        state: index === j || index === j + 1 ? 'comparing' : 
               index >= arr.length - i ? 'sorted' : 'default'
      }));

      steps.push({
        array: stepArray,
        comparisons,
        swaps,
        description: `Comparing elements at positions ${j} and ${j + 1}`
      });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
        
        const swapArray: ArrayElement[] = arr.map((value, index) => ({
          value,
          state: index === j || index === j + 1 ? 'comparing' : 
                 index >= arr.length - i ? 'sorted' : 'default'
        }));

        steps.push({
          array: swapArray,
          comparisons,
          swaps,
          description: `Swapped elements at positions ${j} and ${j + 1}`
        });
      }
    }
  }

  const finalArray: ArrayElement[] = arr.map(value => ({ value, state: 'sorted' }));
  steps.push({
    array: finalArray,
    comparisons,
    swaps,
    description: 'Sorting complete!'
  });

  return steps;
}

export function selectionSort(array: number[]): SortingStep[] {
  const steps: SortingStep[] = [];
  const arr = array.slice();
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      
      const stepArray: ArrayElement[] = arr.map((value, index) => ({
        value,
        state: index < i ? 'sorted' : 
               index === j || index === minIndex ? 'comparing' : 'default'
      }));

      steps.push({
        array: stepArray,
        comparisons,
        swaps,
        description: `Comparing element at position ${j} with minimum at ${minIndex}`
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      swaps++;
      
      const swapArray: ArrayElement[] = arr.map((value, index) => ({
        value,
        state: index <= i ? 'sorted' : 'default'
      }));

      steps.push({
        array: swapArray,
        comparisons,
        swaps,
        description: `Swapped minimum element from position ${minIndex} to ${i}`
      });
    }
  }

  const finalArray: ArrayElement[] = arr.map(value => ({ value, state: 'sorted' }));
  steps.push({
    array: finalArray,
    comparisons,
    swaps,
    description: 'Sorting complete!'
  });

  return steps;
}

export function insertionSort(array: number[]): SortingStep[] {
  const steps: SortingStep[] = [];
  const arr = array.slice();
  let comparisons = 0;
  let swaps = 0;

  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      comparisons++;
      
      const stepArray: ArrayElement[] = arr.map((value, index) => ({
        value,
        state: index < i ? 'sorted' : 
               index === j || index === j + 1 ? 'comparing' : 'default'
      }));

      steps.push({
        array: stepArray,
        comparisons,
        swaps,
        description: `Moving element ${arr[j]} one position ahead`
      });

      arr[j + 1] = arr[j];
      swaps++;
      j--;
    }
    
    arr[j + 1] = key;
    
    const insertArray: ArrayElement[] = arr.map((value, index) => ({
      value,
      state: index <= i ? 'sorted' : 'default'
    }));

    steps.push({
      array: insertArray,
      comparisons,
      swaps,
      description: `Inserted ${key} at position ${j + 1}`
    });
  }

  const finalArray: ArrayElement[] = arr.map(value => ({ value, state: 'sorted' }));
  steps.push({
    array: finalArray,
    comparisons,
    swaps,
    description: 'Sorting complete!'
  });

  return steps;
}

export function quickSort(array: number[]): SortingStep[] {
  const steps: SortingStep[] = [];
  const arr = array.slice();
  let comparisons = 0;
  let swaps = 0;

  function partition(low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      
      const stepArray: ArrayElement[] = arr.map((value, index) => ({
        value,
        state: index === high ? 'pivot' : 
               index === j ? 'comparing' : 'default'
      }));

      steps.push({
        array: stepArray,
        comparisons,
        swaps,
        description: `Comparing ${arr[j]} with pivot ${pivot}`
      });

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swaps++;
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    swaps++;
    
    return i + 1;
  }

  function quickSortHelper(low: number, high: number) {
    if (low < high) {
      const pi = partition(low, high);
      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    }
  }

  quickSortHelper(0, arr.length - 1);

  const finalArray: ArrayElement[] = arr.map(value => ({ value, state: 'sorted' }));
  steps.push({
    array: finalArray,
    comparisons,
    swaps,
    description: 'Sorting complete!'
  });

  return steps;
}