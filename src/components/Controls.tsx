import React from 'react';
import { SortingAlgorithm } from '../types';
import { ALGORITHMS, MIN_SPEED, MAX_SPEED, MIN_ARRAY_SIZE, MAX_ARRAY_SIZE } from '../utils/constants';

interface ControlsProps {
  selectedAlgorithm: SortingAlgorithm | null;
  isPlaying: boolean;
  speed: number;
  arraySize: number;
  onAlgorithmSelect: (algorithm: SortingAlgorithm) => void;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  onArraySizeChange: (size: number) => void;
  onStepForward: () => void;
  onStepBackward: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  selectedAlgorithm,
  isPlaying,
  speed,
  arraySize,
  onAlgorithmSelect,
  onPlay,
  onPause,
  onReset,
  onSpeedChange,
  onArraySizeChange,
  onStepForward,
  onStepBackward,
}) => {
  return (
    <div className="bg-white border-b border-border-light p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-text-dark">Algorithm:</label>
            <select
              value={selectedAlgorithm?.name || ''}
              onChange={(e) => {
                const algorithm = ALGORITHMS.find(alg => alg.name === e.target.value);
                if (algorithm) onAlgorithmSelect(algorithm);
              }}
              className="px-3 py-2 border border-border-light rounded-lg bg-white text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              <option value="">Select Algorithm</option>
              {ALGORITHMS.map((algorithm) => (
                <option key={algorithm.name} value={algorithm.name}>
                  {algorithm.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onStepBackward}
              disabled={isPlaying}
              className="px-3 py-2 bg-secondary-light border border-border-light rounded-lg text-text-dark hover:bg-gray-300 disabled:opacity-50"
            >
              ⏮
            </button>
            
            {isPlaying ? (
              <button
                onClick={onPause}
                className="px-4 py-2 bg-primary-light border border-border-light rounded-lg text-text-dark hover:bg-blue-200"
              >
                ⏸ Pause
              </button>
            ) : (
              <button
                onClick={onPlay}
                disabled={!selectedAlgorithm}
                className="px-4 py-2 bg-accent-green border border-border-light rounded-lg text-white hover:bg-green-600 disabled:opacity-50"
              >
                ▶ Play
              </button>
            )}

            <button
              onClick={onStepForward}
              disabled={isPlaying}
              className="px-3 py-2 bg-secondary-light border border-border-light rounded-lg text-text-dark hover:bg-gray-300 disabled:opacity-50"
            >
              ⏭
            </button>

            <button
              onClick={onReset}
              className="px-4 py-2 bg-pivot-red border border-border-light rounded-lg text-white hover:bg-red-600"
            >
              🔄 Reset
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-text-dark">Speed:</label>
            <input
              type="range"
              min={MIN_SPEED}
              max={MAX_SPEED}
              value={speed}
              onChange={(e) => onSpeedChange(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm text-gray-600">{Math.round((MAX_SPEED - speed + MIN_SPEED) / 100)}x</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-text-dark">Size:</label>
            <input
              type="range"
              min={MIN_ARRAY_SIZE}
              max={MAX_ARRAY_SIZE}
              value={arraySize}
              onChange={(e) => onArraySizeChange(Number(e.target.value))}
              className="w-20"
            />
            <span className="text-sm text-gray-600">{arraySize}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;