import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SensoryUIProvider } from '@/components/ui/config/provider';
import '../sensory.config.js';
import './index.css';

// Use config inline instead of importing
const sensoryConfig = {
	enabled: true,
	volume: 0.35,
	theme: "aero",
	categories: {
		interaction: true,
		navigation: true,
		notification: true,
		overlay: true,
		hero: false,
	},
	reducedMotion: "inherit",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SensoryUIProvider config={sensoryConfig}>
      <App />
    </SensoryUIProvider>
  </StrictMode>
);
