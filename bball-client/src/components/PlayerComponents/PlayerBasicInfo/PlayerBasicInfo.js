import React, {useState, useEffect} from 'react';
import './PlayerBasicInfo.css';

import {Link} from 'react-router-dom';

function PlayerBio(props) {
  const [data, setData] = useState(null);
  const lastInitial = props.lastInitial;
  const playerID = props.playerID;

  //console.log(`/players/:${params.letter}/:${params.id}`);
  useEffect(() => {
    console.log("fetching player bio info")
    fetch(`/players/${lastInitial}/${playerID}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []); //props?

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    //setPlayerInfo(data.basic.playerInfo);
    console.log('rendering basic info');
    console.log(data);
      return(
        <div>
          <div className="bio-content">
          <img className="player-img"src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerID}.png`} alt="" />
            <div className="bio-info">
                <h1>{data.basic.data[0][3]}</h1>
                <span className="info-container">
                  <p className="info-header">Position:</p>
                  <p className="info-content">{data.basic.data[0][15]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">Height:</p>
                  <p className="info-content">{data.basic.data[0][11]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">Weight:</p>
                  <p className="info-content">{data.basic.data[0][12]} lbs</p>
                </span>
                <span className="info-container">
                  <p className="info-header">Born:</p>
                  <p className="info-content">{data.basic.data[0][7]} in {data.basic.data[0][9]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">College:</p>
                  <p className="info-content">{data.basic.data[0][8]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">NBA Draft:</p>
                  <p className="info-content">{data.basic.data[0][29]} (Round: {data.basic.data[0][30]} / Pick: {data.basic.data[0][31]})</p>
                </span>
                <span className="info-container">
                  <p className="info-header">League Experience:</p>
                  <p className="info-content">{data.basic.data[0][13]} year(s)</p>
                </span>
            </div>
          </div>
          <div className="awards">
            <div className="award-item all-star">
              {
                data.awards.allStar.length === 1 &&
                <span>{data.awards.allStar[0][6]} All-Star</span>
              }
              {
                data.awards.allStar.length > 1 &&
                <span>{data.awards.allStar[0].length} x All-Star</span>
              }
            </div>
            <div className="award-item all-nba">
              {
                (data.awards.allNBA.length === 1) &&
                <span>{data.awards.allNBA[0][6]} All-NBA</span>
              }
              {
                (data.awards.allNBA.length > 1) &&
                <span>{data.awards.allNBA.length} x All-NBA</span>
              }
            </div>
            <div className="award-item mvp">
              {
                (data.awards.mvp.length === 1) &&
                <span>{data.awards.mvp[0][6]} MVP</span>
              }
              {
                (data.awards.mvp.length > 1) &&
                <span>{data.awards.mvp.length} x All-MVP</span>
              }
            </div>
            <div className="award-item fmvp">
              {
                (data.awards.fmvp.length === 1) &&
                <span>{data.awards.fmvp[0][6]} Finals MVP</span>
              }
              {
                (data.awards.fmvp.length > 1) &&
                <span>{data.awards.fmvp.length} x Finals MVP</span>
              }
            </div>
            <div className="award-item allRookie">
              {
                (data.awards.allRookie.length === 1) &&
                <span>{data.awards.allRookie[0][6]} All-Rookie</span>
              }
              {
                (data.awards.allRookie.length > 1) &&
                <span>{data.awards.allRookie.length} x All-Rookie</span>
              }
            </div>
          </div>
          <div className="info-selectors">
                <Link to={`/players/${lastInitial}/${playerID}`}><button>Overview</button></Link>
                <button>Game Logs</button>
                <button>Splits</button>
                <button>More</button>
            </div>
        </div>
      )
  }
}

export default PlayerBio;

/*
- Full Name
- Position, Shoots: L/R 
- Height, Weight
- Birth Date -> Age
- College
- Draft: Round, (pick num, overall num), draft year
- From: start year to end year
- Career Length: do math above

*/
