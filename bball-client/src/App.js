import React, {useState, useEffect} from 'react';

import './App.css';

//import different content pages
import Home from './components/HomeComponents/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Players from './components/PlayerComponents/Players/Players';
import PlayerGameLogs from './components/PlayerComponents/PlayerGameLogs/PlayerGameLogs';
import PlayerBio from './components/PlayerComponents/PlayerBio/PlayerBio';
import TeamsIndex from './components/TeamComponents/TeamsIndex/TeamsIndex';
import FranchiseBio from './components/TeamComponents/FranchiseBio/FranchiseBio';
import TeamSeasonRoster from './components/TeamComponents/TeamSeasonRoster/TeamSeasonRoster';
import TeamSeasonGamelog from './components/TeamComponents/TeamSeasonGamelog/TeamSeasonGamelog';
import Seasons from './components/SeasonComponents/Seasons/Seasons';
import Leaders from './components/LeaderComponents/Leaders/Leaders';
import Scores from './components/ScoreComponents/Scores/Scores';
import BoxScore from './components/ScoreComponents/BoxScore/BoxScore';
import Navbar from './components/Navbar/Navbar'; //would specifying .js remove overlapping css?
import Footer from './components/Footer/Footer';

import AllTimeLeaderCategory from './components/LeaderComponents/AllTimeLeaderPages/AllTimeLeadersCategory';
//import navbar

import {BrowserRouter, Routes, Route, useHistory} from 'react-router-dom';

function App() {

  const [data, setData] = useState(null);

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
                <Route exact path='/teams' element = {<TeamsIndex/>}/>
                <Route exact path='/teams/:id' element = {<FranchiseBio/>}/>
                <Route exact path='/teams/:id/:season' element = {<TeamSeasonRoster/>}/>
                <Route exact path='/teams/:id/:season/gamelog' element = {<TeamSeasonGamelog/>}/>
                <Route exact path='/seasons' element = {<Seasons/>}/>
                <Route exact path='/leaders' element = {<Leaders/>}/>
                <Route exact path='/leaders/career/GP' element = {<AllTimeLeaderCategory category='GP'/>}/>
                <Route exact path='/leaders/career/FG' element = {<AllTimeLeaderCategory category='FG'/>}/>
                <Route exact path='/leaders/career/FGA' element = {<AllTimeLeaderCategory category='FGA'/>}/>
                <Route exact path='/leaders/career/3P' element = {<AllTimeLeaderCategory category='3P'/>}/>
                <Route exact path='/leaders/career/3PA' element = {<AllTimeLeaderCategory category='3PA'/>}/>
                <Route exact path='/leaders/career/FT' element = {<AllTimeLeaderCategory category='FT'/>}/>
                <Route exact path='/leaders/career/FTA' element = {<AllTimeLeaderCategory category='FTA'/>}/>
                <Route exact path='/leaders/career/OREB' element = {<AllTimeLeaderCategory category='OREB'/>}/>
                <Route exact path='/leaders/career/DREB' element = {<AllTimeLeaderCategory category='DREB'/>}/>
                <Route exact path='/leaders/career/REB' element = {<AllTimeLeaderCategory category='REB'/>}/>
                <Route exact path='/leaders/career/AST' element = {<AllTimeLeaderCategory category='AST'/>}/>
                <Route exact path='/leaders/career/STL' element = {<AllTimeLeaderCategory category='STL'/>}/>
                <Route exact path='/leaders/career/BLK' element = {<AllTimeLeaderCategory category='BLK'/>}/>
                <Route exact path='/leaders/career/TOV' element = {<AllTimeLeaderCategory category='TOV'/>}/>
                <Route exact path='/leaders/career/PF' element = {<AllTimeLeaderCategory category='PF'/>}/>
                <Route exact path='/leaders/career/PTS' element = {<AllTimeLeaderCategory category='PTS'/>}/>
                
                <Route exact path='/scores' element = {<Scores/>}/>
                <Route exact path='/scores/:gameid/boxscore' element = {<BoxScore/>}/>
              </Routes>
            </div>
            <Footer/>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
