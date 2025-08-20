import React from 'react';
import { ArrayElement } from '../types';

interface VisualizerProps {
  array: ArrayElement[];
}

const Visualizer: React.FC<VisualizerProps> = ({ array }) => {
  const maxValue = Math.max(...array.map(el => el.value));
  const containerHeight = 400;

  const getBarColor = (state: ArrayElement['state']) => {
    switch (state) {
      case 'comparing':
        return 'bg-compare-yellow';
      case 'sorted':
        return 'bg-sorted-green';
      case 'pivot':
        return 'bg-pivot-red';
      default:
        return 'bg-primary-light';
    }
  };

  return (
    <div className="bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div 
          className="flex items-end justify-center gap-1 overflow-x-auto"
          style={{ height: containerHeight }}
        >
          {array.map((element, index) => {
            const barHeight = (element.value / maxValue) * (containerHeight - 60);
            const barWidth = Math.max(800 / array.length - 2, 4);
            
            return (
              <div
                key={index}
                className={`${getBarColor(element.state)} border border-border-light transition-all duration-200 flex items-end justify-center relative`}
                style={{
                  height: barHeight,
                  width: barWidth,
                  minWidth: '4px'
                }}
              >
                {barWidth > 20 && (
                  <span className="text-xs text-text-dark mb-1 transform rotate-90 origin-center">
                    {element.value}
                  </span>
                )}
                {barWidth <= 20 && (
                  <span 
                    className="text-xs text-text-dark absolute -top-5 left-1/2 transform -translate-x-1/2"
                    style={{ fontSize: '10px' }}
                  >
                    {element.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Visualizer;