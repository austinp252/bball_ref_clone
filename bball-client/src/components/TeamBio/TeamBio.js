import React, {useState, useEffect} from 'react';
import './TeamBio.css';

import {Link, useParams} from 'react-router-dom';

function TeamBio() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
      fetch(`/teams/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    console.log('rendering');
    return(
      <div className="content">
        <div className="common">
          <h1>{data.data[0][2]} {data.data[0][3]}</h1>
          <p>Location: {data.data[0][2]}</p>
          <p>Seasons:</p>
        </div>
      </div>
    )
  }
}

export default TeamBio;

/*
- Team Name - h1
- Location (City, State/Country)
- Seasons: (num) (range of years)
- Record: (W-L) (W/L%)
- Playoff appearances: 
- Championships
*/
