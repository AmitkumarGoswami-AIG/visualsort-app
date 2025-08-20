import { useEffect } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Visualizer from './components/Visualizer';
import AlgorithmInfo from './components/AlgorithmInfo';
import { useSorting } from './hooks/useSorting';
import type { SortingAlgorithm } from './types';

function App() {
  const {
    array,
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
  } = useSorting();

  useEffect(() => {
    generateRandomArray();
  }, [generateRandomArray]);

  const handlePlay = () => {
    if (selectedAlgorithm) {
      if (steps.length > 0) {
        resumeSorting();
      } else {
        startSorting(selectedAlgorithm);
      }
    }
  };

  const handleAlgorithmSelect = (algorithm: SortingAlgorithm) => {
    if (isPlaying) {
      pauseSorting();
    }
    startSorting(algorithm);
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      
      <Controls
        selectedAlgorithm={selectedAlgorithm}
        isPlaying={isPlaying}
        speed={speed}
        arraySize={arraySize}
        onAlgorithmSelect={handleAlgorithmSelect}
        onPlay={handlePlay}
        onPause={pauseSorting}
        onReset={resetSorting}
        onSpeedChange={updateSpeed}
        onArraySizeChange={updateArraySize}
        onStepForward={stepForward}
        onStepBackward={stepBackward}
      />
      
      <Visualizer array={array} />
      
      <AlgorithmInfo
        algorithm={selectedAlgorithm}
        currentStep={currentStepData}
        totalSteps={steps.length}
        currentStepIndex={currentStep}
      />
    </div>
  );
}

export default App;