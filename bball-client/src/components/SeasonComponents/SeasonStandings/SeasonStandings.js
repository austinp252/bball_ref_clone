import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';

import {Link, useParams} from 'react-router-dom';

function SeasonStandings(props) {
  const [data, setData] = useState(null);
  const season = props.season;

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season standings data")
      const res = await fetch(`/seasons/standings/${season}`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, [props.season]);

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
      <div className="standings-content">
        <h3>Conference Standings</h3>
        <div className="data-conference-container">
          <SortableTable headers={headers2} tableData={tableData2} defaultIndex={1} defaultSort={true}/>
          <SortableTable headers={headers1} tableData={tableData1} defaultIndex={1} defaultSort={true}/>
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

export default SeasonStandings;
