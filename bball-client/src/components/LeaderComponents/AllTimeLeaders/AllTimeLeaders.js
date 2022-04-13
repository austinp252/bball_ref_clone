import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';

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
    fetch(`/test`)
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
          <div className="regular-season-leaders">
              <table>
                  <tbody>
                      <tr>
                          <th colspan='2'>Totals</th>
                      </tr>
                      <tr>
                          <td>Games</td>
                          <td><Link to='/leaders/career/gp'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Field Goals</td>
                          <td><Link to='/leaders/career/fg'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Field Goal Attempts</td>
                          <td><Link to='/leaders/career/fga'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goals</td>
                          <td><Link to='/leaders/career/3p'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>3-Pt Field Goal Attempts</td>
                          <td><Link to='/leaders/career/3pa'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throws</td>
                          <td><Link to='/leaders/career/ft'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Free Throw Attempts</td>
                          <td><Link to='/leaders/career/fta'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Offensive Rebounds</td>
                          <td><Link to='/leaders/career/oreb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Defensive Rebounds</td>
                          <td><Link to='/leaders/career/dreb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Total Rebounds</td>
                          <td><Link to='/leaders/career/reb'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Assists</td>
                          <td><Link to='/leaders/career/ast'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Steals</td>
                          <td><Link to='/leaders/career/stl'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Blocks</td>
                          <td><Link to='/leaders/career/blk'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Turnovers</td>
                          <td><Link to='/leaders/career/tov'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Personal Fouls</td>
                          <td><Link to='/leaders/career/pf'>Career</Link></td>
                      </tr>
                      <tr>
                          <td>Points</td>
                          <td><Link to='/leaders/career/pts'>Career</Link></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
}

export default Leaders;