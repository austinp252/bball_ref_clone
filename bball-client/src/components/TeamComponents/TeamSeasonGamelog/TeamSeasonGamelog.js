import React, {useState, useEffect} from 'react';
import './TeamSeasonGamelog.css';

import Dropdown from '../../widgets/Dropdown/Dropdown';
import TeamSeasonBasicInfo from '../TeamSeasonBasicInfo/TeamSeasonBasicInfo';

import {Link, useParams} from 'react-router-dom';

function TeamSeasonGamelog() {
    const [data, setData] = useState(null);
    const params = useParams();

    useEffect(() => {
        console.log('attempting to fetch')
        fetch(`/api/teams/${params.id}/${params.season}/games`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    if(!data) {
        console.log('Loading');
        return(
            <div className="content">Loading...</div>
        )
    } else {
        console.log(data);
        return(
            <div className="content">
                <div className="common">
                    <TeamSeasonBasicInfo textName="Gamelog"/>
                </div>
                <div className="games">
                    <table>
                        <thead>
                            <tr>
                                <th>G</th>
                                <th>Date</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Opp</th>
                                <th>RES</th>
                                <th>Tm</th>
                                <th>Opp</th>
                                <th>W</th>
                                <th>L</th>
                                <th>W/L%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.data.slice(0).reverse().map((game, index) => {
                                    const teams = game[3].split(' ');
                                    return(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td><Link to={`/scores/${game[1]}/boxscore`}>{game[2]}</Link></td>
                                            <td><Link to={`/scores/${game[1]}/boxscore`}>Box-Score</Link></td>
                                            <td>{teams[0]}</td>
                                            <td>{teams[1] == '@' ? '@' : ''}</td>
                                            <td><Link to={`/teams/`}>{teams[2]}</Link></td>
                                            <td>{game[4]}</td>
                                            <td>{game[26]}</td>
                                            <td></td>
                                            <td>{game[5]}</td>
                                            <td>{game[6]}</td>
                                            <td>{game[7]}</td>
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

export default TeamSeasonGamelog;
