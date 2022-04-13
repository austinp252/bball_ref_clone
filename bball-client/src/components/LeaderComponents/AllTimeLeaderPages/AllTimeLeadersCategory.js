import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import Dropdown from '../../widgets/Dropdown/Dropdown';

import SortableTable from '../../widgets/SortableTable/SortableTable';


import {Link, useParams} from 'react-router-dom';

function AllTimeLeadersGames(props) {
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
    console.log(data)
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
                          data.data.map((player) => {
                              return(
                                  <tr>
                                      <td>{player[3]}</td>
                                      <td>{player[1]}</td>
                                      <td>{player[2]}</td>
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

export default AllTimeLeadersGames;