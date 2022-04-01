import React, {useState, useEffect} from 'react';
import './FranchiseBasicInfo.css';

import {Link, useParams} from 'react-router-dom';

function FranchiseBasicInfo() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
      fetch(`/teams/${params.id}/basic`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [params.id]);

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    console.log('rendering');
    //console.log(data)
    return(
      <div>
        <div className="bio-content">
          <img className='team-img' src={`https://cdn.nba.com/logos/nba/${params.id}/primary/L/logo.svg`} alt="" />
          <div className="bio-info">
            <h1>{data[0][2]} {data[0][3]}</h1>
            <span className="info-container">
              <p className="info-header">Location:</p>
              <p className="info-content">{data[0][2]}</p>
            </span>
            <span className="info-container">
              <p className="info-header">Team Names:</p>
              <p className="info-content">{
                      data.map((team, index) => {
                          if(index > 0) {
                              const leader = (index == 1 ? ' ' : ', ')
                              return(
                                  leader + team[2] + ' ' + team[3]
                              )
                          }
                      })
                  }</p>
            </span>
            <span className="info-container">
              <p className="info-header">Seasons:</p>
              <p className="info-content">{data[0][6]}; {data[0][4]}-{parseInt(data[0][4])+1} to {data[0][5]}-{parseInt(data[0][5])+1}</p>
            </span>
            <span className="info-container">
              <p className="info-header">Record:</p>
              <p className="info-content">{data[0][8]}-{data[0][9]}, {data[0][10]} W/L%</p>
            </span>
            <span className="info-container">
              <p className="info-header">Playoff Appearances:</p>
              <p className="info-content">{data[0][11]}</p>
            </span>
            <span className="info-container">
              <p className="info-header">Championships:</p>
              <p className="info-content">{data[0][14]}</p>
            </span>
          </div>
        </div>
          <div className="info-selectors">
              <Link to={`/teams/${params.id}`}><button>Franchise Overview</button></Link>
              <button>Year-By-Year Stats</button>
              <button>Leaders</button>
              <button>Honors</button>
              <button>More</button>
          </div>
      </div>
    )
  }
}

export default FranchiseBasicInfo;

/*
- Team Name - h1
- Location (City, State/Country)
- Seasons: (num) (range of years)
- Record: (W-L) (W/L%)
- Playoff appearances: 
- Championships
*/
