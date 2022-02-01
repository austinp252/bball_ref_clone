import React, {useState} from 'react';

//import different content pages
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import Navbar from './components/Navbar/Navbar';
//import navbar

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route exact path='/players' element = {<Players/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <BrowserRouter>
        <Routes>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Routes>
      </BrowserRouter> */}
