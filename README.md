# 🌌 Rick and Morty Explorer

A modern, feature-rich web application to explore the Rick and Morty universe! Built with React, TypeScript, and Mantine UI, this app lets you discover characters and locations from across the multiverse.

![Rick and Morty](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## ✨ Features

### 🎨 **Beautiful UI & Theming**

- 🌙 **Dark/Light Mode**: Toggle between dark and light themes with a single click
- 🎭 **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Modern Portal Animation**: Animated background portal on the home page

### 🔍 **Advanced Filtering**

- **Characters Page**: Filter by name, status (Alive/Dead/Unknown), species, type, and gender
- **Locations Page**: Filter by name, type, and dimension
- ⚡ **Debounced Search**: 500ms debounce on text inputs to reduce unnecessary API calls
- 🔄 **Reusable Components**: Filter components work across all pages

### 🎯 **Smart Loading States**

- ✅ **Initial Load**: Full-page loader on first visit
- ✨ **Subsequent Loads**: Subtle loading overlay that doesn't hide content
- 🎨 **No Page Reloads**: Smooth transitions when filtering or paginating

### 📄 **Pagination**

- Navigate through pages of characters and locations
- Automatic reset to page 1 when filters are applied
- Page count and navigation controls

### 🌐 **Rick and Morty API Integration**

- Real-time data from [The Rick and Morty API](https://rickandmortyapi.com)
- 826+ Characters
- 126+ Locations
- Type-safe API calls with TypeScript

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) with TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [Mantine v8](https://mantine.dev/)
- **Icons**: [Tabler Icons](https://tabler-icons.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **API**: [The Rick and Morty API](https://rickandmortyapi.com/documentation)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/rick-and-morty.git
cd rick-and-morty
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

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Card/           # Reusable card component
│   ├── Filters/        # Filter component with debounce
│   ├── Header/         # App header with theme toggle
│   └── Pagination/     # Pagination controls
├── hooks/
│   └── useDebounce.ts  # Custom debounce hook
├── pages/
│   ├── Home.tsx        # Landing page with animations
│   ├── Characters.tsx  # Characters listing with filters
│   └── Locations.tsx   # Locations listing with filters
├── types/
│   └── api.ts          # TypeScript interfaces for API
├── utils/
│   └── api.ts          # API utility functions
└── App.tsx             # Main app component with routing
```

## 🎯 Key Features Implementation

### Debounced Search

Text input filters use a custom `useDebounce` hook that waits 500ms after the user stops typing before triggering an API call. This reduces server load and improves performance.

### Reusable Filter Component

The `Filters` component accepts a configuration array of filter fields, making it easy to add filters to any page:

```tsx
const filterFields: FilterField[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "status", label: "Status", type: "select", options: [...] }
];
```

### Theme System

Built on Mantine's color scheme system with support for:

- System preference detection
- Persistent theme selection
- Smooth transitions between themes
- Theme-aware CSS using `data-mantine-color-scheme` attribute

## 🔗 API Reference

This app uses [The Rick and Morty API](https://rickandmortyapi.com/documentation):

- **Characters**: `GET /api/character`
- **Locations**: `GET /api/location`
- **Filter Parameters**:
  - Characters: `name`, `status`, `species`, `type`, `gender`
  - Locations: `name`, `type`, `dimension`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Data provided by [The Rick and Morty API](https://rickandmortyapi.com)
- Rick and Morty created by Justin Roiland and Dan Harmon
- UI components by [Mantine](https://mantine.dev)

---

**Wubba Lubba Dub Dub!** 🚀✨
