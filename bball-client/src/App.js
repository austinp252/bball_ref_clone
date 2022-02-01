import React, {useState, useEffect} from 'react';

//import different content pages
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import Navbar from './components/Navbar/Navbar';
//import navbar

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/test")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

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
