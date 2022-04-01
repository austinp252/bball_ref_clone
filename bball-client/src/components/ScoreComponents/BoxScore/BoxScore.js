import React, {useState, useEffect, Fragment} from 'react';
import './BoxScore.css';

import teamRouter from '../../widgets/Helpers/teamRouter';

import {Link, useParams} from 'react-router-dom';

function BoxScore() {
    const [data, setData] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetch(`/scores/boxscore/${params.gameid}`)
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
        window.scrollTo(0, 0);
        console.log(data.data[0]);
        return(
            <div className="boxscore-content">
                <h1>{data.lineScore.data[0][5]} {data.lineScore.data[0][6]} at {data.lineScore.data[1][5]} {data.lineScore.data[1][6]}, {data.lineScore.data[0][0]}</h1>
                <div className="boxscore-overview-container">
                    <div className="boxscore-overview-teams">
                        <div className="team">
                            <img src={`https://cdn.nba.com/logos/nba/${data.lineScore.data[0][3]}/primary/L/logo.svg`} alt="" />
                            <h3>{data.lineScore.data[0][5]} {data.lineScore.data[0][6]}</h3>
                            <h2>{data.lineScore.data[0][22]}</h2>
                            <h5>{data.lineScore.data[0][7]}</h5>
                            <div className="boxscore-overview-buttons">
                                <button>Prev</button>
                            </div>
                        </div>
                        <div className="team">
                            <img src={`https://cdn.nba.com/logos/nba/${data.lineScore.data[1][3]}/primary/L/logo.svg`} alt="" />
                            <h3>{data.lineScore.data[1][5]} {data.lineScore.data[1][6]}</h3>
                            <h2>{data.lineScore.data[1][22]}</h2>
                            <h5>{data.lineScore.data[1][7]}</h5>
                            <div className="boxscore-overview-buttons">
                                <button>Prev</button>
                            </div>
                        </div>
                    </div>
                    <div className="boxscore-overview-details">
                        <p>{data.lineScore.data[0][0]}</p>
                        <p>Arena name</p>
                    </div>
                </div>
                <div className="boxscore-summary-container">
                    <div className="lineScore">
                        <h2>Line Score</h2>
                        <table>
                            <thead>
                                <tr colspan='6'>Scoring</tr>
                                <tr>
                                    <th></th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>T</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.lineScore.data.map((teamLine) => {
                                        return(
                                            <tr>
                                                <td><Link to={`/teams/${teamRouter(teamLine[4])}/${params.season}`}>{teamLine[4]}</Link></td>
                                                <td>{teamLine[8]}</td>
                                                <td>{teamLine[9]}</td>
                                                <td>{teamLine[10]}</td>
                                                <td>{teamLine[11]}</td>
                                                <td>{teamLine[22]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="fourFactors">
                    <h2>Four Factors</h2>
                        <table>
                            <thead>
                                <tr colspan='5'>Four Factors</tr>
                                <tr>
                                    <th></th>
                                    <th>eFG%</th>
                                    <th>TOV%</th>
                                    <th>ORB%</th>
                                    <th>FT/FGA</th>                               
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.fourFactors.data.map((teamLine) => {
                                        return(
                                            <tr>
                                                <td>{teamLine[3]}</td>
                                                <td>{teamLine[6]}</td>
                                                <td>{teamLine[8]}</td>
                                                <td>{teamLine[9]}</td>
                                                <td>{teamLine[7]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    data.data.map((team, index) => {
                        return(
                            <div className="team-stats">
                                <h2>{data.lineScore.data[index][5]} {data.lineScore.data[index][6]} Basic and Advanced Stats</h2>
                                <div className="boxscore-trad">
                                    <table>
                                        <thead>
                                            <tr>Basic Box Score Stats</tr>
                                            <tr>
                                                <th>Starters</th>
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
                                                team[0].map((player, index) => {
                                                    if(parseInt(player[9])>= 0) {
                                                        return(
                                                            <Fragment>
                                                                <tr>
                                                                    <td><Link to={`/players/${player[5].split(' ')[1][0]}/${player[4]}`}>{player[5]}</Link></td>
                                                                    <td>{player[9]}</td>
                                                                    <td>{player[10]}</td>
                                                                    <td>{player[11]}</td>
                                                                    <td>{player[12]}</td>
                                                                    <td>{player[13]}</td>
                                                                    <td>{player[14]}</td>
                                                                    <td>{player[15]}</td>
                                                                    <td>{player[16]}</td>
                                                                    <td>{player[17]}</td>
                                                                    <td>{player[18]}</td>
                                                                    <td>{player[19]}</td>
                                                                    <td>{player[20]}</td>
                                                                    <td>{player[21]}</td>
                                                                    <td>{player[22]}</td>
                                                                    <td>{player[23]}</td>
                                                                    <td>{player[24]}</td>
                                                                    <td>{player[25]}</td>
                                                                    <td>{player[26]}</td>
                                                                    <td>{player[27]}</td>
                                                                    <td>{player[28]}</td> 
                                                                </tr>
                                                                {
                                                                    index==4 &&
                                                                    <tr>
                                                                        <th>Reserves</th>
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

                                                                }
                                                            </Fragment>
                                                        )
                                                    } else {
                                                        return(
                                                            <Fragment>
                                                                <tr>
                                                                    <td><Link to={`/players/${player[5].split(' ')[1][0]}/${player[4]}`}>{player[5]}</Link></td>
                                                                    <td colspan='20'className='status'>Did Not Play</td>
                                                                </tr>
                                                                {
                                                                    index==4 &&
                                                                    <tr>
                                                                        <th>Reserves</th>
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

                                                                }
                                                            </Fragment>
                                                        )
                                                    }
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="boxscore-advanced">
                                    <table>
                                        <thead>
                                            <tr>Advanced Box Score Stats</tr>
                                            <tr>
                                                <th>Starters</th>
                                                <th>MP</th>
                                                <th>TS%</th>
                                                <th>eFG%</th>
                                                <th>Pace</th>
                                                <th>OREB%</th>
                                                <th>DREB%</th>
                                                <th>REB%</th>
                                                <th>AST%</th>
                                                <th>USG%</th>
                                                <th>ORTG</th>
                                                <th>DRTG</th>
                                                <th>RTG</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                team[1].map((player, index) => {
                                                        if(parseInt(player[9])>=0) {
                                                            return(
                                                                <Fragment>
                                                                    <tr>
                                                                        <td><Link to={`/players/${player[5].split(' ')[1][0]}/${player[4]}`}>{player[5]}</Link></td>
                                                                        <td>{player[9]}</td>
                                                                        <td>{player[23]}</td>
                                                                        <td>{player[22]}</td>
                                                                        <td>{player[27]}</td>
                                                                        <td>{player[18]}</td>
                                                                        <td>{player[19]}</td>
                                                                        <td>{player[20]}</td>
                                                                        <td>{player[15]}</td>
                                                                        <td>{player[24]}</td>
                                                                        <td>{player[10]}</td>
                                                                        <td>{player[12]}</td>
                                                                        <td>{player[14]}</td>
                                                                    </tr>
                                                                    {index==4 &&
                                                                    <tr>
                                                                        <th>Reserves</th>
                                                                        <th>MP</th>
                                                                        <th>TS%</th>
                                                                        <th>eFG%</th>
                                                                        <th>Pace</th>
                                                                        <th>OREB%</th>
                                                                        <th>DREB%</th>
                                                                        <th>REB%</th>
                                                                        <th>AST%</th>
                                                                        <th>USG%</th>
                                                                        <th>ORTG</th>
                                                                        <th>DRTG</th>
                                                                        <th>RTG</th>
                                                                    </tr>}
                                                                </Fragment>
                                                            )
                                                        } else {
                                                            return(
                                                                <Fragment>
                                                                    <tr>
                                                                        <td><Link to={`/players/${player[5].split(' ')[1][0]}/${player[4]}`}>{player[5]}</Link></td>
                                                                        <td className='status' colspan='12'>Did Not Play</td>
                                                                    </tr>
                                                                    {index==4 &&
                                                                    <tr>
                                                                        <th>Reserves</th>
                                                                        <th>MP</th>
                                                                        <th>TS%</th>
                                                                        <th>eFG%</th>
                                                                        <th>Pace</th>
                                                                        <th>OREB%</th>
                                                                        <th>DREB%</th>
                                                                        <th>REB%</th>
                                                                        <th>AST%</th>
                                                                        <th>USG%</th>
                                                                        <th>ORTG</th>
                                                                        <th>DRTG</th>
                                                                        <th>RTG</th>
                                                                    </tr>}
                                                                </Fragment>
                                                            )
                                                        }
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          );
    }
}

export default BoxScore;
