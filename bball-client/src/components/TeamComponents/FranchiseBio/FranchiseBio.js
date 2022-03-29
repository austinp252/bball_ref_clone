import React, {useState, useEffect} from 'react';
import './FranchiseBio.css';

import FranchiseBasicInfo from '../FranchiseBasicInfo/FranchiseBasicInfo';

import {Link, useParams} from 'react-router-dom';

function FranchiseBio() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
      fetch(`/teams/${params.id}/stats`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    window.scrollTo(0,0);
    console.log('rendering');
    console.log(data)
    return(
      <div className="content">
        <div className="common">
          <FranchiseBasicInfo/>
        </div>
        <div className="dataShow">
          <h1>Last {data.stats.data.length} NBA Seasons</h1>
          <table>
            <thead>
              <th>Season</th>
              <th>Lg</th>
              <th>Team</th>
              <th>W</th>
              <th>L</th>
              <th>W/L%</th>
              <th>Finish</th>
            </thead>
            <tbody>
              {
                data.stats.data.slice(0).reverse().map((season) => {
                  return(
                    <tr>
                      <td><Link to={`/teams/${params.id}/${season[3]}`}>{season[3]}</Link></td>
                      <td>NBA</td>
                      <td>{season[1]} {season[2]}</td>
                      <td>{season[5]}</td>
                      <td>{season[6]}</td>
                      <td>{season[7]}</td>
                      <td>{season[8] != '0' ? season[8] : 'N/A'}</td>
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

export default FranchiseBio;

/*
- Team Name - h1
- Location (City, State/Country)
- Seasons: (num) (range of years)
- Record: (W-L) (W/L%)
- Playoff appearances: 
- Championships
*/
