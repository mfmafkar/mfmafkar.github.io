import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Get the root element from the HTML
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root for React to render into
const root = createRoot(rootElement);

// Render the App component
root.render(<App />);
