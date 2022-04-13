import React, {useState, useEffect, Fragment} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';
import getInitial from '../../widgets/Helpers/getInitial';


import {Link, useParams} from 'react-router-dom';

function AllTimeLeadersCategory(props) {
  const [data, setData] = useState(null);
  const category = props.category;
  const title = props.title;
  const metric = props.metric;
  const season_type = props.seasonType;

  useEffect(() => {
    console.log("fetching leader data")
    fetch(`/leaders/alltime/${season_type}/${category}`)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);

  if(!data) {
    return(
      <div className="content">Loading...</div>
    )
  } else {
    console.log(data.data)
    return(
      <div className="content">
        <h3>NBA {season_type} Career Leaders in {title}</h3>
          <div className="top-ten">
              top ten players
          </div>
          <div className="top-all">
            <h3>NBA/ABA Leaders</h3>
              <table>
                  <thead>
                      <tr>
                          <th>Rank</th>
                          <th>Player</th>
                          <th>{metric}</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          data.data.map((player, index) => {
                            console.log(player)
                              return(
                                <Fragment>
                                  <tr>
                                      <td>{player[3]}</td>
                                      <td><Link to={`/players/${getInitial(player[1])}/${player[0]}`}>{player[1]}</Link></td>
                                      <td>{player[2]}</td>
                                  </tr>
                                  {
                                    ((index+1)%25===0 && index+1!=250) &&
                                    <tr>
                                      <th>Rank</th>
                                      <th>Player</th>
                                      <th>{category}</th>
                                    </tr>
                                  }
                                </Fragment>
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

export default AllTimeLeadersCategory;