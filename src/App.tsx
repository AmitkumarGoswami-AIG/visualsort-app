import { useEffect } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Visualizer from './components/Visualizer';
import AlgorithmInfo from './components/AlgorithmInfo';
import FlowChart from './components/FlowChart';
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
      
      <main role="main" className="container mx-auto px-4">
        <section aria-label="Sorting Algorithm Controls">
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
        </section>
        
        <section aria-label="Sorting Visualization">
          <Visualizer array={array} />
        </section>
        
        <section aria-label="Algorithm Flowchart">
          <FlowChart algorithm={selectedAlgorithm} />
        </section>
        
        <aside aria-label="Algorithm Information">
          <AlgorithmInfo
            algorithm={selectedAlgorithm}
            currentStep={currentStepData}
            totalSteps={steps.length}
            currentStepIndex={currentStep}
          />
        </aside>

        {/* SEO Content Section */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8" aria-label="About Sorting Algorithms">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Learn Sorting Algorithms Interactively</h2>
          
          <p className="text-gray-700 mb-4">
            Master computer science fundamentals with our interactive sorting algorithm visualizer. 
            Watch <strong>Bubble Sort</strong>, <strong>Selection Sort</strong>, <strong>Insertion Sort</strong>, 
            and <strong>Quick Sort</strong> algorithms work step-by-step with real-time animations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Use Algorithm Visualization?</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Visual Learning:</strong> See how algorithms sort data in real-time</li>
            <li><strong>Interactive Education:</strong> Control speed, array size, and step through manually</li>
            <li><strong>Algorithm Comparison:</strong> Compare time complexity and performance</li>
            <li><strong>Interview Preparation:</strong> Practice with commonly asked sorting algorithms</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Educational Features</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Algorithm Flowcharts:</strong> Interactive diagrams showing logic flow</li>
            <li><strong>Performance Metrics:</strong> Real-time time and space complexity analysis</li>
            <li><strong>Step-by-Step Mode:</strong> Pause and examine each algorithm step</li>
            <li><strong>Responsive Design:</strong> Works on desktop, tablet, and mobile devices</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Perfect for Students and Educators</h3>
          <p className="text-gray-700">
            Our sorting algorithm visualizer is designed for computer science students, programming bootcamp participants, 
            software engineering interview candidates, and educators teaching data structures and algorithms. 
            Experience hands-on learning with interactive animations that make complex concepts easy to understand.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;