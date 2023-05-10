import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';


function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
