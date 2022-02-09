import React, {useState, useEffect} from 'react';
import './PlayerBio.css';

import PlayerBasicInfo from '../PlayerBasicInfo/PlayerBasicInfo';

import {Link, useParams} from 'react-router-dom';

function PlayerBio() {
  const [data, setData] = useState(null);
  const [showData, setShowData] = useState('Regular Season')
  const params = useParams();

  useEffect(() => {
    console.log("fetching player career stats")
    fetch(`/players/${params.letter}/${params.id}/stats`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);

    if(!data) {
      return(
        <div className="content">Loading...</div>
      )
    } else {
    //console.log(data)
    console.log('rendering data');
    //console.log(data.playerInfo.data[0][3]);
      return(
        <div className="content">
          <PlayerBasicInfo/>
          <div className="data-selectors">
            <button onClick={() => setShowData('Regular Season')}>Regular Season</button>
            <button onClick={() => setShowData('Playoffs')}>Playoffs</button>
          </div>
          <div className="dataShow">
            <div className="regular-season show">
              <table>
                <thead>
                  <th>Season</th>
                  <th>Age</th>
                  <th>Tm</th>
                  <th>Lg</th>
                  <th>GP</th>
                  <th>GS</th>
                  <th>MP</th>
                  <th>FGM</th>
                  <th>FGA</th>
                  <th>FG%</th>
                  <th>3PM</th>
                  <th>3PA</th>
                  <th>3P%</th>
                  <th>FT</th>
                  <th>FTA</th>
                  <th>FT%</th>
                  <th>OREB</th>
                  <th>DREB</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>STL</th>
                  <th>BLK</th>
                  <th>TOV</th>
                  <th>PF</th>
                  <th>PTS</th> 
                </thead>
                <tbody>
                  {
                    showData == 'Regular Season' ?
                    data.resultSets[0].rowSet.slice(0).reverse().map((season) => {
                      return(
                        <tr>
                          <td><Link to={`/players/${params.letter}/${params.id}/gamelog/${season[1]}`}>{season[1]}</Link></td>
                          <td>{season[5]}</td>
                          <td>{season[4]}</td>
                          <td>NBA</td>
                          <td>{season[6]}</td>
                          <td>{season[7]}</td>
                          <td>{season[8]}</td>
                          <td>{season[9]}</td>
                          <td>{season[10]}</td>
                          <td>{season[11]}</td>
                          <td>{season[12]}</td>
                          <td>{season[13]}</td>
                          <td>{season[14]}</td>
                          <td>{season[15]}</td>
                          <td>{season[16]}</td>
                          <td>{season[17]}</td>
                          <td>{season[18]}</td>
                          <td>{season[19]}</td>
                          <td>{season[20]}</td>
                          <td>{season[21]}</td>
                          <td>{season[22]}</td>
                          <td>{season[23]}</td>
                          <td>{season[24]}</td>
                          <td>{season[25]}</td>
                          <td>{season[26]}</td>
                        </tr>
                      )
                    }) :
                    data.resultSets[2].rowSet.map((season) => {
                      return(
                        <tr>
                          <td><Link to={`/players/${params.letter}/${params.id}/gamelog/${season[1]}`}>{season[1]}</Link></td>
                          <td>{season[5]}</td>
                          <td>{season[4]}</td>
                          <td>NBA</td>
                          <td>{season[6]}</td>
                          <td>{season[7]}</td>
                          <td>{season[8]}</td>
                          <td>{season[9]}</td>
                          <td>{season[10]}</td>
                          <td>{season[11]}</td>
                          <td>{season[12]}</td>
                          <td>{season[13]}</td>
                          <td>{season[14]}</td>
                          <td>{season[15]}</td>
                          <td>{season[16]}</td>
                          <td>{season[17]}</td>
                          <td>{season[18]}</td>
                          <td>{season[19]}</td>
                          <td>{season[20]}</td>
                          <td>{season[21]}</td>
                          <td>{season[22]}</td>
                          <td>{season[23]}</td>
                          <td>{season[24]}</td>
                          <td>{season[25]}</td>
                          <td>{season[26]}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
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

{/* <div className="career">
            <table>
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Age</th>
                  <th>Tm</th>
                  <th>Lg</th>
                  <th>GP</th>
                  <th>GS</th>
                  <th>MP</th>
                  <th>FGM</th>
                  <th>FGA</th>
                  <th>FG%</th>
                  <th>3PM</th>
                  <th>3PA</th>
                  <th>3P%</th>
                  <th>FT</th>
                  <th>FTA</th>
                  <th>FT%</th>
                  <th>OREB</th>
                  <th>DREB</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>STL</th>
                  <th>BLK</th>
                  <th>TOV</th>
                  <th>PF</th>
                  <th>PTS</th>          
                </tr>
              </thead>
              <tbody>
                  {
                    data.careerStats.resultSets[0].rowSet.map((season) => {
                      return(
                        <tr>
                          <td><Link to={`/players/${params.letter}/${params.id}/${season[1]}`}>{season[1]}</Link></td>
                          <td>{season[5]}</td>
                          <td>{season[4]}</td>
                          <td>NBA</td>
                          <td>{season[6]}</td>
                          <td>{season[7]}</td>
                          <td>{season[8]}</td>
                          <td>{season[9]}</td>
                          <td>{season[10]}</td>
                          <td>{season[11]}</td>
                          <td>{season[12]}</td>
                          <td>{season[13]}</td>
                          <td>{season[14]}</td>
                          <td>{season[15]}</td>
                          <td>{season[16]}</td>
                          <td>{season[17]}</td>
                          <td>{season[18]}</td>
                          <td>{season[19]}</td>
                          <td>{season[20]}</td>
                          <td>{season[21]}</td>
                          <td>{season[22]}</td>
                          <td>{season[23]}</td>
                          <td>{season[24]}</td>
                          <td>{season[25]}</td>
                          <td>{season[26]}</td>
                        </tr>
                      )
                    })
                  }
                  {
                      data.careerStats.resultSets[1].rowSet.map((season) => {
                        return(
                          <tr>
                            <td>Career</td>
                            <td></td>
                            <td></td>
                            <td>NBA</td>
                            <td>{season[3]}</td>
                            <td>{season[4]}</td>
                            <td>{season[5]}</td>
                            <td>{season[6]}</td>
                            <td>{season[7]}</td>
                            <td>{season[8]}</td>
                            <td>{season[9]}</td>
                            <td>{season[10]}</td>
                            <td>{season[11]}</td>
                            <td>{season[12]}</td>
                            <td>{season[13]}</td>
                            <td>{season[14]}</td>
                            <td>{season[15]}</td>
                            <td>{season[16]}</td>
                            <td>{season[17]}</td>
                            <td>{season[18]}</td>
                            <td>{season[19]}</td>
                            <td>{season[20]}</td>
                            <td>{season[21]}</td>
                            <td>{season[22]}</td>
                            <td>{season[23]}</td>
                          </tr>
                        )
                      })
                  }
              </tbody>
            </table>
          </div> */}
