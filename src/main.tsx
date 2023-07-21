import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


const el = document.createElement('div');
el.id = "__embed_script";
document.getElementsByTagName('body')[0].appendChild(el);

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
