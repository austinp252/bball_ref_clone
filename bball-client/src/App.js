import React, {useState, useEffect} from 'react';

import './App.css';

//import different content pages
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Players from './components/Players/Players';
import PlayerGameLogs from './components/PlayerGameLogs/PlayerGameLogs';
import PlayerBio from './components/PlayerBio/PlayerBio';
import Teams from './components/Teams/Teams';
import TeamBio from './components/TeamBio/TeamBio';
import TeamSeason from './components/TeamSeason/TeamSeason';
import TeamSeasonGames from './components/TeamSeasonGames/TeamSeasonGames';
import Seasons from './components/Seasons/Seasons';
import Leaders from './components/Leaders/Leaders';
import Scores from './components/Scores/Scores';
import BoxScore from './components/BoxScore/BoxScore';
import Navbar from './components/Navbar/Navbar'; //would specifying .js remove overlapping css?
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
      <div className="container">
          <BrowserRouter>
            <Navbar/>
            <div className="content">
              <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/search/:term/:page' element = {<SearchResults/>}/>
                <Route exact path='/players' element = {<Players/>}/>
                <Route exact path='/players/:letter/:id' element = {<PlayerBio/>}/>
                <Route exact path='/players/:letter/:id/gamelog/:season' element = {<PlayerGameLogs/>}/>
                <Route exact path='/teams' element = {<Teams/>}/>
                <Route exact path='/teams/:id' element = {<TeamBio/>}/>
                <Route exact path='/teams/:id/:season' element = {<TeamSeason/>}/>
                <Route exact path='/teams/:id/:season/gamelog' element = {<TeamSeasonGames/>}/>
                <Route exact path='/seasons' element = {<Seasons/>}/>
                <Route exact path='/leaders' element = {<Leaders/>}/>
                <Route exact path='/scores' element = {<Scores/>}/>
                <Route exact path='/scores/:gameid/boxscore' element = {<BoxScore/>}/>
              </Routes>
            </div>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
