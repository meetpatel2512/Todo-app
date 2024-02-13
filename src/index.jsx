import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css';
import App from './app';


const app = document.getElementById('app');
const root = createRoot(app);
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>);
