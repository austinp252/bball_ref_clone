import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import {Link, useParams} from 'react-router-dom';

function SeasonLeaders(props) {
  const [data, setData] = useState(null);
  const season = props.season;

  useEffect(() => {
    console.log("fetching season data")
    fetch(`/seasons/leaders/${season}`)
    .then((res) => res.json())
    .then((data) => setData(data));
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
              
          </div>
      </div>
    )
  }
}

export default SeasonLeaders;