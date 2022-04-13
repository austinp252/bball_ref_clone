import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';
import AllTimeLeaders from '../AllTimeLeaders/AllTimeLeaders';

import './Leaders.css';

import {Link, useParams} from 'react-router-dom';

function Leaders() {
  const [data, setData] = useState(null);
  const [season, setSeason] = useState('2021-22');

  const seasonOptions = [{"label": "2014-15", "value": "2014-15"}, {"label": "2015-16", "value": "2015-16"}, {"label": "2016-17", "value": "2016-17"}, {"label": "2017-18", "value": "2017-18"}, {"label": "2018-19", "value": "2018-19"}, {"label": "2019-20", "value": "2019-20"}, {"label": "2020-21", "value": "2020-21"}, {"label": "2021-22", "value": "2021-22"}]

  const handleSubmit = (e) => {
    const newSeason = e.target[0].value;
    setSeason(newSeason);
    console.log(newSeason);
    e.preventDefault();
  }

  useEffect(() => {
    console.log("fetching leader data")
    fetch(`/leaders/${season}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, [season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
    return(
      <div className="content">
        <div className="header">
          <h3>NBA {season} Season Leaders</h3>
        </div>
        <div className="season-selector">
            <form onSubmit={handleSubmit}>
                <Dropdown value={season} selections={seasonOptions}/>
            <input type="submit" value="Submit"/>
            </form>
        </div>
        <div className="data-container">
          <div className="data-matched-container">
            <div className="data-block">
              <div className="data-item">
                <span className='header'>Games: </span>
              </div>
              <div className="data-item">
                <span className='header'>Minutes Played: </span>
              </div>
              <div className="data-item">
                <span className='header'>Field Goals: </span>
              </div>
              <div className="data-item">
                <span className='header'>Field Goal Attempts: </span>
              </div>
              <div className="data-item">
                <span className='header'>3-Pt Field Goals: </span>
              </div>
              <div className="data-item">
                <span className='header'>3-Pt Field Goal Attempts: </span>
              </div>
              <div className="data-item">
                <span className='header'>Free Throws: </span>
              </div>
              <div className="data-item">
                <span className='header'>Free Throw Attempts: </span>
              </div>
              <div className="data-item">
                <span className='header'>Offensive Rebounds: </span>
              </div>
              <div className="data-item">
                <span className='header'>Defensive Rebounds: </span>
              </div>
              <div className="data-item">
                <span className='header'>Total Rebounds: </span>
              </div>
              <div className="data-item">
                <span className='header'>Assists: </span>
              </div>
              <div className="data-item">
                <span className='header'>Steals: </span>
              </div>
              <div className="data-item">
                <span className='header'>Blocks: </span>
              </div>
            </div>
            <div className="data-block">
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[0][2].split(' ')[1][0]}/${data.data[0][0]}`}>{data.data[0][2]}</Link> {data.data[0][3]} {data.data[0][4]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[1][2].split(' ')[1][0]}/${data.data[1][0]}`}>{data.data[1][2]}</Link> {data.data[1][3]} {data.data[1][5]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[2][2].split(' ')[1][0]}/${data.data[2][0]}`}>{data.data[2][2]}</Link> {data.data[2][3]} {data.data[2][6]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[3][2].split(' ')[1][0]}/${data.data[3][0]}`}>{data.data[3][2]}</Link> {data.data[3][3]} {data.data[3][7]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[4][2].split(' ')[1][0]}/${data.data[4][0]}`}>{data.data[4][2]}</Link> {data.data[4][3]} {data.data[4][9]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[5][2].split(' ')[1][0]}/${data.data[5][0]}`}>{data.data[5][2]}</Link> {data.data[5][3]} {data.data[5][4]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[6][2].split(' ')[1][0]}/${data.data[6][0]}`}>{data.data[6][2]}</Link> {data.data[6][3]} {data.data[6][12]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[7][2].split(' ')[1][0]}/${data.data[7][0]}`}>{data.data[7][2]}</Link> {data.data[7][3]} {data.data[7][13]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[8][2].split(' ')[1][0]}/${data.data[8][0]}`}>{data.data[8][2]}</Link> {data.data[8][3]} {data.data[8][13]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[9][2].split(' ')[1][0]}/${data.data[9][0]}`}>{data.data[9][2]}</Link> {data.data[9][3]} {data.data[9][15]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[10][2].split(' ')[1][0]}/${data.data[10][0]}`}>{data.data[10][2]}</Link> {data.data[10][3]} {data.data[10][16]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[11][2].split(' ')[1][0]}/${data.data[11][0]}`}>{data.data[11][2]}</Link> {data.data[11][3]} {data.data[11][17]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[12][2].split(' ')[1][0]}/${data.data[12][0]}`}>{data.data[12][2]}</Link> {data.data[12][3]} {data.data[12][18]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[13][2].split(' ')[1][0]}/${data.data[13][0]}`}>{data.data[13][2]}</Link> {data.data[13][3]} {data.data[13][19]}</span>
              </div>
            </div>
          </div>
          <div className="data-matched-container">
            <div className="data-block">
              <div className="data-item">
                <span className='header'>Turnovers: </span>
              </div>
              <div className="data-item">
                <span className='header'>Personal Fouls: </span>
              </div>
              <div className="data-item">
                <span className='header'>Points: </span>
              </div>
              <div className="data-item">
                <span className='header'>Field Goal Pct.: </span>
              </div>
              <div className="data-item">
                <span className='header'>3-Pt Field Goal Pct: </span>
              </div>
              <div className="data-item">
                <span className='header'>Free Throw Pct. </span>
              </div>
              <div className="data-item">
                <span className='header'>Minutes Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Points Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Rebounds Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Assists Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Steals Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Blocks Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Turnovers Per Game </span>
              </div>
              <div className="data-item">
                <span className='header'>Player Efficiency Rating </span>
              </div>
            </div>
            <div className="data-block">
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[14][2].split(' ')[1][0]}/${data.data[14][0]}`}>{data.data[14][2]}</Link> {data.data[14][3]} {data.data[14][21]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[15][2].split(' ')[1][0]}/${data.data[15][0]}`}>{data.data[15][2]}</Link> {data.data[15][3]} {data.data[15][22]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[16][2].split(' ')[1][0]}/${data.data[16][0]}`}>{data.data[16][2]}</Link> {data.data[16][3]} {data.data[16][23]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[17][2].split(' ')[1][0]}/${data.data[17][0]}`}>{data.data[17][2]}</Link> {data.data[17][3]} {data.data[17][8]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[18][2].split(' ')[1][0]}/${data.data[18][0]}`}>{data.data[18][2]}</Link> {data.data[18][3]} {data.data[18][11]}</span>
              </div>
              <div className="data-item">
                <span className='data'> <Link to={`/players/${data.data[19][2].split(' ')[1][0]}/${data.data[19][0]}`}>{data.data[19][2]}</Link> {data.data[19][14]}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[20][2].split(' ')[1][0]}/${data.data[20][0]}`}>{data.data[20][2]}</Link> {data.data[20][3]} {(data.data[20][5]/data.data[20][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[21][2].split(' ')[1][0]}/${data.data[21][0]}`}>{data.data[21][2]}</Link> {data.data[21][3]} {(data.data[21][23]/data.data[21][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[22][2].split(' ')[1][0]}/${data.data[22][0]}`}>{data.data[22][2]}</Link> {data.data[22][3]} {(data.data[22][17]/data.data[22][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[23][2].split(' ')[1][0]}/${data.data[23][0]}`}>{data.data[23][2]}</Link> {data.data[23][3]} {(data.data[23][18]/data.data[23][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[24][2].split(' ')[1][0]}/${data.data[24][0]}`}>{data.data[24][2]}</Link> {data.data[24][3]} {(data.data[24][19]/data.data[24][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[25][2].split(' ')[1][0]}/${data.data[25][0]}`}>{data.data[25][2]}</Link> {data.data[25][3]} {(data.data[25][20]/data.data[25][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[26][2].split(' ')[1][0]}/${data.data[26][0]}`}>{data.data[26][2]}</Link> {data.data[26][3]} {(data.data[26][21]/data.data[26][4]).toFixed(2)}</span>
              </div>
              <div className="data-item">
                <span className='data'><Link to={`/players/${data.data[27][2].split(' ')[1][0]}/${data.data[27][0]}`}>{data.data[27][2]}</Link> {data.data[27][3]} {(data.data[27][24]/data.data[27][4]).toFixed(2)}</span>
              </div>
          </div>
          </div>
        </div>
        <div className="regular-season-leaders">
          <AllTimeLeaders/>
        </div>
      </div>
    )
  }
}

export default Leaders;
