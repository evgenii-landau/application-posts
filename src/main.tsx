import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {PostProvider} from "./Context/PostContext.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostProvider>
      <App/>
    </PostProvider>
  </React.StrictMode>
)
