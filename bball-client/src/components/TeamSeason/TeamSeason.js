import React, {useState, useEffect} from 'react';
import './TeamSeason.css';

import TeamSeasonBasicInfo from '../TeamSeasonBasicInfo/TeamSeasonBasicInfo';

import {Link, useParams} from 'react-router-dom';

function TeamSeason() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`/teams/${params.id}/${params.season}/stats`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    if(!data) {
        console.log('loading...');
        return(
            <p>Loading...</p>
        )
    } else {
        //console.log(data.resultSets[0].rowSet[2]);
        console.log(data);
        return(
            <div className="content">
                <div className="common">
                    <TeamSeasonBasicInfo textName="Roster & Stats"/>
                </div>
                <div className="roster">
                    <h3>Roster</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Player</th>
                                <th>Pos</th>
                                <th>Ht</th>
                                <th>Wt</th>
                                <th>Birth Date</th>
                                <th>Exp</th>
                                <th>College</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.resultSets[1].rowSet.map((player) => {
                                return(
                                    <tr>
                                        <td>--</td>
                                        <td><Link to={`/players/${player[2].split(' ')[1][0]}/${player[1]}`}>{player[2]}</Link></td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                </div>
                <div className="perGame">
                <h3>Per Game</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Rk</th>
                                <th>Player</th>
                                <th>Age</th>
                                <th>G</th>
                                <th>GS</th>
                                <th>MP</th>
                                <th>FG</th>
                                <th>FGA</th>
                                <th>FG%</th>
                                <th>3PM</th>
                                <th>3PA</th>
                                <th>3P%</th>
                                <th>FTM</th>
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
                            data.resultSets[1].rowSet.map((player) => {
                                return(
                                    <tr>
                                        <td>--</td>
                                        <td><Link to={`/players/${player[2].split(' ')[1][0]}/${player[1]}`}>{player[2]}</Link></td>
                                        <td>--</td>
                                        <td>{player[4]}</td>
                                        <td>--</td>
                                        <td>{player[8]}</td>
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
                                        <td>{player[23]}</td>
                                        <td>{player[24]}</td>
                                        <td>{player[22]}</td>
                                        <td>{player[26]}</td>
                                        <td>{player[28]}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TeamSeason;
