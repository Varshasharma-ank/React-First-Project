import React from 'react'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar/>
    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home/>}/>
       <Route path="/recipe/:id" element={<Recipe />}/>
    </Routes>
  </div>
  )
}

export default App;
