import React from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/about';
import Work from './components/work/Work';
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
    
      <main className='main'>
        <Home />
        <About />
        <Work />
      </main>


      <Footer />

    
    

    </>
  )
}

export default App