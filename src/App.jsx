import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageOneCard } from './pages/PageOneCard';


function App() {
  return (

    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokemon" element={<PageOneCard />}/>
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
