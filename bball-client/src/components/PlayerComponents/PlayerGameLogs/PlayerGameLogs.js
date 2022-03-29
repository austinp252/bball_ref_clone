import React, {useState, useEffect} from 'react';
import './PlayerGameLogs.css';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import PlayerBasicInfo from '../PlayerBasicInfo/PlayerBasicInfo';

import {Link, useParams} from 'react-router-dom';

function PlayerStatsSeason() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/players/${params.letter}/${params.id}/gamelog/${params.season}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);

  if(!data) {
    //console.log(params.gameid);
    console.log('Loading');
    return(
        <div className="content">Loading...</div>
    )
} else {
    console.log(data);
    return(
        <div className="content">
            <PlayerBasicInfo/>
            <div className="dataShow">
                <div className="regular-season">
                    <h2>{params.season} Regular Season</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Tm</th>
                                <th>Opp</th>
                                <th>Result</th>
                                <th>MP</th>
                                <th>FG</th>
                                <th>FGA</th>
                                <th>FG%</th>
                                <th>3P</th>
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
                                <th>+/-</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.regular.data.slice(0).reverse().map((game, index) => {
                                // if(index % 20 == 0) {
                                //     return(
                                        // <tr>
                                        //     <th>Rk</th>
                                        //     <th>Date</th>
                                        //     <th>Tm</th>
                                        //     <th>Opp</th>
                                        //     <th>Result</th>
                                        //     <th>MP</th>
                                        //     <th>FG</th>
                                        //     <th>FGA</th>
                                        //     <th>FG%</th>
                                        //     <th>3P</th>
                                        //     <th>3PA</th>
                                        //     <th>3P%</th>
                                        //     <th>FT</th>
                                        //     <th>FTA</th>
                                        //     <th>FT%</th>
                                        //     <th>OREB</th>
                                        //     <th>DREB</th>
                                        //     <th>REB</th>
                                        //     <th>AST</th>
                                        //     <th>STL</th>
                                        //     <th>BLK</th>
                                        //     <th>TOV</th>
                                        //     <th>PF</th>
                                        //     <th>PTS</th>
                                        //     <th>+/-</th>
                                        // </tr>
                                //     )
                                // }
                                    return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td><Link to={`/scores/${game[7]}/boxscore`}>{game[8].split('T')[0]}</Link></td>
                                                <td>{game[5]}</td>
                                                <td>{game[9].split(' ')[2]}</td>
                                                <td>{game[10]}</td>
                                                <td>{Math.round(game[11])}</td>
                                                <td>{game[12]}</td>
                                                <td>{game[13]}</td>
                                                <td>{game[14]}</td>
                                                <td>{game[15]}</td>
                                                <td>{game[16]}</td>
                                                <td>{game[17]}</td>
                                                <td>{game[18]}</td>
                                                <td>{game[19]}</td>
                                                <td>{game[20]}</td>
                                                <td>{game[21]}</td>
                                                <td>{game[22]}</td>
                                                <td>{game[23]}</td>
                                                <td>{game[24]}</td>
                                                <td>{game[26]}</td>
                                                <td>{game[27]}</td>
                                                <td>{game[25]}</td>
                                                <td>{game[29]}</td>
                                                <td>{game[31]}</td>
                                                <td>{game[32]}</td>              
                                            </tr>
                                    )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="post-season">
                <h2>{params.season} Post Season</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Tm</th>
                            <th>Opp</th>
                            <th>Result</th>
                            <th>MP</th>
                            <th>FG</th>
                            <th>FGA</th>
                            <th>FG%</th>
                            <th>3P</th>
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
                            <th>+/-</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.playoffs.data.slice(0).reverse().map((game, index) => {;
                            // if(index % 20 == 0) {
                            //     return(
                                    // <tr>
                                    //     <th>Rk</th>
                                    //     <th>Date</th>
                                    //     <th>Tm</th>
                                    //     <th>Opp</th>
                                    //     <th>Result</th>
                                    //     <th>MP</th>
                                    //     <th>FG</th>
                                    //     <th>FGA</th>
                                    //     <th>FG%</th>
                                    //     <th>3P</th>
                                    //     <th>3PA</th>
                                    //     <th>3P%</th>
                                    //     <th>FT</th>
                                    //     <th>FTA</th>
                                    //     <th>FT%</th>
                                    //     <th>OREB</th>
                                    //     <th>DREB</th>
                                    //     <th>REB</th>
                                    //     <th>AST</th>
                                    //     <th>STL</th>
                                    //     <th>BLK</th>
                                    //     <th>TOV</th>
                                    //     <th>PF</th>
                                    //     <th>PTS</th>
                                    //     <th>+/-</th>
                                    // </tr>
                            //     )
                            // }
                                return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td><Link to={`/scores/${game[7]}/boxscore`}>{game[8].split('T')[0]}</Link></td>
                                            <td>{game[5]}</td>
                                            <td>{game[9].split(' ')[2]}</td>
                                            <td>{game[10]}</td>
                                            <td>{Math.round(game[11])}</td>
                                            <td>{game[12]}</td>
                                            <td>{game[13]}</td>
                                            <td>{game[14]}</td>
                                            <td>{game[15]}</td>
                                            <td>{game[16]}</td>
                                            <td>{game[17]}</td>
                                            <td>{game[18]}</td>
                                            <td>{game[19]}</td>
                                            <td>{game[20]}</td>
                                            <td>{game[21]}</td>
                                            <td>{game[22]}</td>
                                            <td>{game[23]}</td>
                                            <td>{game[24]}</td>
                                            <td>{game[26]}</td>
                                            <td>{game[27]}</td>
                                            <td>{game[25]}</td>
                                            <td>{game[29]}</td>
                                            <td>{game[31]}</td>
                                            <td>{game[32]}</td>              
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

export default PlayerStatsSeason;

{/* <h1>player name (season) Game Log</h1>
            <h2>{params.season} Regular Season</h2>
            <div className="games">
                <table>
                    <thead>
                        <tr>
                            <th>Rk</th>
                            <th>Date</th>
                            <th>Tm</th>
                            <th>Opp</th>
                            <th>Result</th>
                            <th>MP</th>
                            <th>FG</th>
                            <th>FGA</th>
                            <th>FG%</th>
                            <th>3P</th>
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
                            <th>+/-</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.data.slice(0).reverse().map((game, index) => {;
                            // if(index % 20 == 0) {
                            //     return(
                                    // <tr>
                                    //     <th>Rk</th>
                                    //     <th>Date</th>
                                    //     <th>Tm</th>
                                    //     <th>Opp</th>
                                    //     <th>Result</th>
                                    //     <th>MP</th>
                                    //     <th>FG</th>
                                    //     <th>FGA</th>
                                    //     <th>FG%</th>
                                    //     <th>3P</th>
                                    //     <th>3PA</th>
                                    //     <th>3P%</th>
                                    //     <th>FT</th>
                                    //     <th>FTA</th>
                                    //     <th>FT%</th>
                                    //     <th>OREB</th>
                                    //     <th>DREB</th>
                                    //     <th>REB</th>
                                    //     <th>AST</th>
                                    //     <th>STL</th>
                                    //     <th>BLK</th>
                                    //     <th>TOV</th>
                                    //     <th>PF</th>
                                    //     <th>PTS</th>
                                    //     <th>+/-</th>
                                    // </tr>
                            //     )
                            // }
                                return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td><Link to={`/scores/${game[7]}/boxscore`}>{game[8].split('T')[0]}</Link></td>
                                            <td>{game[5]}</td>
                                            <td>{game[9].split(' ')[2]}</td>
                                            <td>{game[10]}</td>
                                            <td>{Math.round(game[11])}</td>
                                            <td>{game[12]}</td>
                                            <td>{game[13]}</td>
                                            <td>{game[14]}</td>
                                            <td>{game[15]}</td>
                                            <td>{game[16]}</td>
                                            <td>{game[17]}</td>
                                            <td>{game[18]}</td>
                                            <td>{game[19]}</td>
                                            <td>{game[20]}</td>
                                            <td>{game[21]}</td>
                                            <td>{game[22]}</td>
                                            <td>{game[23]}</td>
                                            <td>{game[24]}</td>
                                            <td>{game[26]}</td>
                                            <td>{game[27]}</td>
                                            <td>{game[25]}</td>
                                            <td>{game[29]}</td>
                                            <td>{game[31]}</td>
                                            <td>{game[32]}</td>              
                                        </tr>
                                )
                        })
                    }
                    </tbody>
                </table>
            </div> */}
