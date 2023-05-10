import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/navbar';
import Hom from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Hom />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
