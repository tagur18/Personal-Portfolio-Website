import React from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/Theme/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import ThemeProvider from './context/Theme/ThemeContext.jsx'
// import { BrowserRouter } from 'react-router-dom'   // ✅ ADD THIS

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>   {/* ✅ WRAP HERE */}
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );