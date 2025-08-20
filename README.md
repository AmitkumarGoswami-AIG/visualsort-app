# VisualSort.app - Visual Sorting Algorithms

🌐 **Live Demo**: [https://visualsort.app](https://visualsort.app)

A modern, interactive web application that provides real-time visual representations of various sorting algorithms. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Interactive Visualizations**: Watch sorting algorithms work in real-time
- **Multiple Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Quick Sort
- **Playback Controls**: Play, pause, step forward/backward through the sorting process
- **Customizable**: Adjust array size (10-100 elements) and animation speed
- **Educational**: See complexity analysis and real-time statistics
- **Modern UI**: Clean, flat design with light color scheme

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd visual-sorting-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

1. **Select Algorithm**: Choose from the dropdown menu
2. **Customize Array**: Adjust size and generate new random arrays
3. **Control Playback**: Use play/pause buttons or step through manually
4. **Adjust Speed**: Use the speed slider to control animation speed
5. **Learn**: Read algorithm descriptions and watch real-time statistics

## Algorithms Included

- **Bubble Sort**: O(n²) - Simple comparison-based algorithm
- **Selection Sort**: O(n²) - Finds minimum and places at beginning
- **Insertion Sort**: O(n²) - Builds sorted array one element at a time
- **Quick Sort**: O(n log n) - Divide and conquer with pivot partitioning

## Color Legend

- **Light Blue**: Unsorted elements
- **Yellow**: Elements being compared
- **Green**: Sorted elements
- **Red**: Pivot elements (in Quick Sort)

## Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Custom Hooks** for state management
- **Responsive Design** for mobile compatibility

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the MIT License.