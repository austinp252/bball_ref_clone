import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import {Link, useParams} from 'react-router-dom';

import getInitial from '../../widgets/Helpers/getInitial';

import './SeasonLeaders.css'

function SeasonLeaders(props) {
  const [data, setData] = useState(null);
  const season = props.season;

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season leader data")
      const res = await fetch(`/seasons/leaders/${season}`);
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
    return(
      <div className="leaders-content">
          <h3>League Leaders</h3>
          <div className="leader-container">
              {
                data.data.map((leaderTable, tableIndex) => {
                  return(
                    <table className='leader-table'>
                      <tbody>
                        <tr>
                          <th colspan='4'>{leaderTable.title}</th>
                        </tr>
                        {
                          leaderTable.dataTable.map((leader, index) => {
                            return(
                              <tr>
                                <td>{index+1}</td>
                                <td><Link to={`/players/${getInitial(leader[1])}/${leader[0]}`}>{leader[1]}</Link></td>
                                <td>{leader[2]}</td>
                                <td>{leader[3]}</td>
                              </tr>
                            )
                          })
                        }
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

export default SeasonLeaders;