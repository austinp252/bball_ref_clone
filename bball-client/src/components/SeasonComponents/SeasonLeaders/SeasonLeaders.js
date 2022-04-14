import React, {useState, useEffect} from 'react';
import teamRouter from '../../widgets/Helpers/teamRouter';

import {Link, useParams} from 'react-router-dom';

function SeasonLeaders(props) {
  const [data, setData] = useState(null);
  const season = props.season;

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
    return(
      <div className="leaders-content">

      </div>
    )
  }
}

export default SeasonLeaders;