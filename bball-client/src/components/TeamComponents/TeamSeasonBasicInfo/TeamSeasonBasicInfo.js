import React, {useState, useEffect} from 'react';
import './TeamSeasonBasicInfo.css';

import {Link, useParams} from 'react-router-dom';

function TeamSeasonBasicInfo(props) {
  const [data, setData] = useState(null);
  const params = useParams();
  const text = props.textName;

  useEffect(() => {
      fetch(`/teams/${params.id}/${params.season}/basic`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if(!data) {
    //console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    //console.log('rendering basic info');
    //console.log(params)
    return(
      <div className="content">
        <div className="info">
            <h1>{data.yearData[3]} {data.yearData[1]} {data.yearData[2]} {text}</h1>
            <div className="selectors season">
              <button>Previous Season</button>
              <button>Next Season</button>
            </div>
            <p>Record: {data.yearData[5]}-{data.yearData[6]}, Rank {data.yearData[8]} in Conference</p>
        </div>
        <div className="selectors">
              <Link to={`/teams/${params.id}`}><button>Franchise Overview</button></Link>
              <Link to={`/teams/${params.id}/${params.season}`}><button>Roster & Stats</button></Link>
              <Link to={`/teams/${params.id}/${params.season}/gamelog`}><button>Schedule & Results</button></Link>
              <button>More</button>
          </div>
      </div>
    )
  }
}

export default TeamSeasonBasicInfo;