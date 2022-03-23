import React, {useState, useEffect} from 'react';
import './PlayerBasicInfo.css';

import {Link, useParams} from 'react-router-dom';

function PlayerBio() {
  const [data, setData] = useState(null);
  const params = useParams();

  //console.log(`/players/:${params.letter}/:${params.id}`);
  useEffect(() => {
    console.log("fetching player bio info")
    fetch(`/api/players/${params.letter}/${params.id}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    //setPlayerInfo(data.playerInfo);
    console.log('rendering basic info');
    //console.log(data);
      return(
        <div className="content">
          <div className="info">
            <h1>{data.data[0][3]}</h1>
            <p>Position: {data.data[0][15]}</p>
            <p>Height: {data.data[0][11]}</p>
            <p>Weight: {data.data[0][12]} lbs</p>
            <p>Born: {data.data[0][7]} in {data.data[0][9]}</p>
            <p>College: {data.data[0][8]}</p>
            <p>NBA Draft: {data.data[0][29]} (Round: {data.data[0][30]} / Pick: {data.data[0][31]})</p>
            <p>League Experience: {data.data[0][13]} year(s)</p>
          </div>
            <div className="selectors">
              <Link to={`/players/${params.letter}/${params.id}`}><button>Overview</button></Link>
              <button>Game Logs</button>
              <button>Splits</button>
              <button>More</button>
          </div>
        </div>
      )
  }
}

export default PlayerBio;

/*
- Full Name
- Position, Shoots: L/R 
- Height, Weight
- Birth Date -> Age
- College
- Draft: Round, (pick num, overall num), draft year
- From: start year to end year
- Career Length: do math above

*/
