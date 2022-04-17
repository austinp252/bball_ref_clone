import React, {useState, useEffect} from 'react';

import './App.css';

//import different content pages
import Home from './components/HomeComponents/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import Players from './components/PlayerComponents/Players/Players';
import PlayerPage from './components/PlayerComponents/PlayerPage/PlayerPage';
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
                <Route exact path='/players/:letter/:id/:mode' element = {<PlayerPage/>}/>
                <Route exact path='/players/:letter/:id/:mode/:season' element = {<PlayerPage/>}/>
                <Route exact path='/teams' element = {<TeamsIndex/>}/>
                <Route exact path='/teams/:id' element = {<FranchiseBio/>}/>
                <Route exact path='/teams/:id/:season' element = {<TeamSeasonRoster/>}/>
                <Route exact path='/teams/:id/:season/gamelog' element = {<TeamSeasonGamelog/>}/>
                <Route exact path='/seasons' element = {<Seasons/>}/>
                <Route exact path='/leaders' element = {<Leaders/>}/>

                <Route exact path='/leaders/career/regular/GP' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='GP' title='Games Played' metric='GP'/>}/>
                <Route exact path='/leaders/career/regular/FG' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='FG' title='Field Goals Made' metric='FG'/>}/>
                <Route exact path='/leaders/career/regular/FGA' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='FGA' title='Field Goals Attempted' metric='FGA'/>}/>
                <Route exact path='/leaders/career/regular/3P' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='3P' title='3-Pt Field Goals Made' metric='3P'/>}/>
                <Route exact path='/leaders/career/regular/3PA' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='3PA' title='3-Pt Field Goals Attempted' metric='3PA'/>}/>
                <Route exact path='/leaders/career/regular/FT' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='FT' title='Free Throws Made' metric='FT'/>}/>
                <Route exact path='/leaders/career/regular/FTA' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='FTA' title='Free Throws Attempted' metric='FTA'/>}/>
                <Route exact path='/leaders/career/regular/OREB' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='OREB' title='Offensive Rebounds' metric='OREB'/>}/>
                <Route exact path='/leaders/career/regular/DREB' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='DREB' title='Defensive Rebounds' metric='DREB'/>}/>
                <Route exact path='/leaders/career/regular/REB' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='REB' title='Total Rebounds' metric='REB'/>}/>
                <Route exact path='/leaders/career/regular/AST' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='AST' title='Assists' metric='AST'/>}/>
                <Route exact path='/leaders/career/regular/STL' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='STL' title='Steals' metric='STL'/>}/>
                <Route exact path='/leaders/career/regular/BLK' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='BLK' title='Blocks' metric='BLK'/>}/>
                <Route exact path='/leaders/career/regular/TOV' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='TOV' title='Turnovers' metric='TOV'/>}/>
                <Route exact path='/leaders/career/regular/PF' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='PF' title='Personal Fouls' metric='PF'/>}/>
                <Route exact path='/leaders/career/regular/PTS' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='PTS' title='Points' metric='PTS'/>}/>
                <Route exact path='/leaders/career/regular/fg_pct' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='FGP' title='Field Goal Percentage' metric='FG PCT'/>}/>
                <Route exact path='/leaders/career/regular/3fg_pct' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='3PP' title='3-Pt Field Goal Percentage' metric='3P PCT'/>}/>
                <Route exact path='/leaders/career/regular/ft_pct' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='FTP' title='Free Throw Percentage' metric='FT PCT'/>}/>
                <Route exact path='/leaders/career/regular/per_pts' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='perPTS' title='Points Per Game' metric='PTS'/>}/>
                <Route exact path='/leaders/career/regular/per_reb' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='perREB' title='Rebounds Per Game' metric='REB'/>}/>
                <Route exact path='/leaders/career/regular/per_ast' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='perAST' title='Assists Per Game' metric='AST'/>}/>
                <Route exact path='/leaders/career/regular/per_stl' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='perSTL' title='Steals Per Game' metric='STL'/>}/>
                <Route exact path='/leaders/career/regular/per_blk' element = {<AllTimeLeaderCategory seasonType='Regular Season'  category='perBLK' title='Blocks Per Game' metric='BLK'/>}/>
                
                <Route exact path='/leaders/career/playoffs/GP' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='GP' title='Games Played' metric='GP'/>}/>
                <Route exact path='/leaders/career/playoffs/FG' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='FG' title='Field Goals Made' metric='FG'/>}/>
                <Route exact path='/leaders/career/playoffs/FGA' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='FGA' title='Field Goals Attempted' metric='FGA'/>}/>
                <Route exact path='/leaders/career/playoffs/3P' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='3P' title='3-Pt Field Goals Made' metric='3P'/>}/>
                <Route exact path='/leaders/career/playoffs/3PA' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='3PA' title='3-Pt Field Goals Attempted' metric='3PA'/>}/>
                <Route exact path='/leaders/career/playoffs/FT' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='FT' title='Free Throws Made' metric='FT'/>}/>
                <Route exact path='/leaders/career/playoffs/FTA' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='FTA' title='Free Throws Attempted' metric='FTA'/>}/>
                <Route exact path='/leaders/career/playoffs/OREB' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='OREB' title='Offensive Rebounds' metric='OREB'/>}/>
                <Route exact path='/leaders/career/playoffs/DREB' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='DREB' title='Defensive Rebounds' metric='DREB'/>}/>
                <Route exact path='/leaders/career/playoffs/REB' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='REB' title='Total Rebounds' metric='REB'/>}/>
                <Route exact path='/leaders/career/playoffs/AST' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='AST' title='Assists' metric='AST'/>}/>
                <Route exact path='/leaders/career/playoffs/STL' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='STL' title='Steals' metric='STL'/>}/>
                <Route exact path='/leaders/career/playoffs/BLK' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='BLK' title='Blocks' metric='BLK'/>}/>
                <Route exact path='/leaders/career/playoffs/TOV' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='TOV' title='Turnovers' metric='TOV'/>}/>
                <Route exact path='/leaders/career/playoffs/PF' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='PF' title='Personal Fouls' metric='PF'/>}/>
                <Route exact path='/leaders/career/playoffs/PTS' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='PTS' title='Points' metric='PTS'/>}/>
                <Route exact path='/leaders/career/playoffs/fg_pct' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='FGP' title='Field Goal Percentage' metric='FG PCT'/>}/>
                <Route exact path='/leaders/career/playoffs/3fg_pct' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='3PP' title='3-Pt Field Goal Percentage' metric='3P PCT'/>}/>
                <Route exact path='/leaders/career/playoffs/ft_pct' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='FTP' title='Free Throw Percentage' metric='FT PCT'/>}/>
                <Route exact path='/leaders/career/playoffs/per_pts' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='perPTS' title='Points Per Game' metric='PTS'/>}/>
                <Route exact path='/leaders/career/playoffs/per_reb' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='perREB' title='Rebounds Per Game' metric='REB'/>}/>
                <Route exact path='/leaders/career/playoffs/per_ast' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='perAST' title='Assists Per Game' metric='AST'/>}/>
                <Route exact path='/leaders/career/playoffs/per_stl' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='perSTL' title='Steals Per Game' metric='STL'/>}/>
                <Route exact path='/leaders/career/playoffs/per_blk' element = {<AllTimeLeaderCategory seasonType='Playoffs'  category='perBLK' title='Blocks Per Game' metric='BLK'/>}/>

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
