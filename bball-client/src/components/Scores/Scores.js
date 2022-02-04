import React, {useState, useEffect} from 'react';
import './Scores.css';

import Dropdown from '../widgets/Dropdown/Dropdown';

import {Link} from 'react-router-dom';

function Scores() {
  
    const [data, setData] = useState(null);
    const isLive = false;
    const [date, setDate] = useState([]); //to implement

    useEffect(() => {
        fetch('/boxscores')
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    if(!data) {
        return(
            <div className="content">Loading...</div>
        )
    } else if(isLive) {
        console.log("test");
        return(
            <div className="content">
                <h1>NBA Games Played on DATE</h1>
                <Dropdown/>
                <h2>{data.length} NBA Games</h2>
                <div className="boxscores">
                    {
                        data.map((game) => {
                            return(
                                <table>
                                    <thead>
                                        <tr>
                                            <td>{game.homeTeam.teamCity}</td>
                                            <td>{game.homeTeam.score}</td>
                                            <td>STS</td>
                                        </tr>
                                        <tr>
                                            <td>{game.awayTeam.teamCity}</td>
                                            <td>{game.awayTeam.score}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th>Q1</th>
                                            <th>Q2</th>
                                            <th>Q3</th>
                                            <th>Q4</th>
                                        </tr>
                                        <tr>
                                            <th>{game.homeTeam.teamCity}</th>
                                            <th>{game.homeTeam.periods[0].score}</th>
                                            <th>{game.homeTeam.periods[1].score}</th>
                                            <th>{game.homeTeam.periods[2].score}</th>
                                            <th>{game.homeTeam.periods[3].score}</th>
                                        </tr>
                                        <tr>
                                            <th>{game.awayTeam.teamCity}</th>
                                            <th>{game.awayTeam.periods[0].score}</th>
                                            <th>{game.awayTeam.periods[1].score}</th>
                                            <th>{game.awayTeam.periods[2].score}</th>
                                            <th>{game.awayTeam.periods[3].score}</th>
                                        </tr>
                                    </tbody>
                                    <tr>Box-Score | Play-By-Play | Shot-Chart</tr>
                                    <tr>Game Leaders</tr>
                                </table>
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return(
            <div className="content">
                <h1>NBA Games Played on DATE</h1>
                <h2>Implement date</h2>
                <div className="date-selector">
                    <Dropdown value="Febuary" selections={["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}/>
                    <Dropdown value="2" selections={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}/>
                    <Dropdown value="2022" selections={[2022, 2021, 2020]}/>
                </div>
                <h2>{data.data.length} NBA Games</h2>
                <div className="boxscores">
                    {
                        data.data.map((game) => {
                            return(
                                <table>
                                    <thead>
                                        <tr>
                                            <td>{game.homeTeam[5]}</td>
                                            <td>{game.homeTeam[22]}</td>
                                            <td>STS</td>
                                        </tr>
                                        <tr>
                                            <td>{game.awayTeam[5]}</td>
                                            <td>{game.awayTeam[22]}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th>Q1</th>
                                            <th>Q2</th>
                                            <th>Q3</th>
                                            <th>Q4</th>
                                        </tr>
                                        <tr>
                                            <th>{game.homeTeam[5]}</th>
                                            <th>{game.homeTeam[8]}</th>
                                            <th>{game.homeTeam[9]}</th>
                                            <th>{game.homeTeam[10]}</th>
                                            <th>{game.homeTeam[11]}</th>
                                        </tr>
                                        <tr>
                                            <th>{game.awayTeam[5]}</th>
                                            <th>{game.awayTeam[8]}</th>
                                            <th>{game.awayTeam[9]}</th>
                                            <th>{game.awayTeam[10]}</th>
                                            <th>{game.awayTeam[11]}</th>
                                        </tr>
                                        <tr>Box-Score | Play-By-Play | Shot-Chart</tr>
                                        <tr>Game Leaders</tr>
                                    </tbody>
                                </table>
                            )
                        })
                    }
                        
                </div>
            </div>
        )
    }


}

export default Scores;
