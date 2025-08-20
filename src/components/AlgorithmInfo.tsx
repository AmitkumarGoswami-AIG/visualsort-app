import React from 'react';
import { SortingAlgorithm, SortingStep } from '../types';

interface AlgorithmInfoProps {
  algorithm: SortingAlgorithm | null;
  currentStep: SortingStep | undefined;
  totalSteps: number;
  currentStepIndex: number;
}

const AlgorithmInfo: React.FC<AlgorithmInfoProps> = ({ 
  algorithm, 
  currentStep, 
  totalSteps, 
  currentStepIndex 
}) => {
  if (!algorithm) {
    return (
      <div className="bg-secondary-light border-t border-border-light p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">Select an algorithm to see its details and statistics</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-light border-t border-border-light p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-3">{algorithm.name}</h3>
            <p className="text-gray-700 mb-4">{algorithm.description}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Time Complexity (Best):</span>
                <span className="text-sm text-text-dark">{algorithm.timeComplexity.best}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Time Complexity (Average):</span>
                <span className="text-sm text-text-dark">{algorithm.timeComplexity.average}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Time Complexity (Worst):</span>
                <span className="text-sm text-text-dark">{algorithm.timeComplexity.worst}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Space Complexity:</span>
                <span className="text-sm text-text-dark">{algorithm.spaceComplexity}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-3">Statistics</h3>
            
            {currentStep ? (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">Step:</span>
                  <span className="text-sm text-text-dark">{currentStepIndex + 1} / {totalSteps}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">Comparisons:</span>
                  <span className="text-sm text-text-dark">{currentStep.comparisons}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-600">Swaps:</span>
                  <span className="text-sm text-text-dark">{currentStep.swaps}</span>
                </div>
                
                <div className="mt-4 p-3 bg-white rounded-lg border border-border-light">
                  <p className="text-sm text-gray-700">{currentStep.description}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">Start sorting to see live statistics</p>
            )}
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-border-light">
          <h4 className="text-sm font-semibold text-text-dark mb-2">Legend:</h4>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary-light border border-border-light"></div>
              <span className="text-sm text-gray-600">Unsorted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-compare-yellow border border-border-light"></div>
              <span className="text-sm text-gray-600">Comparing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sorted-green border border-border-light"></div>
              <span className="text-sm text-gray-600">Sorted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pivot-red border border-border-light"></div>
              <span className="text-sm text-gray-600">Pivot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmInfo;