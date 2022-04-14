import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import {Link, useParams} from 'react-router-dom';

function SeasonLeaders(props) {
  const [data, setData] = useState(null);
  const season = props.season;

  useEffect(() => {
    const fetchJSON = async () => {
      console.log("fetching season data")
      const res = await fetch(`/seasons/leaders/${season}`);
      let json = await res.json();
      setData(json);
    };

    fetchJSON();
}, []);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
      console.log(data);
    return(
      <div className="leaders-content">
          <h3>League Leaders</h3>
          <div className="leader-container">
              {
                data.data.map((leaderTable) => {
                  return(
                    <table>
                      <tbody>
                        <tr>
                          <td colspan='4'>{leaderTable.title}</td>
                        </tr>
                        {
                          leaderTable.dataTable.map((leader, index) => {
                            return(
                              <tr>
                                <td>{index+1}</td>
                                <td>{leader[1]}</td>
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