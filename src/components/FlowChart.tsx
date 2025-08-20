import { SortingAlgorithm } from '../types';

interface FlowChartProps {
  algorithm: SortingAlgorithm | null;
}

const FlowChart = ({ algorithm }: FlowChartProps) => {
  if (!algorithm) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mx-4 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Algorithm Flowchart</h3>
        <p className="text-gray-600">Select an algorithm to view its flowchart</p>
      </div>
    );
  }

  const renderBubbleSortFlowchart = () => (
    <svg viewBox="0 0 800 600" className="w-full h-auto">
      {/* Start */}
      <rect x="350" y="20" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="45" textAnchor="middle" fill="white" className="text-sm font-medium">START</text>
      
      {/* Initialize */}
      <rect x="325" y="80" width="150" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="105" textAnchor="middle" fill="white" className="text-sm">i = 0, n = array.length</text>
      
      {/* Outer loop condition */}
      <polygon points="400,140 460,170 400,200 340,170" fill="#F59E0B" />
      <text x="400" y="175" textAnchor="middle" fill="white" className="text-xs">i &lt; n-1?</text>
      
      {/* Inner loop init */}
      <rect x="350" y="220" width="100" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="245" textAnchor="middle" fill="white" className="text-sm">j = 0</text>
      
      {/* Inner loop condition */}
      <polygon points="400,280 460,310 400,340 340,310" fill="#F59E0B" />
      <text x="400" y="315" textAnchor="middle" fill="white" className="text-xs">j &lt; n-i-1?</text>
      
      {/* Compare */}
      <polygon points="400,360 470,390 400,420 330,390" fill="#8B5CF6" />
      <text x="400" y="395" textAnchor="middle" fill="white" className="text-xs">arr[j] &gt; arr[j+1]?</text>
      
      {/* Swap */}
      <rect x="300" y="440" width="200" height="40" rx="5" fill="#10B981" />
      <text x="400" y="465" textAnchor="middle" fill="white" className="text-sm">Swap arr[j] and arr[j+1]</text>
      
      {/* Increment j */}
      <rect x="350" y="500" width="100" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="525" textAnchor="middle" fill="white" className="text-sm">j++</text>
      
      {/* Increment i */}
      <rect x="550" y="400" width="100" height="40" rx="5" fill="#EF4444" />
      <text x="600" y="425" textAnchor="middle" fill="white" className="text-sm">i++</text>
      
      {/* End */}
      <rect x="350" y="560" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="585" textAnchor="middle" fill="white" className="text-sm font-medium">END</text>
      
      {/* Arrows */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
        </marker>
      </defs>
      
      {/* Flow arrows */}
      <line x1="400" y1="60" x2="400" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="120" x2="400" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="200" x2="400" y2="220" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="260" x2="400" y2="280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="340" x2="400" y2="360" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="420" x2="400" y2="440" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="400" y1="480" x2="400" y2="500" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Loop back arrows */}
      <path d="M 400 540 Q 200 540 200 310 Q 200 280 340 310" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 460 170 Q 600 170 600 400" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 600 440 Q 600 500 600 140 Q 600 120 460 140" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 470 390 Q 520 390 520 525 Q 520 540 400 540" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <path d="M 460 310 Q 700 310 700 580 Q 700 600 450 580" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      
      {/* Labels */}
      <text x="420" y="185" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="185" className="text-xs fill-red-600">No</text>
      <text x="420" y="325" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="325" className="text-xs fill-red-600">No</text>
      <text x="420" y="405" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="405" className="text-xs fill-red-600">No</text>
    </svg>
  );

  const renderSelectionSortFlowchart = () => (
    <svg viewBox="0 0 800 600" className="w-full h-auto">
      {/* Arrowhead marker definition */}
      <defs>
        <marker id="arrowhead-sel" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
        </marker>
      </defs>
      
      {/* Start */}
      <rect x="350" y="20" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="45" textAnchor="middle" fill="white" className="text-sm font-medium">START</text>
      
      {/* Initialize */}
      <rect x="325" y="80" width="150" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="105" textAnchor="middle" fill="white" className="text-sm">i = 0, n = array.length</text>
      
      {/* Outer loop condition */}
      <polygon points="400,140 460,170 400,200 340,170" fill="#F59E0B" />
      <text x="400" y="175" textAnchor="middle" fill="white" className="text-xs">i &lt; n-1?</text>
      
      {/* Find minimum */}
      <rect x="325" y="220" width="150" height="40" rx="5" fill="#8B5CF6" />
      <text x="400" y="245" textAnchor="middle" fill="white" className="text-sm">Find min in arr[i..n-1]</text>
      
      {/* Check if swap needed */}
      <polygon points="400,280 470,310 400,340 330,310" fill="#F59E0B" />
      <text x="400" y="315" textAnchor="middle" fill="white" className="text-xs">min ≠ arr[i]?</text>
      
      {/* Swap */}
      <rect x="300" y="360" width="200" height="40" rx="5" fill="#10B981" />
      <text x="400" y="385" textAnchor="middle" fill="white" className="text-sm">Swap arr[i] with min</text>
      
      {/* Increment i */}
      <rect x="350" y="420" width="100" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="445" textAnchor="middle" fill="white" className="text-sm">i++</text>
      
      {/* End */}
      <rect x="350" y="500" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="525" textAnchor="middle" fill="white" className="text-sm font-medium">END</text>
      
      {/* Main flow arrows */}
      <line x1="400" y1="60" x2="400" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      <line x1="400" y1="120" x2="400" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      <line x1="400" y1="200" x2="400" y2="220" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      <line x1="400" y1="260" x2="400" y2="280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      <line x1="400" y1="340" x2="400" y2="360" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      <line x1="400" y1="400" x2="400" y2="420" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      
      {/* Loop back arrows - using straight lines */}
      <line x1="400" y1="460" x2="180" y2="460" stroke="#374151" strokeWidth="2" />
      <line x1="180" y1="460" x2="180" y2="170" stroke="#374151" strokeWidth="2" />
      <line x1="180" y1="170" x2="340" y2="170" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      
      {/* No swap path */}
      <line x1="470" y1="310" x2="520" y2="310" stroke="#374151" strokeWidth="2" />
      <line x1="520" y1="310" x2="520" y2="445" stroke="#374151" strokeWidth="2" />
      <line x1="520" y1="445" x2="450" y2="445" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      
      {/* End condition path */}
      <line x1="460" y1="170" x2="600" y2="170" stroke="#374151" strokeWidth="2" />
      <line x1="600" y1="170" x2="600" y2="525" stroke="#374151" strokeWidth="2" />
      <line x1="600" y1="525" x2="450" y2="525" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-sel)" />
      
      {/* Labels */}
      <text x="420" y="185" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="185" className="text-xs fill-red-600">No</text>
      <text x="420" y="325" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="325" className="text-xs fill-red-600">No</text>
    </svg>
  );

  const renderInsertionSortFlowchart = () => (
    <svg viewBox="0 0 800 600" className="w-full h-auto">
      {/* Arrowhead marker definition */}
      <defs>
        <marker id="arrowhead-ins" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
        </marker>
      </defs>
      
      {/* Start */}
      <rect x="350" y="20" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="45" textAnchor="middle" fill="white" className="text-sm font-medium">START</text>
      
      {/* Initialize */}
      <rect x="325" y="80" width="150" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="105" textAnchor="middle" fill="white" className="text-sm">i = 1, n = array.length</text>
      
      {/* Outer loop condition */}
      <polygon points="400,140 460,170 400,200 340,170" fill="#F59E0B" />
      <text x="400" y="175" textAnchor="middle" fill="white" className="text-xs">i &lt; n?</text>
      
      {/* Store key */}
      <rect x="325" y="220" width="150" height="40" rx="5" fill="#8B5CF6" />
      <text x="400" y="245" textAnchor="middle" fill="white" className="text-sm">key = arr[i], j = i-1</text>
      
      {/* While loop condition */}
      <polygon points="400,280 480,310 400,340 320,310" fill="#F59E0B" />
      <text x="400" y="315" textAnchor="middle" fill="white" className="text-xs">j≥0 && arr[j]&gt;key?</text>
      
      {/* Shift element */}
      <rect x="300" y="360" width="200" height="40" rx="5" fill="#10B981" />
      <text x="400" y="385" textAnchor="middle" fill="white" className="text-sm">arr[j+1] = arr[j], j--</text>
      
      {/* Insert key */}
      <rect x="325" y="420" width="150" height="40" rx="5" fill="#10B981" />
      <text x="400" y="445" textAnchor="middle" fill="white" className="text-sm">arr[j+1] = key</text>
      
      {/* Increment i */}
      <rect x="350" y="480" width="100" height="40" rx="5" fill="#EF4444" />
      <text x="400" y="505" textAnchor="middle" fill="white" className="text-sm">i++</text>
      
      {/* End */}
      <rect x="350" y="540" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="565" textAnchor="middle" fill="white" className="text-sm font-medium">END</text>
      
      {/* Main flow arrows */}
      <line x1="400" y1="60" x2="400" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      <line x1="400" y1="120" x2="400" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      <line x1="400" y1="200" x2="400" y2="220" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      <line x1="400" y1="260" x2="400" y2="280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      <line x1="400" y1="340" x2="400" y2="360" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      <line x1="400" y1="400" x2="400" y2="420" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      <line x1="400" y1="460" x2="400" y2="480" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      
      {/* Loop back arrows - using straight lines */}
      <line x1="400" y1="520" x2="150" y2="520" stroke="#374151" strokeWidth="2" />
      <line x1="150" y1="520" x2="150" y2="170" stroke="#374151" strokeWidth="2" />
      <line x1="150" y1="170" x2="340" y2="170" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      
      {/* While loop back */}
      <line x1="320" y1="310" x2="250" y2="310" stroke="#374151" strokeWidth="2" />
      <line x1="250" y1="310" x2="250" y2="385" stroke="#374151" strokeWidth="2" />
      <line x1="250" y1="385" x2="300" y2="385" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      
      {/* No shift path */}
      <line x1="480" y1="310" x2="550" y2="310" stroke="#374151" strokeWidth="2" />
      <line x1="550" y1="310" x2="550" y2="445" stroke="#374151" strokeWidth="2" />
      <line x1="550" y1="445" x2="475" y2="445" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      
      {/* End condition path */}
      <line x1="460" y1="170" x2="650" y2="170" stroke="#374151" strokeWidth="2" />
      <line x1="650" y1="170" x2="650" y2="565" stroke="#374151" strokeWidth="2" />
      <line x1="650" y1="565" x2="450" y2="565" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-ins)" />
      
      {/* Labels */}
      <text x="420" y="185" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="185" className="text-xs fill-red-600">No</text>
      <text x="420" y="325" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="325" className="text-xs fill-red-600">No</text>
    </svg>
  );

  const renderQuickSortFlowchart = () => (
    <svg viewBox="0 0 800 650" className="w-full h-auto">
      {/* Arrowhead marker definition */}
      <defs>
        <marker id="arrowhead-quick" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
        </marker>
      </defs>
      
      {/* Start */}
      <rect x="350" y="20" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="45" textAnchor="middle" fill="white" className="text-sm font-medium">START</text>
      
      {/* Check base case */}
      <polygon points="400,80 470,110 400,140 330,110" fill="#F59E0B" />
      <text x="400" y="115" textAnchor="middle" fill="white" className="text-xs">low &lt; high?</text>
      
      {/* Choose pivot */}
      <rect x="325" y="160" width="150" height="40" rx="5" fill="#8B5CF6" />
      <text x="400" y="185" textAnchor="middle" fill="white" className="text-sm">Choose pivot (last element)</text>
      
      {/* Partition */}
      <rect x="300" y="220" width="200" height="40" rx="5" fill="#10B981" />
      <text x="400" y="245" textAnchor="middle" fill="white" className="text-sm">Partition around pivot</text>
      
      {/* Recursive calls */}
      <rect x="150" y="300" width="180" height="40" rx="5" fill="#EF4444" />
      <text x="240" y="325" textAnchor="middle" fill="white" className="text-sm">QuickSort(low, pivot-1)</text>
      
      <rect x="470" y="300" width="180" height="40" rx="5" fill="#EF4444" />
      <text x="560" y="325" textAnchor="middle" fill="white" className="text-sm">QuickSort(pivot+1, high)</text>
      
      {/* Merge point */}
      <circle cx="400" cy="380" r="10" fill="#6B7280" />
      
      {/* End */}
      <rect x="350" y="420" width="100" height="40" rx="20" fill="#4F46E5" />
      <text x="400" y="445" textAnchor="middle" fill="white" className="text-sm font-medium">END</text>
      
      {/* Main flow arrows */}
      <line x1="400" y1="60" x2="400" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="400" y1="140" x2="400" y2="160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="400" y1="200" x2="400" y2="220" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="350" y1="260" x2="290" y2="300" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="450" y1="260" x2="510" y2="300" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="240" y1="340" x2="380" y2="370" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="560" y1="340" x2="420" y2="370" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      <line x1="400" y1="390" x2="400" y2="420" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      
      {/* Base case path - using straight lines */}
      <line x1="470" y1="110" x2="650" y2="110" stroke="#374151" strokeWidth="2" />
      <line x1="650" y1="110" x2="650" y2="445" stroke="#374151" strokeWidth="2" />
      <line x1="650" y1="445" x2="450" y2="445" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead-quick)" />
      
      {/* Labels */}
      <text x="420" y="125" className="text-xs fill-green-600">Yes</text>
      <text x="480" y="125" className="text-xs fill-red-600">No</text>
      
      {/* Partition details box */}
      <rect x="50" y="480" width="700" height="120" rx="5" fill="#F3F4F6" stroke="#D1D5DB" />
      <text x="70" y="505" className="text-sm font-bold fill-gray-800">Partition Process:</text>
      <text x="70" y="525" className="text-xs fill-gray-600">1. Choose rightmost element as pivot</text>
      <text x="70" y="540" className="text-xs fill-gray-600">2. Move elements smaller than pivot to left side</text>
      <text x="70" y="555" className="text-xs fill-gray-600">3. Move elements greater than pivot to right side</text>
      <text x="70" y="570" className="text-xs fill-gray-600">4. Place pivot in its correct position</text>
      <text x="70" y="585" className="text-xs fill-gray-600">5. Return pivot position for recursive calls</text>
    </svg>
  );

  const getFlowchartContent = () => {
    switch (algorithm.name.toLowerCase()) {
      case 'bubble sort':
        return renderBubbleSortFlowchart();
      case 'selection sort':
        return renderSelectionSortFlowchart();
      case 'insertion sort':
        return renderInsertionSortFlowchart();
      case 'quick sort':
        return renderQuickSortFlowchart();
      default:
        return (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <p>Flowchart for {algorithm.name} coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-4 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          {algorithm.name} - Algorithm Flowchart
        </h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span>Start/End</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
            <span>Decision</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
            <span>Process</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
            <span>Action</span>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        {getFlowchartContent()}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Algorithm Complexity:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium">Time Complexity:</span>
            <div className="text-gray-600">
              <div>Best: {algorithm.timeComplexity.best}</div>
              <div>Average: {algorithm.timeComplexity.average}</div>
              <div>Worst: {algorithm.timeComplexity.worst}</div>
            </div>
          </div>
          <div>
            <span className="font-medium">Space Complexity:</span>
            <div className="text-gray-600">{algorithm.spaceComplexity}</div>
          </div>
          <div>
            <span className="font-medium">Description:</span>
            <div className="text-gray-600">{algorithm.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;