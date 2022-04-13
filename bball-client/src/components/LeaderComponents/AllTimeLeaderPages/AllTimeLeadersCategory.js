import React, {useState, useEffect, Fragment} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';
import getInitial from '../../widgets/Helpers/getInitial';


import {Link, useParams} from 'react-router-dom';

function AllTimeLeadersCategory(props) {
  const [data, setData] = useState(null);
  const category = props.category;

  useEffect(() => {
    console.log("fetching leader data")
    fetch(`/leaders/alltime/${category}`)
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
          <div className="top-ten">
              top ten players
          </div>
          <div className="top-all">
              <table>
                  <thead>
                      <tr>
                          <th>Rank</th>
                          <th>Player</th>
                          <th>{category}</th>
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