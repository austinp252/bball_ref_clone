import React, {useState, useEffect} from 'react';
import './Scores.css';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import {Link} from 'react-router-dom';

function Scores() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
  
    const [data, setData] = useState(null);
    const isLive = false;
    const [date, setDate] = useState([today]); //to implement - format yyyy-mm-dd

    const monthOptions = [{"label": "January", "value": "01"}, {"label": "Febuary", "value": "02"}, {"label": "March", "value": "03"}, {"label": "April", "value": "04"}, {"label": "May", "value": "05"}, {"label": "June", "value": "06"}, {"label": "July", "value": "07"}, {"label": "August", "value": "08"}, {"label": "September", "value": "09"}, {"label": "October", "value": "10"}, {"label": "November", "value": "11"}, {"label": "December", "value": "12"}]
    const dayOptions = [{"label": "1", "value": "01"}, {"label": "2", "value": "02"}, {"label": "3", "value": "03"}, {"label": "4", "value": "04"}, {"label": "5", "value": "05"}, {"label": "6", "value": "06"}, {"label": "7", "value": "07"}, {"label": "8", "value": "08"}, {"label": "9", "value": "09"}, {"label": "10", "value": "10"}, {"label": "11", "value": "11"}, {"label": "12", "value": "12"}, {"label": "13", "value": "13"}, {"label": "14", "value": "14"}, {"label": "15", "value": "15"}, {"label": "16", "value": "16"}, {"label": "17", "value": "17"}, {"label": "18", "value": "18"}, {"label": "19", "value": "19"}, {"label": "20", "value": "20"}, {"label": "21", "value": "21"}, {"label": "22", "value": "22"}, {"label": "23", "value": "23"}, {"label": "24", "value": "24"}, {"label": "25", "value": "25"}, {"label": "26", "value": "26"}, {"label": "27", "value": "27"}, {"label": "28", "value": "28"}, {"label": "29", "value": "29"}, {"label": "30", "value": "30"}, {"label": "31", "value": "31"}]
    const yearOptions = [{"label": "2022", "value": "2022"}, {"label": "2021", "value": "2021"}, {"label": "2020", "value": "2020"}, {"label": "2019", "value": "2019"}, {"label": "2018", "value": "2018"}]


    const handleSubmit = (e) => {
        const newDate = e.target[2].value + '-' + e.target[0].value + '-' + e.target[1].value
        setDate(newDate);
        console.log(newDate);
        e.preventDefault();
    }

    useEffect(() => {
        fetch(`/scores/${date}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [date]);

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
                <h1>NBA Games Played on {date}</h1>
                <h2>Implement date</h2>
                <div className="date-selector">
                    <form onSubmit={handleSubmit}>
                        <Dropdown value={date[0].substring(0,2)} selections={monthOptions}/>
                        <Dropdown value={date[0].substring(3,5)} selections={dayOptions}/>
                        <Dropdown value={date[0].substring(6,10)} selections={yearOptions}/>
                    <input type="submit" value="Submit"/>
                    </form>
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
                                        <tr><Link to={`/scores/${game.homeTeam[2]}/boxscore`}>Box-Score</Link> | Play-By-Play | Shot-Chart</tr>
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

{/* <Dropdown value="2" selections={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}/>
                        <Dropdown value="2022" selections={[2022, 2021, 2020]}/> */}
