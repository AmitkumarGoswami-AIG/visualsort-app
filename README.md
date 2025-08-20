# 🎯 Visual Sorting Algorithms - Interactive Algorithm Visualization

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=github)](https://amitkumargoswami-aig.github.io/visualsort-app/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

An **interactive web application** for visualizing sorting algorithms with real-time animations, step-by-step tracking, and algorithm flowcharts. Perfect for students, educators, and anyone interested in learning computer science algorithms.

## 🚀 Live Demo

**🌐 Visit the Application**: [https://amitkumargoswami-aig.github.io/visualsort-app/](https://amitkumargoswami-aig.github.io/visualsort-app/)

## ✨ Key Features

### 🎬 Interactive Visualizations
- **Real-time animations** showing how algorithms work
- **Color-coded elements** to track comparisons and swaps
- **Step-by-step progression** with detailed explanations

### 📊 Algorithm Flowcharts
- **Interactive flowcharts** for each sorting algorithm
- **Visual representation** of algorithm logic flow
- **Educational diagrams** with decision points and loops

### ⚡ Performance Controls
- **Adjustable animation speed** (1x to 10x)
- **Variable array sizes** (10 to 100 elements)
- **Real-time performance metrics**
- **Pause, resume, and reset functionality**

### 📱 Responsive Design
- **Mobile-friendly interface**
- **Cross-browser compatibility**
- **Touch-optimized controls**

## 🎯 Supported Sorting Algorithms

| Algorithm | Time Complexity | Space Complexity | Best For |
|-----------|----------------|------------------|----------|
| **Bubble Sort** | O(n²) | O(1) | Educational purposes |
| **Selection Sort** | O(n²) | O(1) | Small datasets |
| **Insertion Sort** | O(n²) | O(1) | Nearly sorted data |
| **Quick Sort** | O(n log n) | O(log n) | General purpose |

### 🔵 Bubble Sort
- **Description**: Repeatedly compares adjacent elements and swaps them if they're in wrong order
- **Visual Pattern**: Largest elements "bubble up" to the end
- **Best Case**: O(n) when array is already sorted

### 🟡 Selection Sort
- **Description**: Finds minimum element and places it at the beginning
- **Visual Pattern**: Builds sorted portion from left to right
- **Characteristics**: Always performs same number of comparisons

### 🟣 Insertion Sort
- **Description**: Builds sorted array one element at a time
- **Visual Pattern**: Elements shift to make room for insertion
- **Best Case**: O(n) for nearly sorted arrays

### 🔴 Quick Sort
- **Description**: Divides array using pivot and recursively sorts sub-arrays
- **Visual Pattern**: Partitioning around pivot elements
- **Advantages**: Generally fastest for large datasets

## 🛠 Technologies & Tools

- **⚛️ React 18** - Modern React with hooks and concurrent features
- **📘 TypeScript** - Type-safe development with excellent IDE support
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid styling
- **⚡ Vite** - Lightning-fast build tool and development server
- **🚀 GitHub Pages** - Free hosting and deployment platform
- **📦 ESLint & Prettier** - Code quality and formatting tools

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/amitkumargoswami-aig/visualsort-app.git
cd visualsort-app
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

3. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

4. **Open Browser**
Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint for code quality |

## 🎮 How to Use

### Step 1: Choose Algorithm
Select from **Bubble Sort**, **Selection Sort**, **Insertion Sort**, or **Quick Sort**

### Step 2: Configure Settings
- **Array Size**: Adjust slider (10-100 elements)
- **Animation Speed**: Set speed (1x-10x)
- **Random Array**: Generate new random data

### Step 3: Start Visualization
- Click **"Start Sorting"** to begin animation
- Watch real-time comparisons and swaps
- View algorithm flowchart for logic flow

### Step 4: Analyze Results
- Review **time complexity** information
- Compare **performance metrics**
- Study **algorithm characteristics**

## 🏗 Project Architecture

```
src/
├── 📁 components/           # React components
│   ├── AlgorithmInfo.tsx    # Algorithm details display
│   ├── Controls.tsx         # User interface controls
│   ├── FlowChart.tsx        # Interactive algorithm flowcharts
│   └── Visualizer.tsx       # Main visualization component
├── 📁 utils/               # Utility functions
│   └── algorithms.ts        # Sorting algorithm implementations
├── 📁 types/               # TypeScript type definitions
│   └── index.ts            # Shared interfaces and types
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css             # Global styles
```

## 🔧 Deployment

### GitHub Pages Deployment

The application is automatically deployed to GitHub Pages using the `gh-pages` package:

```bash
npm run deploy
```

### Custom Domain Setup (Optional)

1. Add a `CNAME` file to the `public/` directory
2. Configure your domain's DNS settings
3. Enable HTTPS in GitHub Pages settings

## 🌟 Educational Benefits

### For Students
- **Visual Learning**: See algorithms in action rather than just reading code
- **Step-by-Step Understanding**: Track each operation as it happens
- **Complexity Analysis**: Learn about time and space complexity
- **Algorithm Comparison**: Compare different approaches side-by-side

### For Educators
- **Teaching Tool**: Perfect for computer science courses
- **Interactive Demonstrations**: Engage students with live examples
- **Homework Reference**: Students can experiment and learn
- **Free and Accessible**: No installation required, works in any browser

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
- 🐛 **Bug Reports**: Found an issue? Please report it
- 💡 **Feature Requests**: Suggest new algorithms or features
- 📖 **Documentation**: Improve README or add code comments
- 🎨 **UI/UX**: Enhance the user interface and experience
- 🔧 **Code**: Submit pull requests with improvements

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 SEO & Discovery

This project is optimized for search engines with:
- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Structured data** (JSON-LD)
- **Sitemap.xml** for search engines
- **Robots.txt** for crawler guidance

### Keywords
`sorting algorithms`, `algorithm visualization`, `computer science education`, `interactive learning`, `bubble sort`, `quick sort`, `selection sort`, `insertion sort`, `programming tutorial`, `algorithm animation`

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Educational Inspiration**: Created to make algorithm learning more accessible
- **Open Source Community**: Built with amazing open-source tools
- **Computer Science Educators**: For feedback and suggestions
- **Students Worldwide**: Who inspire us to create better learning tools

## 📊 Performance & Analytics

- **Lighthouse Score**: 95+ for Performance, Accessibility, SEO
- **Bundle Size**: Optimized for fast loading
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Friendly**: Responsive design for all devices

## 🔗 Related Projects

- [Algorithm Visualizer](https://algorithm-visualizer.org/) - More algorithms
- [VisuAlgo](https://visualgo.net/) - Comprehensive algorithm visualizations
- [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms) - Different visualization approach

---

**⭐ Star this repository if you found it helpful!**

Made with ❤️ for the **computer science education community**

[![GitHub stars](https://img.shields.io/github/stars/amitkumargoswami-aig/visualsort-app?style=social)](https://github.com/amitkumargoswami-aig/visualsort-app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amitkumargoswami-aig/visualsort-app?style=social)](https://github.com/amitkumargoswami-aig/visualsort-app/network/members)