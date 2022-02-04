import React, {useState, useEffect} from 'react';
import './PlayerBio.css';

import {Link, useParams} from 'react-router-dom';

function PlayerBio() {
  const [data, setData] = useState(null);
  const params = useParams();

  //console.log(`/players/:${params.letter}/:${params.id}`);
  useEffect(() => {
    fetch(`/players/${params.letter}/${params.id}`)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);

    // setPlayerInfo(data.playerInfo)
    // console.log(data.playerInfo.data[0][3]);
    // console.log(playerInfo);
  if(!data) {
    console.log('loading');
    return(
      <p>Loading...</p>
    )
  } else {
    //setPlayerInfo(data.playerInfo);
    console.log('rendering');
    console.log(data.playerInfo.data[0][3]);
      return(
        <div className="content">
          <div className="common">
            <h1>{data.playerInfo.data[0][3]}</h1>
            <p>Position: {data.playerInfo.data[0][15]}</p>
            <p>Height: {data.playerInfo.data[0][11]}</p>
            <p>Weight: {data.playerInfo.data[0][12]} lbs</p>
            <p>Born: {data.playerInfo.data[0][7]} in {data.playerInfo.data[0][9]}</p>
            <p>College: {data.playerInfo.data[0][8]}</p>
            <p>NBA Draft: {data.playerInfo.data[0][29]} (Round: {data.playerInfo.data[0][30]} / Pick: {data.playerInfo.data[0][31]})</p>
            <p>League Experience: {data.playerInfo.data[0][13]} year(s)</p>
          </div>
          <div className="career">
            <table>
              <thead>
                <tr>
                  <th>Summary</th>
                  <th>GP</th>
                  <th>MIN</th>
                  <th>PTS</th>
                  <th>REB</th>
                  <th>AST</th>
                  <th>STL</th>
                  <th>BLK</th>
                  <th>FGA</th>
                  <th>FG%</th>
                  <th>FG3A</th>
                  <th>FG3%</th>
                  <th>FT%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Career</td>
                  <td>{data.careerStats.data[0][3]}</td>
                  <td>{data.careerStats.data[0][5]}</td>
                  <td>{data.careerStats.data[0][23]}</td>
                  <td>{data.careerStats.data[0][17]}</td>
                  <td>{data.careerStats.data[0][18]}</td>
                  <td>{data.careerStats.data[0][19]}</td>
                  <td>{data.careerStats.data[0][20]}</td>
                  <td>{data.careerStats.data[0][7]}</td>
                  <td>{data.careerStats.data[0][8]}</td>
                  <td>{data.careerStats.data[0][10]}</td>
                  <td>{data.careerStats.data[0][11]}</td>
                  <td>{data.careerStats.data[0][14]}</td>
                </tr>
              </tbody>
            </table>
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
