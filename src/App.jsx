// src/App.jsx
import React from 'react'
import ConnectPage from './pages/ConnectPage'
import MobileBottomNav from './components/MobileBottomNav'

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <ConnectPage />
      <MobileBottomNav />
    </div>
  )
}

export default App
