import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

import './Seasons.css';

function Seasons() {
  const [data, setData] = useState(null);
  const [season, setSeason] = useState('2019-20');

  const seasonOptions = [{"label": "2014-15", "value": "2014-15"}, {"label": "2015-16", "value": "2015-16"}, {"label": "2016-17", "value": "2016-17"}, {"label": "2017-18", "value": "2017-18"}, {"label": "2018-19", "value": "2018-19"}, {"label": "2019-20", "value": "2019-20"}, {"label": "2020-21", "value": "2020-21"}]

  const handleSubmit = (e) => {
    const newSeason = e.target[0].value;
    setSeason(newSeason);
    console.log(newSeason);
    e.preventDefault();
  }

  useEffect(() => {
    console.log("fetching season data")
    fetch(`/seasons/${season}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, [season]);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
    const headers1 = [{'header':'Eastern Conference', 'type':'empty'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'W/L%', 'type':'number'}, {'header':'GB', 'type':'number'},{'header':'PPG', 'type':'number'}, {'header':'OPPG', 'type':'number'}]
    const headers2 = [{'header':'Western Conference', 'type':'empty'}, {'header':'W', 'type':'number'}, {'header':'L', 'type':'number'}, {'header':'W/L%', 'type':'number'}, {'header':'GB', 'type':'number'},{'header':'PPG', 'type':'number'}, {'header':'OPPG', 'type':'number'}]
    const tableData1 = []
    const tableData2 = []
    data.east.forEach((team) => {
      const dataItem = [];
      dataItem.push({'dataContent': team[3] + ' ' + team[4] + ' (' + team[8] + ')', 'link':`/teams/${team[2]}/${season}`})
      dataItem.push({'dataContent': team[13], 'link':null})
      dataItem.push({'dataContent': team[14], 'link':null})
      dataItem.push({'dataContent': team[15], 'link':null})
      dataItem.push({'dataContent': team[38], 'link':null})
      dataItem.push({'dataContent': team[57], 'link':null})
      dataItem.push({'dataContent': team[58], 'link':null})
      tableData1.push(dataItem);
    });
    data.west.forEach((team) => {
      const dataItem = [];
      dataItem.push({'dataContent': team[3] + ' ' + team[4] + ' (' + team[8] + ')', 'link':`/teams/${team[2]}/${season}`})
      dataItem.push({'dataContent': team[13], 'link':null})
      dataItem.push({'dataContent': team[14], 'link':null})
      dataItem.push({'dataContent': team[15], 'link':null})
      dataItem.push({'dataContent': team[38], 'link':null})
      dataItem.push({'dataContent': team[57], 'link':null})
      dataItem.push({'dataContent': team[58], 'link':null})
      tableData2.push(dataItem);
    });
    return(
      <div className="content">
        <div className="header">
          <h3>NBA {season} Season Summary</h3>
        </div>
        <div className="season-selector">
            <form onSubmit={handleSubmit}>
                <Dropdown value={season} selections={seasonOptions}/>
            <input type="submit" value="Submit"/>
            </form>
        </div>
        <h3>Conference Standings</h3>
        <div className="data-conference-container">
          <SortableTable headers={headers2} tableData={tableData2}/>
          <SortableTable headers={headers1} tableData={tableData1}/>
        </div>
        <h3>Division Standings</h3>
        <div className="data-division-container">
        <div className="data-division-west">
              <table>
                <thead>
                  <tr>
                    <th>Western Conference</th>
                    <th>W</th>
                    <th>L</th>
                    <th>W/L%</th>
                    <th>GB</th>
                    <th>PPG</th>
                    <th>OPPG</th>
                  </tr>
                </thead>
                <tbody>
                <tr className = 'division'>
                    <td colspan='7'>
                      Northwest Division
                    </td>
                  </tr>
                  {
                    data.divisions.west.northwest.map((teamIndex) => {
                      return(
                        <tr>
                          <td><Link to={`/teams/${data.west[teamIndex][2]}/${season}`}>{data.west[teamIndex][3] + ' ' + data.west[teamIndex][4]  + ' (' + data.west[teamIndex][8] + ')'}</Link></td>
                          <td>{data.west[teamIndex][13]}</td>
                          <td>{data.west[teamIndex][14]}</td>
                          <td>{data.west[teamIndex][15]}</td>
                          <td>{data.west[teamIndex][38]}</td>
                          <td>{data.west[teamIndex][57]}</td>
                          <td>{data.west[teamIndex][58]}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className = 'division'>
                    <td colspan='7'>
                      Pacific Division
                    </td>
                  </tr>
                  {
                    data.divisions.west.pacific.map((teamIndex) => {
                      return(
                        <tr>
                          <td><Link to={`/teams/${data.west[teamIndex][2]}/${season}`}>{data.west[teamIndex][3] + ' ' + data.west[teamIndex][4]  + ' (' + data.west[teamIndex][8] + ')'}</Link></td>
                          <td>{data.west[teamIndex][13]}</td>
                          <td>{data.west[teamIndex][14]}</td>
                          <td>{data.west[teamIndex][15]}</td>
                          <td>{data.west[teamIndex][38]}</td>
                          <td>{data.west[teamIndex][57]}</td>
                          <td>{data.west[teamIndex][58]}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className = 'division'>
                    <td colspan='7'>
                      Southwest Division
                    </td>
                  </tr>
                  {
                    data.divisions.west.southwest.map((teamIndex) => {
                      return(
                        <tr>
                          <td><Link to={`/teams/${data.west[teamIndex][2]}/${season}`}>{data.west[teamIndex][3] + ' ' + data.west[teamIndex][4]  + ' (' + data.west[teamIndex][8] + ')'}</Link></td>
                          <td>{data.west[teamIndex][13]}</td>
                          <td>{data.west[teamIndex][14]}</td>
                          <td>{data.west[teamIndex][15]}</td>
                          <td>{data.west[teamIndex][38]}</td>
                          <td>{data.west[teamIndex][57]}</td>
                          <td>{data.west[teamIndex][58]}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
          <div className="data-division-east">
              <table>
                <thead>
                  <tr>
                    <th>Eastern Conference</th>
                    <th>W</th>
                    <th>L</th>
                    <th>W/L%</th>
                    <th>GB</th>
                    <th>PPG</th>
                    <th>OPPG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className = 'division'>
                    <td colspan='7'>Atlantic Division</td>
                    </tr>
                  {
                    data.divisions.east.atlantic.map((teamIndex) => {
                      return(
                        <tr>
                          <td><Link to={`/teams/${data.east[teamIndex][2]}/${season}`}>{data.east[teamIndex][3] + ' ' + data.east[teamIndex][4]  + ' (' + data.east[teamIndex][8] + ')'}</Link></td>
                          <td>{data.east[teamIndex][13]}</td>
                          <td>{data.east[teamIndex][14]}</td>
                          <td>{data.east[teamIndex][15]}</td>
                          <td>{data.east[teamIndex][38]}</td>
                          <td>{data.east[teamIndex][57]}</td>
                          <td>{data.east[teamIndex][58]}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className = 'division'>
                    <td colspan='7'>
                      Central Division
                    </td>
                  </tr>
                  {
                    data.divisions.east.central.map((teamIndex) => {
                      return(
                        <tr>
                         <td><Link to={`/teams/${data.east[teamIndex][2]}/${season}`}>{data.east[teamIndex][3] + ' ' + data.east[teamIndex][4]  + ' (' + data.east[teamIndex][8] + ')'}</Link></td>
                          <td>{data.east[teamIndex][14]}</td>
                          <td>{data.east[teamIndex][15]}</td>
                          <td>{data.east[teamIndex][38]}</td>
                          <td>{data.east[teamIndex][57]}</td>
                          <td>{data.east[teamIndex][58]}</td>
                        </tr>
                      )
                    })
                  }
                  <tr className = 'division'>
                    <td colspan='7'>
                      Southeast Division
                    </td>
                  </tr>
                  {
                    data.divisions.east.southeast.map((teamIndex) => {
                      return(
                        <tr>
                          <td><Link to={`/teams/${data.east[teamIndex][2]}/${season}`}>{data.east[teamIndex][3] + ' ' + data.east[teamIndex][4]  + ' (' + data.east[teamIndex][8] + ')'}</Link></td>
                          <td>{data.east[teamIndex][13]}</td>
                          <td>{data.east[teamIndex][14]}</td>
                          <td>{data.east[teamIndex][15]}</td>
                          <td>{data.east[teamIndex][38]}</td>
                          <td>{data.east[teamIndex][57]}</td>
                          <td>{data.east[teamIndex][58]}</td>
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

export default Seasons;
