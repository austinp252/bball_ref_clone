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
    console.log('rendering basic info');
    return(
      <p>Loading...</p>
    )
  } else {
    const date = new Date(data.basic.data[0][7])
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
                  <p className="info-content">{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()} in {data.basic.data[0][9]}</p>
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
            <div className="awards">
            {
              data.awards.data.map((awardItem, index) => {
                if(awardItem.award.length > 0) {
                  return(
                    <div className="award-item">
                      {
                        awardItem.award.length === 1 &&
                        <span>{awardItem.award[0][6]} {awardItem.title}</span>
                      }
                      {
                        awardItem.award.length > 1 &&
                        <span>{awardItem.award.length} x {awardItem.title}</span>
                      }
                   </div>
                  )
                }
              })
            }
            {
                      data.basic.data[0][32] === 'Y' &&
                      <div className="award-item">
                        <span>NBA 75th Anniv. Team</span>
                      </div>
                    }
          </div>
          </div>
          <div className="stat-summary">
            <table>
              <thead>
                <tr>
                  <th>SUMMARY</th>
                  <th>G</th>
                  <th>PTS</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>FG%</th>
                  <th>FG3%</th>
                  <th>FT%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Career</td>
                  <td>{data.summary[0].career.data[0][3]}</td>
                  <td>{data.summary[0].career.data[0][23]}</td>
                  <td>{data.summary[0].career.data[0][17]}</td>
                  <td>{data.summary[0].career.data[0][18]}</td>
                  <td>{data.summary[0].career.data[0][8]}</td>
                  <td>{data.summary[0].career.data[0][11]}</td>
                  <td>{data.summary[0].career.data[0][14]}</td>
                </tr>
                {
                  data.summary[1].season &&
                  <tr>
                    <td>{data.summary[1].season.data[0][1]}</td>
                    <td>{data.summary[1].season.data[0][5]}</td>
                    <td>{data.summary[1].season.data[0][29]}</td>
                    <td>{data.summary[1].season.data[0][21]}</td>
                    <td>{data.summary[1].season.data[0][22]}</td>
                    <td>{data.summary[1].season.data[0][12]}</td>
                    <td>{data.summary[1].season.data[0][15]}</td>
                    <td>{data.summary[1].season.data[0][18]}</td>
                  </tr>
                }
              </tbody>
            </table>
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
