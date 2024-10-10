// import BrowserRouter from react-router-dom, enabling routing capabilities for the application.
import { BrowserRouter } from 'react-router-dom'
// import StrictMode from React, helps identify potential problems in the application during development.
import { StrictMode } from 'react'
// import createRoot from react-dom/client -facilitates rendering of the React application into the DOM.
import { createRoot } from 'react-dom/client'
// import the main App component from App.jsx, which serves as the root component of the application.
import App from './App.jsx'
// import the main CSS file (index.css) for global styling of the application.
import './index.css'
// import Bootstrap CSS to apply Bootstrap styling and js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// create a root node in the DOM at the element with the ID 'root' and renders the React application within it.
createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* enable strict mode.. activates additional checks and warnings for child components */}
    
    <BrowserRouter>
      {/* wrap the application in BrowserRouter, provides routing context for child components */}
      
      <App />
      {/* render the main App component, which contains the overall structure and logic of the application */}
      
    </BrowserRouter>
  </StrictMode>,
)