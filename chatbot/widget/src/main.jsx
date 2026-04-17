import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a container for the widget if it doesn't exist
const widgetId = 'chat-widget-container';
let container = document.getElementById(widgetId);

if (!container) {
  container = document.createElement('div');
  container.id = widgetId;
  document.body.appendChild(container);
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
