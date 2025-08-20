import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-border-light py-6">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-text-dark text-center">
          Visual Sorting Algorithms
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Interactive visualization of sorting algorithms - Learn Bubble Sort, Quick Sort, Merge Sort, and Insertion Sort
        </p>
      </div>
    </header>
  );
};

export default Header;