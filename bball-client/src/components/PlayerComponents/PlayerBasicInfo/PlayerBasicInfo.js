import React, {useState, useEffect} from 'react';
import './PlayerBasicInfo.css';

import {Link, useParams} from 'react-router-dom';

function PlayerBio() {
  const [data, setData] = useState(null);
  const params = useParams();

  //console.log(`/players/:${params.letter}/:${params.id}`);
  useEffect(() => {
    console.log("fetching player bio info")
    fetch(`/players/${params.letter}/${params.id}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    //setPlayerInfo(data.playerInfo);
    console.log('rendering basic info');
    //console.log(data);
      return(
        <div>
          <div className="bio-content">
          <img className="player-img"src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${params.id}.png`} alt="" />
            <div className="bio-info">
                <h1>{data.data[0][3]}</h1>
                <span className="info-container">
                  <p className="info-header">Position:</p>
                  <p className="info-content">{data.data[0][15]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">Height:</p>
                  <p className="info-content">{data.data[0][11]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">Weight:</p>
                  <p className="info-content">{data.data[0][12]} lbs</p>
                </span>
                <span className="info-container">
                  <p className="info-header">Born:</p>
                  <p className="info-content">{data.data[0][7]} in {data.data[0][9]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">College:</p>
                  <p className="info-content">{data.data[0][8]}</p>
                </span>
                <span className="info-container">
                  <p className="info-header">NBA Draft:</p>
                  <p className="info-content">{data.data[0][29]} (Round: {data.data[0][30]} / Pick: {data.data[0][31]})</p>
                </span>
                <span className="info-container">
                  <p className="info-header">League Experience:</p>
                  <p className="info-content">{data.data[0][13]} year(s)</p>
                </span>
            </div>
          </div>
          <div className="info-selectors">
                <Link to={`/players/${params.letter}/${params.id}`}><button>Overview</button></Link>
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
